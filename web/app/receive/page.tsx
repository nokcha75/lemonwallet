'use client';

import dynamic from 'next/dynamic';
import Receive from '@/components/layout/receive/receive';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function ReceivePage() {
  return (
    <>
      <Header />
        <Main>
            <Receive pageName="Receive" pageUrl="receive" />
        </Main>
      <Footer />
    </>
  );
}