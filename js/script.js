const { createApp } = Vue 

createApp({
    data() {
        return {
            text: "Ciao, stai utilizzando Vue.js!",  
            imgSrc: "https://nystudio107.com/img/blog/_1200x630_crop_center-center_82_none/vue-js-3.jpg?mtime=1590804417",
            imgAlt: "logo"
        }
    }
}).mount("#app");