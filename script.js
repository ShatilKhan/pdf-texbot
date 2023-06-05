// Fetch the PDF file
const url = '/pdfs/17.pdf';
const loadingTask = pdfjsLib.getDocument(url);

// Display the PDF
loadingTask.promise.then(function (pdf) {
  // Set up the viewer
  const container = document.getElementById('pdf-viewer');
  const viewer = new pdfjsLib.PDFViewer({ container });

  // Load the PDF document
  viewer.setDocument(pdf);

  // Prevent downloading the PDF
  viewer.viewer.classList.add('no-download'); // Add a custom CSS class to hide the download button

  // Optional: Disable text selection within the viewer
  viewer.viewer.classList.add('no-select'); // Add a custom CSS class to disable text selection

  // Start rendering the PDF
  viewer.pagesPromise.then(() => viewer.currentScaleValue = 'auto');
});
