import Reveal from './Reveal.jsx';

const PLANS = [
  {
    name: 'Free', price: '$0', per: '/forever',
    desc: 'Everything you need to take control of day-to-day money.',
    features: ['Unlimited transactions', '3 budgets & 2 goals', 'Manual + 1 linked account', 'Basic monthly insights'],
    cta: 'Get started', btn: 'btn--ghost',
  },
  {
    name: 'Pro', price: '$6', per: '/month', featured: true, badge: 'Most popular',
    desc: 'For people serious about budgets, goals and growth.',
    features: ['Everything in Free', 'Unlimited budgets & goals', 'Unlimited linked accounts', 'Advanced insights & forecasts', 'Smart alerts & auto-rules'],
    cta: 'Start free trial', btn: 'btn--primary',
  },
  {
    name: 'Family', price: '$10', per: '/month',
    desc: 'Shared clarity for up to five people you trust.',
    features: ['Everything in Pro', 'Up to 5 members', 'Shared budgets & goals', 'Household reports'],
    cta: 'Choose Family', btn: 'btn--ghost',
  },
];

export default function Pricing() {
  return (
    <section className="section container" id="pricing">
      <Reveal className="section__head">
        <span className="eyebrow">Pricing</span>
        <h2>Simple plans that pay for themselves.</h2>
        <p>Start free forever. Upgrade when you want deeper insight and automation.</p>
      </Reveal>

      <div className="plans">
        {PLANS.map((p, i) => (
          <Reveal as="article" className={`plan${p.featured ? ' plan--featured' : ''}`} key={p.name} delay={`${i * 0.08}s`}>
            {p.badge && <span className="plan__badge">{p.badge}</span>}
            <h3 className="plan__name">{p.name}</h3>
            <p className="plan__price"><b>{p.price}</b><span>{p.per}</span></p>
            <p className="plan__desc">{p.desc}</p>
            <ul className="plan__list">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a className={`btn ${p.btn} plan__btn`} href="#download">{p.cta}</a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
