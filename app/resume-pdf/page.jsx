"use client"
import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const ResumePDFViewerWithNoSSR = dynamicImport(
  () => import('@/components/resume/resume-pdf-viewer'),
  { ssr: false }
);

export default function PDFPage() {
  return <ResumePDFViewerWithNoSSR />;
}