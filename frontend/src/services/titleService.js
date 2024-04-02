import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const addTitle = (checklistTitle) => {
  return client
    .post("/title", checklistTitle)
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

export const readTitle = () => {
  return client
    .get("/title")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const readTitleById = (id) => {
  return client
    .get(`/title/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const updateTitle = (id, title) => {
  return client
    .put(`/title/${id}`, title)
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

export const deleteTitle = (id) => {
  return client
    .delete(`/title/${id}`)
    .then((response) => {
      console.info("Title deleted successfully:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error deleting title:", error);
      throw error;
    });
};
