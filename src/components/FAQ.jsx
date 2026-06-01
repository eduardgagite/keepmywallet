import { useState } from 'react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  { q: 'Is my financial data safe?', a: 'Absolutely. We use 256-bit, bank-grade encryption in transit and at rest, and we never sell your data. You stay in full control and can export or delete everything at any time.' },
  { q: 'Which banks and accounts are supported?', a: "KeepMyWallet connects to thousands of banks across 190+ countries, and you can always add cash and manual accounts for anything that isn't linked." },
  { q: 'Can I use it for free?', a: 'Yes. The Free plan is genuinely free forever and covers everyday tracking and budgeting. Upgrade only when you want unlimited budgets, goals and advanced insights.' },
  { q: 'Does it work on all my devices?', a: 'It does. Your wallet syncs in real time across iOS, Android and the web, so you always pick up exactly where you left off.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section container" id="faq">
      <Reveal className="section__head">
        <span className="eyebrow">FAQ</span>
        <h2>Questions, answered.</h2>
      </Reveal>

      <div className="faq">
        {ITEMS.map((item, i) => {
          const open = openIndex === i;
          return (
            <Reveal className={`faq__item${open ? ' open' : ''}`} key={item.q} delay={`${i * 0.05}s`}>
              <button
                className="faq__q"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                {item.q}
                <span className="faq__icon" />
              </button>
              <div className="faq__a"><p>{item.a}</p></div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
