const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "1800 513 6969",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "1800 513 4220",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleView() {
      this.showDetailsStatus = !this.showDetailsStatus;
    },
  },
});

app.component("friend-card", {
  template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <ul v-if="detailsAreVisible === true">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
        </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "1800 513 6969",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
