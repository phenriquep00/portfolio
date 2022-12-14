import { CheckCircle, Warning, X } from "phosphor-react";

interface IFormDialog {
  type: "success" | "warning";
  message: string;
  visible: boolean;
  close: () => void;
}

export function FormDialog({ type, message, visible, close }: IFormDialog) {
  return (
    <div
      className={`flex flex-row gap-2 items-center justify-between border-2 px-2 py-1 w-full rounded 
        ${
          type === "success"
            ? "bg-blue-400 border-blue-600"
            : "bg-red-400  border-red-600"
        }
        ${visible ? "" : "invisible"}
    `}
    >
      <div className="flex">
        {type === "success" ? (
          <CheckCircle size={24} color="white" weight="regular" />
        ) : (
          <Warning size={24} color="white" weight="regular" />
        )}
        <p className="ml-2">{message}</p>
      </div>

      <button type="button" onClick={close} className="justify-self-end">
        <X size={16} color="#fff" />
      </button>
    </div>
  );
}
