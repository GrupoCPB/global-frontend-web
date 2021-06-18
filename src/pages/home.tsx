import Head from 'next/head';
import React from 'react'
import Section1 from '../ui/components/Home/Section1/Section1';
import Section2 from '../ui/components/Home/Section2/Section2';
import Section3 from '../ui/components/Home/Section3/Section3';
import Section4 from '../ui/components/Home/Section4/Section4';
import Section5 from '../ui/components/Home/Section5/Section5';


function home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Global Org</title>
        <meta name="description" content="" />

        <meta name="theme-color" content="#11709e" />
        <link rel="apple-touch-startup-image" href="public/android-icon-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-750x1294.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-1242x2148.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-1536x2048.png" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-1668x2224.png" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="public/android-icon-2048x2732.png" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}

export default home;
