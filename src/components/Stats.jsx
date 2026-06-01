import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';

const STATS = [
  { value: 120, suffix: 'K+ active users' },
  { value: 4.9, suffix: 'App Store rating' },
  { value: 38, suffix: '% avg. more saved' },
  { value: 190, suffix: '+ countries' },
];

function Counter({ value }) {
  const decimals = String(value).split('.')[1]?.length || 0;
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        let start;
        const step = (ts) => {
          if (start === undefined) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((value * eased).toFixed(decimals));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, decimals]);

  return <b ref={ref}>{display}</b>;
}

export default function Stats() {
  return (
    <section className="container">
      <Reveal className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.suffix}>
            <Counter value={s.value} />
            <span>{s.suffix}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
