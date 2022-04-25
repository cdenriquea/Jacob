// Creación del módulo
var Jacob_App = angular.module('Jacob_App', ['ui.router','ngStorage','ngDraggable','ui.bootstrap']);



// Configuración de las rutas
Jacob_App.config(function($stateProvider,$urlRouterProvider) {

    $stateProvider
    .state('home', {
            url: '/home',
            templateUrl : 'home.html',
            controller  : 'mainController' 
        })
    .state('registro', {
            url: '/registro',
            templateUrl : 'registro.html',
            controller  : 'registro' 
        })
    .state('cursos', {
            url: '/cursos',
            templateUrl : 'cursosAll.html',
            controller  : 'allcursos' 
        })
    .state('mis_cursos', {
            url: '/mis_cursos',
            templateUrl : 'mis_cursos.html',
            controller  : 'mainController' 
        })
    .state('navegacion', {
            url: '/navegacion',
            templateUrl : 'navegacion.html',
            controller  : 'barra_navegacion',
        })
    .state('objetivos', {
            parent:'navegacion',
            url: '/objetivos',
            views: {
                'seccion_curso': {
                     templateUrl: 'objetivos.html',
                     controller: 'contenido_curso'
                 }
            }
        })
    .state('equipo', {
            parent:'navegacion',
            url: '/equipo',
            views: {
                'seccion_curso': {
                    templateUrl: 'equipo.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('horario', {
            parent:'navegacion',
            url: '/horario',
            views: {
                'seccion_curso': {
                    templateUrl: 'horario.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('teoria', {
            parent:'navegacion',
            url: '/teoria',
            views: {
                'seccion_curso': {
                    templateUrl: 'teoria.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('video-clase', {
            parent:'navegacion',
            url: '/video-clase',
            views: {
                'seccion_curso': {
                    templateUrl: 'video-clase.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('asociacion', {
            parent:'navegacion',
            url: '/asociacion',
            views: {
                'seccion_curso': {
                    templateUrl: 'asociacion.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('unica', {
            parent:'navegacion',
            url: '/unica',
            views: {
                'seccion_curso': {
                    templateUrl: 'unica.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('frase', {
            parent:'navegacion',
            url: '/frase',
            views: {
                'seccion_curso': {
                    templateUrl: 'frase.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('refuerzo', {
            parent:'navegacion',
            url: '/refuerzo',
            views: {
                'seccion_curso': {
                    templateUrl: 'refuerzo.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('taller', {
            parent:'navegacion',
            url: '/taller',
            views: {
                'seccion_curso': {
                    templateUrl: 'taller.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('calificacionT', {
            parent:'navegacion',
            url: '/calificacionT',
            views: {
                'seccion_curso': {
                    templateUrl: 'calificacion-taller.html',
                    controller: 'contenido_curso'
             }
        }
        })
    .state('evaluacion', {
            parent:'navegacion',
            url: '/evaluacion',
            views: {
                'seccion_curso': {
                    templateUrl: 'examen-final.html',
                    controller: 'contenido_curso'
             }
        }
        })
        .state('calificacionE', {
            parent:'navegacion',
            url: '/calificacionE',
            views: {
                'seccion_curso': {
                    templateUrl: 'calificacion-final.html',
                    controller: 'contenido_curso'
             }
        }
        })
    //$urlRouterProvider.otherwise('/home');
 

});

Jacob_App.run( [ '$state', '$rootScope', '$stateParams','$anchorScroll', function( $state, $rootScope,$stateParams,$anchorScroll) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('home');
    $anchorScroll.yOffset = 500;// always scroll by 500 extra pixels

    
    
}]);

Jacob_App.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});

Jacob_App.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
}]);

Jacob_App.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

Jacob_App.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube-nocookie.com/**'
   ]);
 });


Jacob_App.directive('checkSrc', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).success(function(){
                    //alert('Imagen existe');
                }).error(function(){
                    //alert('La imagen no existe');
                    element.attr('src', ''); // set default image
                });
            });
        }
    };
});




Jacob_App.controller('adminController', function($scope,$timeout,$rootScope) {

    var xmlhttp = new XMLHttpRequest();
    var url = "php/user.php";
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var array = JSON.parse(xmlhttp.responseText);
            $timeout(function() { $sessionStorage.idGlobal = array[0].id;$scope.nom_usu = array[0].name; $scope.usu_tipo = array[0].usu_tipo;$scope.emai_usua = array[0].emai_usua;}, 100);        
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 

});

Jacob_App.controller('mainController', function($state,$scope,$timeout,$rootScope,$localStorage,$sessionStorage,filterFilter,$location,$anchorScroll) {
    var xmlhttp = new XMLHttpRequest();
    var url = "php/user.php";
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var array = JSON.parse(xmlhttp.responseText);
            $timeout(function() { 
            $scope.id =array[0].id; $sessionStorage.idGlobal = array[0].id;$scope.nom_usu = array[0].name; $scope.usu_tipo = array[0].usu_tipo;$scope.emai_usua = array[0].emai_usua;
            $.post("php/listar_cursos.php", {valorBusqueda: $scope.id}, function(mensaje) {                                                 
                console.log($sessionStorage.idGlobal);
                var array = JSON.parse(mensaje);
                $timeout(function() {                     
                    $scope.records = array;
               
                    //Funcion boton Iniciar - Continuar - Terminado
                    $scope.progarray = []
                    for(var i = 0;i < $scope.records.length ; i++){

                        if($scope.records[i].progre == 0){
                          $scope.progarray.push('Iniciar')
                        }
                        else{
                        if($scope.records[i].progre == 100){
                            $scope.progarray.push('Completo')
                          }
                          else{
                          $scope.progarray.push('Continuar')
                          }
                        }
                    } 

                }, 10);
            });
        
    }, 50);        
           
        
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 

    $scope.registro = function(){

    }


    $scope.ingresoCurso = function (nombreCurso, imgCurso, infoCurso,progreCurso,evaluacionCurso,id) {
        $sessionStorage.nombreCurso = nombreCurso;
        $sessionStorage.imgCurso = imgCurso;
        $sessionStorage.infoCurso = infoCurso;
        $sessionStorage.progreCurso = progreCurso;
        $sessionStorage.evaluacionCurso = evaluacionCurso;
        $sessionStorage.idCurso = id;
        console.info(id);
        

        //Contenido para curso seleccionado
        $scope.curso = "Contenido Curso";
        $.post("php/contenido_curso.php", {idCurso:$sessionStorage.idCurso}, function(curso) {                                                 
                var array = JSON.parse(curso);
                
                $timeout(function() {                     
                
                    //Revisar Datos //
                    $sessionStorage.tema = array;
                    $sessionStorage.NombModulo = [];
                    $sessionStorage.NombLeccion = [];
                    $sessionStorage.Nota = parseFloat($sessionStorage.evaluacionCurso);
                    for(i=0; i<$sessionStorage.tema.length; i++){
                        $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                        $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    }

                   // Llenar contenido de progreso por seccion //
                    var cont = 0;
                    var cont2 = 0;
                    var progindi = [];
                    $sessionStorage.progSec = [];
                    $sessionStorage.disableSec = [];
                    $sessionStorage.navLink = [];
                    var length = parseInt($sessionStorage.tema.length);
                    for(var i=0; i<$sessionStorage.tema.length; i++){
                        cont = cont+1;
                        progindi[i] = ((100/length)*cont).toFixed(1);
                        $sessionStorage.progSec[i] = progindi[i].toString();
                    };
                    

                    if(progreCurso == 0){
                      progreCurso = $sessionStorage.progSec[0];
                      $sessionStorage.progreCurso= progreCurso;
                    };



                   //////////////Evaluar modulos////////////
                    cont = 0;
                    for(var i=0; i<$sessionStorage.tema.length; i++){
                    cont = cont+1;
                    cont2 = cont+1;
                    if($sessionStorage.progreCurso>0){
                      $sessionStorage.navLink[i] ="nav-link titulos-modulos";
                    }
                     /*Progreso - SECCION ACTUAL*/
                    if($sessionStorage.progSec[i] == $sessionStorage.progreCurso){
                       $sessionStorage.navLink[i] ="nav-link titulos-activos";
                       $scope.inicioSec = $sessionStorage.tema[i].Seccion;
                       $scope.inicioNombSec = $sessionStorage.tema[i].NombSeccion;
                       $scope.contSec =   $sessionStorage.tema[i].Contenido;
                       for(j=0; j<=cont; j++){
                           $sessionStorage.disableSec[j] = "false"
                       };
                       for(j=cont2; j<$sessionStorage.tema.length; j++){
                        $sessionStorage.disableSec[j] = "true"
                       };

                        /*--------------Actualizar botones de navegacion ----------------*/
                        try {
                            $sessionStorage.prevSec = $sessionStorage.tema[i-1].NombSeccion;
                            $sessionStorage.prevProg = $sessionStorage.progSec[i-1];
                            
                            }
                        catch (e) {
                            $sessionStorage.prevSec = $sessionStorage.tema[i].NombSeccion;
                            $sessionStorage.prevProg = $sessionStorage.progSec[i];
                        }

                        try {
                            $sessionStorage.nextSec = $sessionStorage.tema[i+1].NombSeccion;
                            $sessionStorage.nextProg =$sessionStorage.progSec[i+1];
                            }
                        catch (e) {
                            $sessionStorage.nextSec = $sessionStorage.tema[i].NombSeccion;
                            $sessionStorage.nextProg = $sessionStorage.progSec[i];
                        }

                        /*Seccion Actual*/

                       $sessionStorage.actualSec = $scope.inicioSec;
                       $sessionStorage.actualNombSec = $scope.inicioNombSec;

                       switch ($scope.inicioSec) {
                        case "Objetivos":
                            $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("objetivos");
                        break;
                        case "Equipo":
                            $sessionStorage.Equipo = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("equipo");
                        break;
                        case "Horario":
                            $sessionStorage.Horario = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("horario");
                        break;
                        case "Teoria":
                            $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("teoria");
                          break;
                        case "Video":
                            $sessionStorage.Video = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("video-clase");
                          break;
                        case "PruebaAsoc":
                            $sessionStorage.PruebaAsoc = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("asociacion");
                          break;
                        case "PruebaRespUnica":
                            $sessionStorage.PruebaRespUnica = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("unica");
                          break;
                        case "PruebaFrase":
                            $sessionStorage.PruebaFrase = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("frase");
                          break;
                        case "ActividadRef":
                            $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("refuerzo");
                          break;
                        case "Taller":
                            $sessionStorage.Taller = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("taller");
                          break;
                        case "CalificacionT":
                            $sessionStorage.Taller = $sessionStorage.tema[i-1].Contenido.split('</p>');
                            $sessionStorage.CalificacionT = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("calificacionT");
                          break;
                        case "Evaluacion":
                            $sessionStorage.Evaluacion = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("evaluacion");
                        break;
                        case "CalificacionE":
                            $sessionStorage.Evaluacion = $sessionStorage.tema[i-1].Contenido.split('</p>');
                            $sessionStorage.CalificacionE = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("calificacionE");
                        break;
                       }
                    }

               }      

            }, 10);
        }); 
     }

     $scope.logout = function() {
        $sessionStorage.$reset();
     }

});

Jacob_App.controller('registro', function($scope,$timeout) {
    $scope.sss = 2;
     var xmlhttp = new XMLHttpRequest();
        var url = "php/buscar_pais.php";
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var array = JSON.parse(xmlhttp.responseText);                
                $timeout(function() { $scope.paises = array;}, 500);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send(); 

    $scope.cargarDepartamentos = function(){

        var pais = document.getElementById('pais');
        if(pais.value != ''){
            $.post("php/buscar_depa.php", {id_pais: pais.value}, function(mensaje) {                                                 
                var array = JSON.parse(mensaje);
                $timeout(function() {                     
                    $scope.departamentos = array;
                }, 50);                
            });
        }else{

        }        
    }

    $scope.cargarCiudades = function(){

        var departamento = document.getElementById('departamento');       
        if(pais.value != ''){
            $.post("php/buscar_ciud.php", {id_depa: departamento.value}, function(mensaje) {                                                 
                var array = JSON.parse(mensaje);
                $timeout(function() {                     
                    $scope.ciudades = array;
                }, 50);
            });
        }else{

        }        
    }

    $scope.registro = function(){
        console.log($scope.email);
        var pais = document.getElementById('pais');
        var departamento = document.getElementById('departamento');
        var ciudad = document.getElementById('ciudad');
        
        if($scope.contrasena != $scope.confirmar){
            alert("Las contrasenas no coinciden!!")
        }
        else{
        $.post("php/registro.php", {NumeDocu: $scope.identificacion,NombUsua: $scope.nombre,EmaiUsua: $scope.email,DireUsua: $scope.dire,Pais: pais.value,Depart: departamento.value,Munici: ciudad.value,TeleUsua: $scope.tele,password: $scope.contrasena,EdadUsua: $scope.edad}, function(mensaje) {                                                 
            
            $timeout(function() {                     
                console.log(mensaje);
				var array = JSON.parse(mensaje);
				if(array[0].message == 'true'){
                    console.log("si");
                    alert("Registro exitoso!!");
                    window.location.href ="login.html";		
				}else{
					if(array[0].message == 'false2'){
						alert("El correo o el documento ya existen!!");
					}else{
						console.log("no");
						alert("Se genero un error!!");
                    }
                			
				}
            }, 50);
        });
      }
    }
    

});



Jacob_App.controller('barra_navegacion', function($scope,$timeout,$rootScope,$sessionStorage,$state,$anchorScroll,$location,$window,$stateParams) {
                 
/*-------------- Reubicar Scroll--------*/
    $timeout(function() {
        
       
       $location.hash($sessionStorage.actualNombSec);
       $anchorScroll();
       $location.hash('');
       
	   
				
    }, 500); 
     $timeout(function() {
        
       
       //$location.hash('logo');
       //$anchorScroll();
       //$location.hash('');
       $window.document.getElementById('jacob').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
       
	   
				
    }, 500); 
    
               

    

    
    
    
/*--------------Listar secciones en barra de navegación------------------*/
                $scope.NombLeccion = $sessionStorage.NombLeccion;
                $scope.NombModulo = $sessionStorage.NombModulo;
                $scope.disableSec = $sessionStorage.disableSec;
                $scope.progSec = $sessionStorage.progSec;
                $scope.navLink = $sessionStorage.navLink;
                $scope.progreCurso = $sessionStorage.progreCurso;
                $scope.prevSec = $sessionStorage.prevSec;
                $scope.nextSec = $sessionStorage.nextSec;
                $scope.prevProg = $sessionStorage.prevProg;
                $scope.nextProg = $sessionStorage.nextProg;

                // Calcular numero de Modulos y Lecciones para listar //

                 var Modulos = $sessionStorage.NombModulo;
                 for(var i = Modulos.length -1; i >=0; i--){
                   if(Modulos.indexOf(Modulos[i]) !== i) Modulos.splice(i,1);
                 }

                var Lecciones = []
                var Secciones = []
                
                for(var i=0; i<$sessionStorage.tema.length; i++){
                    Secciones[i] = {  
                    name:$sessionStorage.tema[i].NombSeccion,
                    Modulo:$sessionStorage.tema[i].NombModulo,
                    Leccion:$sessionStorage.tema[i].NombLeccion,
                    }; 
                    Lecciones[i] = {  
                        name:$sessionStorage.tema[i].NombLeccion,
                        Modulo:$sessionStorage.tema[i].NombModulo,
       
                    };  
                }
                //Filtrar objetos//
                var uniq = {}
                var Lecciones = Lecciones.filter(obj => !uniq[obj.name] && (uniq[obj.name] = true));
                $scope.Modulos = Modulos;
                $scope.Lecciones = Lecciones;
                $scope.Secciones = Secciones;
                // Listar
                for(var i=0; i<$scope.Secciones.length; i++){
                    if( $scope.Secciones[i].name == $sessionStorage.actualNombSec){
                        $scope.SecLecMod = $scope.Secciones[i];
                        break;
                    };

                };
                    
                $scope.NombSeccion = [];
                $scope.Iconos = [] ;
                $scope.Links = []  ;
                
                //Asignar Links e Iconos//
                for(var i=0; i<$sessionStorage.tema.length; i++){
                    $scope.Seccion = $sessionStorage.tema[i].Seccion;
                    $scope.NombSeccion[i] = $sessionStorage.tema[i].NombSeccion;
                    switch ($scope.Seccion) {
                        case "Objetivos":
                            $scope.Iconos[i] = "icono objetivos.png";
                            $scope.Links[i] = "objetivos";
                            break;
                        case "Equipo":
                            $scope.Iconos[i] = "docente.png";
                            $scope.Links[i] = "equipo";
                            break;
                        case "Horario":
                            $scope.Iconos[i] = "calendario.png";
                            $scope.Links[i] = "horario";
                            break;
                        case "Teoria":
                            $scope.Iconos[i] = "icono teoria.png";
                            $scope.Links[i] = "teoria";
                            break;
                        case "Video":
                            $scope.Iconos[i] = "icono videos.png";
                            $scope.Links[i] = "video-clase";
                            break;
                        case "PruebaAsoc":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "asociacion";
                            break;
                        case "PruebaRespUnica":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "unica";
                            break;
                        case "PruebaFrase":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "frase";
                            break;
                        case "ActividadRef":
                            $scope.Iconos[i] = "icono actividad.png";
                            $scope.Links[i] = "refuerzo";
                             break;
                        case "Taller":
                            $scope.Iconos[i] = "icono taller.png";
                            $scope.Links[i] = "taller";
                          break;
                        case "CalificacionT":
                            $scope.Iconos[i] = "icono calificación.png";
                            $scope.Links[i] = "calificacionT";
                            break;
                          case "Evaluacion":
                            $scope.Iconos[i] = "icono evaluacion.png";
                            $scope.Links[i] = "evaluacion";
                            break;
                        case "CalificacionE":
                            $scope.Iconos[i] = "icono calificación.png";
                            $scope.Links[i] = "calificacionE";
                            break;
                      }

                 }
                 
                 
                 

    
    
/*------------------------------- Actualizar contenido de seccion escogida ---------------------------------------*/

    $scope.n_seccion = function(progseccion,seccion) {
        $scope.NombSeccionAc = [];
        var prueba = 0;
        
        
        for(var i = 0; i < $sessionStorage.tema.length; i++){
            $scope.NombSeccionAc[i] = $sessionStorage.tema[i].NombSeccion
            $scope.SeccionAc = $sessionStorage.tema[i].Seccion
            
            
            /*-------------- Modales Pruebas--------*/
            $("#exampleModalCenter1").modal('hide');//ocultamos el modal
            $("#exampleModalCenter2").modal('hide');//ocultamos el modal
            $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
            $('.modal-backdrop').remove();//eliminamos el backdrop del modal 

            
            if($scope.NombSeccionAc[i] == seccion){
            prueba = prueba + 1;

            /*--------------Actualizar botones de navegacion ----------------*/
            try {
                  $sessionStorage.prevSec = $sessionStorage.tema[i-1].NombSeccion;
                  $sessionStorage.prevProg = $sessionStorage.progSec[i-1];
                            
                }
            catch (e) {
                $sessionStorage.prevSec = $sessionStorage.tema[i].NombSeccion;
                $sessionStorage.prevProg = $sessionStorage.progSec[i];
             }

            try {
                $sessionStorage.nextSec = $sessionStorage.tema[i+1].NombSeccion;
                $sessionStorage.nextProg =$sessionStorage.progSec[i+1];
            }
            catch (e) {
                 $sessionStorage.nextSec = $sessionStorage.tema[i].NombSeccion;
                 $sessionStorage.nextProg = $sessionStorage.progSec[i];
                    }
            $sessionStorage.actualNombSec = seccion;
            $sessionStorage.actualSec = $scope.SeccionAc;


               switch ($scope.SeccionAc) {
                        case "Objetivos":
                            $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("objetivos", {}, { reload: 'objetivos' });
                        break;
                        case "Equipo":
                            $sessionStorage.Equipo = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("equipo", {}, { reload: 'equipo' });
                        break;
                        case "Horario":
                            $sessionStorage.Horario = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("horario", {}, { reload: 'horario' });
                        break;
                        case "Teoria":
                            $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("teoria", {}, { reload: 'teoria' });
                          break;
                        case "Video":
                            $sessionStorage.Video = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("video-clase", {}, { reload: 'video-clase' });
                          break;
                        case "PruebaAsoc":
                            $sessionStorage.PruebaAsoc = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("asociacion", {}, { reload: 'asociacion' });
                          break;
                        case "PruebaRespUnica":
                            $sessionStorage.PruebaRespUnica = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("unica", {}, { reload: 'unica' });
                          break;
                        case "PruebaFrase":
                            $sessionStorage.PruebaFrase = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("frase", {}, { reload: 'frase' });
                          break;
                        case "ActividadRef":
                            $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("refuerzo", {}, { reload: 'refuerzo' });
                          break;
                        case "Taller":
                            $sessionStorage.Taller = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("taller", {}, { reload: 'taller' });
                          break;
                        case "CalificacionT":
                            $sessionStorage.Taller = $sessionStorage.tema[i-1].Contenido.split('</p>');
                            $sessionStorage.CalificacionT = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("calificacionT", {}, { reload: 'calificacionT' });
    
                        break;
                        case "Evaluacion":
                            $sessionStorage.Evaluacion = $sessionStorage.tema[i].Contenido.split('</p>');
                            $state.go("evaluacion", {}, { reload: 'evaluacion' });
                        break;
                    case "CalificacionE":
                        $sessionStorage.Evaluacion = $sessionStorage.tema[i-1].Contenido.split('</p>');
                        $sessionStorage.CalificacionE = $sessionStorage.tema[i].Contenido.split('</p>');
                        if($sessionStorage.Nota != -1){
                            $("#exampleModalCenter").modal('hide');//ocultamos el modal
                            $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
                            $('.modal-backdrop').remove();//eliminamos el backdrop del modal  
                        }; 
                        $state.go("calificacionE", {}, { reload: 'calificacionE' });

                    break;
               }
            }
        }
        /*--------------Actualizar Navlink ----------------*/

        $sessionStorage.navLinkObj = "nav-link titulos-modulos";
        $sessionStorage.navLinkEqui ="nav-link titulos-modulos";
        for(i=0; i<$sessionStorage.tema.length; i++){
            $sessionStorage.navLink[i] = "nav-link titulos-modulos";
            if(progseccion == $sessionStorage.progSec[i]){
               $sessionStorage.navLink[i] = "nav-link titulos-activos";
            }
        }

        /*--------------Actualizar progreso ----------------*/
        if(parseFloat(progseccion) > parseFloat($scope.progreCurso)){
            $scope.progreCurso = progseccion;
            $sessionStorage.progreCurso = progseccion;

            var cont = 0;
            var cont2 = 0;
            for(i=0; i<$sessionStorage.progSec.length; i++){
                cont = cont+1;
                cont2 = cont+2;
                if(progseccion == $sessionStorage.progSec[i]){
                    for(j=0; j<=cont; j++){
                        $scope.disableSec[j] = "false"
                    };
                    for(j=cont2; j<$sessionStorage.tema.length; j++){
                        $scope.disableSec[j] = "true"
                    }; 
                }
            }
            $sessionStorage.disableSec = $scope.disableSec;
            $scope.mensaje = "Actualizando progreso";
            $.post("php/actualizarProgreso.php", {progre: $scope.progreCurso,idCurso:$sessionStorage.idCurso ,idUsua: $sessionStorage.idGlobal}, function(mensaje) {                                                 
                    console.log($sessionStorage.idGlobal);
                    var array = JSON.parse(mensaje);
                    $timeout(function() {                     
                        $scope.records = array;
                    }, 50);
                });               
        }
        
        //$state.reload();
    /*-------------- Reubicar Scroll--------*/
    $timeout(function() {
        
       
       $location.hash($sessionStorage.actualNombSec);
       $anchorScroll();
       $location.hash('');
       
	   
				
    }, 100); 
     $timeout(function() {
        
       
    $window.document.getElementById('jacob').scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
       
	   
				
    }, 100); 
    
    
    

/*--------------Listar secciones en barra de navegación------------------*/
                $scope.NombLeccion = $sessionStorage.NombLeccion;
                $scope.NombModulo = $sessionStorage.NombModulo;
                $scope.disableSec = $sessionStorage.disableSec;
                $scope.progSec = $sessionStorage.progSec;
                $scope.navLink = $sessionStorage.navLink;
                $scope.progreCurso = $sessionStorage.progreCurso;
                $scope.prevSec = $sessionStorage.prevSec;
                $scope.nextSec = $sessionStorage.nextSec;
                $scope.prevProg = $sessionStorage.prevProg;
                $scope.nextProg = $sessionStorage.nextProg;

                // Calcular numero de Modulos y Lecciones para listar //

                 var Modulos = $sessionStorage.NombModulo;
                 for(var i = Modulos.length -1; i >=0; i--){
                   if(Modulos.indexOf(Modulos[i]) !== i) Modulos.splice(i,1);
                 }

                var Lecciones = []
                var Secciones = []
                
                for(var i=0; i<$sessionStorage.tema.length; i++){
                    Secciones[i] = {  
                    name:$sessionStorage.tema[i].NombSeccion,
                    Modulo:$sessionStorage.tema[i].NombModulo,
                    Leccion:$sessionStorage.tema[i].NombLeccion,
                    }; 
                    Lecciones[i] = {  
                        name:$sessionStorage.tema[i].NombLeccion,
                        Modulo:$sessionStorage.tema[i].NombModulo,
       
                    };  
                }
                //Filtrar objetos//
                var uniq = {}
                var Lecciones = Lecciones.filter(obj => !uniq[obj.name] && (uniq[obj.name] = true));
                $scope.Modulos = Modulos;
                $scope.Lecciones = Lecciones;
                $scope.Secciones = Secciones;
                // Listar
                for(var i=0; i<$scope.Secciones.length; i++){
                    if( $scope.Secciones[i].name == $sessionStorage.actualNombSec){
                        $scope.SecLecMod = $scope.Secciones[i];
                        break;
                    };

                };
                    
                $scope.NombSeccion = [];
                $scope.Iconos = [] ;
                $scope.Links = []  ;
                
                //Asignar Links e Iconos//
                for(var i=0; i<$sessionStorage.tema.length; i++){
                    $scope.Seccion = $sessionStorage.tema[i].Seccion;
                    $scope.NombSeccion[i] = $sessionStorage.tema[i].NombSeccion;
                    switch ($scope.Seccion) {
                        case "Objetivos":
                            $scope.Iconos[i] = "icono objetivos.png";
                            $scope.Links[i] = "objetivos";
                            break;
                        case "Equipo":
                            $scope.Iconos[i] = "docente.png";
                            $scope.Links[i] = "equipo";
                            break;
                        case "Horario":
                            $scope.Iconos[i] = "calendario.png";
                            $scope.Links[i] = "horario";
                            break;
                        case "Teoria":
                            $scope.Iconos[i] = "icono teoria.png";
                            $scope.Links[i] = "teoria";
                            break;
                        case "Video":
                            $scope.Iconos[i] = "icono videos.png";
                            $scope.Links[i] = "video-clase";
                            break;
                        case "PruebaAsoc":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "asociacion";
                            break;
                        case "PruebaRespUnica":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "unica";
                            break;
                        case "PruebaFrase":
                            $scope.Iconos[i] = "prueba conocimiento.png";
                            $scope.Links[i] = "frase";
                            break;
                        case "ActividadRef":
                            $scope.Iconos[i] = "icono actividad.png";
                            $scope.Links[i] = "refuerzo";
                             break;
                        case "Taller":
                            $scope.Iconos[i] = "icono taller.png";
                            $scope.Links[i] = "taller";
                          break;
                        case "CalificacionT":
                            $scope.Iconos[i] = "icono calificación.png";
                            $scope.Links[i] = "calificacionT";
                            break;
                          case "Evaluacion":
                            $scope.Iconos[i] = "icono evaluacion.png";
                            $scope.Links[i] = "evaluacion";
                            break;
                        case "CalificacionE":
                            $scope.Iconos[i] = "icono calificación.png";
                            $scope.Links[i] = "calificacionE";
                            break;
                      }
                 }


     
    };


});


 Jacob_App.controller('contenido_curso', function($scope,$state,$timeout,$rootScope,$stateParams,$localStorage,$sessionStorage) {

    //console.log($stateParams.id);
    //console.log($stateParams.progre);
    //$rootScope.id =$stateParams.id;
    //$rootScope.progre =$stateParams.progre;
    
    /*-----------------Asignar contenido de curso-----------------*/
                
    $scope.id =$sessionStorage.idCurso;
    $scope.progre =$sessionStorage.progreCurso;
    $scope.nombreCurso= $sessionStorage.nombreCurso;
    $scope.imgCurso = $sessionStorage.imgCurso;
    $scope.infoCurso = $sessionStorage.infoCurso;
    $scope.NombModulo = $sessionStorage.NombModulo;
    $scope.NombLeccion = $sessionStorage.NombLeccion;
    $scope.NombSeccion = [];

    /*----------- Mostrar contenido de seccion----------*/

    $scope.Seccion = $sessionStorage.actualSec
    switch ($scope.Seccion) {
        case "Objetivos":
            var length = $sessionStorage.Objetivos.length;
            $scope.Libro = $sessionStorage.Objetivos[parseInt(length)-1];
            $scope.UPC = $sessionStorage.Objetivos[parseInt(length)-2];
            $scope.Introduccion = $sessionStorage.Objetivos[parseInt(length)-3];
            $scope.ImagenObj = $sessionStorage.Objetivos[parseInt(length)-4];
            $scope.Objetivos = [];
            length = length - 4;
            for(i=0; i<length; i++){
                $scope.Objetivos[i] =  $sessionStorage.Objetivos[i];
            };  
            break;
        case "Equipo":
            $scope.Equipo =  $sessionStorage.Equipo;
            break;
        case "Teoria":
            $scope.Teoria =  $sessionStorage.Teoria;
            break;
        case "Horario":
            $scope.Dia = [];
            $scope.Hora = [];
            $scope.Cronograma = $sessionStorage.Horario[$sessionStorage.Horario.length-1];
            lengthH = $sessionStorage.Horario.length-1;
            var cont = 0;
            for (var j = 0; j < lengthH; j = j+2) {
                $scope.Dia[cont]= $sessionStorage.Horario[j];
                $scope.Hora[cont]= $sessionStorage.Horario[j+1];
                cont = cont + 1;
              }
              console.info($scope.Dia)
            break;
        case "Video":
            $scope.Video =  $sessionStorage.Video;
            break;
        case "PruebaAsoc":
            
            $scope.PruebaAsoc = $sessionStorage.PruebaAsoc;
            
            var PruebaAsoc1 = [];
            for (var j = 0; j < 4; j++) {
                 PruebaAsoc1[j]= $scope.PruebaAsoc[j];
               }
            $scope.PruebaAsoc1 = PruebaAsoc1.sort(function() { return Math.random() - 0.5 });
            $scope.listItems = [{
                item: "--> A",
                name: $scope.PruebaAsoc1[0],
                title: 'A. '+ $scope.PruebaAsoc1[0]
                }, {
                item: "--> B",
                name: $scope.PruebaAsoc1[1],
                title: 'B. '+ $scope.PruebaAsoc1[1]
                }, {
                item: "--> C",
                name: $scope.PruebaAsoc1[2],
                title: 'C. '+ $scope.PruebaAsoc1[2]
                },{
                item:  "--> D",
                name: $scope.PruebaAsoc1[3],
                title: 'D. '+ $scope.PruebaAsoc1[3]
                   },
               ];
               
            var PruebaAsoc2 = [];
            var contador = 0;
            for (var j = 4; j < 8; j++) {
                 PruebaAsoc2[contador]= $scope.PruebaAsoc[j];
                 contador = contador +1;
               }
            $scope.PruebaAsoc2 = PruebaAsoc2.sort(function() { return Math.random() - 0.5 });
            $scope.RespAsoc = [];
            for (var j = 0; j < 4; j++) {
                 for (var k = 4; k <  8; k++){
                    if($scope.PruebaAsoc2[j] == $scope.PruebaAsoc[k] ){
                      $scope.RespAsoc[j] = $scope.PruebaAsoc[k-4];
                    };
                };
            };
               
            $scope.listAns = [{
                name: "A",
                resp: $scope.RespAsoc[0],
                title: $scope.PruebaAsoc2[0]
                }, {
                name: "B",
                resp: $scope.RespAsoc[1],
                title: $scope.PruebaAsoc2[1]
                }, {
                name: "C",
                resp: $scope.RespAsoc[2],
                title: $scope.PruebaAsoc2[2]
                },{
                name: "D",
                resp: $scope.RespAsoc[3],
                title: $scope.PruebaAsoc2[3]
                   },
               ];
             $sessionStorage.listAns = $scope.listAns;
              
            break;
        case "PruebaRespUnica":
            $scope.PruebaRespUnica = $sessionStorage.PruebaRespUnica;
            $scope.enunciado = $sessionStorage.PruebaRespUnica[$sessionStorage.PruebaRespUnica.length-2];
            $scope.opcionesUnic = [];
            var lenghtopc = $sessionStorage.PruebaRespUnica.length-2;
            for (var j = 0; j < lenghtopc; j++) {
                $scope.opcionesUnic[j]= $scope.PruebaRespUnica[j];
            }
             $scope.opcionesUnic =  $scope.opcionesUnic.sort(function() { return Math.random() - 0.5 });
            break;
        case "PruebaFrase":
            $scope.Enunciado = [];
            $scope.Completar = [];

            var length = $sessionStorage.PruebaFrase.length;
            var cont = 0;
            for (var j = 0; j < length; j = j+2) {
                $scope.Enunciado[cont]= $sessionStorage.PruebaFrase[j];
                $scope.Completar[cont]= $sessionStorage.PruebaFrase[j+1];
                cont = cont + 1;
              }

            break;
        case "ActividadRef":
            $scope.ActividadRef = $sessionStorage.ActividadRef;
            break;
        case "Taller":
            $scope.Taller = $sessionStorage.Taller;
            break;
        case "CalificacionT":
            $scope.CalificacionT = $sessionStorage.CalificacionT;
            break;
        case "Evaluacion":
            console.info($sessionStorage.Nota);
            if($sessionStorage.Nota != -1){
                $scope.desactivar = "true";
            };
            $scope.Evaluacion = $sessionStorage.Evaluacion;
            $scope.Preguntas = [];
            var populate = 0;
            var length = 0;
            for(var i= 0;i< $scope.Evaluacion.length;i++){
               populate = populate+1;
               if(populate == 5){
                 populate = 0;
                 $scope.Preguntas[length] = [];
                 length = length +1;
               }  
            }
            var cont = 0;
            var cont2 = 0;
            var cont3 = 0;
            var j = 4;
            for(var i= 0;i< $scope.Evaluacion.length;i++){
                cont2 = cont2+1;
                if(cont2 == 5){
                var start = i - j;
                cont2 = 0;
                   for(j = start;j<=i;j++){
                     $scope.Preguntas[cont][cont3] = $sessionStorage.Evaluacion[j];  
                     cont3 = cont3+1;
                   }  
                   cont = cont+1;
                   j= 4;
                   cont3=0;     
                }
            };
            $scope.opcion = [];
            
            
        break;
        case "CalificacionE":
            console.info($sessionStorage.Nota);
            if($sessionStorage.Nota == -1){
                $scope.esconder = "true";
            };
            $scope.CalificacionE = $sessionStorage.CalificacionE;
            $scope.MensajeDesp =  $sessionStorage.CalificacionE[0];
            $scope.Evaluacion = $sessionStorage.Evaluacion;
            $scope.Preguntas = [];
            var populate = 0;
            var length = 0;
            for(var i= 0;i< $scope.Evaluacion.length;i++){
               populate = populate+1;
               if(populate == 5){
                 populate = 0;
                 $scope.Preguntas[length] = [];
                 length = length +1;
               }  
            }
            var cont = 0;
            var cont2 = 0;
            var cont3 = 0;
            var j = 4;
            for(var i= 0;i< $scope.Evaluacion.length;i++){
                cont2 = cont2+1;
                if(cont2 == 5){
                var start = i - j;
                cont2 = 0;
                   for(j = start;j<=i;j++){
                     $scope.Preguntas[cont][cont3] = $sessionStorage.Evaluacion[j];  
                     cont3 = cont3+1;
                   }  
                   cont = cont+1;
                   j= 4;
                   cont3=0;     
                }
            };
            $scope.dividir = [];
            $scope.OpcCorrectas = [];
            $scope.Explicacion = [];
            var cont = 0;
            for(var i = 1; i< $scope.CalificacionE.length; i++){
                $scope.dividir[cont]=$scope.CalificacionE[i].split(':');
                $scope.OpcCorrectas[cont]=$scope.dividir[cont][0];
                $scope.Explicacion[cont]=$scope.dividir[cont][1];
                cont = cont+1;
            };
            $scope.calificacion = $sessionStorage.calificacion;
            $scope.nota = $sessionStorage.Nota.toFixed(1);
 
            //Checked-disabled//
            $scope.checked = [];
            for(var i = 0;i<$scope.OpcCorrectas.length;i++ ){
                $scope.checked[i] = [];
            };
            for(var i = 0;i<$scope.OpcCorrectas.length;i++ ){
                switch ($scope.OpcCorrectas[i]) {
                    case "A":
                        $scope.checked[i][0] = "true";
                        break;
                    case "B":
                        $scope.checked[i][1] = "true";
                        break;
                    case "C":
                        $scope.checked[i][2] = "true";
                        break;
                    case "D":
                        $scope.checked[i][3] = "true";
                }
            };

        break;
    };
   /*----------------------------Validar y enviar respuestas Evaluacion----------------------------*/
   
    $scope.respuestas = function (opciones) {
        console.info(opciones);
        if(opciones == undefined || opciones.length == 0 ){
           $scope.mostrar = "true"; 
        }
        else{
            for(var i = 0; i< opciones.length; i++){
                if(opciones.includes(undefined) || opciones.length < $scope.Preguntas.length){
                  $scope.mostrar = "true";  
                }
                else{
                
                $sessionStorage.Respuesta = angular.copy(opciones);
                $scope.Respuesta = $sessionStorage.Respuesta;
                $scope.mostrar = "";


               //Opciones Correctas en base de datos//
               $scope.Calificacion = $sessionStorage.CalificacionE;
               $scope.dividir = [];
               $scope.OpcCorrectas = [];

    
               var cont = 0;
               for(var i = 1; i< $scope.CalificacionE.length; i++){
                   $scope.dividir[cont]=$scope.CalificacionE[i].split(':');
                   $scope.OpcCorrectas[cont]=$scope.dividir[cont][0];
                   cont = cont+1;
               };

                //Calculo de Nota//
               var num = 0;
            
               for(var i = 0;i<$sessionStorage.Respuesta.length;i++){
                   if($sessionStorage.Respuesta[i] == $scope.OpcCorrectas[i]){
                   num = num +1;
                   };
                };

               if(num == 1){
               $scope.calificacion = num +" respuesta correcta de "+$scope.OpcCorrectas.length;
               } else {
               $scope.calificacion = num +" respuestas correctas de "+$scope.OpcCorrectas.length;
               };
               $sessionStorage.calificacion = $scope.calificacion;

               var nota = (5*parseInt(num))/parseInt($scope.OpcCorrectas.length);
               $sessionStorage.Nota =nota;

               $scope.mensaje = "Enviando Evaluacion";
               $.post("php/enviarEvaluacion.php", {nota:$sessionStorage.Nota,idCurso:$sessionStorage.idCurso ,idUsua: $sessionStorage.idGlobal}, function(mensaje) {                                                 
                    var array = JSON.parse(mensaje);
                });
                 //Modal evaluacion terminada
                $('#exampleModalCenter').modal('show');

           };
    
          };

        };


    }; 
              
    /*----------------------------Comprobar prueba respuesta unica----------------------------*/
    
    $scope.comprobar = function(dato,posicion) {
        $scope.eleccion = dato;
        $scope.posicion = posicion;
        $scope.color = [];
        $scope.lenghtopc = $sessionStorage.PruebaRespUnica.length-2;
        for(var i = 0 ; i<$scope.lenghtopc;i++){
            if(posicion == i){
             $scope.color[i] = {'background-color': '#48708A', 'border':'3px solid #48708A','color': '#ffffff'};   
            }else{
             $scope.color[i] = {};   
            }
            
        };


        $scope.respuesta = $sessionStorage.PruebaRespUnica[$sessionStorage.PruebaRespUnica.length-1].split(':');

    }

    $scope.confirmarRespuesta = function(){
       if($scope.eleccion == $scope.respuesta[1]){
          for(var i = 0 ; i<$scope.lenghtopc;i++){
            if($scope.posicion == i){
             $scope.color[i] = {'background-color': '#3D8878', 'border':'3px solid #3D8878','color': '#ffffff'};   
            }else{
             $scope.color[i] = {};   
          }
            
        };
        //Modal Prueba superada
          $('#exampleModalCenter1').modal('show');
       }
       else{
        for(var i = 0 ; i<$scope.lenghtopc;i++){
            if($scope.posicion == i){
             $scope.color[i] = {'background-color': '#FF6A17', 'border':'3px solid #FF6A17','color': '#ffffff'};   
            }else{
             $scope.color[i] = {};   
            }
            
        };
        //Modal Prueba fallida
          $('#exampleModalCenter2').modal('show');
       }
       

    }

/*---------------------------Funciones para asociacion----------------------------------*/

   
      $scope.firstQuarterDroppedObjects = [];
      $scope.secondQuarterDroppedObjects = [];
      $scope.thirdQuarterDroppedObjects = [];
      $scope.fourthQuarterDroppedObjects = [];
      $scope.input = {};
   
      function removeFromTheOtherQuarter(data, excludeQuarter){
        var firstIndex = $scope.firstQuarterDroppedObjects.indexOf(data);
        if(firstIndex > -1 && excludeQuarter != 1)
          $scope.firstQuarterDroppedObjects.splice(firstIndex,1);
        else{
          var secondIndex = $scope.secondQuarterDroppedObjects.indexOf(data);
          if(secondIndex > -1 && excludeQuarter != 2)
          $scope.secondQuarterDroppedObjects.splice(secondIndex,1);
          else{
          var thirdIndex = $scope.thirdQuarterDroppedObjects.indexOf(data);
          if(thirdIndex > -1 && excludeQuarter != 3)
          $scope.thirdQuarterDroppedObjects.splice(thirdIndex,1);
          else{
             var fourthIndex = $scope.fourthQuarterDroppedObjects.indexOf(data);
          if(fourthIndex > -1 && excludeQuarter != 4)
          $scope.fourthQuarterDroppedObjects.splice(fourthIndex,1);
          }
        }
        }
      }
         $scope.onDropCompleteFirstQuarter = function(data, evt) {
       
        var index = $scope.firstQuarterDroppedObjects.indexOf(data);
        if (index == -1){
          $scope.firstQuarterDroppedObjects.push(data);
          removeFromTheOtherQuarter(data,1);
        }
          
      }
      
  
      
       $scope.onDropCompleteSeondQuarter = function(data, evt) {
        
        var index = $scope.secondQuarterDroppedObjects.indexOf(data);
       
        if (index == -1){
          $scope.secondQuarterDroppedObjects.push(data);
          removeFromTheOtherQuarter(data,2);
        }
          
         
      }
      
  
      
       $scope.onDropCompleteThirdQuarter = function(data, evt) {
       
        var index = $scope.thirdQuarterDroppedObjects.indexOf(data);
       
        if (index == -1){
          $scope.thirdQuarterDroppedObjects.push(data);
          removeFromTheOtherQuarter(data,3);
        }
          
         
      }
      
  
      
       $scope.onDropCompleteFourthQuarter = function(data, evt) {
        
        var index = $scope.fourthQuarterDroppedObjects.indexOf(data);
        if (index == -1){
          $scope.fourthQuarterDroppedObjects.push(data);
          removeFromTheOtherQuarter(data,4);
        }
          
        
      }
      
     /*---------------Comprobar Asociacion-----------*/ 
     
     $scope.confirmarAsoc = function(){
        var respcorrectas = 0;
        
        if( $sessionStorage.listAns[0].resp == $scope.firstQuarterDroppedObjects[$scope.firstQuarterDroppedObjects.length-1].name){
           $scope.color1= {'background-color': '#3D8878', 'border':'3px solid #3D8878'};
           respcorrectas = respcorrectas + 1 ;
        }
        else{
           $scope.color1= {'background-color': '#FF6A17 ', 'border':'3px solid #FF6A17 '};
            
        };
        
        if( $sessionStorage.listAns[1].resp ==  $scope.secondQuarterDroppedObjects[ $scope.secondQuarterDroppedObjects.length-1].name){
           $scope.color2= {'background-color': '#3D8878', 'border':'3px solid #3D8878'};
           respcorrectas = respcorrectas + 1 ;
        }
        else{
           $scope.color2= {'background-color': '#FF6A17 ', 'border':'3px solid #FF6A17 '};
            
        };
        if( $sessionStorage.listAns[2].resp ==   $scope.thirdQuarterDroppedObjects[ $scope.thirdQuarterDroppedObjects.length-1].name){
           $scope.color3= {'background-color': '#3D8878', 'border':'3px solid #3D8878'};
           respcorrectas = respcorrectas + 1 ;
        }
        else{
           $scope.color3= {'background-color': '#FF6A17', 'border':'3px solid #FF6A17'};
            
        };
        if( $sessionStorage.listAns[3].resp ==   $scope.fourthQuarterDroppedObjects[ $scope.fourthQuarterDroppedObjects.length-1].name){
           $scope.color4= {'background-color': '#3D8878', 'border':'3px solid #3D8878'};
           respcorrectas = respcorrectas + 1 ;
        }
        else{
           $scope.color4= {'background-color': '#FF6A17 ', 'border':'3px solid #FF6A17 '};
            
        };
        
         /*---------------Modal de prueba-----------*/
        
        if(respcorrectas == 4){
            //Modal Prueba superada
            $('#exampleModalCenter1').modal('show');
            
        }
        else{
            //Modal Prueba fallida
            $('#exampleModalCenter2').modal('show');
            $scope.reintentar = function(){
             $state.go('PruebaAsoc');
            }
            
        };
         
    };
    
    
       

 });
 
 Jacob_App.controller('allcursos', function($scope,$timeout,$rootScope,$localStorage,$sessionStorage,filterFilter) {
        
    $scope.mensaje = "Hola";
    $.post("php/listar_cursos_all.php", {valorBusqueda: $sessionStorage.idGlobal}, function(mensaje) {                                                 
            console.log($sessionStorage.idGlobal);
            var array = JSON.parse(mensaje);
            $timeout(function() {                     
                $scope.records = array;
                $sessionStorage.listaCursos = array;
                $scope.aleatorio = Math.floor(Math.random() * $scope.records.length);
                
                
        // create empty search model (object) to trigger $watch on update
	    $scope.buscarCurso = "";
	    
	    $scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.buscarCurso = "";
	    };  
        
      // pagination controls
	   $scope.currentPage = 1;
       $scope.totalItems = $sessionStorage.listaCursos.length;
	   $scope.entryLimit = 2; // items per page
	   $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        
        // $watch search to update pagination
	    $scope.$watch('buscarCurso', function (newVal, oldVal) {
		$scope.filtered = filterFilter($sessionStorage.listaCursos, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
	
	}, true);

                //Funcion orden cursos
                $scope.orden = []
                    for(var i = 0;i < $scope.records.length ; i++){
                        if($scope.records[i].id % 2 == 0){
                          $scope.orden.push(2)
                        }
                        else{
                          $scope.orden.push(0)
                        }
                    }
                    console.log($scope.orden);
            }, 50);
        });

		
	$scope.pasardatos = function(nombreCurso,id){  
		console.log($scope.nombreCurso);
		console.log($sessionStorage.idGlobal);
		$scope.nombreCurso = nombreCurso;  
		$scope.idCurso = id;  
    }

    $scope.infocurso = function(nombreCurso,imgCurso,infoCurso,precioCurso,id){  
        console.log($scope.nombreCurso);
        console.log($scope.imgCurso);
        console.log($scope.infoCurso);
        console.log($scope.precioCurso);
		console.log($sessionStorage.idGlobal);
        $scope.nombreCurso = nombreCurso;
        $scope.imgCurso = imgCurso;
        $scope.infoCurso = infoCurso;
        $scope.precioCurso = precioCurso;   
		$scope.idCurso = id;  
    }
	
	$scope.confirmar = function(Dato){
        $.post("php/confirmarInscripcionUsua.php", {valorBusqueda: Dato, Usua: $sessionStorage.idGlobal}, function(mensaje) {                                                             
            var array = JSON.parse(mensaje);
            $timeout(function() {                     
                console.log(mensaje);
				$("#exampleModalCenter").modal('hide');//ocultamos el modal
				$('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
				$('.modal-backdrop').remove();//eliminamos el backdrop del modal
				$window.location.reload();
				if(array[0].message == 'true'){
                    console.log("si");
					//alert("Registro exitoso!!");
				}else{
					console.log("no");
					alert("Se genero un error!!");
				}
            }, 500);
        });
    }
    
});

 Jacob_App.controller('tienda', function($scope,$timeout,$rootScope,$sessionStorage,filterFilter) {
        
    $scope.mensaje = "Hola";
    $.post("php/listar_productos_tienda.php", {valorBusqueda:$sessionStorage.idGlobal}, function(mensaje) {                                                 
            
            var array = JSON.parse(mensaje);
            console.log(array.message);
      $timeout(function() {                     
                $scope.productos = array;
                $sessionStorage.productos = array;
                
                        // create empty search model (object) to trigger $watch on update
	    $scope.buscarProducto = "";
	    
	    $scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.buscarProducto = "";
	    };  
        
      // pagination controls
	   $scope.currentPage = 1;
       $scope.totalItems =  $sessionStorage.productos.length;
	   $scope.entryLimit = 3; // items per page
	   $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        
        // $watch search to update pagination
	    $scope.$watch('buscarProducto', function (newVal, oldVal) {
		$scope.filtered = filterFilter($sessionStorage.productos, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
	    }, true);
      }, 500);
        });
        
        


    $scope.infoproducto = function(Producto,Modelo,Informacion,Imagen,Precio){  
        $scope.Producto = Producto;
        $scope.Modelo = Modelo;
        $scope.Informacion = Informacion;
        $scope.Imagen = Imagen;   
		$scope.Precio = Precio;  
    }
	

 });

