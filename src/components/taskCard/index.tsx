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
    <div className={checked ? styles.cardChecked : styles.card}>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onClickCheck(task)}
          className={styles.checkbox}
        />
        <p>{task}</p>
      </div>
      <button onClick={() => onClickDelete(task)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
