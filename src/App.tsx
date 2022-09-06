import { Header } from "./components";
import plus from "./assets/plus.svg";
import styles from "./App.module.css";
import "./global.css";

function App() {
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
            Tarefas criadas <span>0</span>
          </strong>

          <strong>
            Concluídas <span>0</span>
          </strong>
        </header>
        <div className={styles.emptyListContainer}></div>
      </div>
    </div>
  );
}

export default App;
