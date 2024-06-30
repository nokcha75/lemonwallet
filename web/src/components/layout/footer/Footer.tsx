'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { NavbarLink } from '@/components/layout/header/Navbar';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="flex flex-col justify-between gap-16 bg-boat-footer-dark-gray py-4">
        <div className="container mx-auto flex w-full flex-col justify-between gap-16 px-8 md:flex-row">
          <div className="flex flex-col justify-between">
            <div className="flex h-8 items-center justify-start gap-4">
              <NavbarLink href="https://github.com/nokcha75/lemonwallet" target="_blank">
                <GitHubLogoIcon
                  width="24"
                  height="24"
                  aria-label="build-onchain-apps Github respository"
                />
              </NavbarLink>
              <NavbarLink href="https://warpcast.com/nokcha" target="_blank">
                <img
                  src="/farcaster.png"
                  alt="Farcaster"
                  />
              </NavbarLink>
              <p className="text-base font-normal leading-7 text-boat-footer-light-gray">
                MIT License - {' '}
                <NextLink
                  href="https://github.com/coinbase/build-onchain-apps/blob/main/LICENSE.md"
                  className="underline"
                  target="_blank"
                >
                  LICENSE.md
                </NextLink>{' '}
                file for details
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
