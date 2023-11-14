import styles from "./App.module.css"
import { Todo } from "./features/todo/Todo"

function App() {
  return (
    <div className={styles.app}>
      <Todo />
    </div>
  )
}

export default App
