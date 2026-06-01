import Reveal from './Reveal.jsx';

const STEPS = [
  { num: '01', title: 'Create your wallet', text: 'Sign up in seconds and set your currency, accounts and the goals that matter to you.' },
  { num: '02', title: 'Connect & categorize', text: 'Link accounts or add transactions manually — everything is sorted automatically.' },
  { num: '03', title: 'Watch it grow', text: 'Follow clear insights, hit your budgets and reach savings goals faster than ever.' },
];

export default function HowItWorks() {
  return (
    <section className="section container" id="how">
      <Reveal className="section__head">
        <span className="eyebrow">How it works</span>
        <h2>Up and running in three steps.</h2>
        <p>No spreadsheets, no friction. Connect once and let KeepMyWallet do the heavy lifting.</p>
      </Reveal>

      <div className="steps">
        {STEPS.map((s, i) => (
          <Reveal className="step" key={s.num} delay={`${i * 0.1}s`}>
            <span className="step__num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
