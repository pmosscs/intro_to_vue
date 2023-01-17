const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    counterAdd(num) {
      this.counter += num;
    },
    counterMinus(num) {
      this.counter -= num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("sup");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
