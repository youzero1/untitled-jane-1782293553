import { Todo } from '@/types/todo';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="group flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-100 transition hover:border-slate-200">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition
          ${todo.completed
            ? 'border-violet-500 bg-violet-500'
            : 'border-slate-300 hover:border-violet-400'
          }`}
      >
        {todo.completed && (
          <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1.5,6 4.5,9 10.5,3" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed transition ${
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition p-1 rounded-lg hover:bg-red-50"
      >
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="2,4 14,4" />
          <path d="M5,4V2h6v2" />
          <path d="M3,4l1,10h8l1-10" />
          <line x1="6" y1="7" x2="6" y2="11" />
          <line x1="10" y1="7" x2="10" y2="11" />
        </svg>
      </button>
    </li>
  );
}
