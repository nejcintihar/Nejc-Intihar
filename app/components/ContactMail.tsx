"use client";

import { MailSVG } from "./svgs";

const ContactMail = () => {
  const email = "nejc.inti21@gmail.com";
  const subject = "Hello from my website!";
  const body = "Hi there, \n\n I found your website and wanted to say hello!";

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleClick} className="px-2 text-xl pt-1">
      <MailSVG />
    </button>
  );
};
export default ContactMail;
