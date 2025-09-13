 INSERT INTO BasicCalculations(FormId, TotalStars, AverageRank)
 SELECT 
     @formId as FormId,
     SUM(CASE WHEN ud.Improve = 1 THEN 1 ELSE 0 END) as 'total stars',
     ROUND(AVG(CAST(ud.Answer AS float)), 2) as 'Average Rank'
 FROM UserData ud
 WHERE ud.FormId = @formId
