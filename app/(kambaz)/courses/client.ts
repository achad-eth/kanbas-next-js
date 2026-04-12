import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const axiosWithCredentials = axios.create({ withCredentials: true });

const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

export const fetchEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
  return data;
};

export const enrollInCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/${courseId}/enrollment`
  );
  return data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${USERS_API}/current/courses/${courseId}/enrollment`
  );
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return data;
};

export const deleteModule = async (moduleId: string) => {
  const { data } = await axios.delete(`${MODULES_API}/${moduleId}`);
  return data;
};

export const updateModule = async (module: any) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};