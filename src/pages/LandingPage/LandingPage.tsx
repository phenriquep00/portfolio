import { ArrowClockwise } from "phosphor-react";
import { forwardRef, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { CrawlText } from "../../components/CrawlText/CrawlText";
import { IPage, Ref } from "../Projects/Projects";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";

export const LandingPage = forwardRef<Ref, IPage>((props, ref) => {
  const [showCrawl, setShowCrawl] = useState<boolean>(true);

  /* useEffect(() => {
    setTimeout(() => {
      setShowCrawl(true);
    }, 1);
  }, [showCrawl]); */

  useEffect(() => {
    setTimeout(() => {
      setShowCrawl(false);
    }, 26000);
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-screen h-[90vh] ">
      <div className="flex w-full h-[90%] overflow-hidden">
        {showCrawl ? <CrawlText /> : null}
        <HomeInfo />
      </div>
      <div className="flex flex-row items-center gap-4 justify-around w-full h-[10%]">
        <Button
          type="p"
          onClick={() => {
            setShowCrawl(true);
          }}
        >
          <div
            className="w-full h-full hover:animate-spin"
            title="restart animation"
          >
            <ArrowClockwise size={24} weight="bold" />
          </div>
        </Button>
      </div>
    </div>
  );
})
