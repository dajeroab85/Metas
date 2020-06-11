		
	//cambiar imagen de fondo por una lista aleatoria.
    //Nahuel Jose
    $( function(){
        var arrImagenes = [ 'trazo_fondo_motivacion.png','trazo_fondo_educacion.png', 'trazo_fondo_trabajo.png', 'trazo_fondo_actitud.png' ];
        var imagenActual = 'trazo_fondo_motivacion.png';
        var tiempo = 3000;
        var id_contenedor = 'valores'
        setInterval( function(){
            do{
                var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
            }while( randImage == imagenActual )
            imagenActual = randImage;
            cambiarImagenFondo(imagenActual, id_contenedor);
        }, tiempo)
    })
     
    function cambiarImagenFondo(nuevaImagen, contenedor){
        var contenedor = $('#' + contenedor);
        //cargar imagen primero
        var tempImagen = new Image();
        $(tempImagen).load( function(){
            contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
        });
        tempImagen.src = 'Images/' + nuevaImagen;
    }		
