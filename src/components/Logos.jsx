const LOGOS = ['FINOVA', 'NorthBank', 'Paywise', 'Lumen', 'Vaulta', 'SubO'];

export default function Logos() {
  return (
    <section className="logos container">
      <p className="logos__label">Trusted by teams and savers worldwide</p>
      <div className="logos__row">
        {LOGOS.map((name) => <span key={name}>{name}</span>)}
      </div>
    </section>
  );
}
