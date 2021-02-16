<template>
  <b-row class="h-100 bg-content">
    <b-col>
      <router-view />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.bg-content {
  background-color: #ebfcff;
}
</style>
