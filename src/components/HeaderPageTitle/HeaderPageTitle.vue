<template>
  <div class="mt-3 mb-4">
    <h2 class="m-0 p-0">{{ pageTitle }}</h2>
    <small>{{ pageSubtitle }}</small>
  </div>
</template>

<script>
export default {
  name: "HeaderPageTitle",
  data: () => {
    return {
      pageTitle: "Listagem de pacientes",
      pageSubtitle: "Listagem dos pacientes cadastrados no sistema"
    };
  }
};
</script>
