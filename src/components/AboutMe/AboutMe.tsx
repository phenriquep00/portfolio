import { CrawlText } from "../CrawlText/CrawlText";

import r2d2 from '/r2d2.png';

export function AboutMe() {
  return (
    <div className="justify-between bg-gradient-to-b from-white/30 to-transparent border-2 border-brand flex flex-col w-[30%] h-[90%] rounded">
      <div className="flex items-center justify-center h-1/3">
        <img src="https://github.com/phenriquep00.png" className="w-1/2 rounded-full border-2 border-brand" alt="" />
      </div>
      <div className="flex flex-col gap-4 overflow-y-hidden">
        <CrawlText />
      <img src={r2d2} className="-mt-12 md:w-[80%] md:self-center" alt="r2d2" />
      </div>
      
    </div>
  );
}
