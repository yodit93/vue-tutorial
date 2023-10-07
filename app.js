const app = Vue.createApp({
//    data function in Vue object that creates a variable and accessebile in template
    data() {
        return {
            showBooks: true,
            title: "Hello Vue.js",
            author: "Yodit",
            age: 31,
            x: 0,
            y: 0
        }
    },
    // component method using method property, any method should be placed here
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e)
            if(data) {
                console.log(data);
            }
        },
        handleMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app");