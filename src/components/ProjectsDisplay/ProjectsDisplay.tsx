interface IProjectsDisplay {
    isMobile: boolean;
}


export function ProjectsDisplay({isMobile}: IProjectsDisplay) {
    return (
        <div className={`flex w-11/12 bg-blue-500 gap-2 p-2 h-full ${isMobile ? "flex-col" : ""}`}>
            <div className="flex-1 bg-white">

            </div>

            <div className="flex-1 bg-black">

            </div>
      </div>
    )
}