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
          description="I am a student in the systems engineering program at the University of Antioquia, passionate about software development. I define myself as someone who enjoys learning new technologies and facing new challenges."
        />
        <MyKnowledge />
      </div>

      <div>
        <SectionIntroduction
          title="Education"
          description="I am a student in the systems engineering program at the University of Antioquia, passionate about software development. I define myself as someone who enjoys learning new technologies and facing new challenges."
        />
        <Education />
      </div>

      <div>
        <SectionIntroduction
          title="Portfolio"
          description="I am a student in the systems engineering program at the University of Antioquia, passionate about software development. I define myself as someone who enjoys learning new technologies and facing new challenges."
        />
        <div className="flex max-w-full overflow-x-auto">
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
