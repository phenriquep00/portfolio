import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReactLoading from "react-loading";
import { FormDialog } from "./FormDialog";

export function EmailForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSentDialog, setMessageSentDialog] = useState<boolean>(false);
  const [invalidDialog, setinvalidDialog] = useState<boolean>(false);
  const [sendEmailTrigger, setSendEmailTrigger] = useState<boolean>(false);
  const form = useRef<any>();
  const name = useRef<any>();
  const email = useRef<any>();
  const message = useRef<any>();

  const sendEmail = async (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setLoading(true); // start loading animation

    if (
      name.current.value === "" ||
      email.current.value === "" ||
      message.current.value === ""
    ) {
      // check if any field is empty
      setinvalidDialog(true);
      setLoading(false);
      setSendEmailTrigger(false);
    } else if (
      name.current.value !== "" ||
      email.current.value !== "" ||
      message.current.value !== ""
    ) {
      // send email
      setSendEmailTrigger(true);
    }

    if (sendEmailTrigger === true) {
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
            setMessageSentDialog(true); // enable message to user
            setinvalidDialog(false); // disable warning

            name.current.value = "" 
              email.current.value = "" 
              message.current.value = ""
            setSendEmailTrigger(false);
          },
          (error) => {
            // show the user an error
            alert("there was a problem sending your email, please try again");
          }
        );
    }

    setLoading(false); // finish loading animation
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-1 flex-col items-center justify-center border-2 border-[#1B7DEB] bg-black rounded bg-opacity-70  h-full"
    >
      <h1 className="text-white py-4 text-3xl font-black">Send me a email!</h1>

      <div className="flex flex-col gap-4">
        <FormDialog
          message="your email was sent, thank you!"
          type="success"
          visible={messageSentDialog}
          close={() => {
            setMessageSentDialog(false);
          }}
        />
        <FormDialog
          message="hey! some fields are empty"
          type="warning"
          visible={invalidDialog}
          close={() => {
            setinvalidDialog(false);
          }}
        />
        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="email">
            email:
          </label>
          <input
            className="w-[25vw] h-8 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            type="text"
            name="from_email"
            id=""
            ref={email}
          />
        </div>

        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="name">
            name:
          </label>
          <input
            className="w-[25vw] h-8 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            type="text"
            name="from_name"
            id=""
            ref={name}
          />
        </div>

        <div className="flex gap-3 items-center justify-between">
          <label className="font-semibold " htmlFor="content">
            content:
          </label>
          <textarea
            className="w-[25vw] h-12 bg-gray-700 bg-opacity-50 border-2 border-[#1B7DEB] rounded"
            name="message"
            id=""
            ref={message}
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
