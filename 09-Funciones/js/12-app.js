

const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion cancion con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando PlayList ${nombre}`),
    BorrarPlayList: nombre => console.log(`Borrando PlayList ${nombre}`) 
}

reproductor.reproducir(25)
reproductor
