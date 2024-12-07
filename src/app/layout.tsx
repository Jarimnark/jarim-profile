import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { APP_CONFIG } from "./config/app-config";

// const cormorantGaramond = Cormorant_Garamond({
//     subsets: ["latin"],
//     variable: "--font-cormorant-garamond",
//     weight: ["400", "500", "700"],
// });

// const cordiaNew = localFont({
//     variable: "--font-cordia-new",
//     src: [
//         {
//             path: "./fonts/cordia-new.ttf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "./fonts/cordia-new-bold.ttf",
//             weight: "700",
//             style: "normal",
//         },
//     ],
// });

export const metadata: Metadata = {
    title: APP_CONFIG.title,
    description: APP_CONFIG.description,
    metadataBase: new URL(APP_CONFIG.siteURL),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <body
                className={`${cordiaNew.variable} ${cormorantGaramond.variable} font-serif antialiased`}
            >
                {children}
            </body> */}
            <body>{children}</body>
        </html>
    );
}
