
/*
Stored Porcedures
- [x] getBasicCalculations
- [x] createBasicCalculation
- [x] getAssessment
- [x] getUserData
- [x] getForms
- [x] createForm
- [x] getCategories 
- [x] getQuestions
*/
-- Get Basic Calculations --------------------------------
DROP PROCEDURE dbo.getBasicCalculations
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getBasicCalculations
    @userId int = 2
AS
BEGIN
    -- body of the stored procedure
    SELECT DISTINCT(b.FormId), b.AverageRank, b.TotalStars, f.CreatedDt
    FROM BasicCalculations b
    RIGHT JOIN Form f on b.FormId = f.FormId
    WHERE f.UserId = @userId
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getBasicCalculations
GO

-- Create Basic Calculation -----------------------------
DROP PROCEDURE dbo.addBasicCalculations
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.addBasicCalculations
    @formId int = 1
AS
BEGIN
    -- body of the stored procedure
    INSERT INTO BasicCalculations(FormId, TotalStars, AverageRank)
    SELECT 
        @formId as FormId,
        SUM(CASE WHEN ud.Improve = 1 THEN 1 ELSE 0 END) as 'total stars',
        ROUND(AVG(CAST(ud.Answer AS float)), 2) as 'Average Rank'
    FROM UserData ud
    WHERE ud.FormId = @formId
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.addBasicCalculations
GO

-- Get Questions ---------------------------------------
DROP PROCEDURE dbo.getQuestions
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getQuestions
AS
BEGIN
    -- body of the stored procedure
    SELECT *
    FROM Question
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getQuestions
GO

-- Get Categories -------------------------------------
DROP PROCEDURE dbo.getCategories
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getCategories
AS
BEGIN
    -- body of the stored procedure
    SELECT *
    FROM Category
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getCategories
GO

-- Create Form ----------------------------------------
DROP PROCEDURE dbo.createForm
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.createForm
    @UserId int = 0
AS
BEGIN
    -- body of the stored procedure
    INSERT INTO Form (UserId, CreatedDt, UpdateDt) VALUES(@UserId, GETDATE(), GETDATE());
    SELECT TOP 1 * FROM Form ORDER BY CreatedDt DESC;
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.createForm
GO

-- Get User Data --------------------------------------
DROP PROCEDURE dbo.getUserData
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getUserData
    @UserId int = 0
AS
BEGIN
    -- body of the stored procedure
    SELECT * FROM UserData WHERE UserId = @UserId
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getUserData
GO

-- Create User Data -----------------------------------
DROP PROCEDURE dbo.createUserData
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.createUserData
    @UserId int = 0,
    @QuestionId int = 0,
    @FormId int = 0,
    @Answer int = 0,
    @Improve BIT = 0
AS
BEGIN
    -- body of the stored procedure
    INSERT INTO UserData(UserId, QuestionId, FormId, Answer, Improve, CreateDt, UpdatedDt) VALUES(@UserId, @QuestionId, @FormId, @Answer, @Improve, GETDATE(), GETDATE())
    SELECT TOP 1 * FROM UserData ORDER BY CreateDt DESC;
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.createUserData
GO

-- Get Forms ------------------------------------------
DROP PROCEDURE dbo.getForms
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.createForms
    @UserId int = 0
AS
BEGIN
    -- body of the stored procedure
    SELECT * FROM Form WHERE UserId = @UserId
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.createForms
GO

-- Get User Data --------------------------------------
DROP PROCEDURE dbo.getUserData
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getUserData
    @UserId int = 0
AS
BEGIN
    -- body of the stored procedure
    SELECT * FROM UserData WHERE UserId = @UserId
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getUserData
GO

-- Get Assessment ------------------------------------
DROP PROCEDURE dbo.getAssessment
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getAssessment
    @formId int = 0
AS
BEGIN
    -- body of the stored procedure
    SELECT q.CategoryId, ud.QuestionId, q.Question, ud.Answer, ud.Improve 
    FROM UserData ud
    JOIN Question q ON ud.QuestionId = q.QuestionId
    WHERE ud.FormId = @formId
    ORDER BY q.CategoryId ASC
END
GO
-- example to execute the stored procedure we just created
EXECUTE dbo.getAssessment
GO