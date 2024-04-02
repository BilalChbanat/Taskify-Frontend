<template>
  <div>
    <ChildComponent></ChildComponent>
    <blogs></blogs>
    <footerw></footerw>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import ChildComponent from '../components/Hero.vue';
import blogs from '../components/blogs.vue';
import footerw from '../components/footer.vue';
import { pinia } from 'pinia';
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();

});


export default {
  components: {
    ChildComponent,
    blogs,
    footerw
  }
};
</script>

