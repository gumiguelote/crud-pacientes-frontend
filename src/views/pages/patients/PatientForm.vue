<template>
  <div>
    <HeaderPageTitle />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderPageTitle from "@/components/HeaderPageTitle/HeaderPageTitle.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HeaderPageTitle
  }
};
</script>
