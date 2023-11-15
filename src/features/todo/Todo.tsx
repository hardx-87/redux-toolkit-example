import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { add, remove, complete, selectTodos } from "./todoSlice"
import styles from "./Todo.module.css"

export function Todo() {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  const [newDesc, setNewDesc] = useState("")

  const onFormNewSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(add(newDesc))
    setNewDesc("")
  }

  const onInputChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement
    setNewDesc(input.value)
  }

  const onTodoRemove = (id: number) => {
    dispatch(remove(id))
  }

  const onTodoCompletedClick = (id: number) => {
    dispatch(complete(id))
  }

  return (
    <div className={styles.todoApp}>
      <form className={styles.formNew} onSubmit={onFormNewSubmit}>
        <input value={newDesc} onInput={onInputChange} />
        <button>Create</button>
      </form>

      <ul className={styles.list}>
        {todos.length === 0 && <li>Create your first item</li>}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? styles.completed || "" : ""}
          >
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onTodoCompletedClick(todo.id)}
            />
            {todo.description}{" "}
            <button
              className={styles.btnText}
              onClick={(e) => onTodoRemove(todo.id)}
            >
              [delete]
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
