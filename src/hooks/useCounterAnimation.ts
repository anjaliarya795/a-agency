import { useState, useEffect } from 'react';

export const useCounterAnimation = (
  startValue: number = 0,
  endValue: number,
  duration: number = 1,
  isInview: boolean
): number => {
  const [value, setValue] = useState<number>(startValue);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); // Track if the animation has been completed

  useEffect(() => {
    if (!isInview || hasAnimated) return; // Don't run animation if not in view or if it's already animated

    let startTime: number;

    const animateCounter = () => {
      const progress = (performance.now() - startTime) / (duration * 1000);
      const updatedValue = Math.min(
        startValue + (endValue - startValue) * progress,
        endValue
      );

      setValue(updatedValue);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        setHasAnimated(true); // Mark animation as complete
      }
    };

    startTime = performance.now();
    requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(startTime); // Cleanup the animation frame
  }, [startValue, endValue, duration, isInview, hasAnimated]);

  return value;
};
