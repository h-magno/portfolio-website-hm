import { Suspense } from 'react';import ComponentFetch2 from './suspense-api-test/page';
import './suspenseStyle.css';

const suspenseAPI = async () => {
  return (
    <>
      <h1>Suspense API + Loading.tsx</h1>
      <Suspense
        fallback={
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        }
      >
        {/* @ts-expect-error Async Server Component */}
        <ComponentFetch2 />
      </Suspense>
    </>
  );
};

export default suspenseAPI;
