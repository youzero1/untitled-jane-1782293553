import { Todo } from '@/types/todo';

interface Props {
  todos: Todo[];
  onClearCompleted: () => void;
}

export default function TodoFooter({ todos, onClearCompleted }: Props) {
  const remaining = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  if (todos.length === 0) return null;

  return (
    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
      <span>
        {remaining} {remaining === 1 ? 'task' : 'tasks'} remaining
      </span>
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="text-xs font-medium text-violet-500 hover:text-violet-700 hover:underline transition"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
