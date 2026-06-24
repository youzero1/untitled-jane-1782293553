import { useState, KeyboardEvent } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit() {
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 shadow-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition"
      />
      <button
        onClick={handleSubmit}
        className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-violet-700 active:scale-95 transition"
      >
        Add
      </button>
    </div>
  );
}
