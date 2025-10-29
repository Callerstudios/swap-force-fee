import CircleInitial from "../CircleInitial/CircleInitial";
import styles from "./TeamMember.module.css";

type MemberProps = {
  name: string;
  tag: string;
};

const TeamMember: React.FC<MemberProps> = ({ name, tag }) => {
  const initial = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className={styles.teamMember}>
      <CircleInitial initial={initial} left="0" scale={2} isRelative={true} />
      <p className="blue">{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <div className={styles.start}>
        <p>Start with @{tag}</p>
      </div>
    </div>
  );
};

export default TeamMember;
