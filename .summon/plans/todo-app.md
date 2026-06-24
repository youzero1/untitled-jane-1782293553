---
status: implemented
title: Todo App
---

1. Create /app/src/styles/global.css — starts with `@import "tailwindcss";` with no other custom styles.

2. Create /app/src/types/todo.ts — defines a Todo type with fields: id (string), text (string), completed (boolean), createdAt (Date).

3. Create /app/src/hooks/useTodos.ts — custom hook that manages todo list state in localStorage. Exposes: todos array, addTodo(text), toggleTodo(id), deleteTodo(id), and clearCompleted(). New todos are prepended to the top of the list.

4. Create /app/src/components/TodoInput.tsx — a text input with an "Add" button. Submits on Enter key or button click. Clears input after submit. Ignores empty or whitespace-only input.

5. Create /app/src/components/TodoItem.tsx — renders a single todo row with a checkbox to toggle completion, the todo text (strikethrough when completed), and a delete (trash) button that appears on hover.

6. Create /app/src/components/TodoList.tsx — renders the list of TodoItem components. Shows an empty-state message ("No tasks yet — add one above!") when the list is empty.

7. Create /app/src/components/TodoFooter.tsx — shown only when there is at least one todo. Displays count of remaining incomplete tasks. Includes a "Clear completed" button that appears only when there are completed todos.

8. Create /app/src/pages/TodoPage.tsx — full-page layout centered on screen with a card container. Renders a heading ("My Todos"), TodoInput at the top, TodoList in the middle, and TodoFooter at the bottom. Uses the useTodos hook and passes props down.

9. Update /app/src/main.tsx — import global.css and render TodoPage as the root component.
