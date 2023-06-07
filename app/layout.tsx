import { Inter } from 'next/font/google';

import './globals.css';
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
};

export default RootLayout;
