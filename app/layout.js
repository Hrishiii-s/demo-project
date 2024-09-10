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
import Script from 'next/script'


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
    return (
        <>
            <Head>
                <Script
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBG2XGX4');`
                    }}
                />
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            </Head>
            <html lang="en">
                {/* <GoogleTagManager gtmId="GTM-TBG2XGX4" /> */}
                {console.log("GTM Working")}
                <body className={`${inter.variable} ${outfit.variable}`}>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TBG2XGX4"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    {children}</body>
            </html>
        </>

    )
}