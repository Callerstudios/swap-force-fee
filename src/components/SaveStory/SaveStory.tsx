import CircleInitial from "../CircleInitial/CircleInitial";
import styles from "./SaveStory.module.css";

type StoryProps = {
  name: string;
  role: string;
  story: string;
  summary: string;
};

const SaveStory: React.FC<StoryProps> = ({ name, role, story, summary }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className={styles.saveStory}>
      <header className={styles.header}>
        <CircleInitial isRelative={true} scale={1.5} initial={initials} left="0" mark={true} />
        <div>
          <p className={styles.name}> {name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </header>
      <p className={styles.story}>{story}</p>
      <div className={styles.summary}>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default SaveStory;
