
/*class Perfil{
  constructor(id, datos){
    this.id = id
    this.name = datos.UserName
    this.power = datos.NivelDePoder
    this.range = datos.Rango
    console.log("Nombre: "+this.name);
  }
}
*/

export default{
  computed:{
setPerfil (id, datosPerfil){
  this.props_docobjperfil = new Perfil(id, datosPerfil)
}
  },
  data(){
    return{
      props_blIsLoggedIn: false,
      props_objuser: null,
    //  props_docobjperfil: null
    }
  }
}
