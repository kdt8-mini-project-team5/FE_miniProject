import MswComponent from '@/components/MSWComponent';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MswComponent>{children}</MswComponent>
      </body>
    </html>
  );
}
