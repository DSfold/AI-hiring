import { useState } from "react";

export const useGetContactInfo = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isEmailError, setIsEmailError] = useState<boolean>();

  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSetEmail = (value: string) => {
    setEmail(value);
    validateEmail(value) ? setIsEmailError(false) : setIsEmailError(true);
  };

  const handleSetFirstName = (value: string) => {
    setFirstName(value);
  };

  const handleSetLastName = (value: string) => {
    setLastName(value);
  };

  const openModal = () => {
    setIsContactModalOpen(true);
  };

  const onClose = () => {
    setIsContactModalOpen(false);
  };

  const onSubmit = () => {
    console.log(
      `Email: ${email}, First Name: ${firstName}, Last Name: ${lastName}`
    );
    setEmail("");
    setFirstName("");
    setLastName("");
    setIsContactModalOpen(false);
  };

  return {
    email,
    isContactModalOpen,
    isEmailError,
    firstName,
    lastName,
    handleSetEmail,
    handleSetFirstName,
    handleSetLastName,
    openModal,
    onClose,
    onSubmit,
  };
};
