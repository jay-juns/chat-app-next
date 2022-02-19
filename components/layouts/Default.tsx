import React from 'react';
import Footer from "../footer/Footer";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Next Blog</title>
      </Head>
      <div className='app_wrapper'>
        <div>
          디펄트 레이아웃
        </div>
       {children}
       <Footer />
      </div>
    </>
  )
}

export default DefaultLayout;