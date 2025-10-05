 SELECT DISTINCT(b.FormId), b.AverageRank, b.TotalStars, f.CreatedDt
 FROM BasicCalculations b
 RIGHT JOIN Form f on b.FormId = f.FormId
 WHERE f.UserId = @userId
