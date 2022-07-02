<template>
  <header-component />
  <section>
    <h1>{{ contentApp }}</h1>
    <list-user />
  </section>
  <footer-component />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListUser from "./components/ListUser";

export default {
  name: "App",
  data() {
    return {
      contentApp: "Đây là phần hiển thị cố định của website ><",
    };
  },
  components: {
    HeaderComponent,
    FooterComponent,
    ListUser,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
