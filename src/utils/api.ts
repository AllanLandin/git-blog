import axios from "axios";

export const myGithubAPI = axios.create({
  baseURL: "https://api.github.com/users/allanLandin",
});
