export const leftToRight = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
}
export const rightToLeft = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
}
export const topToBottom = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
}
export const bottomToTop = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
    },
  }),
}

export const TextAnimations = {
  leftToRight,
  rightToLeft,
  topToBottom,
  bottomToTop,
}
