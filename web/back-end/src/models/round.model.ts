import { Course } from "./course.model"
import { Golfer } from "./golfer.model"

export interface Round {
   id: number,
   course_id: number,
    golfer_id: number,
    score: number,
    course?: Course,
    golfer?: Golfer
}