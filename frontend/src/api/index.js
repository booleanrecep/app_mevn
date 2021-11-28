import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://a-pp.herokuapp.com/api/"
      : "http://localhost:3000/api/",
});
