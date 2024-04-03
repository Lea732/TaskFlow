import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const addItem = (checklistItem) => {
  return client
    .post("/checklist", checklistItem)
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

export const readItem = () => {
  return client
    .get("/checklist")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const readItemById = () => {
  return client
    .get(`/checklist/1`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const updateItem = ({ id, item }) => {
  return client
    .put(`/checklist/${id}`, { item })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const deleteItem = (id) => {
  return client
    .delete(`/checklist/${id}`)
    .then((response) => {
      console.info("Item deleted successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error deleting title:", error);
    });
};
