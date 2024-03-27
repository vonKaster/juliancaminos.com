import React from 'react';
import logo from './logo.svg';
import './App.css';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';



function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="App">
      <Document renderMode='canvas' file="http://localhost:3000/cv.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
  
}

export default App;
