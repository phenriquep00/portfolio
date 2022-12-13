import { useEffect, useState } from "react";
import "./crawl-text.css";

export function CrawlText() {
  //TODO: make the fade div smoother

  const [startCrawl, setStartCrawl] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setStartCrawl(true);
    }, 7000);
  });

  return (
    <>
      {!startCrawl ? (
        <div className="flex z-20 flex-col flex-1 max-h-auto max-w-auto fixed top-1/2 left-1/2 w-auto h-auto translate-x-[-50%] translate-y-[-50%]">
          <div className="animate-prelude text-[#1B7DEB] text-3xl">
            <p>A long time ago in a galaxy far,</p>
            <p>far away...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute w-full min-h-[60vh] -top-6 z-[1] bg-gradient-to-b from-black via-black animate-fadein"></div>
          <section className="flex justify-center h-[800px] text-[#feda4a] text-[500%] font-semibold tracking-[6px] leading-[150%] text-center crawl-section">
            <div className="crawl">
              <div className="title">
                <p>phenriquep00</p>
                <h1>hello there</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur sit mollitia quam vero, iusto, incidunt dolore ad
                blanditiis nam excepturi atque nesciunt voluptatibus
                exercitationem impedit suscipit necessitatibus saepe laborum
                maxime.
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
