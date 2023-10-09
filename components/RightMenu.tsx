import Link from "next/link";
import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const RightMenu = () => {
  return (
    <section className="right-menu">
      <h3>Links</h3>
      <Link href="https://www.linkedin.com/in/joseortizp/" target="blank">
        <FaLinkedin className="icon redes-icon" />
      </Link>

      <Link href="https://github.com/joseop" target="blank">
        <FaGithubSquare className="icon redes-icon" />
      </Link>

      <Link href="https://facebook.com" target="blank">
        <FaFacebookSquare className="icon redes-icon" />
      </Link>

      <Link href="https://instagram.com" target="blank">
        <FaInstagramSquare className="icon redes-icon" />
      </Link>

      <Link href="https://twitter.com" target="blank">
        <FaTwitterSquare className="icon redes-icon" />
      </Link>

      <Link href="https://youtube.com" target="blank">
        <FaYoutubeSquare className="icon redes-icon" />
      </Link>
    </section>
  );
};
export { RightMenu };
