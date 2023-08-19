import { useState } from "react";

export const useGetSignInInfo = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSignInModalOpen, setIsSignInModalOpen] = useState<boolean>();

  const handleSetLogin = (value: string) => {
    setLogin(value);
  };

  const handleSetPassword = (value: string) => {
    setPassword(value);
  };

  const openModalSignIn = () => {
    setIsSignInModalOpen(true);
  };

  const onClose = () => {
    setIsSignInModalOpen(false);
  };

  const onSubmit = () => {
    console.log(`Login: ${login}, Password: ${password}`);
    setLogin("");
    setPassword("");
    setIsSignInModalOpen(false);
  };

  return {
    login,
    password,
    isSignInModalOpen,
    handleSetLogin,
    handleSetPassword,
    openModalSignIn,
    onClose,
    onSubmit,
  };
};
