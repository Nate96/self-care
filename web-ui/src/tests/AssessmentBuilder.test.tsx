import AssessmentBuilder from '../Services/AssessmentBuilder'
import {describe, expect, test} from '@jest/globals';
import { Form, Category, Question, UserData} from "../lib/types"

let categories: Category[] = [
	{
		"CategoryId": 1,
		"Category": "Pyscial Self-Care",
		"CreateDt": new Date,
		"UpdatedDt": new Date,
		"Questions": []
	},
	{
		"CategoryId": 2,
		"Category": "Psychological/Emotional Self-Care",
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"CategoryId": 3,
		"Category": "Social Self-Care",
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"CategoryId": 4,
		"Category": "Spiritual Self-Care",
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"CategoryId": 5,
		"Category": "Professional Self-Care",
		"CreateDt": new Date,
		"UpdatedDt": new Date
	}
]

let form: Form = {
  FormId: 0, 
  UserId: 0,
  CreatedDt: new Date,
  UpdateDt: new Date,
}

let userData: UserData[] = [
	{
		"UserId": 2,
		"QuestionId": 2,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"QuestionId": 6,
		"UserId": 2,
		"FormId": 1,
		"Answer": 2,
		"Improve": false
	},
	{
		"UserId": 2,
		"QuestionId": 1,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 3,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 7,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 8,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 4,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 9,
		"FormId": 1,
		"Answer": 2,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 5,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 11,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 10,
		"FormId": 1,
		"Answer": 0,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 12,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 13,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 14,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 16,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 17,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 15,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 18,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 20,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 19,
		"FormId": 1,
		"Answer": 2,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 21,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 23,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 26,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 25,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 22,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 24,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 28,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 31,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 27,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 29,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 30,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 32,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 33,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 35,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 34,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 38,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 36,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 37,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 39,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 42,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 41,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 44,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 40,
		"FormId": 1,
		"Answer": 1,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 43,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 47,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	},
	{
		"UserId": 2,
		"QuestionId": 45,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 49,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 48,
		"FormId": 1,
		"Answer": 3,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 50,
		"FormId": 1,
		"Answer": 2,
		"Improve": false,
	},
	{
		"UserId": 2,
		"QuestionId": 46,
		"FormId": 1,
		"Answer": 1,
		"Improve": true,
	}
]

let questions: Question[] = [
	{
		"QuestionId": 1,
		"Question": "Eat healthy food",
		"CategoryId": 1,
		"CreateDt": new Date, 
		"UpdatedDt":new Date 
	},
	{
		"QuestionId": 2,
		"Question": "Take care of personal hygiene",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt":new Date
	},
	{
		"QuestionId": 3,
		"Question": "Exercise",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt":new Date
	},
	{
		"QuestionId": 4,
		"Question": "Wear cloths that help me feel good about myself",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date 
	},
	{
		"QuestionId": 5,
		"Question": "Eat regularly",
		"CategoryId": 1,
		"CreateDt": new Date,
    "UpdatedDt": new Date,
	},
	{
		"QuestionId": 6,
		"Question": "Participate in fun activites (e.g. walking, swimming, dancing, sport)",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 7,
		"Question": "Get enough sleep",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 8,
		"Question": "Go to preventative medical appointment (e.g. checkups, teeth cleanings)",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 9,
		"Question": "Rest when sick",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 10,
		"Question": "Overall physical self-care",
		"CategoryId": 1,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 11,
		"Question": "Take time off from work, school, and other obligatons",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 12,
		"Question": "Participate in hobbies",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 13,
		"Question": "Get away from distractions (e.g. phone, email)",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 14,
		"Question": "Learn new things, unrelated to work or school",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 15,
		"Question": "Exress my feelings in a healthy way (e.g. talking, creating art, journaling)",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 16,
		"Question": "Recognize my own strengths and achievements",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 17,
		"Question": "Go on vacations or day trips",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 18,
		"Question": "Do something comforting (e.ge rewatching a favorite movie, taking a long bath)",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 19,
		"Question": "Find reasons to laugh",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 20,
		"Question": "Talk about my problems",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 21,
		"Question": "Overall psychological and emotional self-care",
		"CategoryId": 2,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 22,
		"Question": "Spend time with people who I like",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 23,
		"Question": "Call or write to friends and family who are far away",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 24,
		"Question": "Have stimulating conversations",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 25,
		"Question": "Meet new people",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 26,
		"Question": "Spend time alone with my romantic partner",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 27,
		"Question": "Ask others for help, when needed",
		"CategoryId": 3,
		"CreateDt": new Date, 
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 28,
		"Question": "Do enjoyable activities with other people",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 29,
		"Question": "Have intimate time with my romantic partner",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 30,
		"Question": "Keep in touch with old friends",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 31,
		"Question": "Overall social self-care",
		"CategoryId": 3,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 32,
		"Question": "Spend time in nature",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 33,
		"Question": "Meditate",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 34,
		"Question": "Pray",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 35,
		"Question": "Recognize the things that give meaning to my life",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 36,
		"Question": "Act in accordance with my morals and values",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 37,
		"Question": "Set aside time for thought and reflection",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 38,
		"Question": "Participate in a cuase that is important to me",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 39,
		"Question": "Appreciate art that is impactful to me (e.g. music, film, liteture)",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 40,
		"Question": "Overall spiritual self-care",
		"CategoryId": 4,
		"CreateDt": new Date,
		"UpdatedDt":new Date
	},
	{
		"QuestionId": 41,
		"Question": "Improve my professional skills",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 42,
		"Question": "Say \"no\" to excessive new responsibilities",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 43,
		"Question": "Take on projects that are interesting or rewarding",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 44,
		"Question": "Learn new things related to my profession",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 45,
		"Question": "Make time to talk and build relationships with colleagues",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt":new Date
	},
	{
		"QuestionId": 46,
		"Question": "Take breaks during work",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 47,
		"Question": "Maintain balance between my professional and personal life",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 48,
		"Question": "Keep a comforable workspace that allows me to be successfuly",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 49,
		"Question": "Advocate for fair pay, benefits, and other needs",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	},
	{
		"QuestionId": 50,
		"Question": "Overall professional self-care",
		"CategoryId": 5,
		"CreateDt": new Date,
		"UpdatedDt": new Date
	}
]

var expected: Form = {
	FormId: 0,
	UserId: 0, 
	CreatedDt: null, 
	UpdateDt: null,
	Categories: [
		{
			CategoryId: 1,
			Category: "Pyscial Self-Care",
			CreateDt: null, 
			UpdatedDt: null,
			Questions: [
				{
					QuestionId: 1,
					Question: "Eat healthy food",
					CategoryId: 1,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 2,
					Question: "Take care of personal hygiene",
					CategoryId: 1,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 3,
					Question: "Exercise",
					CategoryId: 1,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 4,
					Question: "Wear cloths that help me feel good about myself",
					CategoryId: 1,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 5,
					Question: "Eat regularly",
					CategoryId: 1,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 6,
					Question: "Participate in fun activites (e.g. walking, swimming, dancing, sport)",
					CategoryId: 1,
					Answer: 2,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 7,
					Question: "Get enough sleep",
					CategoryId: 1,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 8,
					Question: "Go to preventative medical appointment (e.g. checkups, teeth cleanings)",
					CategoryId: 1,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 9,
					Question: "Rest when sick",
					CategoryId: 1,
					Answer: 2,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 10,
					Question: "Overall physical self-care",
					CategoryId: 1,
					Answer: 0,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
			]
		},
		{
			CategoryId: 2,
			Category: "Psychological/Emotional Self-Care",
			CreateDt: null, 
			UpdatedDt: null,
			Questions: [
				{
					QuestionId: 11,
					Question: "Take time off from work, school, and other obligatons",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 12,
					Question: "Participate in hobbies",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 13,
					Question: "Get away from distractions (e.g. phone, email)",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 14,
					Question: "Learn new things, unrelated to work or school",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 15,
					Question: "Exress my feelings in a healthy way (e.g. talking, creating art, journaling)",
					CategoryId: 2,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 16,
					Question: "Recognize my own strengths and achievements",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 17,
					Question: "Go on vacations or day trips",
					CategoryId: 2,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 18,
					Question: "Do something comforting (e.ge rewatching a favorite movie, taking a long bath)",
					CategoryId: 2,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 19,
					Question: "Find reasons to laugh",
					CategoryId: 2,
					Answer: 2,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 20,
					Question: "Talk about my problems",
					CategoryId: 2,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 21,
					Question: "Overall psychological and emotional self-care",
					CategoryId: 2,
					Improve: true,
					Answer: 1,
					CreateDt: null, 
					UpdatedDt: null
				}
			]
		},
		{
			CategoryId: 3,
			Category: "Social Self-Care",
			CreateDt: null, 
			UpdatedDt: null,
			Questions: [
				{
					QuestionId: 22,
					Question: "Spend time with people who I like",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 23,
					Question: "Call or write to friends and family who are far away",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 24,
					Question: "Have stimulating conversations",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 25,
					Question: "Meet new people",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 26,
					Question: "Spend time alone with my romantic partner",
					CategoryId: 3,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 27,
					Question: "Ask others for help, when needed",
					CategoryId: 3,
					Answer: 3, 
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 28,
					Question: "Do enjoyable activities with other people",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 29,
					Question: "Have intimate time with my romantic partner",
					CategoryId: 3,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 30,
					Question: "Keep in touch with old friends",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 31,
					Question: "Overall social self-care",
					CategoryId: 3,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
			]
		},
		{
			CategoryId: 4,
			Category: "Spiritual Self-Care",
			CreateDt: null, 
			UpdatedDt: null,
			Questions: [
				{
					QuestionId: 32,
					Question: "Spend time in nature",
					CategoryId: 4,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 33,
					Question: "Meditate",
					CategoryId: 4,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 34,
					Question: "Pray",
					CategoryId: 4,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 35,
					Question: "Recognize the things that give meaning to my life",
					CategoryId: 4,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 36,
					Question: "Act in accordance with my morals and Answers",
					CategoryId: 4,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 37,
					Question: "Set aside time for thought and reflection",
					CategoryId: 4,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 38,
					Question: "Participate in a cuase that is important to me",
					CategoryId: 4,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 39,
					Question: "Appreciate art that is impactful to me (e.g. music, film, liteture)",
					CategoryId: 4,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 40,
					Question: "Overall spiritual self-care",
					CategoryId: 4,
					Answer: 1,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
			]
		},
		{
			CategoryId: 5,
			Category: "Professional Self-Care",
			CreateDt: null, 
			UpdatedDt: null,
			Questions: [
				{
					QuestionId: 41,
					Question: "Improve my professional skills",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 42,
					Question: "Say \"no\" to excessive new responsibilities",
					CategoryId: 5,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 43,
					Question: "Take on projects that are interesting or rewarding",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 44,
					Question: "Learn new things related to my profession",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 45,
					Question: "Make time to talk and build relationships with colleagues",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 46,
					Question: "Take breaks during work",
					CategoryId: 5,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 47,
					Question: "Maintain balance between my professional and personal life",
					CategoryId: 5,
					Answer: 1,
					Improve: true,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 48,
					Question: "Keep a comforable workspace that allows me to be successfuly",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 49,
					Question: "Advocate for fair pay, benefits, and other needs",
					CategoryId: 5,
					Answer: 3,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				},
				{
					QuestionId: 50,
					Question: "Overall professional self-care",
					CategoryId: 5,
					Answer: 2,
					Improve: false,
					CreateDt: null, 
					UpdatedDt: null
				}
			]
		}
	]
}

describe('Testing Build Assessment', () => {
    test('Build Assessment', () => {
		let actual: Assessment = AssessmentBuilder.buildAssessment(form, questions, categories, userData)
      expect(actual).toStrictEqual(expected);
    })
})