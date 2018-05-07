import firebase from 'firebase'
var provider = new firebase.auth.FacebookAuthProvider();
export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
		blLoginVisible: true,
		sTitulo:"Login",
    sEmail:'',
    sPassword:''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
	clickDeBotonRegistro:function(event){
		this.blLoginVisible=false;
		this.sTitulo="Registro";
  },
  clickDeBotonLogin:function(event){
    this.blLoginVisible=true;
    this.sTitulo="Login Email";
  },

  clickDeBotonLoginT:function(event){
    this.blLoginVisible=true;
    this.sTitulo="Login Twitter";
  },
  registrar: function(event){
    firebase.auth().createUserWithEmailAndPassword(this.sEmail, this.sPassword).then(
      function(user) {
        alert("Registrado");
      },
      function(error){
        alert(error);
      }
);
},

   logear: function(event){
    firebase.auth().signInWithEmailAndPassword(this.sEmail, this.sPassword).then(
      function(user) {
        alert("Estas dentro");
      },
      function(error){
        alert(error);
      }
);
},
loguearF: function(event){
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});},
clickDeBotonLogout: function(event){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});}


  /* Aqui mete el login de Twitter
   logearT: function(event){
    firebase.auth().signInWithEmailAndPassword(this.sEmail, this.sPassword).then(
      function(user) {
        alert("Estas dentro");
      },
      function(error){
        alert(error);
      }
);
  }
  */
}
}
