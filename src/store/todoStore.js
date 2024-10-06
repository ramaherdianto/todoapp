import { create } from 'zustand';

export const useTodoStore = create((set) => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [], // initial state

    // handle add new todo
    addTodo: (title, description) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: new Date().getTime(), title, description, completed: false },
            ],
        })),

    // handle remove selected todo
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),

    // handle remove all todos
    removeAllTodos: () => set({ todos: [] }),

    // handle completed todo that its selected
    checkTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),

    // handle sorted todos base on any criterias
    sortedTodo: (sortedBy) =>
        set((state) => {
            let sortedTodos;
            switch (sortedBy) {
                // sorted by title
                case 'title':
                    sortedTodos = state.todos
                        .slice()
                        .sort((a, b) => a.title.localeCompare(b.title));
                    break;
                // reset filter
                case 'reset':
                    sortedTodos = state.todos.slice().sort((a, b) => a.id - b.id);
                    break;
                // sorted by completed todo
                case 'completed':
                    sortedTodos = state.todos
                        .slice()
                        .sort((a, b) => Number(b.completed) - Number(a.completed));
                    break;
                // sorted by incompleted todo
                case 'incompleted':
                    sortedTodos = state.todos
                        .slice()
                        .sort((a, b) => Number(a.completed) - Number(b.completed));
                    break;
                // sorted by default
                case 'input':
                default:
                    sortedTodos = state.todos;
                    break;
            }
            return { todos: sortedTodos };
        }),
}));
