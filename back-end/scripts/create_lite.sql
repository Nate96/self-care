-- https://www.isbe.net/Documents/SQL_server_standards.pdf

/* Run Me First */
-- DROP DATABASE IF EXISTS SelfAssessmentSurvey;
-- CREATE DATABASE SelfAssessmentSurvey;

/* Run me after changing connections to SelfAssessmentSurvey*/
DROP TABLE IF EXISTS Category;
CREATE table Category (
   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
   category TEXT NOT NULL,
   create_dt DATETIME NOT NULL,
   updated_dt DATETIME NOT NULL
);


INSERT INTO Category(category, create_dt, updated_dt) VALUES('Pyscial Self-Care', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Category(category, create_dt, updated_dt) VALUES('Psychological/Emotional Self-Care', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Category(category, create_dt, updated_dt) VALUES('Social Self-Care', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Category(category, create_dt, updated_dt) VALUES('Spiritual Self-Care', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Category(category, create_dt, updated_dt) VALUES('Professional Self-Care', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

DROP TABLE IF EXISTS Question;
CREATE TABLE Question (
   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Question TEXT NOT NULL,
    CategoryId INT NOT NULL,
    CreateDt DATETIME NOT NULL,
    UpdatedDt DATETIME NOT NULL,

   FOREIGN KEY (CategoryId) REFERENCES Category (id)

);

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Eat healthy food', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take care of personal hygiene', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Exercise', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Wear cloths that help me feel good about myself', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Eat regularly', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in fun activites (e.g. walking, swimming, dancing, sport)', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Get enough sleep', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Go to preventative medical appointment (e.g. checkups, teeth cleanings)', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Rest when sick', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall physical self-care', 1, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take time off from work, school, and other obligatons', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in hobbies', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Get away from distractions (e.g. phone, email)', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Learn new things, unrelated to work or school', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Exress my feelings in a healthy way (e.g. talking, creating art, journaling)', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Recognize my own strengths and achievements', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Go on vacations or day trips', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Do something comforting (e.ge rewatching a favorite movie, taking a long bath)', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Find reasons to laugh', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Talk about my problems', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall psychological and emotional self-care', 2, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time with people who I like', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Call or write to friends and family who are far away', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Have stimulating conversations', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Meet new people', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time alone with my romantic partner', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Ask others for help, when needed', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Do enjoyable activities with other people', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Have intimate time with my romantic partner', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Keep in touch with old friends', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall social self-care', 3, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Spend time in nature', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Meditate', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Pray', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Recognize the things that give meaning to my life', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Act in accordance with my morals and values', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Set aside time for thought and reflection', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Participate in a cuase that is important to me', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Appreciate art that is impactful to me (e.g. music, film, liteture)', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall spiritual self-care', 4, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Improve my professional skills', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Say "no" to excessive new responsibilities', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take on projects that are interesting or rewarding', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Learn new things related to my profession', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Make time to talk and build relationships with colleagues', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Take breaks during work', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Maintain balance between my professional and personal life', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Keep a comforable workspace that allows me to be successfuly', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Advocate for fair pay, benefits, and other needs', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));
INSERT INTO Question(Question, CategoryId, CreateDt, UpdatedDt) VAlUES('Overall professional self-care', 5, DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

-- DROP TABLE IF EXISTS Users;
-- CREATE TABLE Users (
--    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--    UserName TEXT NOT NULL,
--    Password TEXT NOT NULL,
--    CreateDt DATETIME NOT NULL,
--    UpdateDt DATETIME NOT NULL
-- );

-- INSERT INTO Users(UserName, Password, CreateDt, UpdateDt) VALUES('squishy', '1234', DATETIME('now', 'localtime'), DATETIME('now', 'localtime'));

CREATE TABLE BasicCalculations (
   assessment_id    UUID NOT NULL PRIMARY KEY,
   total_stars      INT NOT NULL,
   average_rank     FLOAT NOT NULL,
   physical_avg     FLOAT NOT NULL,
   emotional_avg    FLOAT NOT NULL,
   social_avg       FLOAT NOT NULL,
   spirit_avg       FLOAT NOT NULL,
   professional_avg FLOAT NOT NULL,
   create_dt        DATETIME NOT NULL,
   updated_dt       DATETIME NOT NULL
);

DROP TABLE IF EXISTS Response;
CREATE table Response(
   assessment_id UUID NOT NULL,
   question_id   INT NOT NULL,
   category_id   INT NOT NULL,
   answer        INT NOT NULL,
   improve       BIT NOT NULL,
   create_dt     DATETIME NOT NULL,
   updated_dt    DATETIME NOT NULL,

   FOREIGN KEY(question_id) REFERENCES Question(id),
   FOREIGN KEY(category_id) REFERENCES Category(id),
   FOREIGN KEY(assessment_id) REFERENCES BasicCalculations(assessment_id),
   PRIMARY KEY (assessment_id, question_id, category_id)
);

