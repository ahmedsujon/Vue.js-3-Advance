var app = Vue.createApp ({
    data() {
        return{
            num: "",
            result: "",
            
            count: 0,

            msg: "Welcome To VueJs adnance 3",
            projectInfo:{
                name: "Vue Js 3 Advance",
                github: "https://github.com/ahmedsujon"
            }
        };
    },

    methods: {
        handleInput(e){
            this.num = e.target.value;
        },
        getDouble(){
            this.result = this.num * 2;
        },

        getSquar(){
            this.result = this.num * this.num;
        },
        reset(){
            this.num = "";
            this.result = "";
        },

    }
     
});

app.mount('#app');