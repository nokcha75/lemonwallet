'use client';

import dynamic from 'next/dynamic';
import Send from '@/components/layout/send/send';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function SendPage() {
  return (
    <>
      <Header />
      <Main>
        <Send pageName="Send" pageUrl="send" />
      </Main>
      <Footer />
    </>
  )
}