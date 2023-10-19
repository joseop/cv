import {
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import { KnowledgeCard } from "./KnowledgeCard";

const MyKnowledge = () => {
  return (
    <div className="my-knowledge">
      <KnowledgeCard
        Icon={FaJsSquare}
        title="Javascript"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
      <KnowledgeCard
        Icon={FaHtml5}
        title="HTML5"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
      <KnowledgeCard
        Icon={FaCss3Alt}
        title="CSS3"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
      <KnowledgeCard
        Icon={FaReact}
        title="React"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
      <KnowledgeCard
        Icon={FaDatabase}
        title="SQL"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
      <KnowledgeCard
        Icon={FaGitAlt}
        title="GIT"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit dictum ante."
      />
    </div>
  );
};
export { MyKnowledge };
