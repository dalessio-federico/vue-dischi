Vue.config.devtools = true;

var root = new Vue({
    
    el: "#root",

    data : {
        albumList : [],
        albumGender : [],
        gender : ""
    },

    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((r) => 
            {
                r.data.response.forEach(e => {
                    this.albumList.push(e);
                    if(this.albumGender.includes(e.genre))
                    {
                        null;
                    }
                    else
                    {
                        this.albumGender.push(e.genre);
                    }
                });
            });
    }
})