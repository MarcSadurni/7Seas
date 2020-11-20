import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true,
    });
  }

  signup({ username, password }) {
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
  }

  login({ username, password }) {
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  }

  profile(id){
    return this.auth.get(`/profile/${id}`).then(({data}) => {
      return data});
  }

  edituser(id){
    return this.auth.get("/profile/edituser" + id).then(({data}) =>{
      return data});
  }

  editboat(id){
    return this.auth.get("/profile/editboat" + id).then(({data}) =>{
      return data});
  }

}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;