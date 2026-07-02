---
version: alpha
name: TimeBridge Daylight Atlas
description: A DESIGN.md-driven visual system for a focused timezone availability converter.
colors:
  primary: "#1A1C1E"
  primary-muted: "#3B4048"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  tertiary-soft: "#F4D8CF"
  neutral: "#F7F5F2"
  neutral-raised: "#FEFCF7"
  neutral-sunken: "#EEE9DF"
  border: "#DED8CE"
  focus: "rgba(184, 66, 46, 0.24)"
  success: "#2E7D57"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
typography:
  display:
    fontFamily: ui-sans-serif, system-ui
    fontSize: 60px
    fontWeight: 650
    lineHeight: 1.04
    letterSpacing: -0.045em
  headline:
    fontFamily: ui-sans-serif, system-ui
    fontSize: 42px
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: -0.035em
  title:
    fontFamily: ui-sans-serif, system-ui
    fontSize: 20px
    fontWeight: 560
    lineHeight: 1.25
  body:
    fontFamily: ui-sans-serif, system-ui
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: ui-sans-serif, system-ui
    fontSize: 13px
    fontWeight: 620
    lineHeight: 1.2
    letterSpacing: 0.08em
  data:
    fontFamily: ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.03em
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container: 1200px
components:
  page-surface:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  page-surface-sunken:
    backgroundColor: "{colors.neutral-sunken}"
    textColor: "{colors.primary-muted}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  card-standard:
    backgroundColor: "{colors.neutral-raised}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-field:
    backgroundColor: "{colors.neutral-raised}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px
  diff-card:
    backgroundColor: "{colors.tertiary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  timeline-track:
    backgroundColor: "{colors.neutral-sunken}"
    textColor: "{colors.primary}"
    typography: "{typography.data}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  result-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.data}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  live-success-indicator:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
---

## Overview

TimeBridge Daylight Atlas is a focused utility interface for comparing availability across time zones. It should feel calm, editorial, and precise: closer to a travel notebook or premium scheduling desk than a busy analytics dashboard.

The product's single job is immediate comprehension. Users enter the time they are free, then read the other person's local time. The visual system therefore favors large data blocks, minimal copy, and strong containment.

## Colors

The palette uses a warm neutral foundation with a single clay accent.

- **Primary (#1A1C1E):** Deep ink for headings, result emphasis, and core controls.
- **Secondary (#6C7278):** Metadata, helper labels, and quiet UI copy.
- **Tertiary (#B8422E):** Boston-clay accent for the conversion direction and selected emphasis. Use sparingly.
- **Neutral (#F7F5F2):** Warm limestone page foundation. Never use pure white as the dominant surface.
- **Border (#DED8CE):** Gentle containment for cards and inputs.

## Typography

Use a restrained sans-serif stack with a technical mono accent only for time data. Headings are large and compressed; body and labels remain readable and uncompressed.

- **Display:** 60px, tight line height, negative tracking for the hero.
- **Headline:** 42px for the main converter title.
- **Data:** Monospace numeric treatment for availability windows and clocks.
- **Labels:** Uppercase, small, tracked labels for scanning.

## Layout

Use a fixed-max-width desktop grid with a single primary converter card. The layout should read left-to-right: context on the left, action/result on the right. On mobile, stack into a single column and preserve the input → result order.

Spacing follows an 8px base unit. Avoid decorative cards that do not directly support conversion.

## Elevation & Depth

Depth is shallow. Use borders, raised neutral surfaces, and tiny inset highlights instead of large floating shadows. The result card may use deep ink fill to create contrast, not heavy elevation.

## Shapes

Use 6px radius for inputs and buttons, 16px for cards, 24px for featured containers, and full radius only for compact preset pills.

## Components

- Primary buttons are deep ink with white text and a subtle inset highlight.
- Accent elements use clay only when they explain conversion direction or highlight the output.
- Inputs are neutral-raised fields with clear focus rings.
- Results use large, high-contrast data cards.

## Do's and Don'ts

### Do

- Keep the visible interface focused on availability conversion.
- Let the target local time be the strongest visual element.
- Use warm neutral surfaces and borders for calm containment.
- Use monospaced numerals for time windows.

### Don't

- Don't add generic marketing feature cards.
- Don't use rainbow gradients or heavy glassmorphism.
- Don't bury the target time below secondary panels.
- Don't use more than one accent color for interactions.
