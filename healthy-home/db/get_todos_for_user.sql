select  ut.users_todos_id as id, t.todo_item, t.todo_id, ut.date_added, t.frequency_id from user_todos_table as ut
join list_todos_table as t on ut.todo_id = t.todo_id
where user_id = $1 and ut.is_active = true 