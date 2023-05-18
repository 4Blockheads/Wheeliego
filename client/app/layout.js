import './styles/globals.css';

import Footer from './components/Footer/Footer';
/**
 * @author    : gogleset
 * @description : Homepage 레이아웃
 **/
import Header from './components/Header/Header';

export const metadata = {
  title: 'uniToki',
  description: 'searching our friends',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
