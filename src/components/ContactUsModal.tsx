import { CloseIcon } from "@src/icons/CloseIcon";

export interface ContactModalProps {
  email: string;
  isEmailError?: boolean;
  firstName: string;
  lastName: string;
  handleSetEmail: (value: string) => void;
  handleSetFirstName: (value: string) => void;
  handleSetLastName: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export const ContactUsModal = (props: ContactModalProps) => {
  return (
    <div>
      <div className="absolute z-40 top-0 w-full h-full bg-white opacity-60"></div>
      <div className="fixed z-50 w-[500px] right-0 left-0 top-0 bottom-0 m-auto h-[500px] bg-light-gray rounded-xl border border-light-gray-2 shadow-md">
        <div className="flex flex-col justify-center items-center p-10 gap-y-10 w-full">
          <div
            onClick={props.onClose}
            className="flex opacity-75 cursor-pointer hover:opacity-100 w-full justify-end items-end"
          >
            <CloseIcon />
          </div>
          <div className="w-full text-[16px] font-medium">
            <div>Email:</div>
            <input
              value={props.email}
              onChange={(e) => props.handleSetEmail(e.target.value)}
              className="outline-none w-full p-3 rounded-lg focus:border focus:border-light-green"
              placeholder="Enter your email"
            />
            {props.isEmailError && (
              <div className="text-red text-[10px]">Enter valid email</div>
            )}
          </div>
          <div className="flex gap-x-3 justify-between">
            <div className="flex flex-col">
              <div>First name:</div>
              <input
                value={props.firstName}
                onChange={(e) => props.handleSetFirstName(e.target.value)}
                className="outline-none w-full p-3 rounded-lg focus:border focus:border-light-green"
                placeholder="Enter you first name"
              />
            </div>
            <div className="flex flex-col">
              <div>Last name:</div>
              <input
                value={props.lastName}
                onChange={(e) => props.handleSetLastName(e.target.value)}
                className="outline-none w-full p-3 rounded-lg focus:border focus:border-light-green"
                placeholder="Enter you last name"
              />
            </div>
          </div>
          <div className="flex gap-x-3">
            <button
              onClick={props.onSubmit}
              className="btn bg-violet  text-white"
            >
              Submit
            </button>
            <button
              onClick={props.onClose}
              className="btn bg-light-gray border border-gray text-black"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
