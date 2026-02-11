import './globals.css';
import { Inter } from 'next/font/google';
import ClientBanner from "./client-banner";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'N&K FinLab — FinTech M&A & Advisory',
  description: 'M&A, Equity Raising & Strategic Finance for FinTech and Digital Finance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-sans antialiased">

        

        {children}
        <ClientBanner />


        {/* Scroll animation script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                  }
                });
              }, { threshold: 0.15 });
              document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
            `,
          }}
        />
      </body>
    </html>
  );
}
