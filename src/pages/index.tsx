// This file is no longer needed because we've set routeBasePath to '/'
// which makes the docs the root of the site
import {Redirect} from '@docusaurus/router';
import type {ReactNode} from 'react';

export default function Home(): ReactNode {
  return <Redirect to="/intro" />;
}
