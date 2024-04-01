<template>
  <div>
    <ChildComponent></ChildComponent>
    <blogs></blogs>
  </div>
</template>

<script>
import ChildComponent from '../components/Hero.vue';
import blogs from '../components/blogs.vue';

export default {
  components: {
    ChildComponent,
    blogs
  }
};
</script>

