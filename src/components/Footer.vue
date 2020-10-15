<template>
  <footer class="logos fixed-bottom text-center">
    <a href="tel:+33769552043" target="_blank">
      <img
        class="logo img-fluid"
        src="../../src/assets/img/phone.png"
        alt="0769552043"
      />
      <span class="d-none">0769552043</span>
    </a>
    <a href="https://www.linkedin.com/in/alain-orluk" target="_blank">
      <img
        class="logo img-fluid"
        id="youneedme"
        src="../../src/assets/img/YouneedAlain.png"
        alt="https://www.linkedin.com/in/alain-orluk"
      />
      <span class="d-none">Linkedin</span>
    </a>
    <a href="https://github.com/AlaiWebDev" target="_blank">
      <img
        class="logo img-fluid"
        src="../../src/assets/img/worldwideweb.png"
        alt="https://github.com/AlaiWebDev"
      />
      <span class="d-none">Github</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  border: 3px solid #ffffff;
  border-radius: 10px;
  font-family: "Roboto Mono", monospace;
  background-color: dimgray;
  a {
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-right: 30px;
    margin-left: 30px;
    text-decoration: none;
    .logo {
      height: 40px;
      margin: 15px;
      #youneedme {
        border-radius: 10px;
      }
    }
  }
  a:hover {
    transform: scale(1.1);
    text-decoration: none;
    cursor: default;
  }
}
</style>