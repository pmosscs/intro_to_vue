const app = Vue.createApp({
  data() {
    return {
      myName: "Peyton",
      myAge: 28,
      thisImage:
        "https://pbs.twimg.com/profile_images/1501426412116398080/IlNLkJDe_400x400.jpg",
    };
  },
  methods: {
    myAgePlusFive() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
