import firebase from 'firebase'

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
    this.sTitulo="Login";
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
  }
}
}
