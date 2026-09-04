import "./globals.css";

export const metadata = {
  title: "Monikanto Kurmi",
  description:
    "Monikanto Kurmi — software engineer building products, backend systems, and AI-driven experiences.",
  authors: [{ name: "Monikanto Kurmi" }],
  openGraph: {
    type: "website",
    title: "Monikanto Kurmi",
    description:
      "Monikanto Kurmi — software engineer building products, backend systems, and AI-driven experiences.",
    siteName: "Monikanto Kurmi",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monikanto Kurmi",
    description:
      "Monikanto Kurmi — software engineer building products, backend systems, and AI-driven experiences.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-modern" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
