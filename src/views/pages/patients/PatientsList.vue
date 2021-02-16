<template>
  <div class="pr-3 overflow-auto">
    <HeaderPageTitle />
    <SearchCardBox />

    <b-row class="my-3 patient-list">
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
    </b-row>
  </div>
</template>

<script>
import HeaderPageTitle from "@/components/HeaderPageTitle/HeaderPageTitle.vue";
import SearchCardBox from "@/components/SearchCardBox/SearchCardBox.vue";
import PatientCard from "../../../components/PatientCard/PatientCard.vue";

export default {
  name: "PatientsList",
  created() {
    document.title = "Lista de Pacientes";
  },
  components: {
    HeaderPageTitle,
    SearchCardBox,
    PatientCard
  }
};
</script>
<style scoped>
.patient-list {
  overflow: scroll;
  height: 500px !important;
  padding-bottom: 200px;
}
</style>
