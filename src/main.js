import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

createApp(App).mount("#app")

const mike = {
  name: "Mike",
  age: 18
}

var a = {
  name: "aaa"
}

var b = {
  name: "bbb"
}

console.log(mike, a, b /*c, d*/)
