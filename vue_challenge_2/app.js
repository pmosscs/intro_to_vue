const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
      confirmed2: "",
    };
  },
  methods: {
    clickAlert() {
      alert("alert");
    },
    output1method(event) {
      this.output1 = event.target.value;
    },
    output2dope(event) {
      this.output2 = event.target.value;
    },
    output2method() {
      this.confirmed2 = this.output2;
    },
  },
});

app.mount("#assignment");
