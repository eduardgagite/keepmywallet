import Reveal from './Reveal.jsx';

const QUOTES = [
  { av: 'M', text: 'I finally see my whole financial life in one place. I saved enough for a deposit in eight months.', name: 'Mara L.', role: 'Designer, Berlin' },
  { av: 'J', text: 'The budgets actually adapt to real life. KeepMyWallet feels like a calm, smart friend for money.', name: 'Jordan P.', role: 'Engineer, Toronto' },
  { av: 'S', text: "Clean, fast and private. No ads, no creepy tracking. It's the only finance app that respects me.", name: 'Sofia R.', role: 'Founder, Lisbon' },
];

export default function Testimonials() {
  return (
    <section className="section container">
      <Reveal className="section__head">
        <span className="eyebrow">Loved by savers</span>
        <h2>People sleep easier with<br />a wallet they trust.</h2>
      </Reveal>
      <div className="quotes">
        {QUOTES.map((q, i) => (
          <Reveal as="figure" className="quote" key={q.name} delay={`${i * 0.08}s`}>
            <p>"{q.text}"</p>
            <figcaption>
              <span className="quote__av">{q.av}</span>
              <div><b>{q.name}</b><i>{q.role}</i></div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
