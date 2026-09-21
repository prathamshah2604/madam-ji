/**
 * birthdayMusic.js
 * Synthesizes a sweet, gentle music-box / piano instrumental of
 * "Happy Birthday to You" using the Web Audio API, or plays a custom MP3
 * if provided in public/music/birthday.mp3.
 */

// Happy Birthday melody notes and durations (in beats)
// Key of C major / F major: F4, F4, G4, F4, Bb4, A4 ...
const MELODY = [
    { note: "C4", duration: 0.75 },
    { note: "C4", duration: 0.25 },
    { note: "D4", duration: 1.0 },
    { note: "C4", duration: 1.0 },
    { note: "F4", duration: 1.0 },
    { note: "E4", duration: 2.0 },

    { note: "C4", duration: 0.75 },
    { note: "C4", duration: 0.25 },
    { note: "D4", duration: 1.0 },
    { note: "C4", duration: 1.0 },
    { note: "G4", duration: 1.0 },
    { note: "F4", duration: 2.0 },

    { note: "C4", duration: 0.75 },
    { note: "C4", duration: 0.25 },
    { note: "C5", duration: 1.0 },
    { note: "A4", duration: 1.0 },
    { note: "F4", duration: 1.0 },
    { note: "E4", duration: 1.0 },
    { note: "D4", duration: 1.5 },

    { note: "Bb4", duration: 0.75 },
    { note: "Bb4", duration: 0.25 },
    { note: "A4", duration: 1.0 },
    { note: "F4", duration: 1.0 },
    { note: "G4", duration: 1.0 },
    { note: "F4", duration: 2.5 },
];

const NOTE_FREQS = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    Bb4: 466.16,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
};

let audioCtx = null;
let isPlaying = false;
let loopTimeout = null;
let customAudio = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    return audioCtx;
}

/**
 * Plays a single music-box chime note.
 */
function playChimeNote(freq, startTime, duration) {
    if (!audioCtx) return;

    // Primary bell tone (sine)
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Harmonics for rich music box timbre (celeste)
    const oscHarmonic = audioCtx.createOscillator();
    const gainHarmonic = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    oscHarmonic.type = "triangle";
    oscHarmonic.frequency.setValueAtTime(freq * 2, startTime);

    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.22, startTime);

    // Exponential decay typical of music boxes & bells
    gain.gain.setValueAtTime(0.7, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 1.8);

    gainHarmonic.gain.setValueAtTime(0.25, startTime);
    gainHarmonic.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 1.2);

    osc.connect(gain);
    oscHarmonic.connect(gainHarmonic);
    gain.connect(masterGain);
    gainHarmonic.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    osc.start(startTime);
    oscHarmonic.start(startTime);
    osc.stop(startTime + duration * 1.9);
    oscHarmonic.stop(startTime + duration * 1.3);
}

/**
 * Starts playing the instrumental Happy Birthday melody.
 */
export function playBirthdayMusic(onStateChange) {
    // Check if custom audio exists and can be played
    if (!customAudio) {
        try {
            customAudio = new Audio("/music/birthday.mp3");
            customAudio.loop = true;
        } catch {
            customAudio = null;
        }
    }

    if (customAudio && customAudio.src) {
        customAudio.play().then(() => {
            isPlaying = true;
            if (onStateChange) onStateChange(true);
        }).catch(() => {
            // Fallback to Web Audio synthesized instrumental
            playSynthesizedMusic(onStateChange);
        });
        return;
    }

    playSynthesizedMusic(onStateChange);
}

function playSynthesizedMusic(onStateChange) {
    const ctx = getAudioContext();
    if (!ctx) return;

    isPlaying = true;
    if (onStateChange) onStateChange(true);

    const tempo = 0.58; // seconds per beat
    let currentTime = ctx.currentTime + 0.1;

    MELODY.forEach(({ note, duration }) => {
        const freq = NOTE_FREQS[note];
        if (freq) {
            playChimeNote(freq, currentTime, duration * tempo);
        }
        currentTime += duration * tempo;
    });

    const totalDuration = (currentTime - ctx.currentTime) * 1000;

    // Loop gracefully after full melody
    loopTimeout = setTimeout(() => {
        if (isPlaying) {
            playSynthesizedMusic(onStateChange);
        }
    }, totalDuration + 1200);
}

/**
 * Stops or pauses the music.
 */
export function stopBirthdayMusic(onStateChange) {
    isPlaying = false;
    if (loopTimeout) {
        clearTimeout(loopTimeout);
        loopTimeout = null;
    }
    if (customAudio) {
        try {
            customAudio.pause();
        } catch {
            // ignore
        }
    }
    if (onStateChange) onStateChange(false);
}

/**
 * Toggles play/pause state.
 */
export function toggleBirthdayMusic(onStateChange) {
    if (isPlaying) {
        stopBirthdayMusic(onStateChange);
    } else {
        playBirthdayMusic(onStateChange);
    }
}

/**
 * Plays a quick joyful chime sound (e.g., when candles are blown).
 */
export function playChimeSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
    notes.forEach((freq, idx) => {
        playChimeNote(freq, ctx.currentTime + idx * 0.08, 0.4);
    });
}

/**
 * Plays a crisp slicing swoosh sound for cake cutting.
 */
export function playSliceSound() {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.26);

    // Chime reward
    setTimeout(() => {
        playChimeSound();
    }, 150);
}
