/**
 * countdown.js
 * Configuration and romantic quotes for the countdown and landing page.
 */

export const countdownConfig = {
    // Target date for Madam Ji's special celebration
    targetDate: "2026-09-23T00:00:00",

    // Display names
    recipientName: "Happy Birthday Harshuu",
    countdownName: "Madam Ji",
    title: "Counting Down to Your Special Day",
    subheading: "A little collection of your flawless pictures.",
    dateDisplay: "September 23, 2026",

    // Romantic quotes cycled under the countdown
    quotes: [
        "In every lifetime, in every world, I would still look for you.",
        "You make ordinary days feel like soft poetry.",
        "Counting down every second until we celebrate the prettiest smile.",
        "To know you is to know warmth, laughter, and pure magic.",
        "Some people make the whole world feel brighter just by being in it.",
        "Every single moment with you is my favourite place to be."
    ],

    // Milestones & sweet messages
    celebrationMessage: "🎉 Today is YOUR Day! Happy Birthday, Madam Ji! 💖🎂",
    celebrationSubtext: "May your day be filled with all the love, magic, and sweet memories you bring into the world."
};

/**
 * Calculates time remaining from now until target date.
 * If target date has passed in the calendar, dynamically targets the next upcoming
 * occurrence so the countdown is always active and ticking.
 * If today is the actual birthday (Sept 23), isExpired = true.
 */
export function getTimeRemaining(targetDateStr = countdownConfig.targetDate) {
    const now = new Date();
    let target = new Date(targetDateStr);

    if (isNaN(target.getTime())) {
        target = new Date("2026-09-23T00:00:00");
    }

    // Check if today is the actual celebration day (same month and day)
    const isToday = now.getMonth() === target.getMonth() && now.getDate() === target.getDate();
    if (isToday) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isExpired: true,
        };
    }

    // If target is in the past, roll forward to the next upcoming year
    if (target.getTime() <= now.getTime()) {
        const nextYear = now.getFullYear() + (now.getMonth() > target.getMonth() || (now.getMonth() === target.getMonth() && now.getDate() > target.getDate()) ? 1 : 0);
        target.setFullYear(nextYear);
    }

    const difference = target.getTime() - now.getTime();

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
        total: difference,
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
    };
}
