// Creación del módulo
var Jacob_App = angular.module("Jacob_App", ["ui.router", "ngStorage", "ngDraggable", "ui.bootstrap"]);

// Configuración de las rutas
Jacob_App.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "home.html",
      controller: "mainController",
    })
    .state("registro", {
      url: "/registro",
      templateUrl: "registro.html",
      controller: "registro",
    })
    .state("cursos", {
      url: "/cursos",
      templateUrl: "cursosAll.html",
      controller: "allcursos",
    })
    .state("mis_cursos", {
      url: "/mis_cursos",
      templateUrl: "mis_cursos.html",
      controller: "mainController",
      params: {
        categoria: "cursos",
      },
    })
    .state("matricula", {
      url: "/matricula",
      templateUrl: "matricula.html",
      controller: "matricula",
    })
    .state("cargar-comprobante", {
      url: "/cargar-comprobante",
      templateUrl: "cargar-comprobante.html",
      controller: "matricula",
    })
    .state("examen_diagnostico", {
      url: "/examen_diagnostico",
      templateUrl: "examen_diagnostico.html",
      controller: "examen_diagnostico",
    })
    .state("preguntas_examen_diagnostico", {
      url: "/preguntas_examen_diagnostico",
      templateUrl: "preguntas_examen_diagnostico.html",
      controller: "preguntas_examen_diagnostico",
    })
    .state("resultados_examen_diagnostico", {
      url: "/resultados_examen_diagnostico",
      templateUrl: "resultados_examen_diagnostico.html",
      controller: "resultados_examen_diagnostico",
    })
    .state("repositorio", {
      url: "/repositorio",
      templateUrl: "repositorio.html",
      controller: "repositorio",
    })
    .state("navegacion", {
      url: "/navegacion",
      templateUrl: "navegacion.html",
      controller: "barra_navegacion",
    })
    .state("objetivos", {
      parent: "navegacion",
      url: "/objetivos",
      views: {
        seccion_curso: {
          templateUrl: "objetivos.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("equipo", {
      parent: "navegacion",
      url: "/equipo",
      views: {
        seccion_curso: {
          templateUrl: "equipo.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("horario", {
      parent: "navegacion",
      url: "/horario",
      views: {
        seccion_curso: {
          templateUrl: "horario.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("teoria", {
      parent: "navegacion",
      url: "/teoria",
      views: {
        seccion_curso: {
          templateUrl: "teoria.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("video-clase", {
      parent: "navegacion",
      url: "/video-clase",
      views: {
        seccion_curso: {
          templateUrl: "video-clase.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("asociacion", {
      parent: "navegacion",
      url: "/asociacion",
      views: {
        seccion_curso: {
          templateUrl: "asociacion.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("unica", {
      parent: "navegacion",
      url: "/unica",
      views: {
        seccion_curso: {
          templateUrl: "unica.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("frase", {
      parent: "navegacion",
      url: "/frase",
      views: {
        seccion_curso: {
          templateUrl: "frase.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("refuerzo", {
      parent: "navegacion",
      url: "/refuerzo",
      views: {
        seccion_curso: {
          templateUrl: "refuerzo.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("taller", {
      parent: "navegacion",
      url: "/taller",
      views: {
        seccion_curso: {
          templateUrl: "taller.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("calificacionT", {
      parent: "navegacion",
      url: "/calificacionT",
      views: {
        seccion_curso: {
          templateUrl: "calificacion-taller.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("evaluacion", {
      parent: "navegacion",
      url: "/evaluacion",
      views: {
        seccion_curso: {
          templateUrl: "examen-final.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("calificacionE", {
      parent: "navegacion",
      url: "/calificacionE",
      views: {
        seccion_curso: {
          templateUrl: "calificacion-final.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("perfil", {
      url: "/perfil",
      templateUrl: "perfil.html",
      controller: "perfil",
    });

  //$urlRouterProvider.otherwise('/home');
});

Jacob_App.run([
  "$state",
  "$rootScope",
  "$stateParams",
  "$anchorScroll",
  function ($state, $rootScope, $stateParams, $anchorScroll) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go("home");
    $anchorScroll.yOffset = 1000; // always scroll by 500 extra pixels

    //Siempre iniciar en top
    $rootScope.$on("$stateChangeSuccess", function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    //Evitar que se pueda recargar la pagina en examen diagnóstico

    window.onbeforeunload = function (event) {
      if ($state.current.controller === "preguntas_examen_diagnostico") {
        return "Are you sure you want to reload?";
      } else {
        // Allow reload without any alert
        event.preventDefault();
      }
    };
  },
]);

Jacob_App.filter("startFrom", function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

Jacob_App.filter("sanitize", [
  "$sce",
  function ($sce) {
    return function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  },
]);

Jacob_App.filter("counter", [
  function () {
    return function (seconds) {
      return new Date(1970, 0, 1).setSeconds(seconds);
    };
  },
]);

Jacob_App.config(function ($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
});

Jacob_App.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(["self", "*://www.youtube-nocookie.com/**"]);
});

Jacob_App.directive("checkSrc", function ($http) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      attrs.$observe("ngSrc", function (ngSrc) {
        $http
          .get(ngSrc)
          .success(function () {
            //alert('Imagen existe');
          })
          .error(function () {
            //alert('La imagen no existe');
            element.attr("src", ""); // set default image
          });
      });
    },
  };
});

Jacob_App.controller("mainController", function ($state, $scope, $timeout, $stateParams, $sessionStorage) {
  var xmlhttp = new XMLHttpRequest();
  var url = "php/user.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.id = array[0].id;
        $sessionStorage.idGlobal = array[0].id;
        $scope.nom_usu = array[0].name;
        $scope.usu_tipo = array[0].usu_tipo;
        $scope.emai_usua = array[0].emai_usua;
        $scope.usua_programa = array[0].usu_programa;
        $scope.usua_semestre = array[0].usu_semestre;

        //LISTAR CURSOS
        $.post("php/listar_cursos.php", { valorBusqueda: $scope.id }, function (mensaje) {
          var array = JSON.parse(mensaje);
          $timeout(function () {
            $scope.records = array;

            //Funcion boton Iniciar - Continuar - Terminado
            $scope.progarray = [];
            for (var i = 0; i < $scope.records.length; i++) {
              if ($scope.records[i].progre == 0) {
                $scope.progarray.push("Iniciar");
              } else {
                if ($scope.records[i].progre == 100) {
                  $scope.progarray.push("Completo");
                } else {
                  $scope.progarray.push("Continuar");
                }
              }
            }
          }, 10);
        });

        //LISTAR MATERIAS

        $.post("php/listar_materias_usua.php", { valorBusqueda: $scope.id }, function (mensaje) {
          var array1 = JSON.parse(mensaje);
          $timeout(function () {
            $scope.records1 = array1;
            console.table(array1);
            $sessionStorage.Programa_Usua = $scope.usua_programa;
            $sessionStorage.Semestre_Usua = $scope.usua_semestre;
            $sessionStorage.estadoMat = [];
            $scope.inscritoMat = 0;

            //Funcion boton Iniciar - Continuar - Terminado
            $scope.progarray1 = [];
            for (var i = 0; i < $scope.records1.length; i++) {
              $sessionStorage.estadoMat[i] = $scope.records1[i].estado;

              if ($scope.records1[i].estado == 1) {
                $scope.inscritoMat = 1;
              }

              if ($scope.records1[i].progre == -2) {
                $scope.progarray1.push("Iniciar");
              } else {
                if ($scope.records1[i].progre == 100) {
                  $scope.progarray1.push("Completo");
                } else {
                  $scope.progarray1.push("Continuar");
                }
              }
            }
          }, 10);
        });
      }, 50);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  $scope.ingresoCurso = function (categoria, Tipo, nombreCurso, imgCurso, infoCurso, progreCurso, evaluacionCurso, id, Usua) {
    $sessionStorage.flagminiCurso = 0;

    $sessionStorage.categoria = categoria;
    $sessionStorage.Tipo = Tipo;
    $sessionStorage.nombreCurso = nombreCurso;
    $sessionStorage.imgCurso = imgCurso;
    $sessionStorage.infoCurso = infoCurso;
    $sessionStorage.progreCurso = progreCurso;
    $sessionStorage.evaluacionCurso = evaluacionCurso;
    $sessionStorage.idCurso = id;
    $sessionStorage.Usuario = Usua;

    //Contenido para curso-materia seleccionado -- Examen diagnostico
    if (progreCurso >= 0) {
      $scope.curso = "Contenido Curso";
      $.post(
        "php/contenido_curso.php",
        {
          idCurso: $sessionStorage.idCurso,
          categoria: $sessionStorage.categoria,
        },
        function (curso) {
          var array = JSON.parse(curso);

          $timeout(function () {
            //Revisar Datos //
            array.sort(function (x, y) {
              return x.Puesto - y.Puesto;
            });

            console.table(array);
            $sessionStorage.tema = array;
            $sessionStorage.NombModulo = [];
            $sessionStorage.NombLeccion = [];
            $sessionStorage.Nota = parseFloat($sessionStorage.evaluacionCurso);
            for (i = 0; i < $sessionStorage.tema.length; i++) {
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
            for (var i = 0; i < $sessionStorage.tema.length; i++) {
              cont = cont + 1;
              progindi[i] = ((100 / length) * cont).toFixed(1);
              $sessionStorage.progSec[i] = progindi[i].toString();
            }

            if (progreCurso == 0) {
              progreCurso = $sessionStorage.progSec[0];
              $sessionStorage.progreCurso = progreCurso;
            }

            //////////////Evaluar modulos////////////
            cont = 0;
            for (var i = 0; i < $sessionStorage.tema.length; i++) {
              cont = cont + 1;
              cont2 = cont + 1;
              if ($sessionStorage.progreCurso > 0) {
                $sessionStorage.navLink[i] = "nav-link titulos-modulos";
              }

              /*Progreso - SECCION ACTUAL*/
              if ($sessionStorage.progSec[i] == $sessionStorage.progreCurso) {
                $sessionStorage.navLink[i] = "nav-link titulos-activos";
                $scope.inicioSec = $sessionStorage.tema[i].Seccion;
                $scope.inicioNombSec = $sessionStorage.tema[i].NombSeccion;
                $scope.contSec = $sessionStorage.tema[i].Contenido;
                for (j = 0; j <= cont; j++) {
                  $sessionStorage.disableSec[j] = "false";
                }
                for (j = cont2; j < $sessionStorage.tema.length; j++) {
                  $sessionStorage.disableSec[j] = "true";
                }

                /*--------------Actualizar botones de navegacion ----------------*/
                try {
                  $sessionStorage.prevSec = $sessionStorage.tema[i - 1].NombSeccion;
                  $sessionStorage.prevProg = $sessionStorage.progSec[i - 1];
                } catch (e) {
                  $sessionStorage.prevSec = $sessionStorage.tema[i].NombSeccion;
                  $sessionStorage.prevProg = $sessionStorage.progSec[i];
                }

                try {
                  $sessionStorage.nextSec = $sessionStorage.tema[i + 1].NombSeccion;
                  $sessionStorage.nextProg = $sessionStorage.progSec[i + 1];
                } catch (e) {
                  $sessionStorage.nextSec = $sessionStorage.tema[i].NombSeccion;
                  $sessionStorage.nextProg = $sessionStorage.progSec[i];
                }

                /*Seccion Actual*/

                $sessionStorage.actualSec = $scope.inicioSec;
                $sessionStorage.actualNombSec = $scope.inicioNombSec;

                switch ($scope.inicioSec) {
                  case "Objetivos":
                    $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("objetivos");
                    break;
                  case "Equipo":
                    $sessionStorage.Equipo = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("equipo");
                    break;
                  case "Horario":
                    $sessionStorage.Horario = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("horario");
                    break;
                  case "Teoria":
                    $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("teoria");
                    break;
                  case "Video":
                    $sessionStorage.Video = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("video-clase");
                    break;
                  case "PruebaAsoc":
                    $sessionStorage.PruebaAsoc = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("asociacion");
                    break;
                  case "PruebaRespUnica":
                    $sessionStorage.PruebaRespUnica = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("unica");
                    break;
                  case "PruebaFrase":
                    $sessionStorage.PruebaFrase = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("frase");
                    break;
                  case "ActividadRef":
                    $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("refuerzo");
                    break;
                  case "Taller":
                    $sessionStorage.Taller = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("taller");
                    break;
                  case "CalificacionT":
                    $sessionStorage.Taller = $sessionStorage.tema[i - 1].Contenido.split("</p>");
                    $sessionStorage.CalificacionT = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("calificacionT");
                    break;
                  case "Evaluacion":
                    $sessionStorage.Evaluacion = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("evaluacion");
                    break;
                  case "CalificacionE":
                    $sessionStorage.Evaluacion = $sessionStorage.tema[i - 1].Contenido.split("</p>");
                    $sessionStorage.CalificacionE = $sessionStorage.tema[i].Contenido.split("</p>");
                    $state.go("calificacionE");
                    break;
                }
              }
            }
          }, 10);
        },
      );
    } else {
      if (progreCurso == -2) {
        $state.go("examen_diagnostico");
      } else {
        $state.go("resultados_examen_diagnostico");
      }
    }
  };

  $scope.logout = function () {
    $sessionStorage.$reset();
  };
});

Jacob_App.controller("registro", function ($scope, $timeout) {
  $scope.sss = 2;
  var xmlhttp = new XMLHttpRequest();
  var url = "php/buscar_pais.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.paises = array;
      }, 500);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  $scope.cargarDepartamentos = function () {
    var pais = document.getElementById("pais");
    if (pais.value != "") {
      $.post("php/buscar_depa.php", { id_pais: pais.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.departamentos = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarCiudades = function () {
    var departamento = document.getElementById("departamento");
    if (pais.value != "") {
      $.post("php/buscar_ciud.php", { id_depa: departamento.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.ciudades = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.registro = function () {
    console.log($scope.email);
    var pais = document.getElementById("pais");
    var departamento = document.getElementById("departamento");
    var ciudad = document.getElementById("ciudad");

    if ($scope.contrasena != $scope.confirmar) {
      alert("Las contrasenas no coinciden!!");
    } else {
      $.post(
        "php/registro.php",
        {
          NumeDocu: $scope.identificacion,
          NombUsua: $scope.nombre,
          EmaiUsua: $scope.email,
          DireUsua: $scope.dire,
          Pais: pais.value,
          Depart: departamento.value,
          Munici: ciudad.value,
          TeleUsua: $scope.tele,
          password: $scope.contrasena,
          EdadUsua: $scope.edad,
        },
        function (mensaje) {
          $timeout(function () {
            console.log(mensaje);
            var array = JSON.parse(mensaje);
            if (array[0].message == "true") {
              console.log("si");
              alert("Registro exitoso!!");
              window.location.href = "login.html";
            } else {
              if (array[0].message == "false2") {
                alert("El correo o el documento ya existen!!");
              } else {
                console.log("no");
                alert("Se genero un error!!");
              }
            }
          }, 50);
        },
      );
    }
  };
});

Jacob_App.controller(
  "barra_navegacion",
  function ($scope, $timeout, $rootScope, $sessionStorage, $state, $anchorScroll, $location, $window, $stateParams) {
    /*-------------- Reubicar Scroll--------*/
    $timeout(function () {
      $location.hash($sessionStorage.actualNombSec);
      $anchorScroll();
      $location.hash("");
    }, 500);
    $timeout(function () {
      //$location.hash('logo');
      //$anchorScroll();
      //$location.hash('');
      $window.document.getElementById("jacob").scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
    }, 500);

    /*--------------Listar secciones en barra de navegación------------------*/
    $scope.NombreCurso = $sessionStorage.nombreCurso;
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

    var Modulos = [];
    var Lecciones = [];
    var Secciones = [];

    for (var i = 0; i < $sessionStorage.tema.length; i++) {
      Secciones[i] = {
        name: $sessionStorage.tema[i].NombSeccion,
        Modulo: $sessionStorage.tema[i].NombModulo,
        Leccion: $sessionStorage.tema[i].NombLeccion,
        Orden: $sessionStorage.tema[i].Orden,
      };
      Lecciones[i] = {
        name: $sessionStorage.tema[i].NombLeccion,
        tipo: $sessionStorage.tema[i].Seccion,
        Modulo: $sessionStorage.tema[i].NombModulo,
      };
      Modulos[i] = {
        name: $sessionStorage.NombModulo[i],
        tipo: $sessionStorage.tema[i].Seccion,
      };
    }

    //Filtrar objetos//
    const unique = (arr, props = []) => [...new Map(arr.map((entry) => [props.map((k) => entry[k]).join("|"), entry])).values()];
    Lecciones = unique(Lecciones, ["name", "Modulo"]);
    Modulos = unique(Modulos, ["name"]);

    $scope.Modulos = Modulos;
    $scope.Lecciones = Lecciones;
    $scope.Secciones = Secciones;
    $scope.temas = Modulos;
    $scope.subtemas = Lecciones;
    // Listar
    for (var i = 0; i < $scope.Secciones.length; i++) {
      if ($scope.Secciones[i].name == $sessionStorage.actualNombSec) {
        $scope.SecLecMod = $scope.Secciones[i];
        break;
      }
    }

    $scope.NombSeccion = [];
    $scope.Iconos = [];
    $scope.Links = [];

    //Asignar Links e Iconos//
    for (var i = 0; i < $sessionStorage.tema.length; i++) {
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

    $scope.n_seccion = function (progseccion, seccion) {
      $scope.NombSeccionAc = [];
      var prueba = 0;

      for (var i = 0; i < $sessionStorage.tema.length; i++) {
        $scope.NombSeccionAc[i] = $sessionStorage.tema[i].NombSeccion;
        $scope.SeccionAc = $sessionStorage.tema[i].Seccion;

        /*-------------- Modales Pruebas--------*/
        $("#exampleModalCenter1").modal("hide"); //ocultamos el modal
        $("#exampleModalCenter2").modal("hide"); //ocultamos el modal
        $("body").removeClass("modal-open"); //eliminamos la clase del body para poder hacer scroll
        $(".modal-backdrop").remove(); //eliminamos el backdrop del modal

        if ($scope.NombSeccionAc[i] == seccion) {
          prueba = prueba + 1;

          /*--------------Actualizar botones de navegacion ----------------*/
          try {
            $sessionStorage.prevSec = $sessionStorage.tema[i - 1].NombSeccion;
            $sessionStorage.prevProg = $sessionStorage.progSec[i - 1];
          } catch (e) {
            $sessionStorage.prevSec = $sessionStorage.tema[i].NombSeccion;
            $sessionStorage.prevProg = $sessionStorage.progSec[i];
          }

          try {
            $sessionStorage.nextSec = $sessionStorage.tema[i + 1].NombSeccion;
            $sessionStorage.nextProg = $sessionStorage.progSec[i + 1];
          } catch (e) {
            $sessionStorage.nextSec = $sessionStorage.tema[i].NombSeccion;
            $sessionStorage.nextProg = $sessionStorage.progSec[i];
          }
          $sessionStorage.actualNombSec = seccion;
          $sessionStorage.actualSec = $scope.SeccionAc;

          switch ($scope.SeccionAc) {
            case "Objetivos":
              $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("objetivos", {}, { reload: "objetivos" });
              break;
            case "Equipo":
              $sessionStorage.Equipo = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("equipo", {}, { reload: "equipo" });
              break;
            case "Horario":
              $sessionStorage.Horario = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("horario", {}, { reload: "horario" });
              break;
            case "Teoria":
              $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("teoria", {}, { reload: "teoria" });
              break;
            case "Video":
              $sessionStorage.Video = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("video-clase", {}, { reload: "video-clase" });
              break;
            case "PruebaAsoc":
              $sessionStorage.PruebaAsoc = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("asociacion", {}, { reload: "asociacion" });
              break;
            case "PruebaRespUnica":
              $sessionStorage.PruebaRespUnica = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("unica", {}, { reload: "unica" });
              break;
            case "PruebaFrase":
              $sessionStorage.PruebaFrase = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("frase", {}, { reload: "frase" });
              break;
            case "ActividadRef":
              $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("refuerzo", {}, { reload: "refuerzo" });
              break;
            case "Taller":
              $sessionStorage.Taller = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("taller", {}, { reload: "taller" });
              break;
            case "CalificacionT":
              $sessionStorage.Taller = $sessionStorage.tema[i - 1].Contenido.split("</p>");
              $sessionStorage.CalificacionT = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("calificacionT", {}, { reload: "calificacionT" });

              break;
            case "Evaluacion":
              $sessionStorage.Evaluacion = $sessionStorage.tema[i].Contenido.split("</p>");
              $state.go("evaluacion", {}, { reload: "evaluacion" });
              break;
            case "CalificacionE":
              $sessionStorage.Evaluacion = $sessionStorage.tema[i - 1].Contenido.split("</p>");
              $sessionStorage.CalificacionE = $sessionStorage.tema[i].Contenido.split("</p>");
              if ($sessionStorage.Nota != -1) {
                $("#exampleModalCenter").modal("hide"); //ocultamos el modal
                $("body").removeClass("modal-open"); //eliminamos la clase del body para poder hacer scroll
                $(".modal-backdrop").remove(); //eliminamos el backdrop del modal
              }
              $state.go("calificacionE", {}, { reload: "calificacionE" });

              break;
          }
        }
      }
      /*--------------Actualizar Navlink ----------------*/

      $sessionStorage.navLinkObj = "nav-link titulos-modulos";
      $sessionStorage.navLinkEqui = "nav-link titulos-modulos";
      for (i = 0; i < $sessionStorage.tema.length; i++) {
        $sessionStorage.navLink[i] = "nav-link titulos-modulos";
        if (progseccion == $sessionStorage.progSec[i]) {
          $sessionStorage.navLink[i] = "nav-link titulos-activos";
        }
      }

      /*--------------Actualizar progreso ----------------*/
      if (parseFloat(progseccion) > parseFloat($scope.progreCurso)) {
        $scope.progreCurso = progseccion;
        $sessionStorage.progreCurso = progseccion;

        var cont = 0;
        var cont2 = 0;
        for (i = 0; i < $sessionStorage.progSec.length; i++) {
          cont = cont + 1;
          cont2 = cont + 2;
          if (progseccion == $sessionStorage.progSec[i]) {
            for (j = 0; j <= cont; j++) {
              $scope.disableSec[j] = "false";
            }
            for (j = cont2; j < $sessionStorage.tema.length; j++) {
              $scope.disableSec[j] = "true";
            }
          }
        }
        $sessionStorage.disableSec = $scope.disableSec;
        $scope.mensaje = "Actualizando progreso";
        console.info($sessionStorage.Tipo);
        console.info($sessionStorage.flagminiCurso);
        if ($sessionStorage.Tipo == "insccurs") {
          $.post(
            "php/actualizarProgresoCurs.php",
            {
              progre: $scope.progreCurso,
              idCurso: $sessionStorage.idCurso,
              idUsua: $sessionStorage.idGlobal,
            },
            function (mensaje) {
              console.log($sessionStorage.idGlobal);
              var array = JSON.parse(mensaje);
              $timeout(function () {
                $scope.records = array;
              }, 50);
            },
          );
        } else {
          if ($sessionStorage.flagminiCurso == 1) {
            $.post(
              "php/actualizarProgresoMinCur.php",
              {
                progre: $scope.progreCurso,
                Materia: $sessionStorage.nombreCurso,
                MateriaPrev: $sessionStorage.materiaPrevia,
                Tema: $sessionStorage.temaminiCurso,
                idUsua: $sessionStorage.idGlobal,
              },
              function (mensaje) {
                console.log($sessionStorage.idGlobal);
                var array = JSON.parse(mensaje);
                $timeout(function () {
                  $scope.records = array;
                }, 50);
              },
            );
          } else {
            $.post(
              "php/actualizarProgresoMat.php",
              {
                progre: $scope.progreCurso,
                idCurso: $sessionStorage.idCurso,
                idUsua: $sessionStorage.idGlobal,
              },
              function (mensaje) {
                console.log($sessionStorage.idGlobal);
                var array = JSON.parse(mensaje);
                $timeout(function () {
                  $scope.records = array;
                }, 50);
              },
            );
          }
        }
      }

      //$state.reload();
      /*-------------- Reubicar Scroll--------*/
      $timeout(function () {
        $location.hash($sessionStorage.actualNombSec);
        $anchorScroll();
        $location.hash("");
      }, 100);
      $timeout(function () {
        $window.document.getElementById("jacob").scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "start",
        });
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

      var Modulos = [];
      var Lecciones = [];
      var Secciones = [];

      for (var i = 0; i < $sessionStorage.tema.length; i++) {
        Secciones[i] = {
          name: $sessionStorage.tema[i].NombSeccion,
          Modulo: $sessionStorage.tema[i].NombModulo,
          Leccion: $sessionStorage.tema[i].NombLeccion,
          Orden: $sessionStorage.tema[i].Orden,
        };
        Lecciones[i] = {
          name: $sessionStorage.tema[i].NombLeccion,
          tipo: $sessionStorage.tema[i].Seccion,
          Modulo: $sessionStorage.tema[i].NombModulo,
        };
        Modulos[i] = {
          name: $sessionStorage.NombModulo[i],
          tipo: $sessionStorage.tema[i].Seccion,
        };
      }

      //Filtrar objetos//
      const unique = (arr, props = []) => [...new Map(arr.map((entry) => [props.map((k) => entry[k]).join("|"), entry])).values()];
      Lecciones = unique(Lecciones, ["name", "Modulo"]);
      Modulos = unique(Modulos, ["name"]);

      $scope.Modulos = Modulos;
      $scope.Lecciones = Lecciones;
      $scope.Secciones = Secciones;
      $scope.temas = Modulos;
      $scope.subtemas = Lecciones;
      // Listar
      for (var i = 0; i < $scope.Secciones.length; i++) {
        if ($scope.Secciones[i].name == $sessionStorage.actualNombSec) {
          $scope.SecLecMod = $scope.Secciones[i];
          break;
        }
      }

      $scope.NombSeccion = [];
      $scope.Iconos = [];
      $scope.Links = [];

      //Asignar Links e Iconos//
      for (var i = 0; i < $sessionStorage.tema.length; i++) {
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
  },
);

Jacob_App.controller("contenido_curso", function ($scope, $state, $timeout, $rootScope, $stateParams, $localStorage, $sessionStorage) {
  //console.log($stateParams.id);
  //console.log($stateParams.progre);
  //$rootScope.id =$stateParams.id;
  //$rootScope.progre =$stateParams.progre;

  /*-----------------Asignar contenido de curso-----------------*/

  $scope.id = $sessionStorage.idCurso;
  $scope.progre = $sessionStorage.progreCurso;
  $scope.nombreCurso = $sessionStorage.nombreCurso;
  $scope.imgCurso = $sessionStorage.imgCurso;
  $scope.infoCurso = $sessionStorage.infoCurso;
  $scope.NombModulo = $sessionStorage.NombModulo;
  $scope.NombLeccion = $sessionStorage.NombLeccion;
  $scope.NombSeccion = [];
  $scope.usuaraio = $sessionStorage.Usuario;

  //Variables para editar contenido
  $scope.content = true;
  $scope.edit = false;
  $scope.edicion = function () {
    $scope.content = false;
    $scope.edit = true;
  };
  $scope.contenido = function () {
    $scope.content = true;
    $scope.edit = false;
  };

  /*----------- Mostrar contenido de seccion----------*/

  $scope.Seccion = $sessionStorage.actualSec;
  switch ($scope.Seccion) {
    case "Objetivos":
      var length = $sessionStorage.Objetivos.length;
      $scope.Categoria = $sessionStorage.Categoria;
      $scope.Nombre = $sessionStorage.nombreCurso;
      $scope.Programa = $sessionStorage.Programa;
      $scope.Fundamentos = $sessionStorage.Objetivos[parseInt(length) - 1];
      $scope.Objetivos = [];
      length = length - 1;
      for (i = 0; i < length; i++) {
        $scope.Objetivos[i] = $sessionStorage.Objetivos[i];
      }
      break;
    case "Equipo":
      $scope.Equipo = $sessionStorage.Equipo;
      $.post("php/cargar_docente.php", { NombreDoc: $scope.Equipo[0] }, function (mensaje) {
        $timeout(function () {
          var array = JSON.parse(mensaje);
          $scope.EmailDoc = array[0].EmaiUsua;
          $scope.FotoDoc = array[0].FotoUsua;
          $scope.PerfilDoc = array[0].Perfil;
        }, 50);
      });
      break;
    case "Teoria":
      $scope.Teoria = $sessionStorage.Teoria;
      document.getElementById("DisplayContent").innerHTML += $scope.Teoria.toString();
      break;
    case "Horario":
      $scope.Categoria = $sessionStorage.Categoria;
      $scope.Nombre = $sessionStorage.nombreCurso;
      $scope.Programa = $sessionStorage.Programa;
      $scope.Dia = [];
      $scope.HoraInicio = [];
      $scope.HoraFin = [];
      $scope.Cronograma = $sessionStorage.Horario[$sessionStorage.Horario.length - 1];
      lengthH = $sessionStorage.Horario.length;
      var cont = 0;
      for (var j = 0; j < lengthH; j = j + 3) {
        $scope.Dia[cont] = $sessionStorage.Horario[j];
        $scope.HoraInicio[cont] = new Date(
          null,
          null,
          null,
          $sessionStorage.Horario[j + 1].split(":")[0],
          $sessionStorage.Horario[j + 1].split(":")[1],
        );
        $scope.HoraFin[cont] = new Date(null, null, null, $sessionStorage.Horario[j + 2].split(":")[0], $sessionStorage.Horario[j + 2].split(":")[1]);
        cont = cont + 1;
      }
      $scope.Semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

      break;
    case "Video":
      $scope.Video = $sessionStorage.Video;
      //Convertir con modo de privacidad youtube-nocookie
      const url = $scope.Video[1];
      if (url) {
        const search = new URL(url).searchParams;
        const videoId = search.get("v");
        if (videoId) {
          const newUrl = "https://www.youtube-nocookie.com/embed/" + videoId + "?AutoHide=1&showinfo=0&modestbranding=1&rel=0";
          $scope.URL = newUrl;
        } else {
          const newUrl = url.replace("https://youtu.be/", "https://www.youtube-nocookie.com/embed/");
          if (newUrl !== url) {
            $scope.URL = newUrl;
          }
        }
      }
      break;
    case "PruebaAsoc":
      $scope.PruebaAsoc = $sessionStorage.PruebaAsoc;

      var PruebaAsoc1 = [];
      for (var j = 0; j < 4; j++) {
        PruebaAsoc1[j] = $scope.PruebaAsoc[j];
      }
      $scope.PruebaAsoc1 = PruebaAsoc1.sort(function () {
        return Math.random() - 0.5;
      });
      $scope.listItems = [
        {
          item: "--> A",
          name: $scope.PruebaAsoc1[0],
          title: "A. " + $scope.PruebaAsoc1[0],
        },
        {
          item: "--> B",
          name: $scope.PruebaAsoc1[1],
          title: "B. " + $scope.PruebaAsoc1[1],
        },
        {
          item: "--> C",
          name: $scope.PruebaAsoc1[2],
          title: "C. " + $scope.PruebaAsoc1[2],
        },
        {
          item: "--> D",
          name: $scope.PruebaAsoc1[3],
          title: "D. " + $scope.PruebaAsoc1[3],
        },
      ];

      var PruebaAsoc2 = [];
      var contador = 0;
      for (var j = 4; j < 8; j++) {
        PruebaAsoc2[contador] = $scope.PruebaAsoc[j];
        contador = contador + 1;
      }
      $scope.PruebaAsoc2 = PruebaAsoc2.sort(function () {
        return Math.random() - 0.5;
      });
      $scope.RespAsoc = [];
      for (var j = 0; j < 4; j++) {
        for (var k = 4; k < 8; k++) {
          if ($scope.PruebaAsoc2[j] == $scope.PruebaAsoc[k]) {
            $scope.RespAsoc[j] = $scope.PruebaAsoc[k - 4];
          }
        }
      }

      $scope.listAns = [
        {
          name: "A",
          resp: $scope.RespAsoc[0],
          title: $scope.PruebaAsoc2[0],
        },
        {
          name: "B",
          resp: $scope.RespAsoc[1],
          title: $scope.PruebaAsoc2[1],
        },
        {
          name: "C",
          resp: $scope.RespAsoc[2],
          title: $scope.PruebaAsoc2[2],
        },
        {
          name: "D",
          resp: $scope.RespAsoc[3],
          title: $scope.PruebaAsoc2[3],
        },
      ];
      $sessionStorage.listAns = $scope.listAns;

      break;
    case "PruebaRespUnica":
      var OpcionesUnic = [];
      $scope.PruebaRespUnica = $sessionStorage.PruebaRespUnica;
      $scope.enunciado = $sessionStorage.PruebaRespUnica[$sessionStorage.PruebaRespUnica.length - 2];
      $scope.respuesta = $sessionStorage.PruebaRespUnica[$sessionStorage.PruebaRespUnica.length - 1];
      $scope.model = {};
      $scope.model.respuestas = $scope.respuesta;
      $scope.opcionesUnic = [];
      var lenghtopc = $sessionStorage.PruebaRespUnica.length - 2;
      for (var j = 0; j < lenghtopc; j++) {
        $scope.opcionesUnic[j] = $scope.PruebaRespUnica[j];
        OpcionesUnic[j] = $scope.PruebaRespUnica[j];
      }

      $scope.opcionesUnicRand = OpcionesUnic.sort(function () {
        return Math.random() - 0.5;
      });
      break;
    case "PruebaFrase":
      $scope.PruebaAsoc = $sessionStorage.PruebaFrase;

      var PruebaAsoc1 = [];
      for (var j = 0; j < 4; j++) {
        PruebaAsoc1[j] = $scope.PruebaAsoc[j];
      }

      $scope.PruebaAsoc1 = PruebaAsoc1.sort(function () {
        return Math.random() - 0.5;
      });
      $scope.listItems = [
        {
          item: "--> A",
          name: $scope.PruebaAsoc1[0],
          title: "A. " + $scope.PruebaAsoc1[0],
        },
        {
          item: "--> B",
          name: $scope.PruebaAsoc1[1],
          title: "B. " + $scope.PruebaAsoc1[1],
        },
        {
          item: "--> C",
          name: $scope.PruebaAsoc1[2],
          title: "C. " + $scope.PruebaAsoc1[2],
        },
        {
          item: "--> D",
          name: $scope.PruebaAsoc1[3],
          title: "D. " + $scope.PruebaAsoc1[3],
        },
      ];

      var contador = 0;
      $scope.PruebaAsoc2 = [];
      for (var j = 4; j < 8; j++) {
        $scope.PruebaAsoc2[contador] = $scope.PruebaAsoc[j];
        contador = contador + 1;
      }

      $scope.RespAsoc = [];
      for (var j = 0; j < 4; j++) {
        for (var k = 4; k < 8; k++) {
          if ($scope.PruebaAsoc2[j] == $scope.PruebaAsoc[k]) {
            $scope.RespAsoc[j] = $scope.PruebaAsoc[k - 4];
          }
        }
      }

      $scope.listAns = [
        {
          name: "A",
          resp: $scope.RespAsoc[0],
          title: $scope.PruebaAsoc2[0],
        },
        {
          name: "B",
          resp: $scope.RespAsoc[1],
          title: $scope.PruebaAsoc2[1],
        },
        {
          name: "C",
          resp: $scope.RespAsoc[2],
          title: $scope.PruebaAsoc2[2],
        },
        {
          name: "D",
          resp: $scope.RespAsoc[3],
          title: $scope.PruebaAsoc2[3],
        },
      ];
      $sessionStorage.listAns = $scope.listAns;

      break;
    case "ActividadRef":
      $scope.ActividadRef = $sessionStorage.ActividadRef;
      $scope.Categoria = $sessionStorage.Categoria;
      $scope.Nombre = $sessionStorage.nombreCurso;
      $scope.Programa = $sessionStorage.Programa;
      $scope.seccion = $sessionStorage.actualNombSec;
      document.getElementById("DisplayContentR").innerHTML += $scope.ActividadRef.toString();
      break;
    case "Taller":
      $scope.Taller = $sessionStorage.Taller;
      $scope.lecMod = $sessionStorage.LecMod;
      $scope.lecaux = $sessionStorage.lecaux;
      document.getElementById("DisplayContentT").innerHTML += $scope.Taller.toString();
      break;
    case "CalificacionT":
      $scope.CalificacionT = $sessionStorage.CalificacionT;
      break;
    case "Evaluacion":
      if ($sessionStorage.Nota != -1) {
        $scope.desactivar = "true";
      }
      //Cargar Datos
      $scope.Evaluacion = $sessionStorage.Evaluacion;
      $sessionStorage.numeroPreguntas = $sessionStorage.Evaluacion.length;
      // Contar ocurrencias de preguntas por cada tema-subtema
      const count = {};
      for (const element of $scope.Evaluacion) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
      }
      $scope.temaEval = [];
      $scope.subtemaEval = [];
      $scope.ocurrenciaEval = [];
      for (var i = 0; i < Object.keys(count).length; i++) {
        $scope.temaEval[i] = Object.keys(count)[i].split(":")[0];
        $scope.subtemaEval[i] = Object.keys(count)[i].split(":")[1];
        $scope.ocurrenciaEval[i] = Object.values(count)[i];
      }

      ///Consultar al banco de preguntas
      $.post("php/listar_banco.php", { Materia: $sessionStorage.nombreCurso }, function (curso) {
        $timeout(function () {
          $sessionStorage.bancoEval = JSON.parse(curso);
          console.table($sessionStorage.bancoEval);

          $sessionStorage.preguntasEvalTemp = [];
          for (var i = 0; i < Object.keys(count).length; i++) {
            // Capturar preguntas del banco
            var array = $sessionStorage.bancoEval.filter((x) => x.tema === $scope.temaEval[i] && x.subtema === $scope.subtemaEval[i]);
            // Ordenar Aleatoriamente
            var shuffledArray = array.sort((a, b) => 0.5 - Math.random());
            // Tomar la cantidad necesaria para cada tema-subtema
            var slicedArray = shuffledArray.slice(0, $scope.ocurrenciaEval[i]);
            // Acumular las preguntas en un solo array

            $sessionStorage.preguntasEvalTemp = $sessionStorage.preguntasEvalTemp.concat(slicedArray);
          }
          console.table($sessionStorage.preguntasEvalTemp);
          $scope.Preguntas = $sessionStorage.preguntasEvalTemp;
          $scope.Opciones = [];

          for (let i = 0; i < $sessionStorage.preguntasEvalTemp.length; i++) {
            $scope.Opciones[i] = $sessionStorage.preguntasEvalTemp[i].opciones.split("</p>");
          }
        }, 50);
      });

      break;
    case "CalificacionE":
      console.info($sessionStorage.Nota);
      if ($sessionStorage.Nota == -1) {
        $scope.esconder = "true";
      }
      $scope.CalificacionE = $sessionStorage.CalificacionE;
      $scope.MensajeDesp = $sessionStorage.CalificacionE[0];
      $scope.Evaluacion = $sessionStorage.Evaluacion;
      $scope.Preguntas = [];
      var populate = 0;
      var length = 0;
      for (var i = 0; i < $scope.Evaluacion.length; i++) {
        populate = populate + 1;
        if (populate == 5) {
          populate = 0;
          $scope.Preguntas[length] = [];
          length = length + 1;
        }
      }
      var cont = 0;
      var cont2 = 0;
      var cont3 = 0;
      var j = 4;
      for (var i = 0; i < $scope.Evaluacion.length; i++) {
        cont2 = cont2 + 1;
        if (cont2 == 5) {
          var start = i - j;
          cont2 = 0;
          for (j = start; j <= i; j++) {
            $scope.Preguntas[cont][cont3] = $sessionStorage.Evaluacion[j];
            cont3 = cont3 + 1;
          }
          cont = cont + 1;
          j = 4;
          cont3 = 0;
        }
      }
      $scope.dividir = [];
      $scope.OpcCorrectas = [];
      $scope.Explicacion = [];
      var cont = 0;
      for (var i = 1; i < $scope.CalificacionE.length; i++) {
        $scope.dividir[cont] = $scope.CalificacionE[i].split(":");
        $scope.OpcCorrectas[cont] = $scope.dividir[cont][0];
        $scope.Explicacion[cont] = $scope.dividir[cont][1];
        cont = cont + 1;
      }
      $scope.calificacion = $sessionStorage.calificacion;
      $scope.nota = $sessionStorage.Nota.toFixed(1);

      //Checked-disabled//
      $scope.checked = [];
      for (var i = 0; i < $scope.OpcCorrectas.length; i++) {
        $scope.checked[i] = [];
      }
      for (var i = 0; i < $scope.OpcCorrectas.length; i++) {
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
      }

      break;
  }
  /*----------------------------Validar y enviar respuestas Evaluacion----------------------------*/

  $scope.respuestas = function (opciones) {
    console.info(opciones);
    if (opciones == undefined || opciones.length == 0) {
      $scope.mostrar = "true";
    } else {
      for (var i = 0; i < opciones.length; i++) {
        if (opciones.includes(undefined) || opciones.length < $scope.Preguntas.length) {
          $scope.mostrar = "true";
        } else {
          $sessionStorage.Respuesta = angular.copy(opciones);
          $scope.Respuesta = $sessionStorage.Respuesta;
          $scope.mostrar = "";

          //Opciones Correctas en base de datos//
          $scope.CalificacionE = $sessionStorage.CalificacionE;
          $scope.dividir = [];
          $scope.OpcCorrectas = [];

          var cont = 0;
          for (var i = 1; i < $scope.CalificacionE.length; i++) {
            $scope.dividir[cont] = $scope.CalificacionE[i].split(":");
            $scope.OpcCorrectas[cont] = $scope.dividir[cont][0];
            cont = cont + 1;
          }

          //Calculo de Nota//
          var num = 0;

          for (var i = 0; i < $sessionStorage.Respuesta.length; i++) {
            if ($sessionStorage.Respuesta[i] == $scope.OpcCorrectas[i]) {
              num = num + 1;
            }
          }

          if (num == 1) {
            $scope.calificacion = num + " respuesta correcta de " + $scope.OpcCorrectas.length;
          } else {
            $scope.calificacion = num + " respuestas correctas de " + $scope.OpcCorrectas.length;
          }
          $sessionStorage.calificacion = $scope.calificacion;

          var nota = (5 * parseInt(num)) / parseInt($scope.OpcCorrectas.length);
          $sessionStorage.Nota = nota;

          $scope.mensaje = "Enviando Evaluacion";
          $.post(
            "php/enviarEvaluacion.php",
            {
              nota: $sessionStorage.Nota,
              idCurso: $sessionStorage.idCurso,
              idUsua: $sessionStorage.idGlobal,
            },
            function (mensaje) {
              var array = JSON.parse(mensaje);
            },
          );
          //Modal evaluacion terminada
          $("#exampleModalCenter").modal("show");
        }
      }
    }
  };

  /*----------------------------Comprobar prueba respuesta unica----------------------------*/

  $scope.comprobar = function (dato, posicion) {
    $scope.eleccion = dato;
    $scope.posicion = posicion;
    $scope.color = [];
    $scope.lenghtopc = $sessionStorage.PruebaRespUnica.length - 2;
    for (var i = 0; i < $scope.lenghtopc; i++) {
      if (posicion == i) {
        $scope.color[i] = {
          "background-color": "#48708A",
          border: "3px solid #48708A",
          color: "#ffffff",
        };
      } else {
        $scope.color[i] = {};
      }
    }

    $scope.respuesta = $sessionStorage.PruebaRespUnica[$sessionStorage.PruebaRespUnica.length - 1];
  };

  $scope.confirmarRespuesta = function () {
    if ($scope.eleccion == $scope.respuesta) {
      for (var i = 0; i < $scope.lenghtopc; i++) {
        if ($scope.posicion == i) {
          $scope.color[i] = {
            "background-color": "#3D8878",
            border: "3px solid #3D8878",
            color: "#ffffff",
          };
        } else {
          $scope.color[i] = {};
        }
      }
      //Modal Prueba superada
      $("#exampleModalCenter1").modal("show");
    } else {
      for (var i = 0; i < $scope.lenghtopc; i++) {
        if ($scope.posicion == i) {
          $scope.color[i] = {
            "background-color": "#FF6A17",
            border: "3px solid #FF6A17",
            color: "#ffffff",
          };
        } else {
          $scope.color[i] = {};
        }
      }
      //Modal Prueba fallida
      $("#exampleModalCenter2").modal("show");
    }
  };

  /*---------------------------Funciones para asociacion----------------------------------*/

  $scope.objetosResp1 = [];
  $scope.objetosResp2 = [];
  $scope.objetosResp3 = [];
  $scope.objetosResp4 = [];
  $scope.objetosResp = [$scope.objetosResp1, $scope.objetosResp2, $scope.objetosResp3, $scope.objetosResp4];
  $scope.input = {};

  function removerObjeto(data, excluir) {
    var indice1 = $scope.objetosResp1.indexOf(data);
    if (indice1 > -1 && excluir != 1) $scope.objetosResp1.splice(indice1, 1);
    else {
      var indice2 = $scope.objetosResp2.indexOf(data);
      if (indice2 > -1 && excluir != 2) $scope.objetosResp2.splice(indice2, 1);
      else {
        var indice3 = $scope.objetosResp3.indexOf(data);
        if (indice3 > -1 && excluir != 3) $scope.objetosResp3.splice(indice3, 1);
        else {
          var indice4 = $scope.objetosResp4.indexOf(data);
          if (indice4 > -1 && excluir != 4) $scope.objetosResp4.splice(indice4, 1);
        }
      }
    }
  }

  $scope.objetosMov = [
    ($scope.objetosMov1 = function (data, evt) {
      var indice = $scope.objetosResp1.indexOf(data);
      if (indice == -1) {
        $scope.objetosResp1.push(data);
        removerObjeto(data, 1);
      }
    }),
    ($scope.objetosMov2 = function (data, evt) {
      var indice = $scope.objetosResp2.indexOf(data);
      if (indice == -1) {
        $scope.objetosResp2.push(data);
        removerObjeto(data, 2);
      }
    }),
    ($scope.objetosMov3 = function (data, evt) {
      var indice = $scope.objetosResp3.indexOf(data);
      if (indice == -1) {
        $scope.objetosResp3.push(data);
        removerObjeto(data, 3);
      }
    }),
    ($scope.objetosMov4 = function (data, evt) {
      var indice = $scope.objetosResp4.indexOf(data);
      if (indice == -1) {
        $scope.objetosResp4.push(data);
        removerObjeto(data, 4);
      }
    }),
  ];

  /*---------------Comprobar Asociacion-----------*/

  $scope.confirmarAsoc = function () {
    var respcorrectas = 0;

    if ($sessionStorage.listAns[0].resp == $scope.objetosResp1[$scope.objetosResp1.length - 1].name) {
      $scope.color1 = {
        "background-color": "#3D8878",
        border: "3px solid #3D8878",
      };
      respcorrectas = respcorrectas + 1;
    } else {
      $scope.color1 = {
        "background-color": "#FF6A17 ",
        border: "3px solid #FF6A17 ",
      };
    }

    if ($sessionStorage.listAns[1].resp == $scope.objetosResp2[$scope.objetosResp2.length - 1].name) {
      $scope.color2 = {
        "background-color": "#3D8878",
        border: "3px solid #3D8878",
      };
      respcorrectas = respcorrectas + 1;
    } else {
      $scope.color2 = {
        "background-color": "#FF6A17 ",
        border: "3px solid #FF6A17 ",
      };
    }
    if ($sessionStorage.listAns[2].resp == $scope.objetosResp3[$scope.objetosResp3.length - 1].name) {
      $scope.color3 = {
        "background-color": "#3D8878",
        border: "3px solid #3D8878",
      };
      respcorrectas = respcorrectas + 1;
    } else {
      $scope.color3 = {
        "background-color": "#FF6A17",
        border: "3px solid #FF6A17",
      };
    }
    if ($sessionStorage.listAns[3].resp == $scope.objetosResp4[$scope.objetosResp4.length - 1].name) {
      $scope.color4 = {
        "background-color": "#3D8878",
        border: "3px solid #3D8878",
      };
      respcorrectas = respcorrectas + 1;
    } else {
      $scope.color4 = {
        "background-color": "#FF6A17 ",
        border: "3px solid #FF6A17 ",
      };
    }

    $scope.colores = [$scope.color1, $scope.color2, $scope.color3, $scope.color4];

    /*---------------Modal de prueba-----------*/

    if (respcorrectas == 4) {
      //Modal Prueba superada
      $("#exampleModalCenter1").modal("show");
    } else {
      //Modal Prueba fallida
      $("#exampleModalCenter2").modal("show");
      $scope.reintentar = function () {
        $state.go("PruebaAsoc");
      };
    }
  };
});

Jacob_App.controller("allcursos", function ($scope, $timeout, $rootScope, $localStorage, $sessionStorage, filterFilter) {
  $scope.mensaje = "Hola";
  $.post("php/listar_cursos_all.php", { valorBusqueda: $sessionStorage.idGlobal }, function (mensaje) {
    var array = JSON.parse(mensaje);
    $timeout(function () {
      $scope.Cursos = array;
      $sessionStorage.Materias = array;
      console.log(array);

      // Funcion para remover valores
      function removerDuplicados(data) {
        return data.filter((value, indice) => data.indexOf(value) == indice);
      }

      $scope.Categorias = [];

      for (var i = 0; i < $sessionStorage.Materias.length; i++) {
        $scope.Categorias[i] = $sessionStorage.Materias[i].categoria;
      }

      $scope.Categorias = removerDuplicados($scope.Categorias);
      console.log($scope.Categorias);
    }, 50);
  });

  $scope.busqueda = function (categoria) {
    $scope.buscarCategoria = categoria;
  };

  $scope.pasardatos = function (nombreCurso, id) {
    $scope.nombreCurso = nombreCurso;
    $scope.idCurso = id;
  };

  $scope.infocurso = function (nombreCurso, categoria, infoCurso, precioCurso, id) {
    $scope.nombreCurso = nombreCurso;
    $scope.Categoria = categoria;
    $scope.infoCurso = infoCurso;
    $scope.precioCurso = precioCurso;
    $scope.idCurso = id;
    console.log(categoria);
  };

  $scope.confirmar = function (Dato) {
    $.post("php/confirmarInscripcionUsua.php", { valorBusqueda: Dato, Usua: $sessionStorage.idGlobal }, function (mensaje) {
      var array = JSON.parse(mensaje);
      $timeout(function () {
        console.log(mensaje);
        $("#exampleModalCenter").modal("hide"); //ocultamos el modal
        $("body").removeClass("modal-open"); //eliminamos la clase del body para poder hacer scroll
        $(".modal-backdrop").remove(); //eliminamos el backdrop del modal
        $window.location.reload();
        if (array[0].message == "true") {
          console.log("si");
          //alert("Registro exitoso!!");
        } else {
          console.log("no");
          alert("Se genero un error!!");
        }
      }, 500);
    });
  };
});

Jacob_App.controller("tienda", function ($scope, $timeout, $rootScope, $sessionStorage, filterFilter) {
  $scope.mensaje = "Hola";
  $.post("php/listar_productos_tienda.php", { valorBusqueda: $sessionStorage.idGlobal }, function (mensaje) {
    var array = JSON.parse(mensaje);
    console.log(array.message);
    $timeout(function () {
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
      $scope.totalItems = $sessionStorage.productos.length;
      $scope.entryLimit = 3; // items per page
      $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

      // $watch search to update pagination
      $scope.$watch(
        "buscarProducto",
        function (newVal, oldVal) {
          $scope.filtered = filterFilter($sessionStorage.productos, newVal);
          $scope.totalItems = $scope.filtered.length;
          $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
        },
        true,
      );
    }, 500);
  });

  $scope.infoproducto = function (Producto, Modelo, Informacion, Imagen, Precio) {
    $scope.Producto = Producto;
    $scope.Modelo = Modelo;
    $scope.Informacion = Informacion;
    $scope.Imagen = Imagen;
    $scope.Precio = Precio;
  };
});

Jacob_App.controller("examen_diagnostico", function ($scope, $sessionStorage, $timeout, $state) {
  $scope.nombreCurso = $sessionStorage.nombreCurso;

  //Consulta Temas de Materia Previas
  $.post("php/materiaPrevia.php", { NombMat: $scope.nombreCurso }, function (mensaje) {
    $timeout(function () {
      var temasExamen = JSON.parse(mensaje);
      $sessionStorage.temasExamenDiag = [];
      $sessionStorage.materiasExamenDiag = [];

      for (var i = 0; i < temasExamen.length; i++) {
        $sessionStorage.temasExamenDiag = temasExamen[i].TemaPrev.split("</p>");
        $sessionStorage.materiasExamenDiag = temasExamen[i].MateriaPrev.split("</p>");
      }

      $scope.temasExamenDiag = $sessionStorage.temasExamenDiag;
    }, 50);
  });
});

Jacob_App.controller("preguntas_examen_diagnostico", function ($scope, $sessionStorage, $timeout, $state, $interval) {
  $scope.nombreCurso = $sessionStorage.nombreCurso;
  $sessionStorage.contadorPreg = 1;
  var contador;
  $scope.aciertos = [];
  $scope.temaAcierto = [];
  $scope.temaRespuesta = [];
  $scope.progreTema = [];
  $scope.respuestasExamen = [];
  $scope.respuestaReal = [];
  var poselec = 0;

  //Consulta en Banco sobre temas
  $.post(
    "php/consultarBanco.php",
    {
      Materia: $sessionStorage.materiasExamenDiag,
      Tema: $sessionStorage.temasExamenDiag,
    },
    function (mensaje) {
      $timeout(function () {
        $sessionStorage.preguntasExamen = JSON.parse(mensaje).sort(function () {
          return Math.random() - 0.5;
        });

        $scope.Materia = $sessionStorage.preguntasExamen[0].Materia;
        $scope.Tema = $sessionStorage.preguntasExamen[0].Tema;
        $scope.Subtema = $sessionStorage.preguntasExamen[0].Subtema;
        $scope.Enunciado = $sessionStorage.preguntasExamen[0].Enunciado;
        $scope.Explicacion = $sessionStorage.preguntasExamen[0].Explicacion;
        $scope.Opciones = $sessionStorage.preguntasExamen[0].Opciones.split("</p>");
        $scope.Respuesta = $sessionStorage.preguntasExamen[0].Respuesta;
        $scope.Tiempo = $sessionStorage.preguntasExamen[0].Tiempo;
        $scope.preguntaActual = $sessionStorage.contadorPreg;
        $scope.numPreguntas = $sessionStorage.preguntasExamen.length;
        $scope.counter = $scope.Tiempo * 60;

        contador = $interval(function () {
          if ($scope.counter > 0) {
            $scope.counter--;
          } else {
            //$scope.stopCounter();
            alert("¡Tiempo agotado!");
            $scope.continuarExamen("NULL");
          }
        }, 1000);
      }, 50);
    },
  );

  $scope.continuarExamen = function (flag) {
    if (flag == "NULL") {
      $scope.respuestasExamen[poselec] = flag;
    } else {
      if ($scope.eleccion == undefined) {
        alert("¡Debes seleccionar una opción antes de continuar!");
        return;
      } else {
        $scope.respuestasExamen[poselec] = $scope.eleccion;
      }
    }
    $scope.temaRespuesta[poselec] = $scope.Tema;
    $scope.respuestaReal[poselec] = $scope.Respuesta;
    console.log($scope.respuestasExamen, $scope.respuestaReal, $scope.temaRespuesta);

    if ($sessionStorage.contadorPreg < $sessionStorage.preguntasExamen.length) {
      $scope.color = [];
      $scope.Materia = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Materia;
      $scope.Tema = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Tema;
      $scope.Subtema = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Subtema;
      $scope.Enunciado = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Enunciado;
      $scope.Explicacion = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Explicacion;
      $scope.Opciones = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Opciones.split("</p>");
      $scope.Respuesta = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Respuesta;
      $scope.Tiempo = $sessionStorage.preguntasExamen[$sessionStorage.contadorPreg].Tiempo;
      $scope.counter = $scope.Tiempo * 60;

      $sessionStorage.contadorPreg = $sessionStorage.contadorPreg + 1;
      poselec++;
      $scope.preguntaActual = $sessionStorage.contadorPreg;
      $scope.numPreguntas = $sessionStorage.preguntasExamen.length;
      $scope.eleccion = undefined;
    }
    /////Calculo nivelacion
    else {
      $scope.stopCounter();

      var contAc = 0;
      for (var i = 0; i < $scope.temaRespuesta.length; i++) {
        if ($scope.respuestaReal[i] == $scope.respuestasExamen[i]) {
          $scope.aciertos[i] = 1;
          $scope.temaAcierto[contAc] = $scope.temaRespuesta[i];
          contAc++;
        } else {
          $scope.aciertos[i] = 0;
        }
      }
      // Funcion para comparar las veces que acerto en un tema.

      function ocurrencia(array, value) {
        var count = 0;
        array.forEach((v) => v === value && count++);
        return count;
      }

      for (var i = 0; i < $sessionStorage.temasExamenDiag.length; i++) {
        var ocurrenciaIdeal = ocurrencia($scope.temaRespuesta, $sessionStorage.temasExamenDiag[i]);
        var ocurrenciaReal = ocurrencia($scope.temaAcierto, $sessionStorage.temasExamenDiag[i]);
        $scope.progreTema[i] = ((ocurrenciaReal * 100) / ocurrenciaIdeal).toFixed(1);
      }
      console.log($scope.progreTema);
      for (var i = 0; i < $sessionStorage.temasExamenDiag.length; i++) {
        $.post(
          "php/iniciarNivelacion.php",
          {
            CodiEstu: $sessionStorage.idGlobal,
            Materia: $sessionStorage.nombreCurso,
            MateriaPrev: $sessionStorage.preguntasExamen[i].Materia,
            Tema: $sessionStorage.temasExamenDiag[i],
            Progreso: $scope.progreTema[i],
          },
          function (mensaje) {
            console.log($sessionStorage.idGlobal);
            var array = JSON.parse(mensaje);
            $timeout(function () {
              $scope.records = array;
            }, 50);
          },
        );
      }

      $.post(
        "php/actualizarProgresoMat.php",
        {
          progre: -1,
          idCurso: $sessionStorage.idCurso,
          idUsua: $sessionStorage.idGlobal,
        },
        function (mensaje) {
          console.log($sessionStorage.idGlobal);
          var array = JSON.parse(mensaje);
          $timeout(function () {
            $scope.records = array;
            $("#ModalFin").modal("show");
            $state.go("resultados_examen_diagnostico");
          }, 100);
        },
      );
    }
  };

  //Funciones para detener el contador

  $scope.$on("$stateChangeStart", function (event, toState, fromState) {
    if (toState.name != "resultados_examen_diagnostico") {
      var answer = confirm("Estas seguro de abandonar la página? tu progreso en el examen se perdera.");
      if (!answer) {
        event.preventDefault();
      }
    } else {
      return;
    }
  });

  $scope.$on("$destroy", function () {
    $scope.stopCounter();
    console.log("Intervalo de tiempo cancelado");
  });

  $scope.stopCounter = function () {
    if (angular.isDefined(contador)) {
      $interval.cancel(contador);
      contador = undefined;
    }
  };

  $scope.comprobar = function (dato, posicion) {
    $scope.eleccion = dato;
    $scope.posicion = posicion;
    $scope.color = [];
    $scope.lenghtopc = 4;
    for (var i = 0; i < $scope.lenghtopc; i++) {
      if (posicion == i) {
        $scope.color[i] = {
          "background-color": "#002053",
          border: "3px solid #002053",
          color: "#ffffff",
        };
      } else {
        $scope.color[i] = {};
      }
    }
  };
});

Jacob_App.controller("resultados_examen_diagnostico", function ($scope, $sessionStorage, $timeout, $state) {
  $scope.nombreCurso = $sessionStorage.nombreCurso;

  //Consulta minicursos de nivelacion
  $.post(
    "php/cursosNivelacion.php",
    {
      CodiEstu: $sessionStorage.idGlobal,
      Materia: $sessionStorage.nombreCurso,
    },
    function (mensaje) {
      $timeout(function () {
        $scope.miniCursos = JSON.parse(mensaje);
        var suma = 0;

        for (var i = 0; i < $scope.miniCursos.length; i++) {
          suma += parseInt($scope.miniCursos[i].Progreso);
        }

        $scope.progreTotal = (suma / $scope.miniCursos.length).toFixed(1);
      }, 50);
    },
  );

  $scope.ingresominiCurso = function (temaminiCurso, progreCurso, materiaPrev) {
    $sessionStorage.flagminiCurso = 1;

    $sessionStorage.progreCurso = progreCurso;
    $sessionStorage.temaminiCurso = temaminiCurso;
    $sessionStorage.materiaPrevia = materiaPrev;

    //Contenido para curso-materia seleccionado -- Examen diagnostico

    $.post(
      "php/contenido_minicurso.php",
      {
        MateriaPrev: $sessionStorage.materiaPrevia,
        tema: $sessionStorage.temaminiCurso,
      },
      function (curso) {
        var array = JSON.parse(curso);

        $timeout(function () {
          //Revisar Datos //
          array.sort(function (x, y) {
            return x.Puesto - y.Puesto;
          });

          console.table(array);
          $sessionStorage.tema = array;
          $sessionStorage.NombModulo = [];
          $sessionStorage.NombLeccion = [];
          $sessionStorage.Nota = parseFloat($sessionStorage.evaluacionCurso);
          for (i = 0; i < $sessionStorage.tema.length; i++) {
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
          for (var i = 0; i < $sessionStorage.tema.length; i++) {
            cont = cont + 1;
            progindi[i] = ((100 / length) * cont).toFixed(1);
            $sessionStorage.progSec[i] = progindi[i].toString();
          }

          if (progreCurso == 0) {
            $sessionStorage.progreCurso = (parseFloat($sessionStorage.progreCurso) + parseFloat(progindi[0])).toFixed(1);
            console.log($sessionStorage.progreCurso);
          }
          if (progindi.length == 1) {
            $.post(
              "php/actualizarProgresoMinCur.php",
              {
                progre: $sessionStorage.progreCurso,
                Materia: $sessionStorage.nombreCurso,
                MateriaPrev: $sessionStorage.materiaPrevia,
                Tema: $sessionStorage.temaminiCurso,
                idUsua: $sessionStorage.idGlobal,
              },
              function (mensaje) {
                console.log($sessionStorage.idGlobal);
                var array = JSON.parse(mensaje);
                $timeout(function () {
                  $scope.records = array;
                }, 50);
              },
            );
          }

          //////////////Evaluar modulos////////////
          cont = 0;
          for (var i = 0; i < $sessionStorage.tema.length; i++) {
            cont = cont + 1;
            cont2 = cont + 1;

            if ($sessionStorage.progreCurso > 0) {
              $sessionStorage.navLink[i] = "nav-link titulos-modulos";
            }

            /*Progreso - SECCION ACTUAL*/
            if ($sessionStorage.progSec[i] == $sessionStorage.progreCurso) {
              $sessionStorage.navLink[i] = "nav-link titulos-activos";
              $scope.inicioSec = $sessionStorage.tema[i].Seccion;
              $scope.inicioNombSec = $sessionStorage.tema[i].NombSeccion;
              $scope.contSec = $sessionStorage.tema[i].Contenido;
              for (j = 0; j <= cont; j++) {
                $sessionStorage.disableSec[j] = "false";
              }
              for (j = cont2; j < $sessionStorage.tema.length; j++) {
                $sessionStorage.disableSec[j] = "true";
              }

              /*--------------Actualizar botones de navegacion ----------------*/
              try {
                $sessionStorage.prevSec = $sessionStorage.tema[i - 1].NombSeccion;
                $sessionStorage.prevProg = $sessionStorage.progSec[i - 1];
              } catch (e) {
                $sessionStorage.prevSec = $sessionStorage.tema[i].NombSeccion;
                $sessionStorage.prevProg = $sessionStorage.progSec[i];
              }

              try {
                $sessionStorage.nextSec = $sessionStorage.tema[i + 1].NombSeccion;
                $sessionStorage.nextProg = $sessionStorage.progSec[i + 1];
              } catch (e) {
                $sessionStorage.nextSec = $sessionStorage.tema[i].NombSeccion;
                $sessionStorage.nextProg = $sessionStorage.progSec[i];
              }

              /*Seccion Actual*/

              $sessionStorage.actualSec = $scope.inicioSec;
              $sessionStorage.actualNombSec = $scope.inicioNombSec;

              switch ($scope.inicioSec) {
                case "Objetivos":
                  $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("objetivos");
                  break;
                case "Equipo":
                  $sessionStorage.Equipo = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("equipo");
                  break;
                case "Horario":
                  $sessionStorage.Horario = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("horario");
                  break;
                case "Teoria":
                  $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("teoria");
                  break;
                case "Video":
                  $sessionStorage.Video = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("video-clase");
                  break;
                case "PruebaAsoc":
                  $sessionStorage.PruebaAsoc = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("asociacion");
                  break;
                case "PruebaRespUnica":
                  $sessionStorage.PruebaRespUnica = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("unica");
                  break;
                case "PruebaFrase":
                  $sessionStorage.PruebaFrase = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("frase");
                  break;
                case "ActividadRef":
                  $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("refuerzo");
                  break;
                case "Taller":
                  $sessionStorage.Taller = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("taller");
                  break;
                case "CalificacionT":
                  $sessionStorage.Taller = $sessionStorage.tema[i - 1].Contenido.split("</p>");
                  $sessionStorage.CalificacionT = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("calificacionT");
                  break;
                case "Evaluacion":
                  $sessionStorage.Evaluacion = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("evaluacion");
                  break;
                case "CalificacionE":
                  $sessionStorage.Evaluacion = $sessionStorage.tema[i - 1].Contenido.split("</p>");
                  $sessionStorage.CalificacionE = $sessionStorage.tema[i].Contenido.split("</p>");
                  $state.go("calificacionE");
                  break;
              }
            }
          }
        }, 10);
      },
    );
  };

  $scope.inicio_materia = function () {
    $.post(
      "php/actualizarProgresoMat.php",
      {
        progre: 0,
        idCurso: $sessionStorage.idCurso,
        idUsua: $sessionStorage.idGlobal,
      },
      function (mensaje) {
        console.log($sessionStorage.idGlobal);
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.records = array;
          $("#ModalMat").modal("show");
          $state.go("home");
        }, 50);
      },
    );
  };
});

Jacob_App.controller("matricula", function ($scope, $state, $timeout, $sessionStorage) {
  $scope.matriculadas = [];
  $scope.programa = $sessionStorage.Programa_Usua;
  // Funcion para convertir numeros en romanos
  function romanizar(num) {
    var lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      roman = "",
      i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
  $scope.semestre = romanizar($sessionStorage.Semestre_Usua);

  function actualizar_estado_materias(materias) {
    var matriculables = [];
    var id_matriculables = [];
    var perdidas = [];
    var prerequisito = [];
    var nuevo_estado = [];
    var puesto = 0;
    var puesto2 = 0;

    for (var i = 0; i < materias.length; i++) {
      if ($sessionStorage.estadoMat[i] == 3) {
        perdidas[puesto2] = materias[i].Nombre;
        puesto2 = puesto2 + 1;
      }

      if (materias[i].Semestre == $sessionStorage.Semestre_Usua) {
        matriculables[puesto] = materias[i].Nombre;
        id_matriculables[puesto] = materias[i].Codigo;
        prerequisito[puesto] = materias[i].Prerequisito;
        puesto = puesto + 1;
      }
    }

    //Comprobar si una materia prerequisito esta perdida para el semestre actual
    for (var i = 0; i < prerequisito.length; i++) {
      try {
        var recorrer = prerequisito[i].split("</p>");
        for (var j = 0; j < recorrer.length; j++) {
          for (var k = 0; k < perdidas.length; k++) {
            if (recorrer[j] == perdidas[k]) {
              nuevo_estado[i] = 0; // Solo validable
            } else {
              nuevo_estado[i] = 2; // Matriculable
            }
          }
        }
      } catch (e) {
        for (var k = 0; k < perdidas.length; k++) {
          if (prerequisito[i] == perdidas[k]) {
            nuevo_estado[i] = 0; // Solo validable
          } else {
            nuevo_estado[i] = 2; // Matriculable
          }
        }
      }
    }

    console.log(perdidas);

    for (var i = 0; i < id_matriculables.length; i++) {
      $.post(
        "php/actualizar_estado_materias.php",
        {
          idMaterias: id_matriculables[i],
          idUsua: $sessionStorage.idGlobal,
          Semestre: $sessionStorage.Semestre_Usua,
          estado: nuevo_estado[i],
        },
        function (mensaje) {},
      );
    }
  }

  $.post("php/listar_materias_matriculas.php", { valorBusqueda: $scope.programa }, function (mensaje) {
    var array = JSON.parse(mensaje);
    $timeout(function () {
      $scope.materias = array;
      console.table(array);
      $sessionStorage.Materias = array;

      //actualizar_estado_materias($sessionStorage.Materias);

      // Funcion para remover valores
      function removerDuplicados(data) {
        return data.filter((value, indice) => data.indexOf(value) == indice);
      }

      //funcion para remover espacios vacios

      function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0, j = actual.length; i < j; i++) {
          if (actual[i]) {
            newArray.push(actual[i]);
          }
        }
        return newArray;
      }

      var Semestres = [];
      $scope.SemestresR = [];
      $scope.Programas = [];

      for (var i = 0; i < $sessionStorage.Materias.length; i++) {
        Semestres[i] = {
          Numero: $sessionStorage.Materias[i].Semestre,
          Programa: $sessionStorage.Materias[i].Programa,
        };
        $scope.Programas[i] = $sessionStorage.Materias[i].Programa;
      }
      //Filtrar

      var result = Semestres.reduce((unique, o) => {
        if (!unique.some((obj) => obj.Numero === o.Numero && obj.Programa === o.Programa)) {
          unique.push(o);
        }
        return unique;
      }, []);
      $scope.SemestresObj = result;
      $scope.Programas = removerDuplicados($scope.Programas);

      $scope.Semestres = [];

      for (var i = 0; i < $scope.SemestresObj.length; i++) {
        $scope.Semestres[i] = $scope.SemestresObj[i].Numero;
      }
      $scope.Semestres = $scope.Semestres.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < $scope.Semestres.length; i++) {
        $scope.SemestresR[i] = romanizar($scope.Semestres[i]);
      }

      $scope.creditosDisp = 0;
      $scope.estadoMat = [];
      for (var i = 0; i < $sessionStorage.Materias.length; i++) {
        if ($sessionStorage.Materias[i].Semestre == $sessionStorage.Semestre_Usua) {
          $scope.creditosDisp = parseInt($scope.creditosDisp) + parseInt($sessionStorage.Materias[i].Creditos);
        }

        switch ($sessionStorage.estadoMat[i]) {
          case "-1":
            $scope.estadoMat[i] = "col-3 materia-pendiente";
            break;
          case "0":
            $scope.estadoMat[i] = "col-3 materia-validable";
            break;
          case "1":
            $scope.estadoMat[i] = "col-3 materia-matriculada";
            break;
          case "2":
            $scope.estadoMat[i] = "col-3 materia-matriculable";
            break;
          case "3":
            $scope.estadoMat[i] = "col-3 materia-reprobada";
            break;
          case "4":
            $scope.estadoMat[i] = "col-3 materia-aprobada";
            break;
        }
      }

      $scope.confirmarMatricula = function (materias) {
        materias = cleanArray(materias);
        var matriculadas = [];
        var p = 0;
        for (var j = 0; j < materias.length; j++) {
          for (var i = 0; i < $sessionStorage.Materias.length; i++) {
            if ($sessionStorage.Materias[i].Codigo == materias[j]) {
              matriculadas[p] = {
                Codigo: materias[j],
                Estado: $sessionStorage.estadoMat[i],
              };
              p = p + 1;
            }
          }
        }

        matriculadas = matriculadas.filter(function (matricula) {
          return matricula.Estado !== "0";
        });

        $sessionStorage.matriculadas = matriculadas;
      };

      $scope.cargarComprobante = function () {
        for (var j = 0; j < $sessionStorage.matriculadas.length; j++) {
          $.post(
            "php/matricularMateria.php",
            {
              valorBusqueda: $sessionStorage.matriculadas[j].Codigo,
              Usua: $sessionStorage.idGlobal,
            },
            function (mensaje) {
              var array = JSON.parse(mensaje);
              $timeout(function () {
                console.log(mensaje);
                if (array[0].message == "true") {
                  console.log("si");
                  alert("Envio exitoso!!");
                  $state.go("home");
                } else {
                  console.log("no");
                  alert("Se genero un error!!");
                }
              }, 500);
            },
          );
        }
      };
    }, 50);
  });
});

Jacob_App.controller("repositorio", function ($scope, $state, $timeout, $sessionStorage) {
  //Cargar categorias
  $.post("php/buscar_categoria.php", { TipoUsua: "3" }, function (mensaje) {
    $timeout(function () {
      var array = JSON.parse(mensaje);
      $sessionStorage.listCategorias = array;
      $scope.lista = $sessionStorage.listCategorias;
    }, 50);
  });

  $scope.busqueda = function (categoria) {
    $scope.buscarCategoria = categoria;
  };
  //Cargar archivos
  $.post("php/buscarDirectorio.php", { TipoUsua: "3" }, function (mensaje) {
    $timeout(function () {
      var array = JSON.parse(mensaje);
      $sessionStorage.archivos = array;
    }, 50);
  });
});

Jacob_App.controller("perfil", function ($scope, $state, $timeout, $sessionStorage) {
  $.post("php/datos_usuario.php", { valorBusqueda: $sessionStorage.idGlobal }, function (mensaje) {
    $timeout(function () {
      $scope.estudiante = JSON.parse(mensaje);
      console.log($scope.estudiante.Nom1Usua);
      // Funcion para convertir numeros en romanos
      function romanizar(num) {
        var lookup = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
          },
          roman = "",
          i;
        for (i in lookup) {
          while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
      }
      $scope.EdadUsua = parseInt($scope.estudiante[0].EdadUsua);
      $scope.semestreR = romanizar($scope.estudiante[0].Semestre);
    }, 50);
  });

  $scope.direEdit = false;
  $scope.usuaEdit = false;
  $scope.teleEdit = false;
  $scope.emailEdit = false;

  $scope.edicion_perfil = function (tipo) {
    switch (tipo) {
      case "Usuario":
        if ($scope.usuaEdit == true) {
          $scope.usuaEdit = false;
        } else {
          $scope.usuaEdit = true;
        }

        break;
      case "Telefono":
        if ($scope.teleEdit == true) {
          $scope.teleEdit = false;
        } else {
          $scope.teleEdit = true;
        }

        break;
      case "Email":
        if ($scope.emailEdit == true) {
          $scope.emailEdit = false;
        } else {
          $scope.emailEdit = true;
        }

        break;
      case "Direccion":
        if ($scope.direEdit == true) {
          $scope.direEdit = false;
        } else {
          $scope.direEdit = true;
        }

        break;
    }
  };
});
