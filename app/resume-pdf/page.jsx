"use client"
import dynamic from 'next/dynamic';

const ResumePDFViewerWithNoSSR = dynamic(
  () => import('@/components/resume/resume-pdf-viewer'),
  { ssr: false }
);

export default function PDFPage() {
  return <ResumePDFViewerWithNoSSR />;
}