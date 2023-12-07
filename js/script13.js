const App = Vue.createApp({
   
});
App.component('play',{
    data(){
        return{
            name:'',
            lastname:'',
            password:'',
            confirm:'',
            email:'',
        }
    },
    template: ` 
    <div>
        <p>Firstname: </p><input v-model="name" type="text" class="put"/>
        <p>Lastname: </p><input v-model="lastname" type="text"  class="put" />
        <p>Email: </p><input v-model="email" type="text" class="put"/>
        <p>Password: </p><input v-model="password" type="text" class="put"/>
        <p>Password confirm: </p><input v-model="confirm" type="text" id="phone" class="put"/><br><br><br>
        <button @click="form" v-show="all">Send</button>
     </div>`,
    watch:{
        confirm(){
            if(this.confirm !== this.password){
                document.getElementById("phone").style.backgroundColor="orangered";
                console.log('error');
            }
            else{
                document.getElementById("phone").style.backgroundColor="white";
            }
        }
    },
    computed:{
        all(){
            return this.name !== '' && this.password !== '' && this.lastname !== '' && this.confirm !== '' && this.email !== '';
        },
        valid(){
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
        }
    },
    methods:{
        form(){
            this.all;
            if(this.all && this.password === this.confirm && this.valid){
                alert("success")
                console.log("firstname: " + this.name);
                console.log("lastname: " + this.lastname);
                console.log("email: " + this.email);
            }else{
                alert('error validation')
            }
        }
    }
})
App.mount('#app');
