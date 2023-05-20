import "./styles/globals.css";

/**
 * @author    : gogleset, Jaenk
 * @description : Homepage 레이아웃
 **/
import Header from "./components/Header/Header";
import { Providers } from "./providers";

export const metadata = {
  title: "uniToki",
  description: "searching our friends",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div id="modal-root" />
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
