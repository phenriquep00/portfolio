import { CaretLeft } from "phosphor-react";

interface IProjectsList {
  isMobile: boolean;
}

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function ProjectsList({ isMobile }: IProjectsList) {
  return (
    <div className="flex w-1/12">
      {isMobile ? (
        <button className="bg-brand h-full rounded-l-full">
          <CaretLeft size={48} weight="fill" color={"#000000"} />
        </button>
      ) : (
        <ul className="h-full w-full flex flex-col justify-between items-end gap-2">
          {mockData.map((e, i) => (
            <li
              className="flex flex-1 w-full justify-center flex-grow text-black items-center rounded-l-full bg-brand hover:bg-opacity-50 transition-colors duration-300 ease-in-out"
              key={`${e}+${i}`}
            >
                <button className="w-full h-full">
                    {e}
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
