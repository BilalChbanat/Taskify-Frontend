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

    async handleLogin(data) {
      await this.getToken();
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: data.email,
        password: data.password,
      });
      const token = response.data.access_token; // Access token property
      console.log(response.data);
      localStorage.setItem("token", token);
      this.router.push("/");
    },

    async handleRegister(data) {
      await this.getToken();
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });
      const token = response.data.access_token; // Access token property
      console.log(response.data);
      localStorage.setItem("token", token);
      this.router.push("/");
    },

    async handleLogout() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found.");
        }

        await axios.post("http://127.0.0.1:8000/api/logout", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        localStorage.removeItem("token");
        this.authUser = null;
        this.router.push("/");
      } catch (error) {
        console.error("Error logging out:", error);
        // Handle error gracefully, such as redirecting to login page
        this.router.push("/login");
      }
    },
  },
});
