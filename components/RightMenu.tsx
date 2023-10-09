import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const RightMenu = () => {
  return (
    <section className="right-menu">
      <h3 className="text-3xl">Links</h3>

      <Link href="https://www.linkedin.com/in/joseortizp/" target="blank">
        <div className="conteiner-icon">
          <FaLinkedinIn className="redes-icon" />
        </div>
      </Link>

      <Link href="https://github.com/joseop" target="blank">
        <div className="conteiner-icon">
          <FaGithub className="redes-icon" />
        </div>
      </Link>

      <Link href="https://facebook.com" target="blank">
        <div className="conteiner-icon">
          <FaFacebookF className=" redes-icon" />
        </div>
      </Link>

      <Link href="https://instagram.com" target="blank">
        <div className="conteiner-icon">
          <FaInstagram className=" redes-icon" />
        </div>
      </Link>

      <Link href="https://twitter.com" target="blank">
        <div className="conteiner-icon">
          <FaTwitter className=" redes-icon" />
        </div>
      </Link>

      <Link href="https://youtube.com" target="blank">
        <div className="conteiner-icon">
          <FaYoutube className=" redes-icon" />
        </div>
      </Link>
    </section>
  );
};
export { RightMenu };
