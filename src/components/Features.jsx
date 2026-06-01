import Reveal from './Reveal.jsx';
import { Icon } from './icons.jsx';

const FEATURES = [
  { icon: 'tracking', title: 'Live expense tracking', text: 'Auto-categorize transactions the moment they happen and see exactly where every dollar goes.' },
  { icon: 'budgets', title: 'Smart budgets', text: 'Set flexible budgets that adapt to your habits and nudge you before you overspend.' },
  { icon: 'goals', title: 'Savings goals', text: 'Turn dreams into plans with goal tracking, auto-rules and progress you can actually feel.' },
  { icon: 'alerts', title: 'Insightful alerts', text: 'Gentle, timely notifications for bills, unusual spend and milestones — never noise.' },
  { icon: 'sync', title: 'Real-time sync', text: 'Your wallet stays identical across phone, tablet and web, updated the instant anything changes.' },
  { icon: 'privacy', title: 'Private by design', text: 'End-to-end encryption and zero data selling. Your finances belong to you — and only you.' },
];

export default function Features() {
  return (
    <section className="section container" id="features">
      <Reveal className="section__head">
        <span className="eyebrow">Features</span>
        <h2>Everything your money needs,<br />nothing it doesn't.</h2>
        <p>One clean workspace for tracking, planning and growing — designed to feel effortless every single day.</p>
      </Reveal>

      <div className="features">
        {FEATURES.map((f, i) => (
          <Reveal as="article" className="card" key={f.title} delay={`${i * 0.05}s`}>
            <div className="card__ic"><Icon name={f.icon} size={24} /></div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
