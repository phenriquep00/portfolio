import { useEffect, useState } from "react";
import "./crawl-text.css";

export function CrawlText() {
  //TODO: make the fade div smoother

  const [startCrawl, setStartCrawl] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setStartCrawl(true);
    }, 10000);
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
          <section className="flex justify-center h-[800px] text-brand text-[500%] font-semibold tracking-[6px] leading-[150%] text-center crawl-section">
            <div className="crawl">
              <div className="title">
                <p>phenriquep00</p>
                <h1>hello there</h1>
              </div>
              <p>
                Hi and Welcome to my portfolio! <br /> I am Pedro Henrique,
                Software Student with focus on web development and data
                analisys. <br />
                Here you will find information about the projects i have been
                working on
                <br />
                And ways to contact me, in case you want to, you know, contact
                me. <br />
                Fell free to send any feedback on the email form in the Contact
                section.
                <br />
                May the force be with you!
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
