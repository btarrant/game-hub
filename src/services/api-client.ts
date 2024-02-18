import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c5dfa5bef05474998d40bfd29b36ad0",
  },
});
