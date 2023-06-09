// import 'antd/dist/antd.css'
'use client'

import { ThemeProvider } from '@mui/material';
import '../../styles/globals.scss'
import localFont from 'next/font/local'
import theme from '../theme';

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/ProximaNova-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ProximaNova-Semibold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/ProximaNova-Extrabld.woff2',
      weight: '800',
      style: 'bold',
    },
    {
      path: '../../public/fonts/ProximaNova-Black.woff2',
      weight: '900',
      style: 'bold',
    },
  ],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
        {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
