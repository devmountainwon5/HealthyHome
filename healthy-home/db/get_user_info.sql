SELECT * from users u  
JOIN home_address ha ON u.user_id = ha.user_id 
-- WHERE u.user_id =