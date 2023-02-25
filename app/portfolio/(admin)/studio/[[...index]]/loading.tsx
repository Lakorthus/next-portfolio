'use client';

import { NextStudioLoading } from 'next-sanity/studio/loading';
import config from '../../../../../blog/sanity.config';

export default function Loading() {
  return <NextStudioLoading config={config} />;
}
