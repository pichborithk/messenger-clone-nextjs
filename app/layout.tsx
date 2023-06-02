import { Inter } from 'next/font/google';

import './globals.css';
import ToasterContext from './context/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <ToasterContext />
      </body>
    </html>
  );
};

export default RootLayout;
