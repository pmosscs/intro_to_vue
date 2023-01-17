Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// const inputEl = document.getElementById("goal");
// const addBtn = document.querySelector("button");
// const listEl = document.querySelector("ul");

// function clickEvent() {
//   const inputValue = inputEl.value;
//   const newLi = document.createElement("li");
//   newLi.textContent = inputValue;
//   listEl.appendChild(newLi);
//   inputEl.value = "";
// }

// addBtn.addEventListener("click", clickEvent);
