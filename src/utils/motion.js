export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

// Bounce entrance effect
export const bounceIn = (delay) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

// Rotate and fade in
export const rotateIn = (delay) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0.5,
    },
    show: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: delay,
      },
    },
  };
};

// Flip effect
export const flipIn = (direction, delay) => {
  return {
    hidden: {
      rotateX: direction === 'horizontal' ? 0 : 90,
      rotateY: direction === 'horizontal' ? 90 : 0,
      opacity: 0,
    },
    show: {
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: delay,
      },
    },
  };
};

// Scale and blur effect
export const scaleBlur = (delay) => {
  return {
    hidden: {
      scale: 1.2,
      opacity: 0,
      filter: 'blur(10px)',
    },
    show: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};

// Perspective slide
export const perspectiveSlide = (direction, delay) => {
  const directions = {
    left: { x: -100, rotateY: -45 },
    right: { x: 100, rotateY: 45 },
    up: { y: -100, rotateX: 45 },
    down: { y: 100, rotateX: -45 },
  };

  return {
    hidden: {
      ...directions[direction],
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: delay,
      },
    },
  };
};

// Floating animation (continuous)
export const float = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Pulse effect
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Shake effect
export const shake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};
