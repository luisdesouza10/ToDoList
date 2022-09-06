import { Header } from "./components";
import plus from "./assets/plus.svg";
import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import { useState } from "react";
import { Task } from "./model";
import { TaskCard } from "./components/taskCard";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      checked: false,
      task: "Olhar tarefas clickup.",
    },
    {
      checked: false,
      task: "Ativar timetracking.",
    },
  ] as Task[]);

  const doneTasks = tasks.filter((task) => task.checked === true).length;

  function handleCheckTask(taskContent: string) {
    const newTasks = tasks.map((task) =>
      task.task === taskContent ? { ...task, checked: !task.checked } : task
    );
    setTasks(newTasks);
  }

  function handleDeleteTask(taskContent: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return taskContent !== task.task;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <form className={styles.addTaskContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          <strong>Criar</strong>
          <img src={plus} />
        </button>
      </form>

      <div className={styles.wrapper}>
        <header>
          <strong>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>

          <strong>
            Concluídas{" "}
            <span>
              {doneTasks > 0
                ? tasks.filter((task) => task.checked === true).length +
                  " de " +
                  tasks.length
                : 0}
            </span>
          </strong>
        </header>
        {tasks.length ? (
          tasks.map((task) => (
            <TaskCard
              key={task.task}
              checked={task.checked}
              task={task.task}
              onClickCheck={handleCheckTask}
              onClickDelete={handleDeleteTask}
            />
          ))
        ) : (
          <div className={styles.emptyListContainer}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
