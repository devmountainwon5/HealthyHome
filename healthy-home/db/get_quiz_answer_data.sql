SELECT
  answer_data.*, user_answers.user_id
FROM
  registration_answer_table as user_answers,
  question_answers as answers,
  question_answers_data as answer_data
WHERE
  answer_data.question_answers_id = answers.question_answers_id
  AND user_answers.reg_answer = answers.answer
  AND user_answers.reg_question_id = answers.registration_question_table_id
  AND user_answers.user_id = ${userId};