import MswComponent from '@/components/MSWComponent';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MswComponent>{children}</MswComponent>
      </body>
    </html>
  );
}
