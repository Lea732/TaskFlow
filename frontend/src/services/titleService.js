import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const addTitle = (checklistTitle) => {
  client
    .post("/title", checklistTitle)
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

export default addTitle;
