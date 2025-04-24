// export const textVariant = (delay?: number | string) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         duration: 1.25,
//         delay: delay,
//       },
//     },
//   };
// };

// export const fadeIn = (
//   direction: number | string,
//   type: number | string,
//   delay: number | string,
//   duration: number | string
// ) => {
//   return {
//     hidden: {
//       x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const zoomIn = (delay: number | string, duration: number | string) => {
//   return {
//     hidden: {
//       scale: 0,
//       opacity: 0,
//     },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const slideIn = (
//   direction: number | string,
//   type: number | string,
//   delay: number | string,
//   duration: number | string
// ) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const staggerContainer = (
//   staggerChildren?: number | string,
//   delayChildren?: number | string
// ) => {
//   return {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: staggerChildren,
//         delayChildren: delayChildren || 0,
//       },
//     },
//   };
// };

export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "inertia" | "",
  delay: number = 0,
  duration: number = 0.75
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type || "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number = 0, duration: number = 0.75) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "inertia" | "",
  delay: number = 0,
  duration: number = 0.75
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type || "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.2,
  delayChildren: number = 0
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};
