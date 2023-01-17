const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  //watch is a nother method that acts like useEffect. Methods run when what they are watching changes
  computed: {
    //does not run the same as the method section - will not run again with other functions
    fullName() {
      console.log("running the function");
      if (this.name === "") {
        return "";
      } else {
        return this.name + " " + "Moss";
      }
    },
  },
  methods: {
    //each method will run anytime a method runs
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      console.log("running the function");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Moss";
    },
  },
});

app.mount("#events");
