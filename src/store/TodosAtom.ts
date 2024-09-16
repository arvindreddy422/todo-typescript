import { atom, selector } from 'recoil'

export interface Todos {
  id: string
  title: string
}

export const TodosAtom = atom<Todos[]>({
  key: 'Todos',
  default: [],
})

export const TodoLength = selector({
  key: 'len',
  get: ({ get }) => {
    return get(TodosAtom).length
  },
})
