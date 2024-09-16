import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TodoLength, TodosAtom } from '../store/TodosAtom'

const TodoInput = () => {
  const [input, setInput] = useState('')
  const setTodos = useSetRecoilState<{ id: string; title: string }[]>(TodosAtom)

  const len: string = String(useRecoilValue(TodoLength))

  function HandleAdd() {
    if (input.trim().length == 0) {
      return
    }

    setTodos((oldTodos: { id: string; title: string }[]) => {
      return [...oldTodos, { id: len, title: input }]
    })

    setInput('')
  }

  return (
    <div className="py-3">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        className="outline-none p-1 text-black text-base font-medium"
        placeholder="task.."
      />
      <button
        onClick={HandleAdd}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput
