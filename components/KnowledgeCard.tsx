interface KnowledgeCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

const KnowledgeCard = ({ icon, title, paragraph }: KnowledgeCardProps) => {
  return (
    <div className="knowledge-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p className="text-center">{paragraph}</p>
    </div>
  );
};
export { KnowledgeCard };
