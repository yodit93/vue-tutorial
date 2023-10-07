const app = Vue.createApp({
//    data function in Vue object that creates a variable and accessebile in template
    data() {
        return {
            title: "Hello Vue.js",
            author: "Yodit",
            age: 31
        }
    }
})

app.mount("#app");