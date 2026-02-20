import { Inter, Outfit } from "next/font/google";
import "/public/assets/css/animate.min.css";
import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/flaticon.css";
import "/public/assets/css/fontawesome-all.min.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/odometer.css";
import "/public/assets/css/swiper-bundle.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/default.css";
import "/public/assets/css/main.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});
const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
  display: "swap",
});

export const metadata = {
  title:
    "ECESIS | AI-Driven Digital Transformation & PropTech Solutions Company",
  description:
    "We are the leading provider of AI-driven digital transformation and PropTech solutions, empowering businesses to evolve, transform, and grow through cutting-edge technology and strategic expertise.",
};
export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-63R8LEM88V"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-63R8LEM88V');
        </script>
      </Head>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-TBG2XGX4" />
        <body className={`${inter.variable} ${outfit.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
