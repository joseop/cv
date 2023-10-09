import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface PortfolioItemProps {
  subtitle: string;
  title: string;
  description: string;
  imagePortfolio: StaticImageData;
  url: string;
}

const PortfolioCard = ({
  title,
  description,
  imagePortfolio,
  url,
}: PortfolioItemProps) => {
  return (
    <div className="portfolio-card">
      <div className="image-portfolio">
        <Image
          src={imagePortfolio}
          width={300}
          height={300}
          alt="Picture of portfolio"
        />
      </div>

      <div className="information-portfolio">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link target="_blank" href={url}>
          <button>
            <h3>Visit site</h3>
            <FaAngleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};
export { PortfolioCard };
