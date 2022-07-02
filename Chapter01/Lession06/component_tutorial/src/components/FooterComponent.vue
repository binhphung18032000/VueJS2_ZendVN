<template>
  <footer>
    <h1>{{ contentFooter }}</h1>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  data() {
    return {
      contentFooter: "Xin chào người dùng truy cập đến trang Footer ^^^^^^",
    };
  },
};
</script>
