import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReactLoading from "react-loading";
import { FormDialog } from "./FormDialog";
import { Button } from "../Button/Button";

interface IEmailForm {
  mobile: boolean;
  toggle: (action: boolean) => void;
}

export function EmailForm({ mobile, toggle }: IEmailForm) {
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

            name.current.value = "";
            email.current.value = "";
            message.current.value = "";
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
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`flex  ${
          mobile
            ? "min-w-full w-full self-center justify-self-center p-3"
            : "flex-1 px-3"
        }flex bg-black bg-opacity-50 items-center flex-col rounded-md border border-blue-500`}
      >
        <h1 className={`text-white ${mobile ? "text-2xl" : ""} text-3xl py-4 font-semibold`}>
          Send me a email!
        </h1>

        <div className="flex flex-col mb-4 flex-1 items-center justify-between">
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
          <div className="flex items-center gap-1 sm:gap-4">
            <label className="font-semibold " htmlFor="email">
              email:
            </label>
            <input
              className={`${mobile ? "w-[40vw]" : " w-[25vw]"} bg-white/40 rounded-lg h-8`}
              type="text"
              name="from_email"
              id=""
              ref={email}
            />
          </div>

          <div className="flex items-center gap-1 sm:gap-4">
            <label className="" htmlFor="name">
              name:
            </label>
            <input
              className={`${mobile ? "w-[40vw]" : " w-[25vw]"} bg-white/40 rounded-lg h-8`}
              type="text"
              name="from_name"
              id=""
              ref={name}
            />
          </div>

          <div className="flex items-center gap-1 sm:gap-4">
            <label className="font-semibold " htmlFor="content">
              content:
            </label>
            <textarea
              className={`${mobile ? "w-[37vw]" : " w-[25vw]"} bg-white/40 rounded-lg` }
              name="message"
              id=""
              ref={message}
            ></textarea>
          </div>

          <button className="" onSubmit={sendEmail}>
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
      {mobile && (
        <button
          className=""
          onClick={() => {
            toggle(false);
          }}
        >
          check social media
        </button>
      )}
    </>
  );
}
