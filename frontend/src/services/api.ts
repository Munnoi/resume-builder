import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const register = async (userData: any) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const login = async (userData: any) => {
  const response = await api.post("/auth/login", userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

// Resume APIs
export const createResume = async (resumeData: any) => {
  const response = await api.post("/resumes", resumeData);
  return response.data;
};

export const getAllResumes = async () => {
  const response = await api.get("/resumes");
  return response.data;
};

export const getResumeById = async (id: string) => {
  const response = await api.get(`/resumes/${id}`);
  return response.data;
};

export const updateResume = async (id: string, resumeData: any) => {
  const response = await api.put(`/resumes/${id}`, resumeData);
  return response.data;
};

export const deleteResume = async (id: string) => {
  const response = await api.delete(`/resumes/${id}`);
  return response.data;
};

export const duplicateResume = async (id: string) => {
  const response = await api.post(`/resumes/${id}/duplicate`);
  return response.data;
};

// Template APIs
export const getAllTemplates = async () => {
  const response = await api.get("/templates");
  return response.data;
};

export const getTemplateById = async (id: string) => {
  const response = await api.get(`/templates/${id}`);
  return response.data;
};

export default api;

