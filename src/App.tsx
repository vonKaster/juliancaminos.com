import { Download } from "lucide-react";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./App.css";
import { Button } from "./components/ui/button";
import logo from "./logo.svg";


function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const downloadCV = () => {
    // Lógica para descargar el archivo
    const archivoURL = 'http://localhost:3000/cv.pdf'; // Reemplaza con la URL de tu archivo
    const link = document.createElement('a');
    link.href = archivoURL;
    link.download = 'Julian Caminos - CV'; // Nombre que quieres para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div style={{width: '100%', backgroundColor: 'white', height: '40px'}}>
    <a href="http://localhost:3000/cv.pdf" download="Julian Caminos - CV">

    <Button style={{marginRight: '20px'}} variant='ghost'>
          <Download className="mr-2 h-4 w-4" /> Descargar
        </Button>
        </a>
    </div>
    <div
      style={{
        height: "calc(100vh - 40px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00314D",
      }}
      className="App"
    >
      
      <div style={{ border: "4px solid white" }}>
        <Document renderMode="canvas" file="http://localhost:3000/cv.pdf">
          <Page scale={0.8} pageNumber={1} />
        </Document>
      </div>
    </div>
    </>
  );
}

export default App;
