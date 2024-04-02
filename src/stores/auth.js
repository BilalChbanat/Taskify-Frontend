import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async getToken() {
      return axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const data = await axios.get("/api/user");
      this.authUser = data.data;
    },

    async handlelogin(data) {
      await this.getToken();
      await axios.post("http://127.0.0.1:8000/api/login", {
        email: data.email,
        password: data.password,
      });
      this.router.push("/");
    },

    async handleRegister(data) {
      await this.getToken();
      await axios.post("http://127.0.0.1:8000/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      this.router.push("/");
    },
  },
});
