// ===== Brand & store marks =====
export function WalletMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <path d="M21 12a2 2 0 0 0-2-2h-4a2 2 0 0 0 0 4h4a2 2 0 0 0 2-2Z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M16.5 3c.1 1.2-.4 2.3-1.1 3.2-.8.9-2 1.6-3.1 1.5-.1-1.1.4-2.3 1.1-3.1.8-.9 2.1-1.5 3.1-1.6Zm3.4 14.2c-.5 1.2-.8 1.7-1.5 2.7-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-3.9-1-2 0-2.5 1-3.9 1-1.7 0-3-1.6-4-3.1C-.1 17 .3 11.9 3.1 10.3c1-.6 2-.9 3-.9 1.6 0 2.6 1 3.9 1 1.2 0 2-1 3.9-1 .9 0 2.7.1 4 1.7-3.5 1.9-2.9 6.9 1.9 6.1Z" />
    </svg>
  );
}

export function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M3.6 2.3 13 11.7l2.6-2.6L4.9 2.4a1.2 1.2 0 0 0-1.3-.1Zm-.8 1.2A1.2 1.2 0 0 0 2.5 4v16c0 .2 0 .3.1.5L11.7 12 2.8 3.5ZM17 10.4l-3 3 3 3 3.4-1.9c.9-.5.9-1.8 0-2.3L17 10.4ZM13 12.3 3.7 21.6c.4.2.9.1 1.2-.1L15.6 15 13 12.3Z" />
    </svg>
  );
}

// ===== Custom line-icon set (no unicode emoji) =====
const PATHS = {
  // Live expense tracking — activity pulse
  tracking: <path d="M3 12h3.5l2.5-7 4.5 14 2.5-7H21" />,
  // Smart budgets — pie chart
  budgets: (
    <>
      <path d="M21.2 15.9A10 10 0 1 1 8 2.8" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </>
  ),
  // Savings goals — target
  goals: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // Insightful alerts — bell
  alerts: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9" />
      <path d="M10.3 20a1.94 1.94 0 0 0 3.4 0" />
    </>
  ),
  // Real-time sync — circular arrows
  sync: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  // Private by design — shield with check
  privacy: (
    <>
      <path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  // Groceries — shopping bag
  groceries: (
    <>
      <path d="M6 2 3 6.5V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5L18 2z" />
      <path d="M3 6.5h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  // Salary — banknote
  salary: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  // Subscriptions — play in circle
  subscription: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5z" fill="currentColor" stroke="none" />
    </>
  ),
  // Encryption — padlock
  lock: (
    <>
      <rect x="3.5" y="11" width="17" height="10.5" rx="2.5" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />
    </>
  ),
  // Goal reached — flag
  flag: (
    <>
      <path d="M5 14s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M5 22V3" />
    </>
  ),
};

/** Renders a custom SVG glyph by name. */
export function Icon({ name, size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  );
}
