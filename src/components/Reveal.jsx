import { useEffect, useRef } from 'react';

/**
 * Fades + lifts its content into view on scroll, mirroring the `.reveal` CSS.
 * Renders as `as` (default <div>) so it can wrap cards, sections, figures, etc.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay, style, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mergedStyle = delay ? { ...style, '--delay': delay } : style;

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
