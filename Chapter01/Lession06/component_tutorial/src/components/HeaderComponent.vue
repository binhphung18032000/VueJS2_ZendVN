<template>
  <header>
    <h1>{{ contentHeader }}</h1>
  </header>
</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      contentHeader: "Xin chào người dùng truy cập đến trang Header ^^",
    };
  },
};
</script>
