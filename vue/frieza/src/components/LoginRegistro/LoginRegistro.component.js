import firebase from 'firebase';
import { EventBus } from '../../Events/events_bus';

var provider = new firebase.auth.FacebookAuthProvider();
var provider2 = new firebase.auth.TwitterAuthProvider();
var provider3 = new firebase.auth.GoogleAuthProvider();
export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
		blLoginVisible: true,
		sTitulo:"Login Email",
    sEmail:'',
    sPassword:'',
    sNombre:'',
    sNivelDePoder:'',
    sRango:''
    }
  },
  created: function(){
    firebase.auth().onAuthStateChanged((user) => {
    //  this.props_objuser = user;

      console.log("User----->"+user)
      if(user){
        this.props_blIsLoggedIn = true;
      var docRef = firebase.firestore().collection("perfiles").doc(user.uid+ "");
        docRef.get().then(function(doc) {
            if (doc.exists) {
              //  console.log("Document data:", doc.data());
              //this.props_docobjperfil = doc.data();
              this.setPerfil(doc.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No existe este perfil");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
             });
      }
      else{
        this.props_blIsLoggedIn = false;

      }

      EventBus.$emit('loginregister_userstatechanged',this.props_blIsLoggedIn)
      console.log("this.props_blIsLoggedIn:"+this.props_blIsLoggedIn)
      console.log("this.dentro:"+this.dentro)
    });
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
  clickDeBotonLoginG:function(event){
    this.blLoginVisible=true;
    this.sTitulo="Login Google";
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
        //alert("Estas dentro"+user);
      },
      function(error){
        alert(error);
      }
);
},
Enviar: function(event){
console.log(this.sEmail);
firebase.firestore().collection("Perfil").add({
    UserName: this.sNombre,
    NivelDePoder: this.sNivelDePoder,
    Rango: this.sRango
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

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
},
  logout: function(event){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  },
loguearG: function(event){
  firebase.auth().signInWithPopup(provider3).then(function(result3) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token3 = result.credential.accessToken;
  // The signed-in user info.
  var user3 = result.user;
  // ...
}).catch(function(error3) {
  // Handle Errors here.
  var errorCode3 = error.code;
  var errorMessage3 = error.message;
  // The email of the user's account used.
  var email3 = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential3 = error.credential;
  // ...
});
}
}
}
