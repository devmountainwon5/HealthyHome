SELECT
  list_todos_table.todo_id,
  todo_type_table.todo_type_id,
  todo_type_table.type_desc
FROM
  list_todos_table,
  todo_type_table
WHERE
  list_todos_table.todo_type_id = todo_type_table.todo_type_id;