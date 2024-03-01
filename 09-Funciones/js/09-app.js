
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion cancion con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando PlayList ${nombre}`);
    },
    BorrarPlayList: function(nombre){
        console.log(`Borrando PlayList ${nombre}`)
    }
}

reproductor.reproducir(24)
reproductor.reproducir(20)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist("alexia")
reproductor.BorrarPlayList("alexia")
