import { EducationItem } from "./EducationItem";

const Education = () => {
  return (
    <div className="education">
      <EducationItem
        institution="University of Antioquia"
        role="Student"
        date="Feb 2017 - Nov 2023"
        title="Systems engineer student"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <hr />
      <EducationItem
        institution="Instaluch"
        role="Student"
        date="Feb 2006 - Dec 2017"
        title="secondary"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};
export { Education };
