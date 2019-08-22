SELECT distinct on (list.todo_id) list.todo_id as real_todo_id, 
ut.users_todos_id as todosid, 
u.user_id as user_id, 
cd.completed_date_id as id, 
list.todo_item, 
cd.completed_date as last_completed_date, 
list.frequency_id, 
list.active
FROM user_todos_table ut 
JOIN users u ON u.user_id = ut.user_id
JOIN completed_date_table cd ON cd.users_todos_id = ut.users_todos_id
JOIN list_todos_table list ON list.todo_id = ut.todo_id
where active = 't' and u.user_id = ${id} 
and ut.is_active = true 
order by list.todo_id, cd.completed_date
-- and cd.completed_date >= current_date - interval '30' day;
