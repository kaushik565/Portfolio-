# Portfolio Motion Effects

This document describes all the motion effects and animations added to enhance the portfolio's user experience.

## Motion Utilities (`src/utils/motion.js`)

### Available Animation Variants

1. **fadeIn** - Directional fade entrance (left, right, up, down)
2. **slideIn** - Slide from direction with full displacement
3. **staggerContainer** - Staggers child animations
4. **textVariant** - Bouncy text entrance from top
5. **zoomIn** - Scale up with fade
6. **bounceIn** - Springy bounce entrance
7. **rotateIn** - Rotate and fade in
8. **flipIn** - 3D flip effect
9. **scaleBlur** - Scale with blur effect
10. **perspectiveSlide** - 3D perspective slide
11. **float** - Continuous floating animation
12. **pulse** - Subtle pulsing scale
13. **shake** - Quick shake effect

## Component Enhancements

### Hero Component
- **Stagger animations** for bento cards (sequential entrance)
- **Scale and spring** animations on initial load
- **Rotating background "QA" text**
- **Hover gradient overlay** on main card
- **Sequential text reveals** (badge → title → description → buttons)
- **Button press animations** (whileTap)
- **Hover glow effects** on buttons
- **Tech stack tags** animate in sequentially with spring
- **Social icons** rotate and scale on hover
- **Photo card** has 3D perspective entrance
- **Availability badge** has floating animation

### Projects Component
- **Enhanced tilt effect** (increased from 5° to 8°)
- **Floating particle effects** on project cards
- **Shine sweep animation** on hover
- **Number badges animate** on hover
- **Title slides** slightly on hover
- **Tags animate in** sequentially
- **Button hover states** with scale
- **Card lifts on hover** (y: -5)

### Skills Component
- **Category expand/collapse** with animated chevron rotation
- **Skill bars animate** to their percentage values
- **Shimmer effect** on filled progress bars
- **Staggered skill entrance** within categories
- **Quick stats cards** at bottom

### Experience Component
- **Animated timeline** that draws from top to bottom
- **Timeline dots** with pulse effect for current role
- **Experience cards scale up** on hover with glow
- **"Current" badge** pulses continuously
- **Education cards** each have entrance animations
- **Cards lift on hover**

### Contact Component
- **Email card** scales and slides on hover
- **Icon rotates** on hover
- **Social cards** have scale and lift effects
- **Icons rotate 360°** on hover
- **Staggered entrance** for all elements

### Stats Component
- **Numbers count up** from 0 to value
- **Cards scale** with glow on hover
- **Sequential entrance** animation
- **Spring-based number scale**

### Navbar
- **Smooth slide down** entrance
- **Active section indicator** with shared layout animation
- **Backdrop blur** on scroll
- **Mobile menu** with scale animation

## Additional Features

### Custom Cursor Follower (`CursorFollower.jsx`)
- **Smooth cursor dot** following mouse position
- **Cursor ring** with trailing effect
- **Scale increase** on hovering interactive elements
- **Spring-based motion** for natural feel
- **Desktop only** (hidden on mobile)

### CSS Animations (`src/index.css`)
- **animate-gradient** - Shifting gradient backgrounds
- **animate-glow** - Pulsing glow effect
- **animate-float** - Vertical floating
- **animate-pulse-glow** - Box shadow pulse
- **animate-bounce-subtle** - Gentle bouncing
- **animate-rotate-slow** - Slow 360° rotation
- **card-tilt** - CSS-based tilt on hover
- **magnetic-element** - Helper class for cursor interaction

## Performance Considerations

- All animations use `viewport={{ once: true }}` to prevent re-triggering on each scroll
- Spring animations use optimized stiffness/damping values
- CSS transforms are used instead of position changes
- GPU-accelerated properties (transform, opacity) are prioritized
- Animations are disabled on mobile for cursor follower

## Configuration

### Common Animation Timings
- **Fast interactions**: 0.2-0.3s (hover effects)
- **Medium entrances**: 0.5-0.8s (component reveals)
- **Slow ambience**: 2-5s (floating, rotating)

### Spring Configuration
```javascript
// Responsive/bouncy
{ type: "spring", stiffness: 300, damping: 20 }

// Smooth/controlled  
{ type: "spring", stiffness: 100, damping: 15 }

// Heavy/slow
{ type: "spring", stiffness: 50, damping: 10 }
```

## Browser Compatibility
All animations are compatible with modern browsers (Chrome, Firefox, Safari, Edge).
Fallbacks to CSS transitions where Framer Motion is not supported.
