SELECT * FROM user_todos_table
JOIN list_todos_table 
ON user_todos_table.todo_id = list_todos_table.todo_id
WHERE user_id = $1;