import { EventBus } from '../../Events/events_bus';
import firebase from 'firebase'

class Perfil{
  constructor(id, datos){
    this.id = id
    this.name = datos.UserName
    this.power = datos.NivelDePoder
    this.range = datos.Rango
    console.log("Nombre: "+this.name);
  }
}

export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {
      Perfil: []
    }
  },
  created: function(){

  },
  computed: {

  },
  mounted () {
    EventBus.$on('loginregister_userstatechanged', blestado => {
      //this.blLoggedUser=blestado
      if(blestado){
        this.deacargarPerfiles();
      }
    });
  },
  methods: {
    deacargarPerfiles: function(){
      var that=this
      firebase.firestore().collection("Perfil").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){

          //console.log(doc.id, " => ", doc.data());
          that.Perfil.push(new Perfil(doc.id,doc.data()))
        });
      });
    }
  }
}
