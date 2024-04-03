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

export const readTitleById = () => {
  return client
    .get(`/title/1`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const updateTitle = (title) => {
  return client
    .put(`/title/1`, title)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const deleteTitle = () => {
  return client
    .delete(`/title/1`)
    .then((response) => {
      console.info("Title deleted successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error deleting title:", error);
    });
};
