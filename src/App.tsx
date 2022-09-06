import { Header } from "./components";
import plus from "./assets/plus.svg";
import clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import { Task } from "./model";
import { TaskCard } from "./components/taskCard";

function App() {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const [newTaskContent, setNewTaskContent] = useState<string>("");

  const doneTasks =
    tasks.length > 0 ? tasks.filter((task) => task.checked === true).length : 0;

  const isNewTaskEmpty = !newTaskContent;

  function handleCheckTask(taskContent: string) {
    const newTasks = tasks.map((task) =>
      task.task === taskContent ? { ...task, checked: !task.checked } : task
    );
    console.log(newTasks);
    setTasks(newTasks);
  }

  function handleDeleteTask(taskContent: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return taskContent !== task.task;
    });

    localStorage.setItem(
      "tasksStorage",
      JSON.stringify(tasksWithoutDeletedOne)
    );

    setTasks(tasksWithoutDeletedOne);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { checked: false, task: newTaskContent }]);

    localStorage.setItem(
      "tasksStorage",
      JSON.stringify([...tasks, { checked: false, task: newTaskContent }])
    );

    setNewTaskContent("");
  }

  function handleChangeInputTaskContent(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");

    setNewTaskContent(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  useEffect(() => {
    const arrayStorage = JSON.parse(
      localStorage.getItem("tasksStorage") || "{}"
    );
    if (arrayStorage) {
      setTasks(arrayStorage);
    }
  }, []);

  return (
    <div>
      <Header />
      <form className={styles.addTaskContainer} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskContent}
          onChange={handleChangeInputTaskContent}
          required
          onInvalid={handleNewTaskInvalid}
        />
        <button disabled={isNewTaskEmpty}>
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
            Concluídas <span>{doneTasks}</span>
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
