import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pakistanify | Find Best only Pakistan Made Products",
  description:
    "Discover the ultimate online shopping experience tailored for Lahore, Pakistan, with Pakistanify. Explore an amazing bunch of products, including daily essentials like Snacks, Cold Drinks, and Grocery items, to exquisite Home Decor and Accessories, all proudly made in Pakistan. Enjoy unbeatable discounts on every purchase and the convenience of cash on delivery (COD), ensuring your favorite items reach your doorstep with ease. Pakistanify offers exclusive deals and remarkable offers that are unparalleled. Dive into the ultimate ecommerce experience and discover the best of Pakistani craftsmanship, exclusively at Pakistanify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="version" content="1.0.6" />
        <link
          rel="icon"
          type="image/png"
          href="/icon.png"
          sizes="any"
        ></link>
        <title>Pakistanify | Find Only Pakistan Made Products</title>
        <meta
          content="Discover the ultimate online shopping experience tailored for Lahore, Pakistan, with Pakistanify. Explore an amazing bunch of products, including daily essentials like Snacks, Cold Drinks, and Grocery items, to exquisite Home Decor and Accessories, all proudly made in Pakistan. Enjoy unbeatable discounts on every purchase and the convenience of cash on delivery (COD), ensuring your favorite items reach your doorstep with ease. Pakistanify offers exclusive deals and remarkable offers that are unparalleled. Dive into the ultimate ecommerce experience and discover the best of Pakistani craftsmanship, exclusively at Pakistanify."
          name="description"
        />
        <meta
          content="Pakistanify | Find Only Pakistan Made Products"
          property="og:title"
        />
        <meta
          content="Discover the ultimate online shopping experience tailored for Lahore, Pakistan, with Pakistanify. Explore an amazing bunch of products, including daily essentials like Snacks, Cold Drinks, and Grocery items, to exquisite Home Decor and Accessories, all proudly made in Pakistan. Enjoy unbeatable discounts on every purchase and the convenience of cash on delivery (COD), ensuring your favorite items reach your doorstep with ease. Pakistanify offers exclusive deals and remarkable offers that are unparalleled. Dive into the ultimate ecommerce experience and discover the best of Pakistani craftsmanship, exclusively at Pakistanify."
          property="og:description"
        />
        <meta content="/public/icon.png" property="og:image" />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
