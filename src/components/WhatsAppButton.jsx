import { company } from '../data/content';
import './WhatsAppButton.css';

/**
 * Click-to-chat button.
 * Inactive until company.whatsapp is set in src/data/content.js
 * Example value: '2507XXXXXXXX' (country code, no + or spaces)
 */
function WhatsAppButton() {
  const ready = Boolean(company.whatsapp);

  if (ready) {
    return (
      <a
        className="whatsapp-fab"
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className="whatsapp-fab"
      disabled
      aria-disabled="true"
      title="Add a WhatsApp number in src/data/content.js to activate"
      aria-label="WhatsApp chat (inactive — add phone number to enable)"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </button>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.95.52 3.85 1.52 5.52L2 22l4.83-1.56a9.9 9.9 0 0 0 5.21 1.45h.01c5.46 0 9.89-4.4 9.89-9.82C21.94 6.4 17.5 2 12.04 2Zm5.63 13.85c-.24.67-1.4 1.23-1.93 1.31-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.88-1.25-4.76-4.15-4.9-4.34-.14-.2-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.36.24-.25.54-.32.72-.32h.52c.16 0 .39-.06.6.46.24.6.8 2.07.87 2.22.07.15.12.32.02.52-.1.2-.14.32-.28.49-.14.17-.3.38-.43.51-.14.14-.29.3-.12.58.16.29.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.28 1.4.29.14.46.12.63-.07.17-.2.72-.84.91-1.13.2-.29.39-.24.65-.14.27.1 1.7.8 2 .95.29.14.49.22.56.34.07.12.07.7-.17 1.37Z" />
    </svg>
  );
}

export default WhatsAppButton;
