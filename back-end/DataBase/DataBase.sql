-- https://www.isbe.net/Documents/SQL_server_standards.pdf

/* Run Me First */
-- DROP DATABASE IF EXISTS SelfAssessmentSurvey;
-- CREATE DATABASE SelfAssessmentSurvey;

/* Run me after changing connections to SelfAssessmentSurvey*/
DROP TABLE IF EXISTS Category;
CREATE table Category (
    CategoryId INT IDENTITY(1,1), -- IDENTITY(1,1) increments
    Category VARCHAR(50) UNIQUE NOT NULL,
    CreateDt DATETIME NOT NULL,
    UpdatedDt DATETIME NOT NULL,

    PRIMARY KEY (CategoryId)
);

INSERT INTO Category(Category, CreateDt, UpdatedDt) VALUES('Pyscial Self-Care', GETDATE(), GETDATE());
INSERT INTO Category(Category, CreateDt, UpdatedDt) VALUES('Psychological/Emotional Self-Care', GETDATE(), GETDATE());
INSERT INTO Category(Category, CreateDt, UpdatedDt) VALUES('Social Self-Care', GETDATE(), GETDATE());
INSERT INTO Category(Category, CreateDt, UpdatedDt) VALUES('Spiritual Self-Care', GETDATE(), GETDATE());
INSERT INTO Category(Category, CreateDt, UpdatedDt) VALUES('Professional Self-Care', GETDATE(), GETDATE());

DROP TABLE IF EXISTS Question;
CREATE TABLE Question (
    QuestionId INT IDENTITY(1,1),
    Question VARCHAR(100) NOT NULL,
    CategoryId INT NOT NULL,
    CreateDt DATETIME NOT NULL,
    UpdatedDt DATETIME NOT NULL,

    PRIMARY KEY(QuestionId),
    FOREIGN KEY(CategoryId) REFERENCES Category(CategoryId)
);

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Eat healthy food', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take care of personal hygiene', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Exercise', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Wear cloths that help me feel good about myself', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Eat regularly', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in fun activites (e.g. walking, swimming, dancing, sport)', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Get enough sleep', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Go to preventative medical appointment (e.g. checkups, teeth cleanings)', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Rest when sick', 1, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall physical self-care', 1, GETDATE(), GETDATE());

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take time off from work, school, and other obligatons', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in hobbies', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Get away from distractions (e.g. phone, email)', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Learn new things, unrelated to work or school', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Exress my feelings in a healthy way (e.g. talking, creating art, journaling)', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Recognize my own strengths and achievements', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Go on vacations or day trips', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Do something comforting (e.ge rewatching a favorite movie, taking a long bath)', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Find reasons to laugh', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Talk about my problems', 2, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall psychological and emotional self-care', 2, GETDATE(), GETDATE());

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time with people who I like', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Call or write to friends and family who are far away', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Have stimulating conversations', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Meet new people', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time alone with my romantic partner', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Ask others for help, when needed', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Do enjoyable activities with other people', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Have intimate time with my romantic partner', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Keep in touch with old friends', 3, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall social self-care', 3, GETDATE(), GETDATE());

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time in nature', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Meditate', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Pray', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Recognize the things that give meaning to my life', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Act in accordance with my morals and values', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Set aside time for thought and reflection', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in a cuase that is important to me', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Appreciate art that is impactful to me (e.g. music, film, liteture)', 4, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall spiritual self-care', 4, GETDATE(), GETDATE());

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Improve my professional skills', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Say "no" to excessive new responsibilities', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take on projects that are interesting or rewarding', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Learn new things related to my profession', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Make time to talk and build relationships with colleagues', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take breaks during work', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Maintain balance between my professional and personal life', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Keep a comforable workspace that allows me to be successfuly', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Advocate for fair pay, benefits, and other needs', 5, GETDATE(), GETDATE());
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall professional self-care', 5, GETDATE(), GETDATE());

DROP TABLE IF EXISTS Users
CREATE table Users (
    UserId INT IDENTITY(1,1),
    UserName VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(12) NOT NULL,
    CreateDt DATETIME NOT NULL,
    UpdateDt DATETIME NOT NULL,

    PRIMARY KEY(UserId)
);

INSERT INTO Users(UserName, Password, CreateDt, UpdateDt) VALUES('squishy', '1234', GETDATE(), GETDATE());

DROP TABLE IF EXISTS Form
CREATE TABLE Form(
    FormId INT IDENTITY(1,1),
    UserId INT NOT NULL,
    CreatedDt DATETIME NOT NULL,
    UpdateDt DATETIME NOT NULL,

    PRIMARY KEY(FormId)
);

DROP TABLE IF EXISTS UserData
CREATE table UserData (
    UserDataId INT IDENTITY(1,1),
    UserId INT NOT NULL,   
    QuestionId INT NOT NULL,
    FormId INT NOT NULL,
    Answer INT NOT NULL,
    Improve BIT NOT NULL,
    CreateDt DATETIME NOT NULL,
    UpdatedDt DATETIME NOT NULL,
    
    PRIMARY KEY(UserDataId),
    FOREIGN KEY(UserId) REFERENCES users(UserId),
    FOREIGN KEY(QuestionId) REFERENCES Question(QuestionId),
    FOREIGN KEY(FormId) REFERENCES Form(FormId)
);

DROP TABLE IF EXISTS BasicCalculations 
CREATE TABLE BasicCalculations (
    Id INT IDENTITY(1,1),
    FormId INT,
    TotalStars INT,
    AverageRank FLOAT

    PRIMARY KEY(Id)
    FOREIGN KEY(FormId) REFERENCES Form(FormId)
)