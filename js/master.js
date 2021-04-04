Vue.config.devtools = true;

var root = new Vue({
    
    el: "#root",

    data : {
        albumList : [],
        gender : ""
    },

    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((r) => 
            {
                r.data.response.forEach(e => {
                    this.albumList.push(e)
                });
                console.log(this.albumList)
            });
    } 

})