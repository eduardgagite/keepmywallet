import { WalletMark } from './icons.jsx';

const COLUMNS = [
  { title: 'Product', links: [['Features', '#features'], ['Pricing', '#pricing'], ['Download', '#download']] },
  { title: 'Company', links: [['About', '#'], ['Careers', '#'], ['Blog', '#']] },
  { title: 'Legal', links: [['Privacy', '#'], ['Terms', '#'], ['Security', '#']] },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top">
            <span className="brand__mark"><WalletMark /></span>
            <span className="brand__name">KeepMyWallet</span>
          </a>
          <p>Smart money, fully in your control.</p>
        </div>
        {COLUMNS.map((col) => (
          <nav className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
        ))}
      </div>
      <div className="container footer__bottom">
        <p>© {year} KeepMyWallet. All rights reserved.</p>
        <div className="footer__social">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  );
}
