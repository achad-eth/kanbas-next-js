import axios from "axios";

const API = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const fetchModules = async (courseId: string) => {
  const response = await axios.get(`${API}/api/courses/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${API}/api/courses/${courseId}/modules`,
    module
  );
  return response.data;
};

export const updateModule = async (courseId: string, module: any) => {
  const response = await axios.put(
    `${API}/api/courses/${courseId}/modules/${module._id}`,
    module
  );
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(
    `${API}/api/courses/${courseId}/modules/${moduleId}`
  );
  return response.data;
};