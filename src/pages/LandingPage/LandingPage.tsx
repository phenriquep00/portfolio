import { ArrowClockwise, FastForward } from "phosphor-react";
import { forwardRef, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { CrawlText } from "../../components/CrawlText/CrawlText";
import { IPage, Ref } from "../Projects/Projects";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";

export const LandingPage = forwardRef<Ref, IPage>((props, ref) => {
  const [showCrawl, setShowCrawl] = useState<boolean>(true);
  // set this to true when finished homeinfo component
  const [showHomeInfo, setShowHomeInfo] = useState<boolean>(false);

  // uncomment this after finished the home info component
  /* useEffect(() => {
    setTimeout(() => {
      setShowCrawl(false);
      setShowHomeInfo(true);
    }, 26000);
  }, [showCrawl]); */

  const handleRestartAnimation = () => {
    setShowCrawl(true);
    /* setShowHomeInfo(false); */
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[90vh] ">
      <div className="flex w-full h-[90%] overflow-hidden">
        {showCrawl ? <CrawlText /> : null}
        {showHomeInfo ? <HomeInfo /> : null}
      </div>
      <div className="flex flex-row items-center gap-20 justify-center w-full h-[10%] ">
        {/* TODO: fix restart animation desapearing in the middle of the process */}
        {/* <Button type="p" onClick={handleRestartAnimation} >
          <div
            className="w-full h-full flex gap-2 items-center justify-center group"
            title="restart animation"
          >
            <div className="group-hover:animate-spin">
              <ArrowClockwise size={24} weight="bold" />
            </div>
             Restart
          </div>
        </Button> */}

        {/* <Button type="p" onClick={ // create this logic to skip the crawl animation }}>
          <div
            className="w-full h-full flex gap-2 items-center justify-center group"
            title="restart animation"
          >
            <div className="group-hover:animate-pulse">
              <FastForward size={24} weight="bold" />
            </div>
             Skip
          </div>
        </Button> */}
      </div>
    </div>
  );
});
