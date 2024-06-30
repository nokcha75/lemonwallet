import { generateMetadata } from '@/utils/generateMetadata';
import HomePage from './home/HomePage';
import axios from 'axios';
import React from 'react';

export const metadata = generateMetadata({
  title: 'Lemon wallet',
  description:
    'The easiest way to send or receive money',
  images: '',
  pathname: '',
});

/**
 * Axios to fetch ETH-USD price
 */
export async function fetchEthPrice() {
  const res = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/spot');
  const ethPrice = res.data.data.amount;
  return ethPrice;
}

/**
 * Server component, which imports the Home component (client component that has 'use client' in it)
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 * https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components
 */
export default async function Page() {
  const ethPrice = await fetchEthPrice();
  return <HomePage ethPrice={ethPrice}/>;
}