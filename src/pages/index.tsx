import React, {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import type {ReactNode} from 'react';

export default function Home(): ReactNode {
  // This ensures the redirect works properly with the baseUrl configuration
  const introUrl = useBaseUrl('/intro');
  
  // Use both client-side redirect approaches for maximum compatibility
  useEffect(() => {
    // Navigate to the intro page immediately
    window.location.href = introUrl;
  }, [introUrl]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${introUrl}`} />
        <title>Redirecting to Age Better Documentation</title>
      </Head>
      <Redirect to={introUrl} />
    </>
  );
}
