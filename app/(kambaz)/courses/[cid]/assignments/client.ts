import axios from "axios";

const API = `${process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000"}/api`;

export const fetchAssignments = async (cid: string) => {
  const response = await axios.get(`${API}/courses/${cid}/assignments`);
  return response.data;
};

export const createAssignment = async (cid: string, assignment: any) => {
  const response = await axios.post(
    `${API}/courses/${cid}/assignments`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (aid: string) => {
  await axios.delete(`${API}/assignments/${aid}`);
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(
    `${API}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};