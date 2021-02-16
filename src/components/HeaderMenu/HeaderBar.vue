<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="/">
      <img
        src="https://telesaude.om30.cloud/static/media/logo.64a1b1d3.png"
        height="40"
      />
    </b-navbar-brand>
    <b-navbar-brand href="#">
      <img
        src="https://cotia.sp.gov.br/public_html/imagens/logo.png"
        height="30"
      />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-avatar
              badge
              badge-variant="success"
              src="https://randomuser.me/api/portraits/thumb/women/44.jpg"
            ></b-avatar>
          </template>
          <b-dropdown-item href="#">Meu perfil</b-dropdown-item>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "HeaderBar"
};
</script>
