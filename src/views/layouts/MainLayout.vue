<template>
  <div class="h-100 overflow-hidden">
    <HeaderBar />
    <b-row class="h-100">
      <b-col cols="2" class="bg-light">
        <div class="px-4 py-2 h-100">
          <router-link to="/"><p>Pacientes</p></router-link>
          <router-link to="/about"><p>Sobre</p></router-link>
        </div>
      </b-col>
      <b-col>
        <Content />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderMenu/HeaderBar.vue";
import Content from "./Content.vue";

export default {
  name: "MainLayout",
  components: {
    HeaderBar,
    Content
  }
};
</script>
