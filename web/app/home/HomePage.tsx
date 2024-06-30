'use client';

import dynamic from 'next/dynamic';
import { useAccount, useBalance } from 'wagmi';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import NextLink from 'next/link';
import {box, box2} from '@/components/layout/style'

/**
 * HomePage
 * 
 */
export default function HomePage({ ethPrice }) {
  const account = useAccount();

  /* useBalance, used according to https://wagmi.sh/react/api/hooks/useBalance documentation */
  const { data } = useBalance({
    address: account.address,
    blockTag: 'latest', 
  });

  /* ETH balance formatted and forced format "x.xxxx" */
  const balance = data ? (Number(data.value) / Math.pow(10, data.decimals)).toFixed(4) : '0.0000';

  /* Coinbase Onramp URL, link to buy ETH */
  const url = `https://pay.coinbase.com/buy/select-asset?appId=705b8dd2-03e5-4014-b2cf-adbf8fabd266&addresses={"${account.address}":["base"]}&assets=["ETH"]`;

  /* Transactions URL for address*/
  const url2 = `https://basescan.org/address/${account.address}`

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col items-center px-8 py-16">
        <section style={box}>
        <div>
          <h1 className="text-2xl">
            <b>Balance</b>: 
          </h1>
          <h2 className="text-5xl">
            {balance} {data?.symbol}
          </h2>
          <b>Value</b>: ${(ethPrice * balance).toFixed(2)}
        </div>
        <br />
        <div>
        <li className="flex space-x-4">
          <NextLink
            href="/receive"
            passHref
            className="font-robotoMono text-center text-xl no-underline border border-yellow-300 rounded-full p-2 w-32 flex items-center justify-center hover:bg-gray-700"
            aria-label="lw"
          >
            Receive
          </NextLink>
          <NextLink
            href="/send"
            passHref
            className="font-robotoMono text-center text-xl no-underline border border-yellow-300 rounded-full p-2 w-32 flex items-center justify-center hover:bg-gray-700"
            aria-label="lw"
          >
            Send
          </NextLink>
        </li>
        <br />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-robotoMono text-center text-xl no-underline border border-yellow-300 rounded-full p-2 w-70 flex items-center justify-center hover:bg-gray-700"
            aria-label="lw"
          >
            Get funds with Coinbase
          </a>
        </div>
        </section>
        <br />
        <div style={box2}>
          <h3 className="text-lg">
            <a
              href={url2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg no-underline"
              aria-label="lw"
            >
            Transactions
            </a>
          </h3>
        </div>
      </main>
      <Footer />
    </>
  );
}
