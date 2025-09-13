 INSERT INTO Form (UserId, CreatedDt, UpdateDt) VALUES(@UserId, GETDATE(), GETDATE());
 SELECT TOP 1 * FROM Form ORDER BY CreatedDt DESC;
