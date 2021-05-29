import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ea61b.cloudfunctions.net/api", // The API (cloud function) URL
  // baseURL: "http://localhost:5001/clone-ea61b/us-central1/api", // The API (cloud function) URL
});

export default instance;
