import Reveal from './Reveal.jsx';
import { PlayIcon, Icon } from './icons.jsx';

const AVATARS = [
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
];

const TRANSACTIONS = [
  { icon: 'groceries', tone: 'g', title: 'Whole Foods', meta: 'Groceries · Today', amount: '-$64.20' },
  { icon: 'salary', tone: 'b', title: 'Salary', meta: 'Income · Yesterday', amount: '+$4,200', income: true },
  { icon: 'subscription', tone: 'p', title: 'Netflix', meta: 'Subscriptions · Mon', amount: '-$15.99' },
];

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <Reveal className="hero__copy">
        <span className="pill"><span className="pill__dot" /> New · Real-time sync across devices</span>
        <h1 className="hero__title">Smart money,<br />fully in <span className="grad-text">your control</span>.</h1>
        <p className="hero__sub">KeepMyWallet brings every account, budget and goal into one private dashboard — so you always know where your money goes, and where it's headed.</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#download">Start for free</a>
          <a className="btn btn--ghost" href="#how"><PlayIcon /> See how it works</a>
        </div>
        <div className="hero__trust">
          <div className="avatars">
            {AVATARS.map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" width="34" height="34" />
            ))}
          </div>
          <p><strong>120,000+</strong> people keep their wallet with us</p>
        </div>
      </Reveal>

      <Reveal className="hero__visual" delay=".15s">
        <div className="phone">
          <div className="phone__notch" />
          <div className="phone__screen">
            <div className="app">
              <div className="app__top">
                <div>
                  <p className="app__hello">Good evening, Alex</p>
                  <p className="app__balance">$12,480<span>.50</span></p>
                  <p className="app__delta">▲ 4.2% this month</p>
                </div>
                <div className="app__ring" style={{ '--p': 68 }}><span>68%</span></div>
              </div>

              <div className="app__chart">
                <svg viewBox="0 0 320 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(124,92,255,.45)" />
                      <stop offset="100%" stopColor="rgba(124,92,255,0)" />
                    </linearGradient>
                  </defs>
                  <path className="chart__area" d="M0,90 C40,70 60,40 100,55 C140,70 160,30 200,40 C240,50 270,20 320,30 L320,120 L0,120 Z" fill="url(#line)" />
                  <path className="chart__line" d="M0,90 C40,70 60,40 100,55 C140,70 160,30 200,40 C240,50 270,20 320,30" fill="none" stroke="#7c5cff" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="app__list">
                {TRANSACTIONS.map((t) => (
                  <div className="tx" key={t.title}>
                    <span className={`tx__ic tx__ic--${t.tone}`}><Icon name={t.icon} size={18} /></span>
                    <div className="tx__meta"><b>{t.title}</b><i>{t.meta}</i></div>
                    <span className={`tx__amt${t.income ? ' tx__amt--in' : ''}`}>{t.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="float-card float-card--1">
          <span className="float-card__ic"><Icon name="lock" size={18} /></span>
          <div><b>Bank-grade</b><i>256-bit encryption</i></div>
        </div>
        <div className="float-card float-card--2">
          <span className="float-card__ic"><Icon name="flag" size={18} /></span>
          <div><b>Goal reached</b><i>Vacation fund · 100%</i></div>
        </div>
      </Reveal>
    </section>
  );
}
