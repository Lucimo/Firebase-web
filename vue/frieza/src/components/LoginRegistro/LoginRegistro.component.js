import firebase from 'firebase'
var provider = new firebase.auth.FacebookAuthProvider();
var provider2 = new firebase.auth.TwitterAuthProvider();
export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
		blLoginVisible: true,
    blDentro: false,
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
        this.blDentro=true;
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
});},

loguearT: function(event){
  firebase.auth().signInWithPopup(provider2).then(function(result2) {
  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  // You can use these server side with your app's credentials to access the Twitter API.
  var token2 = result.credential.accessToken;
  var secret2 = result.credential.secret;
  // The signed-in user info.
  var user2 = result.user;
  // ...
}).catch(function(error2) {
  // Handle Errors here.
  var errorCode2 = error.code;
  var errorMessage2 = error.message;
  // The email of the user's account used.
  var email2 = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential2 = error.credential;
  // ...
});
}

}
}
