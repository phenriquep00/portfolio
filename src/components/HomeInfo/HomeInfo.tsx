import tatooine from "/tatooine.png";

import { logos } from "../../utils/logos";

export function HomeInfo() {
  return (
    <>
      <div className="bg-[#c19c78] bg-cover w-[70%] h-[90%] z-50 rounded -ml-[2%] animate-homeIntro self-center justify-self-center">
        <img
          src={tatooine}
          className="w-full h-full animate-fadein duration-100 rounded"
          alt=""
        />

        <div className="ml-10 flex flex-col absolute top-0 w-full">
          <div className="ml-6 border-l-2 animate-prelude border-black pl-2 flex flex-col items-center justify-center text-left sm:text-base text-sm md:text-base lg:text-lg xl:text-xl  text-black font-semibold xl:w-2/5 w-3/5 h-1/2 mt-16">
            <p>
              Welcome to my portfolio! I'm thrilled that you've stopped by to
              learn more about my skills and experience as a developer.
            </p>

            <p>
              You&#8216;ll find examples of my work in the Projects section,
              including web applications, software projects, and other
              programming endeavors.
            </p>

            <p>
              Whether you're a recruiter, potential collaborator, or simply
              someone with a passion for technology, I hope that my portfolio
              will give you a sense of my abilities and potential.
            </p>

            <p>
              Thank you for taking the time to visit, and please feel free to
              reach out to me with any questions or comments in the Contacts
              section. I look forward to connecting with you!
            </p>
          </div>

          <div className="flex fixed bottom-[15%] w-[65%] justify-evenly items-center animate-fadein duration-150 h-[100px]">
            {logos.map((logo, index) => (
              <img
                src={logo}
                alt="tech logo"
                className="w-12 h-12" 
                key={`${logo}+${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
