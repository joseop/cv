import { FaRegClone } from "react-icons/fa";
import { ProgressBar } from "./ProgressBar";
import Image from "next/image";

const LeftMenu = () => {
  return (
    <section className="left-menu">
      <div className="profile-card">
        <div className="image-profile">
          <Image
            src="/public/images/UdeA.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>

        <div className="personal-information-profile">
          <h3>Jose Carlos Ortiz</h3>
          <p>Front-end Developer</p>
        </div>
      </div>

      <hr />

      <div className="personal-information">
        <div>
          <p>Age:</p>
          <p>23</p>
        </div>

        <div>
          <p>Residence:</p>
          <p>Cl 63 # 43 - 27</p>
        </div>

        <div>
          <p>Call phone:</p>
          <p>300 814 4727</p>
        </div>

        <div>
          <p>Email:</p>
          <p>padilla99j@gmail.com</p>
        </div>
      </div>

      <hr />

      <div className="lenguages">
        <h3>Lenguages</h3>
        <ProgressBar title="Spanish" num={100} />
        <ProgressBar title="English" num={20} />
      </div>

      <hr />

      <div className="lenguages">
        <h3>Programming Lenguages</h3>
        <ProgressBar title="Java" num={80} />
        <ProgressBar title="SQL" num={70} />
        <ProgressBar title="HTML" num={80} />
        <ProgressBar title="CSS" num={80} />
        <ProgressBar title="JS" num={50} />
      </div>

      <hr />

      <div className="extra-skills">
        <h3>Extra Skills</h3>
        <div>
          <FaRegClone className="icon mr-1" />
          <p>Bootstrap, Materialize</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>React, Angular</p>
        </div>

        <div>
          <FaRegClone className="icon mr-1" />
          <p>Git, Scrum</p>
        </div>
      </div>
    </section>
  );
};
export { LeftMenu };
