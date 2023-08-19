import { CloseIcon } from "@src/icons/CloseIcon";

export interface SignInModalProps {
  login: string;
  password: string;
  handleSetLogin: (value: string) => void;
  handleSetPassword: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export const SignInModal = (props: SignInModalProps) => {
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
            <div>Login:</div>
            <input
              value={props.login}
              onChange={(e) => props.handleSetLogin(e.target.value)}
              className="outline-none w-full p-3 rounded-lg focus:border focus:border-light-green"
              placeholder="Enter your Login"
            />
          </div>
          <div className="w-full flex flex-col">
            <div>Password:</div>
            <input
              value={props.password}
              type="password"
              onChange={(e) => props.handleSetPassword(e.target.value)}
              className="outline-none w-full p-3 rounded-lg focus:border focus:border-light-green"
              placeholder="Enter you password"
            />
          </div>
          <div className="flex gap-x-3">
            <button
              onClick={props.onSubmit}
              className="btn bg-green  text-white"
            >
              Sign in
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
