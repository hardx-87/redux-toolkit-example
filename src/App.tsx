import styles from "./App.module.css"
import { Todo } from "./features/todo/Todo"

function App() {
  return (
    <div className={styles.app}>
      <h1>Todo App</h1>
      <Todo />
    </div>
  )
}

export default App
