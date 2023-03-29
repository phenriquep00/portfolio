import "./crawl-text.css";

export function CrawlText() {
  return (
    <>
      <div className="flex flex-col -mt-8 pb-8 gap-2 flex-1  py-6" id="crawl-container">
        <div id="crawl">
          <h1 className="text-4xl text-center font-bold text-brand">
            Hello there! My name is Pedro Henrique
          </h1>
          <br />
          <h2 className="text-2xl text-center font-semibold text-brand">
            I am a technology enthusiast, student of TI, and currently focused
            on learning web development and data analysis.
          </h2>
        </div>
      </div>
    </>
  );
}
