import { About } from "./blocks/About";
import { Benefits } from "./blocks/Benefits";
import { Header } from "./components/Header";
import { benefits } from "./assets/data/benefits";
import { Testimonials } from "./blocks/Testimonials";
import { testimonials } from "./assets/data/testimonials";
import { FAQ } from "./blocks/FAQ";
import { questions } from "./assets/data/questions";
import { Footer } from "./blocks/Footer";
import { links } from "./assets/data/links";
import { aboutCardData } from "./assets/data/aboutCardsData";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { HeroScreen } from "./blocks/HeroScreen";
import { ContactUsModal } from "./components/ContactUsModal";
import { useGetContactInfo } from "./hooks/useGetContactInfo";
import { useGetSignInInfo } from "./hooks/useGetSignInInfo";
import { SignInModal } from "./components/SignInModal";

function App() {
  const {
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
  } = useGetContactInfo();

  const {
    login,
    password,
    isSignInModalOpen,
    handleSetLogin,
    handleSetPassword,
    openModalSignIn,
    onClose: onCloseSignin,
    onSubmit: onSubmitSignIn,
  } = useGetSignInInfo();

  return (
    <>
      <div className="relative overflow-x-hidden">
        <Header openModalSignIn={openModalSignIn} openModal={openModal} />
        <HeroScreen />
        <About data={aboutCardData} />
        <Benefits data={benefits} />
        <Testimonials data={testimonials} />
        <FAQ data={questions} />
        <Footer data={links} />
        {isContactModalOpen && (
          <ContactUsModal
            email={email}
            firstName={firstName}
            lastName={lastName}
            isEmailError={isEmailError}
            handleSetEmail={handleSetEmail}
            handleSetFirstName={handleSetFirstName}
            handleSetLastName={handleSetLastName}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        )}
        {isSignInModalOpen && (
          <SignInModal
            login={login}
            password={password}
            onClose={onCloseSignin}
            onSubmit={onSubmitSignIn}
            handleSetLogin={handleSetLogin}
            handleSetPassword={handleSetPassword}
          />
        )}
        <ScrollTopButton />
      </div>
    </>
  );
}

export default App;
