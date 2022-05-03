import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);
  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={setNumPages(numPages)}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}