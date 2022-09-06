export interface TaskCardProps {
  checked: boolean;
  task: string;
  onClickCheck: (task: string) => void;
  onClickDelete: (task: string) => void;
}
