import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'Send',
  description:
    'Send a transaction.',
  images: 'themes.png',
  pathname: 'send',
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return children;
}