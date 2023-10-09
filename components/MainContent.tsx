import { Education } from "./Education";
import { MainProfile } from "./MainProfile";
import { MyKnowledge } from "./MyKnowledge";
import { Portfolio } from "./Portfolio";
import { SectionIntroduction } from "./SectionIntroduction";

const MainContent = () => {
  return (
    <section className="main-content">
      <div>
        <MainProfile />
      </div>

      <div>
        <SectionIntroduction
          title="My Knowledge "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <MyKnowledge />
      </div>

      <div>
        <SectionIntroduction
          title="Education"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Education />
      </div>

      <div>
        <SectionIntroduction
          title="Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <div className="snap-x scroll-smooth md:scroll-auto">
          <Portfolio />
        </div>
      </div>
      <div className="separate"></div>
      <footer>
        <p>2023 All Rights Reserved. Jose Ortiz</p>
      </footer>
    </section>
  );
};
export { MainContent };
