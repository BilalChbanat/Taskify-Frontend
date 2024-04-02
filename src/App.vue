<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
const handleLogout = () => authStore.handleLogout();
</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <RouterLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl"><span class="text-blue-500"><b>Task</b></span><span class="text-purple-800"> <b>ify
            </b></span></span>
      </RouterLink>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <RouterLink to="/" class="mr-5 hover:text-purple-700">Home</RouterLink>

        <template v-if="!authStore.user">
          <RouterLink to="/login" class="mr-5 hover:text-purple-700">Login</RouterLink>
          <RouterLink to="/register" class="mr-5 hover:text-purple-700">Register</RouterLink>
        </template>
        <template v-else-if="authStore.user">
          <RouterLink to="/tasks" class="mr-5 hover:text-purple-700">My Tasks</RouterLink>
          <button @click="handleLogout" class="mr-5 px-2 py-1 rounded-md text-white bg-sky-400 hover:bg-sky-500">Log out
          </button>
        </template>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
