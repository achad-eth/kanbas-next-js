import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export const fetchAssignments = async (cid: string) => {
  const response = await axiosWithCredentials.get(
    `${HTTP_SERVER}/api/courses/${cid}/assignments`
  );
  return response.data;
};

export const createAssignment = async (cid: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/courses/${cid}/assignments`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  await axiosWithCredentials.delete(`${HTTP_SERVER}/api/assignments/${aid}`);
};

export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${HTTP_SERVER}/api/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};
