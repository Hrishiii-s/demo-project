import { Inter, Outfit } from 'next/font/google'
import "/public/assets/css/animate.min.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/flaticon.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/odometer.css"
import "/public/assets/css/swiper-bundle.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/default.css"
import "/public/assets/css/main.css"
import { GoogleTagManager } from '@next/third-parties/google'
import Head from 'next/head'


const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--tg-heading-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'EcesisTech',
}


export default function RootLayout({ children }) {

    useEffect(() => {
        // Function to load GTM
        const loadGTM = () => {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TBG2XGX4';
            script.async = true;
            document.body.appendChild(script);
        };

        // Load GTM after the window load event to ensure it doesn't block rendering
        window.addEventListener('load', loadGTM);

        return () => {
            window.removeEventListener('load', loadGTM);
        };
    }, []);
    return (
        <>
            <Head>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous"/>
            </Head>
            <html lang="en">
                {/* <GoogleTagManager gtmId="GTM-TBG2XGX4" /> */}
                {console.log("GTM Working")}
                <body className={`${inter.variable} ${outfit.variable}`}>
                    {children}</body>
            </html>
        </>

    )
}