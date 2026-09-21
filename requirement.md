# Birthday Memory Website --- Project Requirements

## 1. Project Overview

This project is a frontend-intensive, interactive birthday website
created as a personal digital birthday experience for a girlfriend/best
friend.

The website should feel like a **premium digital scrapbook** rather than
a conventional portfolio or static birthday webpage.

The visual direction is based on:

-   Soft baby-pink palette
-   Romantic floral/botanical decoration
-   Scrapbook and handmade-paper aesthetics
-   Polaroid photographs
-   Journal/scrapbook pages
-   Personal memories
-   Cinematic video presentation
-   Smooth GSAP animations
-   Scroll-driven storytelling
-   Interactive photo transitions
-   A dedicated birthday cake/wish experience

The website consists of **three main pages**:

1.  **Landing Page**
2.  **Scrapbook / Memories Page**
3.  **Birthday Cake & Wish Page**

The application should be built as a proper React project with reusable
components, clean routing, reusable animation utilities, and
maintainable code.

------------------------------------------------------------------------

# 2. Technology Stack

## Required

-   React
-   Vite
-   Tailwind CSS
-   GSAP
-   GSAP ScrollTrigger
-   GSAP Flip
-   React Router

## Recommended supporting technologies

-   JavaScript / JSX
-   CSS gradients and SVG
-   HTML5 `<video>`
-   HTML5 Audio API where required

## Deployment

The application should be deployable as a static frontend application.

Recommended:

-   Vercel

No backend is required for the core website.

------------------------------------------------------------------------

# 3. Project Goals

The final website should:

-   Feel personal and emotionally meaningful.
-   Look visually polished on laptop/desktop screens.
-   Have a consistent visual language across all pages.
-   Use animation as part of the storytelling rather than as decoration
    alone.
-   Have smooth page transitions.
-   Avoid excessive popups or generic UI.
-   Make photographs and memories the primary visual focus.
-   Use flowers, petals, paper, tape and scrapbook elements as
    supporting visual elements.
-   Have a clear beginning, journey, and final birthday reveal.

The user should feel as if they are **moving through a digital scrapbook
created specifically for them**.

------------------------------------------------------------------------

# 4. Global Design System

## 4.1 Primary Color Palette

The primary visual palette should remain baby pink and warm pastel
tones.

### Background

``` text
#FBE4EA
```

### Paper

``` text
#FFFAF8
```

### Primary dark pink

``` text
#AD1457
```

### Accent pink

``` text
#E0578F
```

### Soft flower pink

``` text
#E88FA8
```

### Light blush

``` text
#F7C8D8
```

### Lavender accent

``` text
#D7C9ED
```

### Muted botanical green

Use subdued natural greens rather than bright green.

------------------------------------------------------------------------

# 5. Global Visual Language

Every page should feel like it belongs to the same scrapbook.

## Background

Use:

-   Baby-pink base
-   Very subtle paper texture
-   Soft radial lighting
-   Slight variation in pink tones
-   No harsh gradients
-   No pure black backgrounds unless specifically required inside
    video/media

## Decorative elements

Use:

-   Lilies
-   Tulips
-   Small filler flowers
-   Botanical branches
-   Leaves
-   Loose petals
-   Washi tape
-   Paper stickers
-   Handwritten marks
-   Tiny hearts
-   Small stars/doodles

Decorations should remain primarily around the margins.

The center should remain readable.

------------------------------------------------------------------------

# 6. Typography

The typography should feel romantic/editorial/scrapbook-like.

## Heading style

Prefer:

-   Serif
-   Elegant
-   Slightly editorial
-   High contrast

## Body text

Prefer:

-   Serif or soft humanist font
-   Comfortable line height
-   Warm dark gray/brown instead of pure black

## Handwritten accents

Use a handwriting-style font sparingly for:

-   Dates
-   Small notes
-   "with love"
-   Short labels
-   Decorative captions

Do not use handwriting fonts for large paragraphs.

------------------------------------------------------------------------

# 7. Navigation Architecture

Use React Router.

Routes:

``` text
/
├── /scrapbook
└── /birthday
```

## `/`

Landing page.

## `/scrapbook`

Memory and photo scrapbook.

## `/birthday`

Final birthday cake and wish experience.

Navigation should feel like part of the story.

Avoid a conventional corporate navbar.

Possible navigation controls:

-   Small arrow
-   "Continue"
-   "Open memories"
-   "Next page"
-   "Back"

Buttons should be styled as scrapbook elements.

------------------------------------------------------------------------

# 8. PAGE 1 --- LANDING PAGE

## Purpose

The landing page introduces the birthday experience.

It should create curiosity and establish the emotional tone before the
scrapbook begins.

------------------------------------------------------------------------

## 8.1 Hero Design

The hero should contain:

-   Large birthday title
-   Recipient's name/nickname
-   Short emotional subtitle
-   Floral decorations
-   Soft pink paper background
-   Main visual/video if desired
-   Primary "Enter the scrapbook" CTA

Example hierarchy:

``` text
        floral decorations

             For You,

       [Birthday Name]

      a little collection
       of memories & love

          [Open Scrapbook]

        floral decorations
```

------------------------------------------------------------------------

## 8.2 Landing Animation

### Initial state

Main content:

``` text
opacity: 0
y: 30
```

Flowers:

``` text
scale: 0
opacity: 0
```

### Sequence

1.  Background appears.
2.  Floral elements softly appear.
3.  Main heading fades/slides upward.
4.  Subtitle appears.
5.  CTA appears last.

Use GSAP timeline.

Recommended easing:

``` text
power2.out
power3.out
back.out(1.7)
```

------------------------------------------------------------------------

## 8.3 Hero Floral Animation

Flowers should not simply loop continuously.

Use:

-   Small scale-in
-   Slight rotation
-   Subtle floating
-   Scroll-linked effects where appropriate

Large flowers should animate slowly.

Small petals may move continuously.

------------------------------------------------------------------------

## 8.4 CTA Interaction

The CTA should have:

### Normal

-   Soft pink/cream appearance

### Hover

-   Slight scale increase
-   Small upward movement
-   Shadow enhancement

### Click

-   Short press animation
-   Page transition to `/scrapbook`

------------------------------------------------------------------------

# 9. PAGE 2 --- SCRAPBOOK / MEMORIES

This is the primary visual centerpiece of the website.

## Purpose

Present photographs, video, memories and written messages as one large
interactive scrapbook.

------------------------------------------------------------------------

# 10. Scrapbook Page Structure

Current approved structure:

``` text
                         VIDEO

        ┌───────────────────────────────┐
        │             VIDEO             │
        └───────────────────────────────┘


┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
│              │ │          │ │          │ │              │
│ SCRAPBOOK    │ │  PHOTO   │ │  PHOTO   │ │ SCRAPBOOK    │
│ PAGE         │ │          │ │          │ │ PAGE         │
│              │ │          │ │          │ │              │
└──────────────┘ └──────────┘ └──────────┘ └──────────────┘


┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐
│ SCRAPBOOK    │ │  PHOTO   │ │  PHOTO   │ │ SCRAPBOOK    │
│ PAGE         │ │          │ │          │ │ PAGE         │
└──────────────┘ └──────────┘ └──────────┘ └──────────────┘
```

The two photo Polaroids should remain approximately:

``` text
650px × 650px
```

on the target laptop layout.

The side scrapbook pages should use the remaining available horizontal
space.

------------------------------------------------------------------------

# 11. Hero Video Polaroid

The video frame must remain:

-   Horizontal
-   Straight
-   Centered
-   Large
-   White paper frame
-   Soft shadow

The video Polaroid should NOT have a rotation.

The target visual structure:

``` text
┌─────────────────────────────────────┐
│                                     │
│              VIDEO                  │
│                                     │
└─────────────────────────────────────┘
```

The video should support:

-   Play/pause
-   Native controls
-   Fullscreen
-   Responsive scaling

------------------------------------------------------------------------

# 12. Cinematic Hero Video Animation

On initial page load:

``` text
scale: 1.1
opacity: 0
```

Animate to:

``` text
scale: 1
opacity: 1
```

Recommended:

``` text
duration: 2–3 seconds
ease: power2.out
```

The video frame itself remains straight.

Do not animate its rotation.

------------------------------------------------------------------------

# 13. Scrapbook Pages

Each scrapbook page should resemble physical paper.

## Visual properties

-   Warm off-white paper
-   Subtle border
-   Soft shadow
-   Slight texture
-   Small decorative floral elements
-   Handwritten details
-   Date
-   Short title
-   Memory text
-   Small "with love" signature

Example:

``` text
┌──────────────────────────────┐
│ a little piece of us     ♥  │
│ ──────────────────────────── │
│                              │
│       Our Memories           │
│                              │
│ Some moments are too special │
│ to be kept only in           │
│ photographs...               │
│                              │
│ with love ♡                  │
└──────────────────────────────┘
```

------------------------------------------------------------------------

# 14. Floral Border

The scrapbook page should have a large botanical frame.

The floral composition should include:

-   Large lilies
-   Pink tulips
-   Small filler flowers
-   Small buds
-   Botanical branches
-   Leaves
-   Long curved stems

Flowers should appear mostly along:

-   Left edge
-   Right edge
-   Upper corners
-   Lower corners

The center should remain relatively clear.

The floral border should be implemented using SVG/React components so
individual elements can later be animated with GSAP.

------------------------------------------------------------------------

# 15. Scroll-Triggered Flower Bloom

Flowers should respond to the user's scroll.

Do NOT make every flower continuously bloom on a loop.

Initial:

``` text
scale: 0
opacity: 0
```

When the relevant section enters the viewport:

``` text
scale: 1
opacity: 1
```

Recommended:

``` text
duration: 1–1.5s
ease: back.out(1.7)
```

Use:

``` text
GSAP ScrollTrigger
```

Different floral clusters should activate at different scroll positions.

------------------------------------------------------------------------

# 16. Floating Petals

Add a small number of loose petals.

Petals should:

-   Drift downward
-   Slowly rotate
-   Move horizontally slightly
-   Loop continuously
-   Remain subtle

Example animation:

``` text
y: -20 → 100vh
rotation: 0 → random angle
x: slight movement
opacity: subtle
repeat: -1
```

Avoid creating too many particles because they can distract from the
photographs.

------------------------------------------------------------------------

# 17. Polaroid Cards

Each photo should appear as a physical Polaroid.

Properties:

-   White/warm-white frame
-   Large image
-   Thick border
-   Bottom whitespace
-   Soft shadow
-   Slight rotation
-   Cursor interaction

Polaroids should not collide with each other.

They should have enough spacing to remain individually readable.

------------------------------------------------------------------------

# 18. Polaroid Entrance --- "Dealing the Cards"

When the photo section enters the viewport, the cards should animate as
though being dealt onto a table.

Initial:

``` text
y: 150
opacity: 0
```

Initial rotation:

``` text
random(-15, 15)
```

Then settle into their intended scrapbook rotations.

Recommended:

``` text
duration: ~1s
stagger: 0.15
ease: power3.out
```

Important:

The final rotation must respect the designed scrapbook position.

Do not force every final card to `rotation: 0`.

------------------------------------------------------------------------

# 19. Polaroid Hover Interaction

When hovering a Polaroid:

``` text
scale: 1.05
y: -10
rotation: 0
```

Increase shadow depth.

The transition should feel physical.

On mouse leave:

-   Return to original scale
-   Return to original position
-   Restore original rotation
-   Restore original shadow

The interaction should be handled using GSAP.

------------------------------------------------------------------------

# 20. Photo Click --- FLIP Expansion

This is one of the most important interactions.

Do not open a generic browser-style popup.

When the user clicks a Polaroid:

1.  Capture the card's current position.
2.  Change React state.
3.  Convert the selected card into an expanded/fullscreen version.
4.  Use GSAP Flip to calculate the layout difference.
5.  Animate between the two states.

Technology:

``` text
GSAP Flip
```

The animation should make it feel as though the physical photograph
leaves the scrapbook and expands toward the viewer.

------------------------------------------------------------------------

# 21. Expanded Photo State

The expanded photo should:

-   Fill most of the viewport
-   Keep a scrapbook/paper frame
-   Maintain the same visual identity
-   Have a soft backdrop
-   Reveal additional message/content

Example:

``` text
┌─────────────────────────────────────────┐
│                                         │
│               LARGE PHOTO               │
│                                         │
│                                         │
│                                         │
│       A longer birthday message...      │
│                                         │
│                    ×                    │
└─────────────────────────────────────────┘
```

Backdrop:

-   Semi-transparent warm pink/cream
-   Optional slight blur
-   No harsh black modal unless necessary

------------------------------------------------------------------------

# 22. FLIP Closing Animation

When closing:

``` text
fullscreen
    ↓
original Polaroid position
```

The photo should smoothly return to exactly where it came from.

The transition should feel like:

> "putting the photograph back into the scrapbook."

------------------------------------------------------------------------

# 23. Scrapbook Content

The scrapbook should contain a mixture of:

-   Personal photos
-   Video
-   Short notes
-   Dates
-   Small captions
-   Decorative elements

Avoid excessive paragraphs.

The experience should remain visual.

------------------------------------------------------------------------

# 24. PAGE 3 --- BIRTHDAY CAKE & WISH

This is the emotional climax.

The page should feel noticeably different from the scrapbook while
remaining part of the same design system.

------------------------------------------------------------------------

# 25. Cake Page Concept

Initial state:

``` text
soft pink background

             ✨

        [birthday title]

              🎂

        [cake illustration]

      Make a wish...

          [button]
```

The cake should be the central focus.

------------------------------------------------------------------------

# 26. Cake Animation

On page load:

1.  Background appears.
2.  Small flowers appear.
3.  Cake container enters from below.
4.  Cake settles with slight bounce.
5.  Candles appear.
6.  Candle flames ignite.
7.  Birthday message fades in.

Suggested easing:

``` text
back.out(1.7)
power3.out
```

------------------------------------------------------------------------

# 27. Interactive Candles

Each candle should have a visible flame.

Flames can have subtle animation:

``` text
scale
y
opacity
rotation
```

The animation should be continuous but very subtle.

Example:

``` text
flame
  ↕
tiny movement
```

Avoid aggressive flickering.

------------------------------------------------------------------------

# 28. Make a Wish Interaction

Main CTA:

``` text
Make a Wish
```

When clicked:

1.  Candles begin extinguishing.
2.  Flame opacity decreases.
3.  Smoke particles appear.
4.  Small particles/stars appear.
5.  Cake gets a subtle glow.
6.  Birthday message is revealed.

------------------------------------------------------------------------

# 29. Wish Completion Animation

After all candles are extinguished:

``` text
✨ ✨ ✨
     ↓
Birthday message
     ↓
larger emotional message
```

Possible message:

``` text
Happy Birthday ❤️

May this year bring you
all the happiness,
peace and beautiful moments
you deserve.
```

The actual message should be customizable.

------------------------------------------------------------------------

# 30. Birthday Page Floral Design

Use:

-   Tulips
-   Lilies
-   Small flowers
-   Falling petals
-   Tiny stars

But reduce the density compared to the scrapbook page.

The cake should remain the focal point.

------------------------------------------------------------------------

# 31. Final Birthday Reveal

After the wish interaction, optionally reveal:

-   Personalized message
-   Name
-   Birthday date
-   Heart animation
-   Confetti/petals
-   "One last thing..." button

Possible final CTA:

``` text
Open Your Letter
```

This can reveal a full birthday letter.

------------------------------------------------------------------------

# 32. Optional Birthday Letter

If implemented, the letter should resemble a physical paper sheet.

Animation:

``` text
scale: 0.9
opacity: 0
y: 30
```

to:

``` text
scale: 1
opacity: 1
y: 0
```

Use a soft paper shadow.

------------------------------------------------------------------------

# 33. Page Transitions

Transitions between:

``` text
Landing → Scrapbook
Scrapbook → Birthday
```

should be smooth.

Avoid abrupt white flashes.

Possible transition styles:

-   Pink fade
-   Paper wipe
-   Flower/petal transition
-   Soft opacity + scale

Keep transitions short enough that navigation does not feel slow.

------------------------------------------------------------------------

# 34. GSAP Animation Architecture

Do not place all GSAP code inside `Gallery.jsx`.

Recommended:

``` text
src/
├── animations/
│   ├── heroAnimations.js
│   ├── scrapbookAnimations.js
│   ├── hoverAnimations.js
│   ├── flipAnimations.js
│   └── birthdayAnimations.js
```

Components should handle:

``` text
React structure
props
state
refs
```

Animation modules should handle:

``` text
GSAP timelines
ScrollTrigger
Flip
hover timelines
entrance animations
```

------------------------------------------------------------------------

# 35. GSAP React Best Practices

Use:

``` text
useRef
useLayoutEffect
gsap.context()
```

where appropriate.

Animations should be cleaned up when components unmount.

ScrollTriggers must be properly destroyed when necessary.

Avoid direct DOM queries such as:

``` js
document.querySelector(...)
```

when a React ref can be used.

Prefer:

``` js
useRef()
```

------------------------------------------------------------------------

# 36. Animation Performance

The website is intentionally animation-heavy, but performance must
remain smooth.

Prefer animating:

``` text
transform
opacity
scale
rotation
x
y
```

Avoid repeatedly animating expensive layout properties such as:

``` text
width
height
top
left
margin
padding
```

when a transform can achieve the same visual effect.

------------------------------------------------------------------------

# 37. Responsive Behavior

Primary target:

``` text
Laptop / Desktop
```

The approved scrapbook layout is optimized for a large laptop viewport.

However, the application should not completely break on smaller screens.

At smaller widths:

-   Reduce Polaroid size.
-   Convert four-column scrapbook rows into fewer columns.
-   Reduce floral density.
-   Prevent horizontal overflow.
-   Scale typography.
-   Preserve the visual hierarchy.

The desktop design should remain the priority.

------------------------------------------------------------------------

# 38. Accessibility

Interactive elements must use semantic HTML.

Images should have useful alt text.

Buttons should be actual:

``` html
<button>
```

elements.

Keyboard users should be able to:

-   Navigate buttons
-   Open photos
-   Close expanded photos
-   Trigger birthday interaction

For users who prefer reduced motion, consider:

``` text
prefers-reduced-motion
```

and reduce or disable nonessential animations.

------------------------------------------------------------------------

# 39. Asset Management

Recommended structure:

``` text
public/
└── images/
    ├── memories/
    ├── flowers/
    └── decorations/

public/
└── videos/
    └── birthday-video.mp4
```

Use local assets for personal photographs.

Do not hardcode large image data inside JSX.

------------------------------------------------------------------------

# 40. Data-Driven Memories

Photos should be stored as data rather than repeated JSX.

Example:

``` js
export const memories = [
  {
    id: 1,
    image: "/images/memories/photo1.jpg",
    date: "08.21.26",
    caption: "A little moment",
    message: "A memory worth keeping forever."
  },
];
```

This makes adding/removing photographs easy.

------------------------------------------------------------------------

# 41. Reusable Components

Recommended component structure:

``` text
src/
├── components/
│   ├── Common/
│   │   ├── FloralBorder.jsx
│   │   ├── Flower.jsx
│   │   ├── Petal.jsx
│   │   ├── Tape.jsx
│   │   └── PageTransition.jsx
│   │
│   ├── Landing/
│   │   ├── LandingHero.jsx
│   │   └── LandingCTA.jsx
│   │
│   ├── Scrapbook/
│   │   ├── Gallery.jsx
│   │   ├── PolaroidCard.jsx
│   │   ├── VideoPolaroid.jsx
│   │   ├── ScrapbookPage.jsx
│   │   └── ExpandedPhoto.jsx
│   │
│   └── Birthday/
│       ├── Cake.jsx
│       ├── Candle.jsx
│       ├── WishButton.jsx
│       └── BirthdayLetter.jsx
│
├── animations/
│   ├── heroAnimations.js
│   ├── scrapbookAnimations.js
│   ├── hoverAnimations.js
│   ├── flipAnimations.js
│   └── birthdayAnimations.js
│
├── data/
│   └── memories.js
│
├── pages/
│   ├── Landing.jsx
│   ├── Scrapbook.jsx
│   └── Birthday.jsx
│
└── App.jsx
```

------------------------------------------------------------------------

# 42. State Management

No Redux or external state library is required.

React state is sufficient.

Important states:

``` text
selectedPhoto
isPhotoExpanded
isWishMade
isLetterOpen
```

------------------------------------------------------------------------

# 43. Audio

Optional background music may be included.

If used:

-   Do not autoplay with sound without user interaction.
-   Provide a visible music toggle.
-   Remember the user's choice during the session.

A small scrapbook-style music button can be placed in a corner.

------------------------------------------------------------------------

# 44. Error Handling

The website should gracefully handle:

-   Missing image
-   Missing video
-   Video loading failure
-   Invalid route
-   Broken photo asset

Broken images should not destroy the layout.

------------------------------------------------------------------------

# 45. Loading Experience

If media takes time to load:

-   Use a soft pink loading state.
-   Avoid a generic spinner if possible.
-   Use a subtle flower/petal animation.
-   Reveal content progressively.

------------------------------------------------------------------------

# 46. Final User Journey

The intended experience is:

``` text
LANDING
   │
   │ "Open Scrapbook"
   ↓
SCRAPBOOK
   │
   ├── cinematic video
   │
   ├── scroll
   │
   ├── flowers bloom
   │
   ├── Polaroids deal onto page
   │
   ├── hover interactions
   │
   ├── click photo
   │       ↓
   │     FLIP
   │       ↓
   │   fullscreen memory
   │
   │
   │ "Continue"
   ↓
BIRTHDAY
   │
   ├── cake appears
   ├── candles light
   ├── "Make a Wish"
   │
   ├── candles blow out
   ├── petals/confetti
   ├── birthday message
   │
   └── final letter
```

------------------------------------------------------------------------

# 47. Animation Timeline

The animation system should progressively become more interactive.

## Landing

``` text
Background
    ↓
Flowers
    ↓
Heading
    ↓
Subtitle
    ↓
CTA
```

## Scrapbook

``` text
Video cinematic reveal
        ↓
Scroll
        ↓
Flowers bloom
        ↓
Polaroids deal in
        ↓
Hover interaction
        ↓
Photo FLIP
        ↓
Close FLIP
        ↓
Continue
```

## Birthday

``` text
Background
    ↓
Flowers
    ↓
Cake
    ↓
Candles
    ↓
Wish button
    ↓
Candles extinguish
    ↓
Particles
    ↓
Birthday message
    ↓
Letter
```

------------------------------------------------------------------------

# 48. Visual Quality Requirements

The final implementation should avoid:

-   Generic Bootstrap-like cards
-   Excessive rounded cards
-   Bright saturated colors
-   Random animations
-   Excessive bouncing
-   Large black modal overlays
-   Unnecessary navigation bars
-   Overlapping photographs
-   Flowers covering important content
-   Excessive text
-   Inconsistent shadows
-   Inconsistent rotations
-   Abrupt page changes

The final result should feel:

-   Elegant
-   Romantic
-   Warm
-   Personal
-   Handmade
-   Cinematic
-   Modern
-   Interactive
-   Premium

------------------------------------------------------------------------

# 49. Development Order

The project should be completed in this order.

## Phase 1 --- Foundation

-   React
-   Vite
-   Tailwind
-   React Router
-   Component structure
-   Data structure

## Phase 2 --- Landing

-   Landing layout
-   Typography
-   Floral background
-   CTA
-   Basic entrance animations

## Phase 3 --- Scrapbook

-   Video Polaroid
-   650px photo Polaroids
-   Large scrapbook pages
-   Floral border
-   Paper background
-   Paper texture
-   Decorative tape/stickers

## Phase 4 --- GSAP Scrapbook

-   Hero cinematic reveal
-   ScrollTrigger flowers
-   Polaroid dealing animation
-   Hover lift
-   Floating petals
-   GSAP Flip photo expansion

## Phase 5 --- Birthday

-   Cake illustration
-   Candles
-   Flames
-   Wish interaction
-   Blow-out animation
-   Celebration particles
-   Birthday message
-   Letter

## Phase 6 --- Polish

-   Page transitions
-   Responsive behavior
-   Reduced-motion support
-   Loading states
-   Media optimization
-   Accessibility
-   Final visual tuning

## Phase 7 --- Deployment

-   Production build
-   Asset verification
-   Test all routes
-   Test all interactions
-   Deploy to Vercel

------------------------------------------------------------------------

# 50. Definition of Done

The project is considered complete when:

-   All three pages work.
-   Navigation works without full-page reloads.
-   No horizontal overflow occurs on the target laptop viewport.
-   Floral background feels dense but does not obstruct content.
-   Video is straight and cinematic.
-   Polaroids have physical depth.
-   Scrapbook pages look like paper.
-   Flowers respond to scrolling.
-   Polaroids animate into position.
-   Polaroid hover animation works.
-   Clicking a photo produces a GSAP FLIP transition.
-   Closing the photo returns it to the correct original location.
-   Birthday cake animation works.
-   Candles can be extinguished through the wish interaction.
-   Final birthday message appears after the interaction.
-   Animations remain smooth.
-   All assets load correctly.
-   No console errors remain.
-   The design remains visually consistent across all three pages.

------------------------------------------------------------------------

# 51. Core Design Principle

The most important rule for the entire project is:

> **Every interaction should feel like interacting with a physical
> scrapbook, not operating a normal website.**

Photos should feel like photographs.

Pages should feel like paper.

Flowers should feel like decorations around the scrapbook.

Animations should feel like physical movement.

The final birthday interaction should feel like opening the last page of
a personal memory book.

This principle should guide all future implementation decisions.
