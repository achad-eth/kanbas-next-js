import model from "./model.js";
import enrollmentModel from "../enrollments/model.js";
import { v4 as uuidv4 } from "uuid";

export default function CoursesDao() {
  const findAllCourses = () => model.find();

  const findCoursesForEnrolledUser = async (userId) => {
    const enrollments = await enrollmentModel.find({ user: userId });
    const courseIds = enrollments.map((e) => e.course);
    return model.find({ _id: { $in: courseIds } });
  };

  const createCourse = (course) => {
    const newCourse = { ...course, _id: uuidv4() };
    return model.create(newCourse);
  };

  const deleteCourse = async (courseId) => {
    await enrollmentModel.deleteMany({ course: courseId });
    return model.deleteOne({ _id: courseId });
  };

  const updateCourse = async (courseId, courseUpdates) => {
    await model.updateOne({ _id: courseId }, { $set: courseUpdates });
    return model.findById(courseId);
  };

  return {
    findAllCourses,
    findCoursesForEnrolledUser,
    createCourse,
    deleteCourse,
    updateCourse,
  };
}