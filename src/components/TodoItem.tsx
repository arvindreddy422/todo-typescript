import { MdOutlineDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import { TodosAtom } from '../store/TodosAtom'
import { useState } from 'react'

const TodoItem = ({ todo }: { todo: { title: string; id: string } }) => {
  const [todoList, setTodoList] = useRecoilState(TodosAtom)
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(todo.title)
  function editTodo(id: string) {
    const newTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          id,
          title: editText,
        }
      } else {
        return todo
      }
    })
    setTodoList(newTodo)
    setEdit(false)
  }

  function removeTodo(id: string) {
    const newTodo = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodo)
  }

  return (
    <>
      <hr className=" " />
      <div className="flex items-center gap-2 ">
        {edit ? (
          <input
            type="text"
            className="bg-slate-900 outline-none"
            onChange={(e) => setEditText(e.target.value)}
            value={editText}
          />
        ) : (
          <p className="w-56 font-medium"> {todo.title}</p>
        )}

        {edit ? (
          <button onClick={() => editTodo(todo.id)}>Done</button>
        ) : (
          <>
            <FaRegEdit
              onClick={() => setEdit(true)}
              className="cursor-pointer"
              size={20}
            />
            <MdOutlineDelete
              onClick={() => removeTodo(todo.id)}
              className="cursor-pointer"
              size={26}
            />
          </>
        )}
        <hr />
      </div>
      <hr className=" " />
    </>
  )
}

export default TodoItem
