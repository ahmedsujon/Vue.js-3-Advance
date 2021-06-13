var app = Vue.createApp ({
    data() {
        return{
            
            count: 0,

            msg: "Welcome To VueJs adnance 3",
            projectInfo:{
                name: "Vue Js 3 Advance",
                github: "https://github.com/ahmedsujon"
            }
        };
    },

    methods: {
        increase(){
            this.count = this.count +1;
        },

        decrease(){
            this.count = this.count -1;
        },

        getCurrentTime() {
            let ct = new Date();
            return new Date();
        }
    }
    
});

app.mount('#app');