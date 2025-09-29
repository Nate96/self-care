 SELECT q.CategoryId, ud.QuestionId, q.Question, ud.Answer, ud.Improve 
 FROM UserData ud
 JOIN Question q ON ud.QuestionId = q.QuestionId
 WHERE ud.FormId = @formId
 ORDER BY q.CategoryId ASC
