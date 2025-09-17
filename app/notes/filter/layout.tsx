import '../../../app/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <html lang="uk" className={roboto.variable}>
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          <aside style={{ width: '300px', borderRight: '1px solid #ddd' }}>
            {sidebar}
          </aside>
          <main style={{ flex: 1, overflowY: 'auto' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
