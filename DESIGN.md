# 🎨 Smart Bonus — Design System & Style Guide

> **Version:** 1.0  
> **Last Updated:** 2026-05-31  
> **Purpose:** Complete design specification for maintaining visual consistency across all pages and future development.

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Glassmorphism System](#4-glassmorphism-system)
5. [Animated Background System](#5-animated-background-system)
6. [Section Backgrounds & Gradients](#6-section-backgrounds--gradients)
7. [Buttons](#7-buttons)
8. [Form Inputs](#8-form-inputs)
9. [Cards](#9-cards)
10. [Navbar](#10-navbar)
11. [Spacing & Layout](#11-spacing--layout)
12. [Motion & Animation](#12-motion--animation)
13. [Scroll Behavior](#13-scroll-behavior)
14. [Icons](#14-icons)
15. [Shadows & Elevation](#15-shadows--elevation)
16. [Responsive Breakpoints](#16-responsive-breakpoints)
17. [Accessibility & Selection](#17-accessibility--selection)
18. [Component Inventory](#18-component-inventory)
19. [Do's and Don'ts](#19-dos-and-donts)

---

## 1. Tech Stack

| Layer         | Technology                        |
|---------------|-----------------------------------|
| Framework     | React 19 + TypeScript             |
| Build Tool    | Vite 6                            |
| Styling       | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Animation     | Motion (Framer Motion) v12        |
| Icons         | Lucide React                      |
| Font Loading  | Google Fonts CDN                  |

---

## 2. Color Palette

### 2.1 CSS Custom Properties (`:root`)

```css
:root {
  --navy:    #0B192C;   /* Primary — Deep modern navy        */
  --yellow:  #D97706;   /* Accent  — Dark amber/yellow       */
  --gray:    #6B7280;   /* Support — Neutral text             */
  --bg-color:#FFFFFF;   /* Base    — Page background          */
}
```

### 2.2 Tailwind Theme Tokens

| Token              | Value      | Usage                           |
|--------------------|------------|---------------------------------|
| `brand-navy`       | `#0B192C`  | Headings, primary buttons, body text on light BG |
| `brand-yellow`     | `#D97706`  | Accent highlights, CTA buttons, icons, focus rings |
| `brand-gray`       | `#6B7280`  | Supporting/secondary text        |

### 2.3 Extended Palette (used in blobs & gradients)

| Color       | Hex       | Context                          |
|-------------|-----------|----------------------------------|
| Amber 400   | `#FBBF24` | Blob gradient start, dot indicator active |
| Amber 500   | `#F59E0B` | Blob gradient mid, phone frame   |
| Amber 700   | `#B45309` | Blob gradient end, phone buttons |
| Amber 800   | `#92400E` | Deep blob accent                 |
| Cyan 800    | `#164E63` | Cool-tone blob                   |
| Cyan 600    | `#0E7490` | Cool-tone blob                   |
| Cyan 900    | `#083344` | Cool-tone blob dark              |
| Sky 900     | `#0C4A6E` | Cool-tone blob                   |
| Dark BG     | `#031525` | Fluid BG container base          |
| Bezel Black | `#0A0A0A` | Phone inner bezel                |

### 2.4 Opacity Scale (White overlays)

| Usage                     | Value               |
|---------------------------|---------------------|
| Hero glass overlay        | `rgba(11,25,44, 0.15)` |
| Navbar glass              | `rgba(11,25,44, 0.3)`  |
| Card (light)              | `rgba(255,255,255, 0.6)` |
| Card (dark)               | `rgba(255,255,255, 0.1)` |
| Card border (light)       | `rgba(255,255,255, 0.5)` |
| Card border (dark)        | `rgba(255,255,255, 0.2)` |
| Navbar border             | `rgba(255,255,255, 0.12)` |
| Text on dark (primary)    | `white` (100%)       |
| Text on dark (secondary)  | `white/90` (90%)     |
| Text on dark (tertiary)   | `white/80` (80%)     |
| Dot indicator inactive    | `white/20`           |
| Dot indicator hover       | `white/40`           |

---

## 3. Typography

### 3.1 Font Family

```
Primary: "Cairo", ui-sans-serif, system-ui, sans-serif
Source:   https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap
```

**Cairo** is an Arabic-Latin font with a modern geometric feel. It supports both English and Arabic text natively.

### 3.2 Font Weights Used

| Weight | CSS Value | Usage                              |
|--------|-----------|-------------------------------------|
| 400    | `normal`  | Body text, descriptions             |
| 500    | `medium`  | Nav links, badges, dropdown text    |
| 600    | `semibold`| Buttons, form labels                |
| 700    | `bold`    | Headings, card titles, brand name   |
| 800    | `extrabold` | (Available, reserved for emphasis) |

### 3.3 Type Scale

| Element              | Classes                       | Size           |
|----------------------|-------------------------------|----------------|
| Hero H1              | `text-3xl lg:text-4xl`        | 30px / 36px    |
| Section H2           | `text-3xl md:text-4xl`        | 30px / 36px    |
| Trust H2             | `text-2xl md:text-3xl`        | 24px / 30px    |
| Footer H2            | `text-2xl`                    | 24px           |
| Card Title H3        | `text-lg`                     | 18px           |
| Step Title H3        | `text-xl`                     | 20px           |
| Body / Description   | `text-lg`                     | 18px           |
| Card Body            | `text-sm`                     | 14px           |
| Nav Links            | `text-sm`                     | 14px           |
| Badge Text           | `text-sm`                     | 14px           |
| Status Bar           | `text-[10px]`                 | 10px           |
| Footer Links         | `text-sm`                     | 14px           |
| Copyright            | `text-sm`                     | 14px           |

### 3.4 Line Height

| Context          | Class            |
|------------------|------------------|
| Headings         | `leading-tight`  |
| Body text        | `leading-relaxed`|

### 3.5 Text Colors by Context

| Context                    | Color                    |
|----------------------------|--------------------------|
| Heading on light BG        | `text-brand-navy`        |
| Body on light BG           | `text-brand-gray`        |
| Bold inline on light BG    | `text-brand-navy font-bold` |
| All text on dark BG        | `text-white`             |
| Secondary on dark BG       | `text-white/90`          |
| Tertiary / nav on dark     | `text-white/80`          |
| Muted on dark BG           | `text-gray-400`          |
| Accent highlight           | `text-brand-yellow`      |

---

## 4. Glassmorphism System

Glassmorphism is the **core visual language** of this design. Every surface uses a translucent, blurred layer on top of colorful backgrounds.

### 4.1 Glass Variants

#### `glass-hero` — Full-screen overlay on the animated blob background
```css
background: rgba(11, 25, 44, 0.15);
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);
```

#### `glass-navbar` — Floating navigation bar
```css
background: rgba(11, 25, 44, 0.3);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.12);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
```

#### `glass-card` — Content cards on light backgrounds
```css
background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
```

#### `glass-card-dark` — Content cards on dark backgrounds
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
```

### 4.2 Blur Intensity Reference

| Element         | Blur Level | Feeling                  |
|-----------------|------------|--------------------------|
| Hero overlay    | `8px`      | Subtle, see-through      |
| Navbar          | `20px`     | Frosted, opaque-ish      |
| Cards           | `16px`     | Medium frosted glass     |
| Badges/pills    | `blur-sm`  | Very light frosting      |
| Mobile menu     | `blur-md`  | Medium frosting          |

### 4.3 When to Use Each

| Context                           | Glass Class        |
|-----------------------------------|--------------------|
| Full-section overlays on blobs    | `glass-hero`       |
| Floating bars / toolbars          | `glass-navbar`     |
| Cards on `gradient-light` BG      | `glass-card`       |
| Cards on `gradient-navy` BG       | `glass-card-dark`  |
| Inline badges/pills on dark       | Custom: `bg-white/10 border border-white/20 backdrop-blur-sm` |

---

## 5. Animated Background System

The Hero section uses a **fluid marble blob** technique — large, blurred, slowly-moving radial gradients that create a living, organic background.

### 5.1 Container

```css
.fluid-bg-container {
  background: #031525;       /* Very deep navy-black base */
  position: relative;
  overflow: hidden;
}
```

### 5.2 Blob Base Style

```css
.fluid-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);       /* Heavy blur for soft edges */
  opacity: 0.85;
  will-change: transform;   /* GPU acceleration hint */
}
```

### 5.3 Blob Definitions (6 total)

| # | Size      | Position             | Gradient Colors (center → edge)          | Animation     | Duration |
|---|-----------|----------------------|------------------------------------------|---------------|----------|
| 1 | 60% × 70% | top: -10%, left: -10% | `#d97706` → `#b45309` → transparent      | `blob1`       | 15s      |
| 2 | 50% × 60% | bottom: -15%, right: -5% | `#fbbf24` → `#d97706` → transparent   | `blob2`       | 17s      |
| 3 | 45% × 55% | top: 20%, right: 15% | `#0c4a6e` → `#0b3142` → transparent      | `blob3`       | 13s      |
| 4 | 55% × 50% | bottom: 5%, left: 20%| `#164e63` → `#083344` → transparent      | `blob4`       | 18s      |
| 5 | 35% × 40% | top: 40%, left: 5%   | `#f59e0b` → `#92400e` → transparent      | `blob2` rev.  | 14s      |
| 6 | 40% × 45% | top: 5%, right: 30%  | `#0e7490` → `#155e75` → transparent      | `blob1` rev.  | 16s      |

**Color ratio:** ~3 warm amber blobs + ~3 cool cyan/teal blobs for visual balance.

### 5.4 Keyframe Animations

All animations use `ease-in-out` timing and `infinite` looping. They combine `translate()` and `scale()` transforms.

```css
@keyframes blob1 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  25%      { transform: translate(30%, -20%) scale(1.2); }
  50%      { transform: translate(-10%, 30%) scale(0.9); }
  75%      { transform: translate(-30%, -10%) scale(1.1); }
}

@keyframes blob2 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  25%      { transform: translate(-40%, 20%) scale(1.15); }
  50%      { transform: translate(20%, -30%) scale(1.05); }
  75%      { transform: translate(10%, 25%) scale(0.95); }
}

@keyframes blob3 {
  0%, 100% { transform: translate(0%, 0%) scale(1.1); }
  25%      { transform: translate(20%, 30%) scale(0.9); }
  50%      { transform: translate(-30%, -20%) scale(1.2); }
  75%      { transform: translate(25%, -15%) scale(1); }
}

@keyframes blob4 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  33%      { transform: translate(-25%, 15%) scale(1.15); }
  66%      { transform: translate(15%, -25%) scale(0.85); }
}
```

### 5.5 Performance Notes

- Use `will-change: transform` on all blobs
- `filter: blur(80px)` is GPU-composited
- Keep blob count ≤ 8 per section for mobile performance
- Stagger durations (13s–18s) to prevent synchronized loops

---

## 6. Section Backgrounds & Gradients

### 6.1 Light Sections (`gradient-light`)

Used on: **Trust, Features, Waitlist, Footer**

```css
background:
  radial-gradient(ellipse 80% 60% at 10% 90%, rgba(217,119,6, 0.18) 0%, transparent 70%),
  radial-gradient(ellipse 60% 50% at 90% 20%, rgba(11,25,44, 0.25) 0%, transparent 70%),
  linear-gradient(180deg, #f5f5f0 0%, #fafaf7 50%, #f5f5f0 100%);
```

**Characteristics:**
- Warm off-white base (`#f5f5f0` → `#fafaf7`)
- Subtle amber glow bottom-left
- Subtle navy glow top-right
- NOT pure white — slightly warm/cream tint

### 6.2 Dark Sections (`gradient-navy`)

Used on: **How It Works**

```css
background:
  radial-gradient(ellipse 70% 60% at 20% 80%, rgba(217,119,6, 0.12) 0%, transparent 70%),
  radial-gradient(ellipse 60% 50% at 85% 15%, rgba(14,116,144, 0.15) 0%, transparent 70%),
  linear-gradient(180deg, #0B192C 0%, #0f2238 50%, #0B192C 100%);
```

**Characteristics:**
- Navy base with slight mid-section lightening (`#0f2238`)
- Dim amber glow bottom-left
- Dim teal glow top-right

### 6.3 Hero Section (`fluid-bg-container`)

- Base color: `#031525` (deepest navy-black)
- Overlaid with 6 animated blobs (see Section 5)
- Covered by `glass-hero` overlay for content readability

### 6.4 Decorative Background Blobs on Light Sections

Additional subtle blobs placed on light sections for depth:

```
Features section:
  - Top-right:   w-96 h-96, bg-brand-yellow/10, blur-[100px]
  - Bottom-left:  w-[500px] h-[500px], bg-brand-navy/5, blur-[120px]

Waitlist section:
  - Center:       w-[800px] h-[800px], bg-brand-yellow/5, blur-[120px]
```

---

## 7. Buttons

### 7.1 Base Button Component

All buttons use **Motion** (`motion.button`) for tap animations and share these base styles:

```
Shape:          rounded-full (pill shape)
Font:           font-semibold
Focus Ring:     ring-2 ring-brand-yellow ring-offset-2
Tap Animation:  scale(0.98) via whileTap
Transition:     transition-colors duration-200
```

### 7.2 Button Variants

| Variant   | Normal State                                  | Hover State                                   |
|-----------|-----------------------------------------------|-----------------------------------------------|
| `primary` | `bg-brand-navy text-white`                    | `bg-brand-yellow text-brand-navy`             |
| `outline` | `border-2 border-brand-navy text-brand-navy`  | `bg-brand-navy text-white`                    |
| `ghost`   | `text-brand-gray`                             | `text-brand-navy bg-gray-50`                  |

### 7.3 Button Sizes

| Size | Padding        | Font Size  |
|------|----------------|------------|
| `sm` | `px-4 py-2`    | `text-sm`  |
| `md` | `px-6 py-3`    | `text-base`|
| `lg` | `px-8 py-4`    | `text-lg`  |

### 7.4 CTA Button (Navbar & Hero)

The primary Call-to-Action uses a **custom amber override**:

```
Background:     bg-brand-yellow (#D97706)
Text:           text-white
Hover:          bg-yellow-600
Border:         none
Shadow:         shadow-lg (Hero) / shadow-md (Waitlist)
```

### 7.5 Button Hover Interactions

| Effect                 | Duration  | Easing     |
|------------------------|-----------|------------|
| Color transition       | `200ms`   | default    |
| Translate-Y lift       | `-0.5`   | `transition-transform` |
| Tap scale              | instant   | spring     |

### 7.6 Disabled State

```
Opacity:    0.7
Cursor:     cursor-not-allowed
```

### 7.7 Loading State (Waitlist Submit)

- Shows spinner SVG (`animate-spin`) + "Submitting..." text
- Uses `flex items-center gap-2` layout

---

## 8. Form Inputs

### 8.1 Text Input Style

```
Shape:          rounded-full (pill)
Padding:        px-5 py-4
Background:     bg-white/60 backdrop-blur-sm
Border:         border border-white/40
Text:           text-brand-navy
Shadow:         shadow-sm
Min Height:     ~56px (via py-4)
```

### 8.2 Focus State

```
Outline:        none
Ring:           ring-2 ring-brand-yellow
Border:         border-transparent (hidden by ring)
Transition:     transition-all
```

### 8.3 Custom Dropdown

**Trigger** matches text input styling exactly (rounded-full, same padding, same glass effect).

**Dropdown Panel:**
```css
background: rgba(11, 25, 44, 0.96);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(217,119,6,0.15);
border-radius: 1rem (rounded-2xl);
```

**Dropdown Items:**
| State    | Style                                          |
|----------|-------------------------------------------------|
| Default  | `text-white/80`                                |
| Hover    | `bg-white/5 text-white`                        |
| Selected | `bg-brand-yellow text-brand-navy`              |
| Padding  | `px-5 py-3.5`                                  |
| Font     | `text-sm font-bold`                            |
| Transition | `duration-150`                               |

---

## 9. Cards

### 9.1 Feature Cards (Light BG)

```
Class:          glass-card
Shape:          rounded-2xl
Padding:        p-6
Hover:          -translate-y-1 (lift 4px)
Transition:     transition-transform duration-300
```

**Icon Container inside Card:**
```
Size:           w-12 h-12
Shape:          rounded-xl
Background:     bg-white/60
Border:         border border-white
Shadow:         shadow-sm
Icon Color:     text-brand-yellow
Icon Size:      w-6 h-6
```

### 9.2 Feature Showcase Card (Large Glass)

```
Class:          glass-card
Shape:          rounded-[2rem]
Aspect:         aspect-square
Inner:          rounded-2xl, border border-white/50, bg-white/40, backdrop-blur-md
Hover:          scale-[1.02] over 500ms
Gradient:       bg-gradient-to-tr from-brand-yellow/10 to-transparent (inner glow)
```

### 9.3 Waitlist Form Card

```
Class:          glass-card
Shape:          rounded-[2rem]
Padding:        p-10 md:p-16
Layout:         flex flex-col items-center text-center
```

### 9.4 Decorative Divider (Waitlist)

```
Width:          w-24
Height:         h-1
Color:          bg-brand-yellow/50
Shape:          rounded-full
```

---

## 10. Navbar

### 10.1 Structure

- **Position:** Fixed top, `z-50`, with `px-4` margin and `top-4` offset
- **Container:** `max-w-7xl mx-auto`
- **Shape:** `rounded-[2rem]` (32px corners)
- **Glass:** Uses `glass-navbar` class
- **Height:** `h-14` (56px)
- **Shadow:** `shadow-lg`

### 10.2 Entry Animation

```js
initial: { y: -20, opacity: 0 }
animate: { y: 0, opacity: 1 }
```

### 10.3 Desktop Navigation Links

```
Color:          text-white/80
Hover:          text-brand-yellow
Font:           text-sm font-medium
Transition:     transition-colors
Gap:            gap-8
```

### 10.4 Mobile Menu

**Toggle Button:**
- Icons: `Menu` / `X` from Lucide (w-6 h-6)
- Color: `text-white`, hover: `text-brand-yellow`

**Dropdown Panel:**
```
Animation:      height: 0→auto, opacity: 0→1 (200ms)
Background:     bg-brand-navy/95 backdrop-blur-md
Border:         border-t border-white/10
Padding:        px-6 py-6
Link gap:       gap-4
Link font:      text-base font-medium
```

### 10.5 Typewriter Effect (Brand Logo Area)

The navbar brand cycles between the name and provocative questions:

**Cycle Content:**
```
"Smart Bonus"                     → white text, text-base
"Tired of stock shortages?"       → amber/navy text, text-sm, font-bold
"Smart Bonus"                     → white text
"Paying too much per item?"       → amber/navy text
"Smart Bonus"                     → white text
"Find better suppliers?"          → amber/navy text
```

**Timing Constants:**
| Parameter     | Value   | Description                      |
|---------------|---------|----------------------------------|
| TYPE_SPEED    | 55ms    | Per-character typing speed       |
| ERASE_SPEED   | 30ms    | Per-character erasing speed      |
| MS_PER_CHAR   | 100ms   | Reading time per character       |
| MIN_DISPLAY   | 1500ms  | Minimum time text stays visible  |
| Cursor blink  | 500ms   | Blinking cursor interval         |

**Cursor:** 2px wide, inline-block, transitions opacity at 75ms.

**Question Color Adaptation:**
- On dark sections (Hero, How It Works): `text-brand-yellow`
- On light sections: `text-brand-navy`

---

## 11. Spacing & Layout

### 11.1 Container

```
Max Width:      max-w-7xl (80rem / 1280px)
Padding X:      px-4 sm:px-6 lg:px-8
Center:         mx-auto
```

### 11.2 Section Spacing

| Property         | Value                              |
|------------------|------------------------------------|
| Section padding  | `py-24` (96px top & bottom)        |
| Min height       | `min-h-screen`                     |
| Flex centering   | `flex items-center`                |
| Hero padding     | `pb-16 pt-20`                      |
| Footer padding   | `py-16`                            |

### 11.3 Grid Layouts

| Section       | Grid                              | Gap            |
|---------------|-----------------------------------|----------------|
| Hero          | `lg:grid-cols-2`                  | `gap-12 lg:gap-16` |
| Features      | `lg:grid-cols-2` (content+visual) | `gap-16`       |
| Feature cards | `sm:grid-cols-2`                  | `gap-6`        |
| How It Works  | `md:grid-cols-3`                  | `gap-12`       |
| Form fields   | `md:grid-cols-2`                  | `gap-4`        |

### 11.4 Common Spacing Values

| Token   | Size   | Usage                          |
|---------|--------|--------------------------------|
| `gap-2` | 8px    | Dot indicators, icon groups    |
| `gap-4` | 16px   | Form fields, nav links (mobile)|
| `gap-6` | 24px   | Card grids, footer links       |
| `gap-8` | 32px   | Desktop nav links              |
| `gap-12`| 48px   | Step grid, footer links (md)   |
| `gap-16`| 64px   | Main content grid              |
| `mb-4`  | 16px   | Heading to paragraph           |
| `mb-6`  | 24px   | Heading to content block       |
| `mb-16` | 64px   | Section header to content      |

---

## 12. Motion & Animation

### 12.1 Library

**Motion** (Framer Motion) v12 — imported from `motion/react`.

### 12.2 Entry Animations

| Element           | Initial                    | Animate                   | Duration | Delay  |
|-------------------|----------------------------|---------------------------|----------|--------|
| Hero left column  | `opacity:0, y:20`          | `opacity:1, y:0`          | 500ms    | 0ms    |
| Hero right column | `opacity:0, y:20`          | `opacity:1, y:0`          | 500ms    | 200ms  |
| Navbar            | `y:-20, opacity:0`         | `y:0, opacity:1`          | default  | 0ms    |

### 12.3 Phone Mockup Carousel

```
Slide interval:     3000ms (3 seconds)
Slide direction:    Horizontal (x-axis)
Enter:              x: '100%' → x: 0
Exit:               x: 0 → x: '-100%'
Duration:           800ms
Easing:             cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### 12.4 Interactive Micro-Animations

| Interaction          | Property              | Value / Duration    |
|----------------------|-----------------------|---------------------|
| Button tap           | `scale`               | `0.98` (spring)     |
| Card hover lift      | `translateY`          | `-4px` / 300ms      |
| Showcase card hover  | `scale`               | `1.02` / 500ms      |
| Waitlist btn hover   | `translateY`          | `-2px` / default    |
| Chevron rotate       | `rotate`              | `180deg` / 200ms    |
| Dot indicator resize | `width`               | `8px↔24px` / 300ms  |
| Nav link color       | `color`               | amber / default     |
| Footer link color    | `color`               | navy / default      |
| Loading spinner      | `rotate`              | continuous spin     |

### 12.5 AnimatePresence Usage

Used for:
- Phone screen carousel (slide enter/exit)
- Mobile navigation dropdown (height expand/collapse)

---

## 13. Scroll Behavior

### 13.1 Global

```css
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }
```

### 13.2 Custom Section Snapping

A custom `useSectionScroll` hook intercepts wheel, keyboard, and touch events to create **full-page snap scrolling**.

**Section Order:** `hero` → `partner` → `features` → `how-it-works` → `waitlist` → `footer`

| Setting              | Value                        |
|----------------------|------------------------------|
| Scroll cooldown      | 800ms between snaps          |
| Animation            | `scrollIntoView({ behavior: 'smooth' })` |
| Keyboard triggers    | ArrowDown, ArrowUp, PageDown, PageUp, Space |
| Touch threshold      | 10px minimum delta           |

### 13.3 Mobile Overflow

On mobile (`< 768px`), if a section's content height exceeds viewport height, native scrolling is allowed within that section. Snap scrolling only resumes when the user reaches the section edge.

### 13.4 IntersectionObserver (section sync)

```
rootMargin: '-20% 0px -20% 0px'
threshold:  0.3
```

Keeps `currentIndex` in sync when the user manually scrolls or uses nav links.

### 13.5 Text Selection Style

```
Selection BG:    brand-yellow at 30% opacity
Selection Text:  brand-navy
Class:           selection:bg-brand-yellow/30 selection:text-brand-navy
```

---

## 14. Icons

### 14.1 Library

**Lucide React** — consistent, clean line icons.

### 14.2 Icons Used

| Icon              | Component     | Context                     |
|-------------------|---------------|-----------------------------|
| `Search`          | Features      | Comparison engine icon      |
| `Zap`             | Features      | Price discovery icon        |
| `ArrowRightLeft`  | Features      | Alternative suggestions     |
| `Building2`       | Features      | Faster decisions icon       |
| `ShieldCheck`     | Trust         | Trust badge icon            |
| `Menu`            | Navbar        | Mobile menu open            |
| `X`               | Navbar        | Mobile menu close           |
| `ChevronDown`     | Waitlist      | Dropdown indicator          |
| `ArrowRight`      | (Reserved)    | CTA arrow                   |
| `Play`            | (Reserved)    | Video play button           |
| `LayoutDashboard` | (Reserved)    | Dashboard reference         |

### 14.3 Icon Sizing

| Context            | Size          |
|--------------------|---------------|
| Feature card icon  | `w-6 h-6`    |
| Trust badge icon   | `w-6 h-6`    |
| Nav hamburger      | `w-6 h-6`    |
| Showcase (large)   | `w-24 h-24`  |
| Dropdown chevron   | `w-4 h-4`    |
| Success checkmark  | `w-8 h-8`    |
| Spinner            | `h-5 w-5`    |

---

## 15. Shadows & Elevation

| Level     | CSS Value                                              | Usage                    |
|-----------|--------------------------------------------------------|--------------------------|
| Subtle    | `shadow-sm`                                            | Inputs, icon containers  |
| Medium    | `shadow-md`                                            | Waitlist submit button   |
| Large     | `shadow-lg`                                            | Navbar, CTA buttons      |
| Glass     | `0 8px 32px 0 rgba(0,0,0,0.05)`                       | Glass cards (light)      |
| Glass dark| `0 8px 32px 0 rgba(0,0,0,0.2)`                        | Glass cards (dark)       |
| Navbar    | `0 4px 30px rgba(0,0,0,0.1)`                          | Navbar bar               |
| Dropdown  | `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(217,119,6,0.15)` | Dropdown panel |
| Phone     | `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.3)` | Phone mockup |
| Step badge| `0 0 0 8px var(--navy)`                                | How It Works step circle |

---

## 16. Responsive Breakpoints

Using Tailwind's default breakpoints:

| Prefix | Min Width | Key Changes                                         |
|--------|-----------|-----------------------------------------------------|
| (base) | 0px       | Single column, compact padding                      |
| `sm`   | 640px     | Side-by-side buttons, 2-col form fields             |
| `md`   | 768px     | Desktop nav visible, 3-col steps, hide hamburger    |
| `lg`   | 1024px    | 2-col hero grid, larger headings, wider padding     |

### 16.1 Key Responsive Behaviors

- **Navbar:** Hamburger menu below `md`, full links at `md+`
- **Hero grid:** Stacked on mobile, 2-col on `lg`
- **Feature cards:** 1-col base, 2-col at `sm`
- **Steps grid:** 1-col base, 3-col at `md`
- **Form grid:** Stacked base, 2-col at `md`
- **Heading sizes:** `text-3xl` base → `text-4xl` at `md/lg`
- **Section scroll:** Native overflow allowed on mobile for tall sections

---

## 17. Accessibility & Selection

### 17.1 Focus Indicators

All interactive elements use visible focus rings:
```
ring-2 ring-brand-yellow ring-offset-2
```

### 17.2 Semantic HTML

- `<section>` with unique `id` attributes for each page section
- `<nav>` for navigation
- `<main>` wrapping content sections
- `<footer>` for footer
- Proper `<h1>` → `<h3>` heading hierarchy

### 17.3 Form Accessibility

- `required` attribute on all form fields
- `type="tel"` for phone inputs
- `type="text"` for name/city inputs
- `aria-hidden` on decorative spacer images
- Keyboard navigation bypasses form inputs (no scroll hijack when focused)

### 17.4 Color Contrast

- White text on navy backgrounds: passes WCAG AA
- Navy text on light backgrounds: passes WCAG AAA
- Amber accent on navy: passes WCAG AA for large text

---

## 18. Component Inventory

### 18.1 File Structure

```
src/
├── App.tsx                      # Root + useSectionScroll hook
├── main.tsx                     # React entry point
├── index.css                    # Global styles + Tailwind config
├── components/
│   ├── Hero.tsx                 # Hero section with blobs + phone
│   ├── Trust.tsx                # Trust/partner section
│   ├── Features.tsx             # Feature grid section
│   ├── HowItWorks.tsx           # Steps section (dark BG)
│   ├── Waitlist.tsx             # Form section + Google Sheets integration
│   ├── Footer.tsx               # Footer section
│   ├── PhoneMockup.tsx          # Animated phone carousel
│   ├── Navbar.tsx               # Re-export barrel
│   ├── Navbar/
│   │   ├── index.tsx            # Main navbar component
│   │   ├── constants.ts         # Brand cycle, menu items, timing
│   │   ├── useTypewriter.ts     # Typewriter animation hook
│   │   └── useSectionTheme.ts   # Dark/light section detection
│   └── ui/
│       └── Button.tsx           # Reusable button component
```

### 18.2 Section IDs (for navigation & scroll)

| ID             | Component     | Background Type    |
|----------------|---------------|--------------------|
| `hero`         | Hero          | `fluid-bg-container` (animated blobs) |
| `partner`      | Trust         | `gradient-light`   |
| `features`     | Features      | `gradient-light`   |
| `how-it-works` | HowItWorks    | `gradient-navy`    |
| `waitlist`     | Waitlist      | `gradient-light`   |
| `footer`       | Footer        | `gradient-light`   |

### 18.3 Dark vs Light Sections

| Dark Sections        | Light Sections              |
|----------------------|-----------------------------|
| `hero`               | `partner`                   |
| `how-it-works`       | `features`                  |
|                      | `waitlist`                  |
|                      | `footer`                    |

---

## 19. Do's and Don'ts

### ✅ DO

- **Always use `glass-card` or `glass-card-dark`** for elevated surfaces — never use flat white/dark cards
- **Always place decorative background blobs** behind glass elements for the frosted effect to have something to blur
- **Use the amber/navy palette exclusively** — no random blues, reds, or greens
- **Use Cairo font everywhere** — never fall back to system fonts intentionally
- **Maintain the warm off-white** (`#f5f5f0`) for light sections — never use pure `#FFFFFF` as a section background
- **Keep blob animations between 13–18s** duration — shorter feels jittery, longer feels static
- **Use `rounded-full`** for buttons and inputs, `rounded-2xl` or `rounded-[2rem]` for cards
- **Apply `motion.button` with `whileTap`** on all clickable buttons
- **Stagger entry animations** with 200ms increments between sibling elements
- **Use `backdrop-filter: blur()`** — this is the signature visual effect

### ❌ DON'T

- **Don't use solid opaque backgrounds** on cards — always use rgba transparency
- **Don't skip the `-webkit-` prefix** for backdrop-filter (Safari compatibility)
- **Don't use sharp corners** — minimum `rounded-xl` on any elevated element
- **Don't use more than 3 colors** in a single blob gradient (center → mid → transparent)
- **Don't animate blob `opacity`** — only animate `transform` for performance
- **Don't use `overflow: visible`** on sections with blobs — they must be clipped
- **Don't place text directly on blob backgrounds** without a glass overlay
- **Don't use Tailwind's default font stack** — always specify Cairo
- **Don't use pure black (`#000`)** for text — use `--navy` (`#0B192C`) instead
- **Don't disable `will-change`** on animated blob elements

---

## 20. Quick Reference Cheat Sheet

### Copy-Paste Patterns

> **3 Background Types:** Light (`gradient-light`), Dark (`gradient-navy`), and Animated Dark (`fluid-bg-container` + blobs).

**① New light section (warm off-white `#f5f5f0`):**
```tsx
<section className="py-24 relative overflow-hidden min-h-screen flex items-center gradient-light">
  <div className="absolute ... bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
    {/* Content */}
  </div>
</section>
```

**② New static dark section (navy `#0B192C`):**
```tsx
<section className="py-24 text-white min-h-screen flex items-center gradient-navy">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    {/* Content */}
  </div>
</section>
```

**③ New animated dark section (deepest navy `#031525` + blobs):**
```tsx
<section className="relative min-h-screen flex items-center overflow-hidden fluid-bg-container">
  {/* Warm blobs */}
  <div className="fluid-blob" style={{ width: '60%', height: '70%', top: '-10%', left: '-10%', background: 'radial-gradient(circle, #d97706 0%, #b45309 40%, transparent 70%)', animation: 'blob1 15s ease-in-out infinite' }} />
  <div className="fluid-blob" style={{ width: '50%', height: '60%', bottom: '-15%', right: '-5%', background: 'radial-gradient(circle, #fbbf24 0%, #d97706 35%, transparent 70%)', animation: 'blob2 17s ease-in-out infinite' }} />
  {/* Cool blobs */}
  <div className="fluid-blob" style={{ width: '45%', height: '55%', top: '20%', right: '15%', background: 'radial-gradient(circle, #0c4a6e 0%, #0b3142 50%, transparent 70%)', animation: 'blob3 13s ease-in-out infinite' }} />
  <div className="fluid-blob" style={{ width: '55%', height: '50%', bottom: '5%', left: '20%', background: 'radial-gradient(circle, #164e63 0%, #083344 45%, transparent 70%)', animation: 'blob4 18s ease-in-out infinite' }} />
  {/* Glass overlay */}
  <div className="absolute inset-0 glass-hero z-10 pointer-events-none" />
  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
    {/* White text content here */}
  </div>
</section>
```

**New glass card on light BG:**
```tsx
<div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
  {/* Content */}
</div>
```

**New glass card on dark BG:**
```tsx
<div className="glass-card-dark rounded-2xl p-6">
  {/* Content */}
</div>
```

**New badge/pill on dark BG:**
```tsx
<span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-sm">
  Badge Text
</span>
```

---

> **End of Design System Document**
> 
> This document should be referenced before creating any new page, component, or section to ensure complete visual consistency with the established SmartBonus landing page design.
