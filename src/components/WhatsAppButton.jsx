import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// 👇 Replace with the school's actual WhatsApp number (with country code, no +/spaces)
const WHATSAPP_NUMBER = '917597607080';
const DEFAULT_MESSAGE = 'Hello! I would like to know more about Virat Children Academy.';

export default function WhatsAppButton() {
    const [hovered, setHovered] = useState(false);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label="Chat on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '88px',
                right: '24px',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: '#fff',
                borderRadius: '50px',
                padding: hovered ? '12px 20px 12px 16px' : '14px',
                boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                overflow: 'hidden',
                maxWidth: hovered ? '220px' : '52px',
                whiteSpace: 'nowrap',
            }}
        >
            <FaWhatsapp size={26} style={{ flexShrink: 0 }} />
            <span
                style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    opacity: hovered ? 1 : 0,
                    maxWidth: hovered ? '160px' : '0',
                    transition: 'opacity 0.25s ease, max-width 0.3s ease',
                    overflow: 'hidden',
                }}
            >
                Chat with us
            </span>
        </a>
    );
}
