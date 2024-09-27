import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/(assets)/styles/Trainingpics.css";
import React, { Suspense } from "react";
import LoaderLayout from "./(assets)/pages/LoaderLayout";
import Toast from "./Toast";
const Main = React.lazy(() => import("./Main"));

export const metadata = {
  title: "Yousaf Munawar Trainings",
  description: "mental health coach, life coach, nlp coach",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5QG265VN');
              `,
          }}
        />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2096379097381299');
                fbq('track', 'PageView');
              `,
          }}
        />
        {/* Facebook Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2096379097381299&ev=PageView&noscript=1"
          />
        </noscript>
        {/* Google Tag Manager noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QG265VN" height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
          }}
        />
        {/* Add your other <link> tags here */}
      </head>
      <body>
        <html lang="en">
          <body>
            <Suspense fallback={<LoaderLayout />}>
              <Main children={children} />
            </Suspense>
            <Toast />
          </body>
        </html>
      </body>
    </html>
  );
}
