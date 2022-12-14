import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReactLoading from "react-loading";

export function EmailForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<any>();

  const sendEmail = async (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    setLoading(true); // start loading animation

    await emailjs
      .sendForm(
        "service_c2fxhlk",
        "template_paiti5i",
        form.current,
        "AYGggYitvOW8ZfO-o"
      )
      .then(
        (result) => {
          // show the user a success message
          alert("email successfuly sent, thanks!");
        },
        (error) => {
          // show the user an error
          alert("there was a problem sending your email, please try again");
        }
      )

    setLoading(false); // finish loading animation
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-1 flex-col items-center justify-center border-2 border-[#1B7DEB] bg-black rounded bg-opacity-70  h-full"
    >
      <h1 className="text-white py-8 text-3xl font-black">Send me a email!</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="email">
            email:
          </label>
          <input
            className="w-[25vw] h-10 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            type="text"
            name="from_email"
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
            name="from_name"
            id=""
          />
        </div>

        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="content">
            content:
          </label>
          <textarea
            className="w-[25vw] h-20 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            name="message"
            id=""
          ></textarea>
        </div>

        <button
          className="flex items-center justify-center border-2 border-[#feda4a] font-semibold text-xl h-14 w-20 self-center rounded text-[#feda4a]"
          onSubmit={sendEmail}
        >
          {loading === true ? (
            <ReactLoading
              type={"bars"}
              color={"#feda4a"}
              height={40}
              width={40}
            />
          ) : (
            "send"
          )}
        </button>
      </div>
    </form>
  );
}
