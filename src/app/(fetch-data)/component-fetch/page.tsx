import ComponentFetch1 from '../../components/component-fetch-test/page';
import ComponentFetch2 from '@/app/suspense-api/suspense-api-test/page';
import { Suspense } from 'react';
import './suspenseStyle.css';
import Link from 'next/link';

const testingComponentFetch = async () => {

  return (
    <>
      <h1>/testingComponentFetch</h1>

      {/* @ts-expect-error Async Server Component */}
      <ComponentFetch1 />

      <Suspense fallback={<div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>} >
      {/* @ts-expect-error Async Server Component */}
      <ComponentFetch2 />
      </Suspense>
      <Link href="/"> home </Link>
    </>
  );
};

export default testingComponentFetch;
