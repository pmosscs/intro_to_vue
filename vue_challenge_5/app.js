const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputValue: "",
      taskListIsVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
