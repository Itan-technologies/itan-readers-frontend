const PdfFlipbook = dynamic(() => import("@/components/PdfFlipbook"), {
  ssr: false, // disables SSR for this component
});

export default function HomePage() {
  const pdfExampleUrl = "/CYBERSECURITY.pdf"; // Place your PDF in the public folder

  return (
    <div>
      <h1>My Interactive PDF Flipbook</h1>
      <PdfFlipbook pdfUrl={pdfExampleUrl} />
    </div>
  );
}
