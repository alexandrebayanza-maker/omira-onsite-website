import { useEffect } from 'react';

const STAGGER_MS = 60;

/**
 * Reveals .reveal and .reveal-image elements once on scroll.
 * Staggers siblings in the same parent by 60ms.
 */
export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');

    const elements = document.querySelectorAll('.reveal, .reveal-image');
    if (!elements.length) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Stagger siblings that share a parent
    const byParent = new Map();
    elements.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      if (!byParent.has(parent)) byParent.set(parent, []);
      byParent.get(parent).push(el);
    });

    byParent.forEach((group) => {
      group.forEach((el, index) => {
        if (!reducedMotion && index > 0) {
          el.style.transitionDelay = `${index * STAGGER_MS}ms`;
        }
      });
    });

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
