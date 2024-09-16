import { useRecoilValue } from 'recoil'
import TodoItem from './components/TodoItem'
import { TodosAtom } from './store/TodosAtom'
import TodoInput from './components/TodoInput'

interface Todoi {
  id: string
  title: string
}
type TodoArr = Todoi[] | []

function App() {
  const todos: TodoArr = useRecoilValue(TodosAtom)

  return (
    <div>
      <h1 className="font-bold text-4xl mb-2">Todo</h1>
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default App
