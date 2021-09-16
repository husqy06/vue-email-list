Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        email: [],
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(randommail => {
                for(let i = 0; i < 10; i++) {
                    this.email.push(randommail.data.response)
                }
            })
    }
})