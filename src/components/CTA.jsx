import Reveal from './Reveal.jsx';
import { AppleIcon, GooglePlayIcon } from './icons.jsx';

export default function CTA() {
  return (
    <section className="container" id="download">
      <Reveal className="cta">
        <div className="cta__glow" aria-hidden="true" />
        <h2>Keep your wallet where it belongs — <span className="grad-text">with you.</span></h2>
        <p>Join 120,000+ people building healthier money habits. Free to start, no card required.</p>
        <div className="cta__actions">
          <a className="btn btn--light" href="#"><AppleIcon /> App Store</a>
          <a className="btn btn--light" href="#"><GooglePlayIcon /> Google Play</a>
        </div>
      </Reveal>
    </section>
  );
}
