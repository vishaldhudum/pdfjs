import React from "react";

function App() {
  let viewerRef = React.useRef(null)

  React.useEffect(() => {
    renderIframe();
  }, []);

  function renderIframe() {
    const element = viewerRef.current;
    const iframe = document.createElement('iframe');

    iframe.src = `/pdfjs/web/viewer.html?file=/sample1.pdf#pagemode=thumbs`; // version 2.5.207

    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 0;
    element.appendChild(iframe);
  }

  return (
    <div className="App">
      <div ref={viewerRef} id='viewer' style={{height: '100vh'}}/>
    </div>
  );
}

export default App;
