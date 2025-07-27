import PDFResume from '../../pdfresume.js';
import { PDFViewer } from '@react-pdf/renderer';

export default function ResumePDFViewer() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <PDFResume />
    </PDFViewer>
  );
}