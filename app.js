const app = Vue.createApp({
//    data function in Vue object that creates a variable and accessebile in template
    data() {
        return {
            showBooks: true,
            title: "Hello Vue.js",
            author: "Yodit",
            age: 31
        }
    },
    // component method using method property, any method should be placed here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app");