"use client";

import gsap from "gsap";

/**
 * 🚀 High-Performance GSAP Animation Utilities
 * Hardware-accelerated transitions and physics-based motion
 */

export const gsapFadeUp = (
  element: string | HTMLElement,
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    ease?: string;
    stagger?: number;
  } = {}
) => {
  const {
    duration = 0.9,
    delay = 0,
    y = 35,
    ease = "power3.out",
    stagger = 0,
  } = options;

  return gsap.from(element, {
    opacity: 0,
    y,
    duration,
    delay,
    ease,
    stagger,
    force3D: true,
  });
};

export const gsapFloating = (
  element: string | HTMLElement,
  options: { y?: number; duration?: number; ease?: string } = {}
) => {
  const { y = -8, duration = 2.8, ease = "sine.inOut" } = options;

  return gsap.to(element, {
    y,
    duration,
    repeat: -1,
    yoyo: true,
    ease,
    force3D: true,
  });
};

export const gsapScaleIn = (
  element: string | HTMLElement,
  options: { duration?: number; delay?: number; ease?: string } = {}
) => {
  const { duration = 1, delay = 0, ease = "expo.out" } = options;

  return gsap.from(element, {
    opacity: 0,
    scale: 0.92,
    duration,
    delay,
    ease,
    force3D: true,
  });
};
