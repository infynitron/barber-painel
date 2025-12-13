"use client";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Animação de pulsar */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping"></div>

      {/* Botão */}
      <a
        href="https://wa.me/5542999027693"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {/* Ícone WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-9 h-9"
        >
          <path d="M19.11 17.53c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.32-.26-.63-.52-.54-.71-.55-.18-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.44 5.47 4.82.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.75.26-1.39.18-1.51-.08-.13-.29-.21-.61-.37zM16.04 4C9.42 4 4.04 9.38 4.04 16c0 2.1.55 4.16 1.6 5.98L4 28l6.17-1.62c1.75.96 3.72 1.47 5.87 1.47 6.62 0 12-5.38 12-12S22.66 4 16.04 4z" />
        </svg>
      </a>
    </div>
  );
}
