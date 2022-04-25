import axios from "axios";
export default axios.create({
  // axios instance
  baseURL: "http://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
});
