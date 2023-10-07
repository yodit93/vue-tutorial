const app = Vue.createApp({
//    data function in Vue object that creates a variable and accessebile in template
    data() {
        return {
            title: "Hello Vue.js",
            author: "Yodit",
            age: 31
        }
    },
    // component method using method property, any method should be placed here
    methods: {
        changeTitle (title) {
            // this references the component itself
           this.title = title
        }
    }
})

app.mount("#app");