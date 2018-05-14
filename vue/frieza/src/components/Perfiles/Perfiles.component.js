import { EventBus } from '../../Events/events_bus';
import firebase from 'firebase'

export default {
  name: 'perfiles',
  components: {},
  props: [],
  data () {
    return {

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
      firebase.firestore().collection("Perfiles").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){

          console.log(doc.id, " => ", doc.data());
        });
      });
    }
  }
}
