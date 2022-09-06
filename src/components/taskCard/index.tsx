import { Trash } from "phosphor-react";
import { TaskCardProps } from "../../model";
import styles from "./TaskCard.module.css";

export function TaskCard({
  checked,
  task,
  onClickCheck,
  onClickDelete,
}: TaskCardProps) {
  return (
    <div className={styles.card}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onClickCheck(task)}
      />
      <p>{task}</p>
      <button onClick={() => onClickDelete(task)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
