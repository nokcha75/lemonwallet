import clsx from 'clsx';
import NextLink from 'next/link';
import { Name } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { box, box2 } from '@/components/layout/style'

type ReceiveProps = {
  pageName: string;
  pageUrl: string;
};

export default function Receive({ pageName, pageUrl }: ReceiveProps) {
  const account = useAccount();
  const [copy, setCopy] = useState(true);
  const [copied, setCopied] = useState(false);

  const url2 = `https://basescan.org/address/${account.address}`

  /* Copy to clipboard function, based on docs from https://dev.to/darkmavis1980/the-navigator-clipboard-api-in-javascript-38gn */
  const copyAddress = () => {
    navigator.clipboard.writeText(account.address).then(
      () => {
        setCopied(true);
        setCopy(false);
        setTimeout(() => {
          setCopied(false);
          setCopy(true);
          },
          700)
      }
    );
  };
    
  return (
    <>
      <section style={box}>
        <div className="absolute top-0 left-0 m-4">
          <NextLink href="/" passHref>
            <ChevronLeftIcon width={24} height={24} />
          </NextLink>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start gap-2 md:gap-6  ml-8 sm:ml-20">
            <div className="inline-flex flex-col justify-start">
              <h2 className="text-2xl">
                <b>Receiving address</b>:
              </h2>
              <div className="text-5xl">
                <Name
                  address={account.address}
                  sliced={false}/>
              </div>
              <div className="text-sm max-w-[200px] sm:max-w-none break-words">
                {account.address}
              </div>
              <br />
              <button
                onClick={copyAddress}
                className="font-robotoMono text-center text-xl font-medium text-white no-underline border border-yellow-300 rounded-full p-2 w-32 flex items-center justify-center hover:bg-gray-700"
              >
                {copy ? 'Copy' : ''}
                {copied && "Copied!"}
              </button>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}