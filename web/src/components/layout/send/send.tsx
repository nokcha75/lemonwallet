import NextLink from 'next/link';
import InputBox from './input';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import {box, box2} from '@/components/layout/style'

type SendProps = {
    pageName: string;
    pageUrl: string;
  };

export default function Send({ pageName, pageUrl }: SendProps) {
  return (
    <>
      <section style={box}>
        <div className="absolute top-0 left-0 m-4">
          <NextLink href="/" passHref>
            <ChevronLeftIcon width={24} height={24} />
          </NextLink>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-start gap-2 md:gap-6 mr-12">
            <div className="inline-flex flex-col justify-start gap-2">
              <h2 className="font-inter text-2xl leading-normal">
                <b>Send transaction</b>:
              </h2>
              <div className="font-inter text-xl font-normal leading-normal">
                <InputBox />
              </div>
            </div>
          </div>
        </div>
      </section>  
      <div style={box2}>
        <h3 className="text-lg">
          Transactions
        </h3>
      </div>
    </>
  );
}