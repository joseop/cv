import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const MainProfile = () => {
  return (
    <header>
      <div className="information-main-profile">
        <h1>I´m Jose Ortiz</h1>
        <h1 className="flex">
          <span className="text-amber-600">Front-end </span>
          &nbsp;Developer
        </h1>
        <p className="w-3/4">
          I am a student in the systems engineering program at the University of
          Antioquia, passionate about software development. I define myself as
          someone who enjoys learning new technologies and facing new
          challenges.
        </p>

        <Link
          className="button"
          target="_blank"
          href="https://www.linkedin.com/in/joseortizp/"
        >
          <button>
            <h3> Hire Me</h3>
            <FaArrowRight />
          </button>
        </Link>
      </div>

      <div className="image-main-profile">
        <Image
          src="/public/images/profilePhoto.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </header>
  );
};
export { MainProfile };
