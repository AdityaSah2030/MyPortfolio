# Design System Specifications

This document outlines the detailed design language, tokens, and aesthetic principles used to create this portfolio. Use this guide as a direct instruction manual when building future websites to ensure a perfectly consistent, premium, and unified user experience.

## 1. Core Aesthetic Principles
- **Style**: Apple-inspired, minimalist, modern, and highly legible.
- **Vibe**: Clean, breathable, fresh, and soothing.
- **Key Characteristics**: Generous whitespace, high-contrast typography, rounded corners, subtle glassmorphism, and completely fluid responsiveness.
- **Visual Depth**: Flat backgrounds overlaid with subtle, soft-shadowed cards that lift on hover to create a tactile feel without being skeuomorphic.

## 2. Color Palette (Sky Blue Theme)

The design relies strictly on CSS variables to handle light and dark modes flawlessly. Avoid hardcoded hex colors outside of `root`.

### Light Mode (`:root`)
- **Background Primary**: `#F8FAFC` (Soft off-white/gray, used for the main body)
- **Background Secondary**: `#FFFFFF` (Pure white, used for cards and header)
- **Text Primary**: `#0F172A` (Deep slate, used for headings and high-emphasis text)
- **Text Secondary**: `#475569` (Medium slate, used for body paragraphs)
- **Accent**: `#0EA5E9` (Sky Blue)
- **Accent Hover**: `#0284C7` (Darker Sky Blue)
- **Accent Light**: `rgba(14, 165, 233, 0.1)` (Used for pill badges)
- **Border Color**: `#E2E8F0` (Subtle divider color)

### Dark Mode (`[data-theme="dark"]`)
- **Background Primary**: `#0F172A` (Deep slate, main body)
- **Background Secondary**: `#1E293B` (Slightly lighter slate, cards/header)
- **Text Primary**: `#F8FAFC` (Off-white, high emphasis)
- **Text Secondary**: `#94A3B8` (Muted slate, body text)
- **Accent**: `#38BDF8` (Lighter, vibrant Sky Blue for dark contrast)
- **Accent Hover**: `#7DD3FC` (Even lighter Sky Blue)
- **Accent Light**: `rgba(56, 189, 248, 0.15)`
- **Border Color**: `#334155`

## 3. Typography
Use the native OS stack to mimic the Apple ecosystem and ensure blazing-fast load times.
- **Font Family**: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;`
- **Body Text**: Size `1rem`, Line height `1.6`, Font weight `400`.
- **Headings**: 
  - Weight: `700` or `800`.
  - Tracking (Letter Spacing): Tightly tracked (`-0.02em` to `-0.04em`) to look modern and punchy.
  - Section Titles: `2.25rem` with a centered `4px` tall sky-blue underline accent (`60px` wide).
  - Hero Title: Massive `4rem` (Desktop), scaling down to `2.5rem` (Mobile).

## 4. UI Elements & Components

### Buttons
- **Shape**: Fully rounded / pill-shaped (`border-radius: 9999px`).
- **Padding**: `0.875rem 1.75rem`.
- **Primary Button**: Solid accent color background, white text, colored drop shadow (`box-shadow: 0 4px 14px 0 rgba(14, 165, 233, 0.39)`).
- **Secondary Button**: Background secondary color, primary text color, `1px` solid border. No shadow.
- **Hover States**: `translateY(-2px)` to lift slightly, with an intensified shadow for primary buttons.

### Cards (About, Skills, Projects, Interests)
- **Shape**: Highly rounded corners (`border-radius: 1.5rem`).
- **Padding**: Generous internal spacing (`2rem` to `2.5rem`).
- **Borders**: Thin `1px` solid border using `var(--border-color)`.
- **Background**: `var(--bg-secondary)`.

### Header / Navbar
- **Height**: `70px`.
- **Style**: Fixed to the top.
- **Glassmorphism**: `backdrop-filter: blur(12px)` with a slight opacity on the background (`rgba(var, 0.8)` or `opacity: 0.95`).
- **Layout**: Logo Left, Navigation Center, Toggles Right.

## 5. Shadows & Depth
Use tiered shadows to establish a visual hierarchy.
- **Small (Cards Base)**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Medium (Hero Image)**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **Hover (Card Hover state)**: `0 10px 25px -5px rgba(14, 165, 233, 0.25)` (Shadow tinted with the accent color).

*Note: In dark mode, base shadows are slightly darker/more opaque to remain visible against dark backgrounds.*

## 6. Animations & Transitions
Avoid overly flashy animations. Keep everything soft and deliberate.
- **Global Transition**: `0.3s ease` for background/color changes (e.g., Theme switching).
- **Hover Transition**: `0.2s ease` for buttons and links.
- **Card Hover**: `transform: translateY(-5px)` to `-8px` with the tinted hover shadow.
- **Mount Animation (`.fade-in`)**: `0.8s ease` moving from `opacity: 0, translateY(20px)` to `opacity: 1, translateY(0)`. Used for hero elements and cards loading in.

## 7. Layout & Spacing Rules
- **Container**: Max width `1100px`, horizontally centered, `1.5rem` side padding.
- **Section Spacing**: `padding: 6rem 0` on Desktop, `padding: 4rem 0` on Mobile.
- **CSS Grid**: Use fluid grids extensively. 
  - General formula: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;`
  - Ensure the `minmax` never exceeds `280px` to prevent horizontal scrolling on extremely small phones (e.g., 320px width).
- **Hero Alignment**: Image Left, Text Right on Desktop. Gap: `8rem`. 
- **Mobile Behavior**: Always prevent horizontal scrolling (`html, body { overflow-x: hidden; }`). Convert Hero to vertical stack (Image Top, Text Bottom) with a `3rem` gap.
