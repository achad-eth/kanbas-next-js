import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao() {
  const enrollUserInCourse = (userId, courseId) => {
    const newEnrollment = {
      _id: uuidv4(),
      user: userId,
      course: courseId,
    };
    return model.create(newEnrollment);
  };

  const unenrollUserFromCourse = (userId, courseId) => {
    return model.deleteOne({ user: userId, course: courseId });
  };

  const findEnrollmentsForUser = (userId) => {
    return model.find({ user: userId });
  };

  const findEnrollment = (userId, courseId) => {
    return model.findOne({ user: userId, course: courseId });
  };

  return {
    enrollUserInCourse,
    unenrollUserFromCourse,
    findEnrollmentsForUser,
    findEnrollment,
  };
}