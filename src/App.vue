<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <RouterLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl"><span class="text-blue-500"><b>Task</b></span><span class="text-purple-800"> <b>ify
            </b></span></span>
      </RouterLink>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <RouterLink to="/about" class="mr-5 hover:text-purple-700">About Us</RouterLink>
        <RouterLink to="/tasks" class="mr-5 hover:text-purple-700">My Tasks</RouterLink>
        <RouterLink to="/login" class="mr-5 hover:text-purple-700">Login</RouterLink>
        <RouterLink to="/register" class="mr-5 hover:text-purple-700">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
