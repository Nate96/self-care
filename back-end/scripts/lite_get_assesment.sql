SELECT 
   c.id         AS category_id
   , c.category
   , q.id       AS question_id
   , q.Question 
   , r.Answer
   , r.Improve 
   , r.create_dt
   , r.updated_dt
FROM Response r
JOIN Question q ON r.question_id = q.id
JOIN Category c ON r.category_id = c.id
WHERE r.assessment_id = @id
ORDER BY c.id ASC
