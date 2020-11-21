<template>
  <div class="hello">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo"
          ><img class="logo" src="../assets/logoc.jpg" alt=""
        /></a>
        <img class="logo-name" src="../assets/cfsl.png" alt="" />
        <div class="uk-navbar-item">
          <input
            v-model="value"
            class="uk-input uk-form-width"
            type="text"
            placeholder="Input"
          />
          <button class="uk-button uk-button-default">Button</button>
        </div>
      </div>
    </nav>

    <div
      class="uk-child-width-1-3@m"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
    >
      <div v-for="item in listTemp" :key="item.id">
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">Fade</h3>
          <img :src="item" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.searchEmpty();
  },
  watch: {
    value(value) {
      this.search(value);
    },
  },
  data() {
    return {
      value: "",
      list: [
        require("../assets/bralette-m-blanco-5.jpeg"),
        require("../assets/bralette-m-gris-2.jpeg"),
        require("../assets/bralette-m-rojo-6.jpeg"),
        require("../assets/bralette-s-rojo-8.jpeg"),
        require("../assets/bralette-m-blanco-9.jpeg"),
        require("../assets/bralette-m-gris3.jpeg"),
        require("../assets/bralette-s-blanco-10.jpeg"),
        require("../assets/bralette-m-blanco.jpeg"),
        require("../assets/bralette-m-rojo-1.jpeg"),
        require("../assets/bralette-s-negro-7.jpeg"),
      ],
      listTemp: [],
    };
  },
  methods: {
    search() {
      let value = this.value;
      console.log(value);
      this.listTemp = this.list.filter((img) => {
        let n = img.search("" + value);
        if (n == -1) {
          console.log("no", n);
        } else {
          console.log("si", n);
          return img;
        }
      });
      console.log(this.list);
    },
    searchEmpty() {
      this.listTemp = this.list;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  height: 15%;
  width: 20%;
  border-radius: 50%;
}
.logo-name {
  width: 20%;
  margin-left: -123px;
}
</style>
