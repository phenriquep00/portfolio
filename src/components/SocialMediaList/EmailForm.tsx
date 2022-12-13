import { Button } from "../Button/Button";

export function EmailForm() {
  const sendEmail = () => {};
  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-1 flex-col items-center justify-center border-2 border-[#1B7DEB] bg-black rounded bg-opacity-70  h-full"
    >
      <h1 className="text-white py-8 text-3xl font-black">
        Send me a email!
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="email">
            email:
          </label>
          <input
            className="w-[25vw] h-10 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            type="email"
            name="email"
            id=""
          />
        </div>

        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="name">
            name:
          </label>
          <input
            className="w-[25vw] h-10 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            type="text"
            name="name"
            id=""
          />
        </div>

        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="content">
            content:
          </label>
          <textarea
            className="w-[25vw] h-20 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            name="content"
            id=""
          ></textarea>
        </div>

        <button className="border-2 border-[#feda4a] font-semibold text-xl h-14 w-20 self-center rounded text-[#feda4a]" onSubmit={sendEmail}>
          send
        </button>
      </div>
    </form>
  );
}
