// Creación del módulo
var Jacob_App = angular.module("Jacob_App", ["ui.router", "ngStorage", "ngDraggable", "ui.bootstrap"]);

// Configuración de las rutas
Jacob_App.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("homeAdmin", {
      url: "/homeAdmin",
      templateUrl: "homeAdmin.html",
      controller: "adminController",
    })
    .state("materias", {
      url: "/materias",
      templateUrl: "materias.html",
      controller: "materias",
    })
    .state("plus_cursos", {
      url: "/plus_cursos",
      templateUrl: "plus_cursos.html",
      controller: "plus_cursos",
    })
    .state("crear_categoria", {
      url: "/crear_categoria",
      templateUrl: "crear_categoria.html",
      controller: "plus_cursos",
    })
    .state("crear_curso", {
      url: "/crear_curso",
      templateUrl: "crear_curso.html",
      controller: "crear_curso",
    })
    .state("usuarios", {
      url: "/usuarios",
      templateUrl: "usuarios.html",
      controller: "usuarios",
    })
    .state("repositorio", {
      url: "/repositorio",
      templateUrl: "repositorio.html",
      controller: "repositorio",
    })
    .state("crear_docente", {
      url: "/crear_docente",
      templateUrl: "crear_docente.html",
      controller: "usuarios",
    })
    .state("crear_administrativo", {
      url: "/crear_administrativo",
      templateUrl: "crear_administrativo.html",
      controller: "usuarios",
    })
    .state("crear_estudiante", {
      url: "/crear_estudiante",
      templateUrl: "crear_estudiante.html",
      controller: "crear_estudiante",
    })
    .state("aceptarMatricula", {
      url: "/aceptarMatricula",
      templateUrl: "aceptarMatricula.html",
      controller: "aceptarMatricula",
    })
    .state("inscripciones", {
      url: "/inscripciones",
      templateUrl: "inscripciones.html",
      controller: "inscripciones",
    })
    .state("crear_materia", {
      url: "/crear_materia",
      templateUrl: "crear_materia.html",
      controller: "crear_materia",
    })
    .state("crear_programa", {
      url: "/crear_programa",
      templateUrl: "crear_programa.html",
      controller: "crear_programa",
    })

    .state("navegacion_admin", {
      url: "/navegacion_admin",
      templateUrl: "navegacion_admin.html",
      controller: "barra_navegacion",
    })
    .state("crear_banco", {
      parent: "navegacion_admin",
      url: "/crear_banco",
      views: {
        seccion_curso: {
          templateUrl: "crear_banco.html",
          controller: "barra_navegacion",
        },
      },
    })
    .state("objetivos", {
      parent: "navegacion_admin",
      url: "/objetivos",
      views: {
        seccion_curso: {
          templateUrl: "objetivos.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("equipo", {
      parent: "navegacion_admin",
      url: "/equipo",
      views: {
        seccion_curso: {
          templateUrl: "equipo.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("horario", {
      parent: "navegacion_admin",
      url: "/horario",
      views: {
        seccion_curso: {
          templateUrl: "horario.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("teoria", {
      parent: "navegacion_admin",
      url: "/teoria",
      views: {
        seccion_curso: {
          templateUrl: "teoria.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("video-clase", {
      parent: "navegacion_admin",
      url: "/video-clase",
      views: {
        seccion_curso: {
          templateUrl: "video-clase.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("asociacion", {
      parent: "navegacion_admin",
      url: "/asociacion",
      views: {
        seccion_curso: {
          templateUrl: "asociacion.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("unica", {
      parent: "navegacion_admin",
      url: "/unica",
      views: {
        seccion_curso: {
          templateUrl: "unica.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("frase", {
      parent: "navegacion_admin",
      url: "/frase",
      views: {
        seccion_curso: {
          templateUrl: "frase.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("refuerzo", {
      parent: "navegacion_admin",
      url: "/refuerzo",
      views: {
        seccion_curso: {
          templateUrl: "refuerzo.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("taller", {
      parent: "navegacion_admin",
      url: "/taller",
      views: {
        seccion_curso: {
          templateUrl: "taller.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("calificacionT", {
      parent: "navegacion_admin",
      url: "/calificacionT",
      views: {
        seccion_curso: {
          templateUrl: "calificacion-taller.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("evaluacion", {
      parent: "navegacion_admin",
      url: "/evaluacion",
      views: {
        seccion_curso: {
          templateUrl: "examen-final.html",
          controller: "contenido_curso",
        },
      },
    })
    .state("calificacionE", {
      parent: "navegacion_admin",
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
});

Jacob_App.run([
  "$state",
  "$rootScope",
  "$stateParams",
  "$anchorScroll",
  function ($state, $rootScope, $stateParams, $anchorScroll) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go("homeAdmin");
    $anchorScroll.yOffset = 1000; // Scroll de 1000 px extra

    //Siempre iniciar en top
    $rootScope.$on("$stateChangeSuccess", function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  },
]);

Jacob_App.filter("unique", function () {
  return function (collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function (item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });

    return output;
  };
});

Jacob_App.directive("ngFile", [
  "$parse",
  function ($parse) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        element.bind("change", function () {
          $parse(attrs.ngFile).assign(scope, element[0].files);
          scope.$apply();
        });
      },
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

Jacob_App.controller("adminController", function ($scope, $timeout, $sessionStorage) {
  var xmlhttp = new XMLHttpRequest();
  var url = "php/user.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $sessionStorage.idGlobal = array[0].id;
        $scope.nom_usu = array[0].name;
        $scope.usu_tipo = array[0].usu_tipo;
        $scope.emai_usua = array[0].emai_usua;
      }, 100);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});

Jacob_App.controller("inscripciones", function ($scope, $state, $timeout, $rootScope) {
  $scope.idCurso = 0;
  $scope.nombreUsua = "";
  $scope.nombreCurso = "";
  var xmlhttp = new XMLHttpRequest();
  var url = "php/matriculasPendientes.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.records = array;
        console.log(array);
        if ($scope.records[0].message != "false") {
          $scope.val = 1;
          console.log($scope.val);
          console.log(array.message);
        }
      }, 20);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  $scope.pasardatos = function (Dato, nombreUsua, nombreCurso) {
    $scope.idCurso = Dato;
    $scope.nombreUsua = nombreUsua;
    $scope.nombreCurso = nombreCurso;
  };

  $scope.confirmar = function (Dato) {
    $.post("php/confirmarInscripcion.php", { valorBusqueda: Dato }, function (mensaje) {
      var array = JSON.parse(mensaje);
      $timeout(function () {
        console.log(mensaje);
        $("#exampleModalCenter").modal("hide"); //ocultamos el modal
        $("body").removeClass("modal-open"); //eliminamos la clase del body para poder hacer scroll
        $(".modal-backdrop").remove(); //eliminamos el backdrop del modal
        $state.reload();
      }, 100);
    });
  };
});

Jacob_App.controller("materias", function ($scope, $timeout, $sessionStorage, $state, $rootScope) {
  $scope.mensaje = "Hola";
  $.post("php/listar_materias.php", { valorBusqueda: $sessionStorage.idGlobal }, function (mensaje) {
    var array = JSON.parse(mensaje);
    $timeout(function () {
      $scope.materias = array;
      $sessionStorage.Materias = array;

      // Funcion para remover valores
      function removerDuplicados(data) {
        return data.filter((value, indice) => data.indexOf(value) == indice);
      }

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
    }, 50);
  });

  $scope.ingreso = function (Codigo, Nombre, Semestre) {
    $scope.Nombre = Nombre;
    $scope.Semestre = Semestre;
    $scope.Programa = Programa;
    $scope.Codigo = Codigo;
  };

  $scope.ingresoCurso = function (Categoria, Tipo, id, Nombre, Semestre, Programa, Usua) {
    var evaluacionCurso = -1;

    $sessionStorage.Categoria = Categoria;
    $sessionStorage.Tipo = Tipo;
    $sessionStorage.idCurso = id;
    $sessionStorage.nombreCurso = Nombre;
    $sessionStorage.Semestre = Semestre;
    $sessionStorage.Programa = Programa;
    $sessionStorage.Usuario = Usua;
    $sessionStorage.evaluacionCurso = evaluacionCurso;

    //Contenido para curso-materia seleccionado
    $scope.curso = "Contenido Curso";
    $.post("php/contenido_materias.php", { idCurso: $sessionStorage.idCurso, Tipo: $sessionStorage.Tipo }, function (curso) {
      var array = JSON.parse(curso);

      $timeout(function () {
        //Revisar y organizar Datos //
        array.sort(function (x, y) {
          return x.Puesto - y.Puesto;
        });

        $sessionStorage.tema = array;
        $sessionStorage.NombModulo = [];
        $sessionStorage.NombLeccion = [];
        $sessionStorage.navLink = [];
        $sessionStorage.Nota = parseFloat($sessionStorage.evaluacionCurso);
        for (i = 0; i < $sessionStorage.tema.length; i++) {
          $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
          $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
        }

        //nav-link
        for (i = 1; i < $sessionStorage.tema.length; i++) {
          $sessionStorage.navLink[i] = "nav-link titulos-modulos";
        }
        $sessionStorage.navLink[0] = "nav-link titulos-activos";
        //Inicio Seccion
        $scope.inicioSec = $sessionStorage.tema[0].Seccion;
        $scope.inicioNombSec = $sessionStorage.tema[0].NombSeccion;
        $scope.contSec = $sessionStorage.tema[0].Contenido;

        $sessionStorage.actualSec = $scope.inicioSec;
        $sessionStorage.actualNombSec = $scope.inicioNombSec;

        try {
          $sessionStorage.prevSec = $sessionStorage.tema[0].Orden;
        } catch (e) {
          $sessionStorage.prevSec = $sessionStorage.tema[0].Orden;
        }

        try {
          $sessionStorage.nextSec = $sessionStorage.tema[1].Orden;
        } catch (e) {
          $sessionStorage.nextSec = $sessionStorage.tema[1].Orden;
        }
        $sessionStorage.actualSecId = $sessionStorage.tema[0].Orden;
        $sessionStorage.Objetivos = $sessionStorage.tema[0].Contenido.split("</p>");
        $state.go("objetivos");
      }, 10);
    });
  };

  $scope.logout = function () {
    $sessionStorage.$reset();
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

Jacob_App.controller("plus_cursos", function ($scope, $timeout, $sessionStorage, $state, $rootScope) {
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

  $scope.ingresoCurso = function (Categoria, Tipo, id, Nombre, Programa, Usua) {
    var evaluacionCurso = -1;

    $sessionStorage.Categoria = Categoria;
    $sessionStorage.Tipo = Tipo;
    $sessionStorage.idCurso = id;
    $sessionStorage.nombreCurso = Nombre;
    $sessionStorage.Semestre = "0";
    $sessionStorage.Programa = Programa;
    $sessionStorage.Usuario = Usua;
    $sessionStorage.evaluacionCurso = evaluacionCurso;

    //Contenido para curso-materia seleccionado
    $scope.curso = "Contenido Curso";
    $.post("php/contenido_materias.php", { idCurso: $sessionStorage.idCurso, Tipo: $sessionStorage.Tipo }, function (curso) {
      var array = JSON.parse(curso);

      $timeout(function () {
        //Revisar y organizar Datos //
        array.sort(function (x, y) {
          return x.Puesto - y.Puesto;
        });

        $sessionStorage.tema = array;
        $sessionStorage.NombModulo = [];
        $sessionStorage.NombLeccion = [];
        $sessionStorage.navLink = [];
        $sessionStorage.Nota = parseFloat($sessionStorage.evaluacionCurso);
        for (i = 0; i < $sessionStorage.tema.length; i++) {
          $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
          $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
        }

        //nav-link
        for (i = 1; i < $sessionStorage.tema.length; i++) {
          $sessionStorage.navLink[i] = "nav-link titulos-modulos";
        }
        $sessionStorage.navLink[0] = "nav-link titulos-activos";
        //Inicio Seccion
        $scope.inicioSec = $sessionStorage.tema[0].Seccion;
        $scope.inicioNombSec = $sessionStorage.tema[0].NombSeccion;
        $scope.contSec = $sessionStorage.tema[0].Contenido;

        $sessionStorage.actualSec = $scope.inicioSec;
        $sessionStorage.actualNombSec = $scope.inicioNombSec;

        try {
          $sessionStorage.prevSec = $sessionStorage.tema[0].Orden;
        } catch (e) {
          $sessionStorage.prevSec = $sessionStorage.tema[0].Orden;
        }

        try {
          $sessionStorage.nextSec = $sessionStorage.tema[1].Orden;
        } catch (e) {
          $sessionStorage.nextSec = $sessionStorage.tema[1].Orden;
        }
        $sessionStorage.actualSecId = $sessionStorage.tema[0].Orden;
        $sessionStorage.Objetivos = $sessionStorage.tema[0].Contenido.split("</p>");
        $state.go("objetivos");
      }, 10);
    });
  };

  $scope.logout = function () {
    $sessionStorage.$reset();
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CONTROLADOR CREACION DE MATERIAS////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Jacob_App.controller("crear_materia", function ($scope, $timeout, $state, $http, $sessionStorage) {
  $scope.upload = function () {
    var fd = new FormData();
    var file1 = document.getElementById("Contenido").files[0];
    var file2 = document.getElementById("LibroGuia").files[0];
    var file3 = document.getElementById("Archivo").files[0];
    var file4 = document.getElementById("Calendario").files[0];
    var folder1 = document.getElementById("Programa").value;
    var folder2 = document.getElementById("Nombre").value;
    var categoria = "Materias";

    fd.append("Contenido", file1);
    fd.append("LibroGuia", file2);
    fd.append("Archivo", file3);
    fd.append("Calendario", file4);
    fd.append("Folder1", folder1);
    fd.append("Folder2", folder2);
    fd.append("Categoria", categoria);

    // AJAX request
    $http({
      method: "post",
      url: "upload.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      $scope.response = response.data;
      console.log($scope.response);
    });
  };

  $scope.sss = 2;
  //Cargar docentes
  $.post("php/listar_docentes.php", { TipoUsua: "3" }, function (mensaje) {
    $timeout(function () {
      var array2 = JSON.parse(mensaje);
      $scope.listaDoc = [];
      for (i = 0; i < array2.length; i++) {
        $scope.listaDoc[i] = array2[i].Nom1Usua;
      }
    }, 50);
  });

  //Cargar programas
  var xmlhttp = new XMLHttpRequest();
  var url = "php/buscar_programa.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.programas = array;
      }, 50);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  $scope.cargarMaterias = function () {
    var Programa = document.getElementById("Programa");
    if (Programa.value != "") {
      $.post("php/buscar_materia.php", { Programa: Programa.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.materias = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas1 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas1 = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas2 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas2 = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas3 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas3 = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas4 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas4 = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas5 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas5 = array;
        }, 50);
      });
    } else {
    }
  };

  $scope.cargarTemas6 = function (MateriaPrevia) {
    var Materia = document.getElementById(MateriaPrevia);
    if (Materia.value != "") {
      $.post("php/buscar_tema.php", { Materia: Materia.value }, function (mensaje) {
        var array = JSON.parse(mensaje);
        $timeout(function () {
          $scope.temas6 = array;
        }, 50);
      });
    } else {
    }
  };
  //Datos Horario
  $scope.Semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
  $scope.Dia = [];
  $scope.HoraInicio = [];
  $scope.HoraFin = [];

  ///////////////////// Funcion creación de materias //////////////////////////

  $scope.crear_materia = function () {
    //Prerequisitos
    var Prerequisitos;
    var cont = 0;
    for (var i = 1; i < 5; i++) {
      if ($scope["Prerequisito" + i] !== undefined && $scope["Prerequisito" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Prerequisitos = $scope["Prerequisito" + i];
        } else {
          Prerequisitos = Prerequisitos + "</p>" + $scope["Prerequisito" + i];
        }
      }
    }

    if (Prerequisitos === undefined || Prerequisitos == "") {
      Prerequisitos = "NULL";
    }

    //Materia Previa
    var MateriaPrevia;
    var cont = 0;
    for (var i = 1; i < 7; i++) {
      if ($scope["MateriaPrevia" + i] !== undefined && $scope["MateriaPrevia" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          MateriaPrevia = $scope["MateriaPrevia" + i];
        } else {
          MateriaPrevia = MateriaPrevia + "</p>" + $scope["MateriaPrevia" + i];
        }
      }
    }

    if (MateriaPrevia === undefined || MateriaPrevia == "") {
      MateriaPrevia = "NULL";
    }

    //Tema Previo
    var TemaPrevio;
    var cont = 0;
    for (var i = 1; i < 7; i++) {
      if ($scope["TemaPrevio" + i] !== undefined && $scope["TemaPrevio" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          TemaPrevio = $scope["TemaPrevio" + i];
        } else {
          TemaPrevio = TemaPrevio + "</p>" + $scope["TemaPrevio" + i];
        }
      }
    }

    if (TemaPrevio === undefined || TemaPrevio == "") {
      TemaPrevio = "NULL";
    }

    //Objetivos
    var Objetivos;
    var cont = 0;
    for (var i = 1; i < 11; i++) {
      if ($scope["Objetivo" + i] !== undefined && $scope["Objetivo" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Objetivos = $scope["Objetivo" + i];
        } else {
          Objetivos = Objetivos + "</p>" + $scope["Objetivo" + i];
        }
      }
    }

    if (Objetivos === undefined || Objetivos == "") {
      Objetivos = "NULL";
    }

    //Docentes
    var Docentes;
    var cont = 0;
    for (var i = 1; i < 8; i++) {
      if ($scope["Docente" + i] !== undefined && $scope["Docente" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Docentes = $scope["Docente" + i];
        } else {
          Docentes = Docentes + "</p>" + $scope["Docente" + i];
        }
      }
    }

    if (Docentes === undefined || Docentes == "") {
      Docentes = "NULL";
    }

    //Bienvenida
    var Bienvenida;
    var cont = 0;
    for (var i = 1; i < 8; i++) {
      if ($scope["Bienvenida" + i] !== undefined && $scope["Bienvenida" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Bienvenida = $scope["Bienvenida" + i];
        } else {
          Bienvenida = Bienvenida + "</p>" + $scope["Bienvenida" + i];
        }
      }
    }

    if (Bienvenida === undefined || Bienvenida == "") {
      Bienvenida = "NULL";
    }

    //Sede
    var Sede;
    var cont = 0;
    for (var i = 1; i < 8; i++) {
      if ($scope["Sede" + i] !== undefined && $scope["Sede" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Sede = $scope["Sede" + i];
        } else {
          Sede = Sede + "</p>" + $scope["Sede" + i];
        }
      }
    }

    if (Sede === undefined || Sede == "") {
      Sede = "NULL";
    }

    //Jornada
    var Jornada;
    var cont = 0;
    for (var i = 1; i < 8; i++) {
      if ($scope["Jornada" + i] !== undefined && $scope["Jornada" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Jornada = $scope["Jornada" + i];
        } else {
          Jornada = Jornada + "</p>" + $scope["Jornada" + i];
        }
      }
    }

    if (Jornada === undefined || Jornada == "") {
      Jornada = "NULL";
    }

    //Horario
    var Horario;
    var cont = 0;

    for (var i = 0; i < $scope.Dia.length; i++) {
      if ($scope.Dia[i] == null || $scope.Dia[i] == undefined) {
        continue;
      } else {
        if (cont == 0) {
          Horario =
            $scope.Dia[i] +
            "</p>" +
            $scope.HoraInicio[i].getHours() +
            ":" +
            $scope.HoraInicio[i].getMinutes() +
            "</p>" +
            $scope.HoraFin[i].getHours() +
            ":" +
            $scope.HoraFin[i].getMinutes();
          cont = cont + 1;
        } else {
          Horario =
            Horario +
            "</p>" +
            $scope.Dia[i] +
            "</p>" +
            $scope.HoraInicio[i].getHours() +
            ":" +
            $scope.HoraInicio[i].getMinutes() +
            "</p>" +
            $scope.HoraFin[i].getHours() +
            ":" +
            $scope.HoraFin[i].getMinutes();
          cont = cont + 1;
        }
      }
    }

    $.post(
      "php/crear_materia2.php",
      {
        Nombre: $scope.Nombre,
        Programa: $scope.Programa,
        Semestre: $scope.Semestre,
        Categoria: $scope.Categoria,
        Creditos: $scope.Creditos,
        Prerequisito: Prerequisitos,
        Descripcion: $scope.Acercade,
        MateriaPrev: MateriaPrevia,
        TemaPrev: TemaPrevio,
        Fundamentos: $scope.Fundamentos,
        Objetivos: Objetivos,
        Nomb_Docente: Docentes,
        Bienvenida: Bienvenida,
        Sede: Sede,
        Jornada: Jornada,
        Horario: Horario,
      },
      function (mensaje) {
        $timeout(function () {
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");
            alert("Materia Creada!!");
            $state.go("materias");
          } else {
            if (array[0].message == "false2") {
              alert("La materia ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 200);
      },
    );
  };
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CONTROLADOR BARRA DE NAVEGACION////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Jacob_App.controller("barra_navegacion", function ($scope, $timeout, $sessionStorage, $state, $anchorScroll, $location, $window) {
  /*-------------- Reubicar Scroll--------*/
  $timeout(function () {
    $location.hash($sessionStorage.actualSecId);
    $anchorScroll();
    $location.hash("");
  }, 500);
  $timeout(function () {
    $window.document.getElementById("jacob").scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
  }, 500);

  /*--------------Listar secciones en barra de navegación------------------*/
  $scope.NombreCurso = $sessionStorage.nombreCurso;
  $scope.NombLeccion = $sessionStorage.NombLeccion;
  $scope.NombModulo = $sessionStorage.NombModulo;
  $scope.navLink = $sessionStorage.navLink;
  $scope.prevSec = $sessionStorage.prevSec;
  $scope.nextSec = $sessionStorage.nextSec;

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

  /*------------------------------- - Contenido de seccion escogida ---------------------------------------*/

  $scope.n_seccion = function (seccion) {
    $scope.NombSeccionAc = [];
    $scope.SeccionId = [];
    var prueba = 0;

    for (var i = 0; i < $sessionStorage.tema.length; i++) {
      $scope.NombSeccionAc[i] = $sessionStorage.tema[i].NombSeccion;
      $scope.SeccionId[i] = $sessionStorage.tema[i].Orden;
      $scope.SeccionAc = $sessionStorage.tema[i].Seccion;

      /*-------------- Modales Pruebas--------*/
      $("#exampleModalCenter1").modal("hide"); //ocultamos el modal
      $("#exampleModalCenter2").modal("hide"); //ocultamos el modal
      $("body").removeClass("modal-open"); //eliminamos la clase del body para poder hacer scroll
      $(".modal-backdrop").remove(); //eliminamos el backdrop del modal

      if ($scope.SeccionId[i] == seccion) {
        prueba = prueba + 1;

        /*--------------Actualizar botones de navegacion ----------------*/
        try {
          if ($sessionStorage.tema[i - 1].NombSeccion == "NULL") {
            for (var t = i - 1; t >= 0; t--) {
              if ($sessionStorage.tema[t].NombSeccion != "NULL") {
                $sessionStorage.prevSec = $sessionStorage.tema[t].Orden;
                break;
              } else {
                continue;
              }
            }
          } else {
            $sessionStorage.prevSec = $sessionStorage.tema[i - 1].Orden;
          }
        } catch (e) {
          $sessionStorage.prevSec = $sessionStorage.tema[i].Orden;
        }

        try {
          if ($sessionStorage.tema[i + 1].NombSeccion == "NULL") {
            for (var u = i + 1; u < $sessionStorage.tema.length; u++) {
              if ($sessionStorage.tema[u].NombSeccion != "NULL") {
                $sessionStorage.nextSec = $sessionStorage.tema[u].Orden;
                break;
              } else {
                continue;
              }
            }
          } else {
            $sessionStorage.nextSec = $sessionStorage.tema[i + 1].Orden;
          }
        } catch (e) {
          $sessionStorage.nextSec = $sessionStorage.tema[i].Orden;
        }
        $sessionStorage.actualNombSec = $sessionStorage.tema[i].NombSeccion;
        $sessionStorage.actualSec = $scope.SeccionAc;
        $sessionStorage.actualSecId = seccion;

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
            $sessionStorage.Teoria = $sessionStorage.tema[i].Contenido;
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
            $sessionStorage.ActividadRef = $sessionStorage.tema[i].Contenido;
            $state.go("refuerzo", {}, { reload: "refuerzo" });
            break;
          case "Taller":
            $sessionStorage.Taller = $sessionStorage.tema[i].Contenido;
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
      if (seccion == $sessionStorage.tema[i].Orden) {
        $sessionStorage.navLink[i] = "nav-link titulos-activos";
      }
    }

    /*-------------- Reubicar Scroll--------*/
    $timeout(function () {
      $location.hash($sessionStorage.actualSecId);
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
    $scope.navLink = $sessionStorage.navLink;
    $scope.prevSec = $sessionStorage.prevSec;
    $scope.nextSec = $sessionStorage.nextSec;

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
        name: $sessionStorage.tema[i].NombModulo,
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
  /*------------------------------- Crear Banco ---------------------------------------*/

  $scope.crear_banco = function () {
    console.log($scope.subtema);

    //Opciones
    var Opciones;
    var cont = 0;
    for (let i = 1; i < 5; i++) {
      if ($scope["opcion" + i] !== undefined && $scope["opcion" + i] !== "") {
        if (cont == 0) {
          Opciones = $scope["opcion" + i];
          cont = cont + 1;
        } else {
          Opciones = Opciones + "</p>" + $scope["opcion" + i];
          cont = cont + 1;
        }
      }
    }
    if (Opciones === undefined || Opciones == "") {
      Opciones = "NULL";
    }

    $.post(
      "php/crear_banco.php",
      {
        Materia: $sessionStorage.nombreCurso,
        Tema: $scope.tema,
        Subtema: $scope.subtema,
        Enunciado: $scope.enunciado,
        Explicacion: $scope.explicacion,
        Opciones: Opciones,
        Respuesta: $scope.respuesta,
        Tiempo: $scope.tiempo,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");
            alert("Pregunta agregada correctamente!!");
            //$state.go('materias');
            $state.reload();
          } else {
            if (array[0].message == "false2") {
              alert("La pregunta ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 200);
      },
    );
  };
  /*------------- Listar preguntas del banco -----------*/
  $scope.curso = "Contenido BANCO";
  $.post("php/listar_banco.php", { Materia: $sessionStorage.nombreCurso }, function (curso) {
    $timeout(function () {
      var banco = JSON.parse(curso);

      $scope.banco = banco;
      $scope.codigo_banco = [];
      $scope.materia_banco = [];
      $scope.tema_banco = [];
      $scope.subtema_banco = [];
      $scope.enunciado_banco = [];
      $scope.explicacion_banco = [];
      $scope.respuesta_banco = [];
      $scope.tiempo_banco = [];
      $scope.opciones_banco = [];
      $scope.minutos_banco = [];
      for (i = 0; i < banco.length; i++) {
        $scope.codigo_banco[i] = banco[i].codigo;
        $scope.materia_banco[i] = banco[i].materia;
        $scope.tema_banco[i] = banco[i].tema;
        $scope.subtema_banco[i] = banco[i].subtema;
        $scope.enunciado_banco[i] = banco[i].enunciado;
        $scope.explicacion_banco[i] = banco[i].explicacion;
        $scope.respuesta_banco[i] = banco[i].respuesta;
        $scope.tiempo_banco[i] = banco[i].tiempo;
        $scope.opciones_banco[i] = banco[i].opciones.split("</p>");
      }

      for (i = 0; i < banco.length; i++) {
        if ($scope.tiempo_banco[i] == "1") {
          $scope.minutos_banco[i] = "minuto";
        } else {
          $scope.minutos_banco[i] = "minutos";
        }
      }

      //Checked-disabled//
      $scope.checked_banco = [];
      for (var i = 0; i < banco.length; i++) {
        $scope.checked_banco[i] = [];
        for (var j = 0; j < $scope.opciones_banco[i].length; j++) {
          if ($scope.opciones_banco[i][j] == $scope.respuesta_banco[i]) {
            $scope.checked_banco[i][j] = "true";
          } else {
            $scope.checked_banco[i][j] = "";
          }
        }
      }
    }, 100);
  });
  /*------------- Opciones de edición -----------*/
  $scope.ocultar = 1;
  $scope.edicion_banco = function (codigo, tema, subtema, enunciado, opcion1, opcion2, opcion3, opcion4, explicacion, tiempo, respuesta) {
    $scope.ocultar = 0;
    $sessionStorage.cod_edicion = codigo;
    $scope.tema = tema;
    $scope.opcion1 = opcion1;
    $scope.opcion2 = opcion2;
    $scope.opcion3 = opcion3;
    $scope.opcion4 = opcion4;
    $scope.explicacion = explicacion;
    $scope.tiempo = parseInt(tiempo);
    $scope.respuesta = respuesta;
    $scope.enunciado = enunciado;

    //Enfocar input y hacer scroll suave
    document.getElementById("enunciado").focus({ preventScroll: true });
    $timeout(function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
      $scope.subtema = subtema;
    }, 50);
  };

  $scope.editar_banco = function () {
    var Opciones = $scope.opcion1 + "</p>" + $scope.opcion2 + "</p>" + $scope.opcion3 + "</p>" + $scope.opcion4;

    $.post(
      "php/editar_banco.php",
      {
        Codigo: $sessionStorage.cod_edicion,
        Tema: $scope.tema,
        Subtema: $scope.subtema,
        Enunciado: $scope.enunciado,
        Opciones: Opciones,
        Explicacion: $scope.explicacion,
        Tiempo: $scope.tiempo,
        Respuesta: $scope.respuesta,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");

            //$state.go('materias');
            $state.reload();
          } else {
            if (array[0].message == "false2") {
              alert("La pregunta ya existe!!");
            } else {
              console.log("no");
              alert("No se realizo ningun cambio!!");
            }
          }
        }, 200);
      },
    );
  };

  $scope.eliminar_banco = function () {
    var answer = confirm("¿Estas seguro de eliminar la pregunta?");
    if (answer) {
      $.post("php/eliminar_banco.php", { Codigo: $sessionStorage.cod_edicion }, function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            alert("Se elimino la pregunta!!");
            console.log("si");

            //$state.go('materias');
            $state.reload();
          } else {
            if (array[0].message == "false2") {
              alert("La pregunta ya existe!!");
            } else {
              console.log("no");
              alert("No se realizo ningun cambio!!");
            }
          }
        }, 200);
      });
    }
  };

  $scope.cancelar_edicion = function () {
    $scope.ocultar = 1;
    $scope.tema = "";
    $scope.subtema = "";
    $scope.opcion1 = null;
    $scope.opcion2 = null;
    $scope.opcion3 = null;
    $scope.opcion4 = null;
    $scope.explicacion = null;
    $scope.tiempo = null;
    $scope.respuesta = null;
    $scope.enunciado = null;
  };

  /*------------------------------- Crear Módulo ---------------------------------------*/
  $scope.modData = function (type, modaux) {
    $scope.tipo = type;
    $sessionStorage.tipo = type;
    $sessionStorage.modaux = modaux;
  };
  $scope.crear_modulo = function () {
    var nuevoPuesto = parseInt($sessionStorage.tema[$sessionStorage.tema.length - 1].Puesto) + 1;
    $.post(
      "php/crear_modulo.php",
      {
        modAux: $sessionStorage.modaux,
        Tipo: $sessionStorage.tipo,
        Puesto: nuevoPuesto,
        Codigo: $sessionStorage.idCurso,
        Nombre: $sessionStorage.nombreCurso,
        Modulo: $scope.nombreModulo,
        Categoria: $sessionStorage.Tipo,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            //Recargar Contenido
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  $sessionStorage.Orden = [];
                  var auxseccion = [];
                  var auxnseccion = [];
                  var auxorden = [];
                  var auxcont = 0;

                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                    if ($sessionStorage.tema[i].NombSeccion != "NULL") {
                      auxseccion[auxcont] = $sessionStorage.tema[i].NombSeccion;
                      auxnseccion[auxcont] = $sessionStorage.tema[i].Seccion;
                      auxorden[auxcont] = $sessionStorage.tema[i].Orden;
                      auxcont = auxcont + 1;
                    }
                  }
                  if ($sessionStorage.tipo == "create") {
                    $sessionStorage.actualSec = auxnseccion[auxnseccion.length - 1];
                    $sessionStorage.actualNombSec = auxseccion[auxseccion.length - 1];
                    var puestos = auxorden.map(function (x) {
                      return parseInt(x, 10);
                    });
                    var id_creacion = Math.max.apply(Math, puestos);
                    $sessionStorage.actualSecId = id_creacion;
                  } else {
                    $sessionStorage.actualSec = $sessionStorage.actualSec;
                    $sessionStorage.actualNombSec = $sessionStorage.actualNombSec;
                    $sessionStorage.actualSecId = $sessionStorage.actualSecId;
                  }

                  $scope.n_seccion($sessionStorage.actualSecId);
                }, 100);
              },
            );
            $("#modalModulo").modal("hide"); //ocultamos el modal

            $("#modalModulo").on("hidden.bs.modal", function (e) {
              $(this).find("#formModulo")[0].reset(); // Resetear formulario
            });
          } else {
            if (array[0].message == "false2") {
              alert("El modulo ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 100);
      },
    );
  };

  /*------------------------------- Crear Leccion ---------------------------------------*/
  $scope.lecData = function (Modulo, type, lecaux) {
    $sessionStorage.LecMod = Modulo;
    $scope.tipo = type;
    $sessionStorage.lecaux = lecaux;
    $sessionStorage.tipo = type;
    $sessionStorage.listPuesto = [];
    $sessionStorage.secAux = [];
    $sessionStorage.nsecAux = [];
    $sessionStorage.ordenAux = [];
    var cont = 0;
    var auxcont = 0;
    for (var i = 0; i < $sessionStorage.tema.length; i++) {
      if ($sessionStorage.tema[i].NombModulo == Modulo) {
        $sessionStorage.listPuesto[cont] = $sessionStorage.tema[i].Puesto;
        if ($sessionStorage.tema[i].NombSeccion != "NULL") {
          $sessionStorage.secAux[auxcont] = $sessionStorage.tema[i].NombSeccion;
          $sessionStorage.nsecAux[auxcont] = $sessionStorage.tema[i].Seccion;
          $sessionStorage.ordenAux[auxcont] = $sessionStorage.tema[i].Orden;
          auxcont = auxcont + 1;
        }

        cont = cont + 1;
      }
    }
    $sessionStorage.nuevoPuesto = parseInt($sessionStorage.listPuesto[$sessionStorage.listPuesto.length - 1]) + 1;
  };

  $scope.crear_leccion = function () {
    $.post(
      "php/crear_leccion.php",
      {
        Lecaux: $sessionStorage.lecaux,
        Tipo: $sessionStorage.tipo,
        Puesto: $sessionStorage.nuevoPuesto,
        Codigo: $sessionStorage.idCurso,
        Nombre: $sessionStorage.nombreCurso,
        Leccion: $scope.nombreLeccion,
        Modulo: $sessionStorage.LecMod,
        Categoria: $sessionStorage.Tipo,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");
            //Recargar Contenido
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  $sessionStorage.Orden = [];
                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                  }

                  if ($sessionStorage.lecaux != undefined) {
                    $sessionStorage.actualSec = $sessionStorage.actualSec;
                    $sessionStorage.actualNombSec = $sessionStorage.actualNombSec;
                    $sessionStorage.actualSecId = $sessionStorage.actualSecId;
                  } else {
                    if ($sessionStorage.secAux.length != 0) {
                      $sessionStorage.actualSec = $sessionStorage.nsecAux[$sessionStorage.nsecAux.length - 1];
                      $sessionStorage.actualNombSec = $sessionStorage.secAux[$sessionStorage.secAux.length - 1];
                      var puestos = $sessionStorage.ordenAux.map(function (x) {
                        return parseInt(x, 10);
                      });
                      var id_creacion = Math.max.apply(Math, puestos);
                      $sessionStorage.actualSecId = id_creacion;
                    } else {
                      $sessionStorage.actualSec = $sessionStorage.actualSec;
                      $sessionStorage.actualNombSec = $sessionStorage.actualNombSec;
                      $sessionStorage.actualSecId = $sessionStorage.actualSecId;
                    }
                  }

                  $scope.n_seccion($sessionStorage.actualSecId);
                }, 100);
              },
            );
            $("#modalLeccion").modal("hide"); //ocultamos el modal

            $("#modalLeccion").on("hidden.bs.modal", function (e) {
              $(this).find("#formLeccion")[0].reset(); // Resetear formulario
            });
          } else {
            if (array[0].message == "false2") {
              alert("La leccion ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 100);
      },
    );
  };
  /*------------------------------- Crear Contenido ---------------------------------------*/
  $scope.secData = function (Leccion, Modulo, type, secaux, ordaux) {
    $sessionStorage.secMod = Modulo;
    $sessionStorage.secLec = Leccion;
    $scope.tipo = type;
    $sessionStorage.tipo = type;
    $sessionStorage.secaux = secaux;
    $sessionStorage.ordaux = ordaux;

    $sessionStorage.listPuesto = [];

    var cont = 0;
    for (var i = 0; i < $sessionStorage.tema.length; i++) {
      if ($sessionStorage.tema[i].NombLeccion == Leccion) {
        $sessionStorage.listPuesto[cont] = $sessionStorage.tema[i].Puesto;
        cont = cont + 1;
      }
    }
    $sessionStorage.nuevoPuesto = parseInt($sessionStorage.listPuesto[$sessionStorage.listPuesto.length - 1]) + 1;
  };
  $scope.crear_seccion = function () {
    switch ($scope.tipoContenido) {
      case "Mantener":
        $scope.defaultContent = "Mantener";
        break;
      case "Teoria":
        $scope.defaultContent =
          '<h1 style="text-align: center;"><span style="color: #000000; font-family: verdana, geneva, sans-serif;">TITULO 1</span></h1>' +
          '<p style="text-align: left;"><span style="font-family: verdana, geneva, sans-serif; color: #000000;">Contenido Teoria 1</span><br /><span style="font-family: verdana, geneva, sans-serif;"><img style="display: block; margin-left: auto; margin-right: auto;" title="AUNAR" src="imagenesContenido/Aunar.png" alt="" width="200" height="202" /></span></p>' +
          "<h2> </h2>" +
          '<h2 style="text-align: left;"><span style="font-family: verdana, geneva, sans-serif;"><em>Subtitulo</em></span></h2>' +
          '<h1 style="text-align: center;"><span style="font-family: verdana, geneva, sans-serif;">TITULO 2</span></h1>' +
          '<p style="text-align: left;"><span style="font-family: verdana, geneva, sans-serif;">Contenido Teoria 2 </span></p>' +
          "<div> </div>";
        break;
      case "Video":
        $scope.defaultContent = "Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR";
        break;
      case "PruebaAsoc":
        $scope.defaultContent = "Concepto 1</p>Concepto 2</p>Concepto 3</p>Concepto 4</p>Opción 1</p>Opción 2</p>Opción 3</p>Opción 4";
        break;
      case "PruebaRespUnica":
        $scope.defaultContent = "Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p>Enunciado</p>Opción 3";
        break;
      case "PruebaFrase":
        $scope.defaultContent = "Palabra 1</p>Palabra 2</p>Palabra 3</p>Palabra 4</p>Enunciado 1</p>Enunciado 2</p>Enunciado 3</p>Enunciado 4";
        break;
      case "ActividadRef":
        $scope.defaultContent = '<h1 style="text-align: center;">Titulo Actividad</h1>' + '<p style="text-align: justify;">Contenido actividad</p>';
        break;
      case "Taller":
        $scope.defaultContent = '<h1 style="text-align: center;">Titulo Taller</h1>' + '<p style="text-align: justify;">Enunciado</p>';
        break;
      case "Evaluacion":
        $scope.defaultContent =
          "¿Esta es la Pregunta?</p>Respuesta 1A</p>Respuesta 1B</p>Respuesta 1C</p>Respuesta 1D</p>¿Esta es la Pregunta?</p>Respuesta 2A</p>Respuesta 2B</p>Respuesta 2C</p>Respuesta 2D</p>¿Esta es la Pregunta?</p>Respuesta 3A</p>Respuesta 3B</p>Respuesta 3C</p>Respuesta3D</p>¿Esta es la Pregunta?</p>Respuesta 4A</p>Respuesta 4B</p>Respuesta 4C</p>Respuesta4D</p>¿Esta es la Pregunta?</p>Respuesta 5A</p>Respuesta 5B</p>Respuesta 5C</p>Respuesta 5D</p>¿Esta es la Pregunta?</p>Respuesta 6A</p>Respuesta 6B</p>Respuesta 6C</p>Respuesta 6D</p>";
        break;
    }

    $.post(
      "php/crear_seccion.php",
      {
        Tipo: $sessionStorage.tipo,
        Secaux: $sessionStorage.secaux,
        Puesto: $sessionStorage.nuevoPuesto,
        Codigo: $sessionStorage.idCurso,
        Nombre: $sessionStorage.nombreCurso,
        Leccion: $sessionStorage.secLec,
        Modulo: $sessionStorage.secMod,
        Seccion: $scope.nombreContenido,
        Orden: $sessionStorage.ordaux,
        TSeccion: $scope.tipoContenido,
        Default: $scope.defaultContent,
        Categoria: $sessionStorage.Tipo,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");
            //Recargar Contenido
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  $sessionStorage.Orden = [];
                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                  }
                  var puestos = $sessionStorage.Orden.map(function (x) {
                    return parseInt(x, 10);
                  });
                  var id_creacion = Math.max.apply(Math, puestos);
                  $sessionStorage.actualSecId = id_creacion;

                  $sessionStorage.actualSec = $scope.tipoContenido;
                  $sessionStorage.actualNombSec = $scope.nombreContenido;

                  $scope.n_seccion($sessionStorage.actualSecId);
                }, 100);
              },
            );
            $("#modalContenido").modal("hide"); //ocultamos el modal

            $("#modalContenido").on("hidden.bs.modal", function (e) {
              $(this).find("#formContenido")[0].reset(); // Resetear formulario
            });
          } else {
            if (array[0].message == "false2") {
              alert("La seccion ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 100);
      },
    );
  };

  /*------------------------------- Crear Taller ---------------------------------------*/
  $scope.tallerData = function (Modulo, type, lecaux) {
    $sessionStorage.LecMod = Modulo;
    $scope.tipo = type;
    if (type == "create") {
      var contenidoTaller = '<h1 style="text-align: center;">Titulo Taller</h1>' + '<p style="text-align: justify;">Enunciado</p>';
    } else {
      var contenidoTaller = $sessionStorage.Taller.toString();
    }
    //Configuracion TinyMCE
    tinymce.remove();
    tinymce.init({
      language: "es",
      height: 500,
      mode: "textareas",
      entity_encoding: "raw",
      encoding: "UTF-8",
      content_css: "css/estilos.css",
      selector: "#contenidoTaller",
      setup: function (editor) {
        editor.on("init", function (e) {
          editor.setContent(contenidoTaller);
        });
      },
      // CARGAR IMAGENES
      plugins: "image code",
      toolbar:
        "undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code",
      toolbar_location: "bottom",
      image_title: true,
      images_upload_url: "postAcceptor.php",
    });

    $sessionStorage.lecaux = lecaux;
    $sessionStorage.tipo = type;
    $sessionStorage.listPuesto = [];
    $sessionStorage.secAux = [];
    $sessionStorage.nsecAux = [];
    $sessionStorage.ordenAux = [];
    var cont = 0;
    var auxcont = 0;
    for (var i = 0; i < $sessionStorage.tema.length; i++) {
      if ($sessionStorage.tema[i].NombModulo == Modulo) {
        $sessionStorage.listPuesto[cont] = $sessionStorage.tema[i].Puesto;
        if ($sessionStorage.tema[i].NombSeccion != "NULL") {
          $sessionStorage.secAux[auxcont] = $sessionStorage.tema[i].NombSeccion;
          $sessionStorage.nsecAux[auxcont] = $sessionStorage.tema[i].Seccion;
          $sessionStorage.ordenAux[auxcont] = $sessionStorage.tema[i].Orden;
          auxcont = auxcont + 1;
        }

        cont = cont + 1;
      }
    }
    $sessionStorage.nuevoPuesto = parseInt($sessionStorage.listPuesto[$sessionStorage.listPuesto.length - 1]) + 1;
    $sessionStorage.nuevoPuestoAux = parseInt($sessionStorage.listPuesto[$sessionStorage.listPuesto.length - 1]) + 2;
  };

  $scope.crear_taller = function () {
    $.post(
      "php/crear_leccion.php",
      {
        Lecaux: $sessionStorage.lecaux,
        Tipo: $sessionStorage.tipo,
        Puesto: $sessionStorage.nuevoPuesto,
        Codigo: $sessionStorage.idCurso,
        Nombre: $sessionStorage.nombreCurso,
        Leccion: "Taller - " + $sessionStorage.LecMod,
        Modulo: $sessionStorage.LecMod,
        Categoria: $sessionStorage.Tipo,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            $.post(
              "php/crear_seccion.php",
              {
                Tipo: $sessionStorage.tipo,
                Categoria: $sessionStorage.Tipo,
                Secaux: $sessionStorage.secaux,
                Puesto: $sessionStorage.nuevoPuesto,
                Codigo: $sessionStorage.idCurso,
                Nombre: $sessionStorage.nombreCurso,
                Leccion: "Taller - " + $sessionStorage.LecMod,
                Modulo: $sessionStorage.LecMod,
                Seccion: "Taller",
                TSeccion: "Taller",
                Default: tinyMCE.get("contenidoTaller").getContent(),
              },
              function (mensaje) {
                $.post(
                  "php/crear_seccion.php",
                  {
                    Tipo: $sessionStorage.tipo,
                    Categoria: $sessionStorage.Tipo,
                    Secaux: $sessionStorage.secaux,
                    Puesto: $sessionStorage.nuevoPuestoAux,
                    Codigo: $sessionStorage.idCurso,
                    Nombre: $sessionStorage.nombreCurso,
                    Leccion: "Taller - " + $sessionStorage.LecMod,
                    Modulo: $sessionStorage.LecMod,
                    Seccion: "Calificacion",
                    TSeccion: "CalificacionT",
                    Default:
                      "Calificacion</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/1 Trabajo - Taller 1/Solución Ejemplo T-T 1.pdf</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/4 Trabajo - Taller 1/Solución Ejemplo T-T 1.mp4",
                  },
                  function (mensaje) {
                    $timeout(function () {
                      console.log(mensaje);
                      var array = JSON.parse(mensaje);
                      if (array[0].message == "true") {
                        //Recargar Contenido
                        $.post(
                          "php/contenido_materias.php",
                          {
                            idCurso: $sessionStorage.idCurso,
                            Tipo: $sessionStorage.Tipo,
                          },
                          function (curso) {
                            var array = JSON.parse(curso);
                            $timeout(function () {
                              array.sort(function (x, y) {
                                return x.Puesto - y.Puesto;
                              });

                              //Revisar Datos //
                              $sessionStorage.tema = array;
                              $sessionStorage.NombModulo = [];
                              $sessionStorage.NombLeccion = [];
                              $sessionStorage.Orden = [];
                              for (i = 0; i < $sessionStorage.tema.length; i++) {
                                $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                                $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                                $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                              }

                              $sessionStorage.ordenAux.sort();
                              console.info($sessionStorage.ordenAux);

                              if ($sessionStorage.lecaux != undefined) {
                                $sessionStorage.actualSec = $sessionStorage.actualSec;
                                $sessionStorage.actualNombSec = $sessionStorage.actualNombSec;
                                $sessionStorage.actualSecId = $sessionStorage.actualSecId;
                              } else {
                                if ($sessionStorage.secAux.length != 0) {
                                  $sessionStorage.actualSec = $sessionStorage.nsecAux[$sessionStorage.nsecAux.length - 1];
                                  $sessionStorage.actualNombSec = $sessionStorage.secAux[$sessionStorage.secAux.length - 1];
                                  $sessionStorage.actualSecId = $sessionStorage.ordenAux[$sessionStorage.ordenAux.length - 1];
                                } else {
                                  $sessionStorage.actualSec = "Taller";
                                  $sessionStorage.actualNombSec = "Taller";
                                  $sessionStorage.actualSecId = $sessionStorage.ordenAux[$sessionStorage.ordenAux.length - 1];
                                }
                              }

                              $scope.n_seccion($sessionStorage.actualSecId);
                            }, 100);
                          },
                        );
                        $("#modalTaller").modal("hide"); //ocultamos el modal

                        $("#modalTaller").on("hidden.bs.modal", function (e) {
                          $(this).find("#formTaller")[0].reset(); // Resetear formulario
                        });
                      } else {
                        if (array[0].message == "false2") {
                          alert("La seccion ya existe!!");
                        } else {
                          console.log("no");
                          alert("Se genero un error!!");
                        }
                      }
                    }, 100);
                  },
                );
              },
            );
          } else {
            if (array[0].message == "false2") {
              alert("Este modulo ya contiene un taller!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 100);
      },
    );
  };

  /*------------------------------- Crear Evaluacion ---------------------------------------*/
  $scope.evalData = function (type, evalaux) {
    $scope.tipo = type;
    $sessionStorage.tipo = type;
    $sessionStorage.modaux = evalaux;
  };

  $scope.crear_evaluacion = function () {
    var nuevoPuesto = parseInt($sessionStorage.tema[$sessionStorage.tema.length - 1].Puesto) + 1;
    var nuevoPuestoAux = nuevoPuesto + 1;

    $.post(
      "php/crear_evaluacion.php",
      {
        modAux: $sessionStorage.evalaux,
        Tipo: $sessionStorage.tipo,
        Codigo: $sessionStorage.idCurso,
        Nombre: "Evaluacion" + $sessionStorage.nombreCurso,
        Modulo: $scope.nombreEvaluacion,
        Categoria: $sessionStorage.Tipo,
        Puesto: nuevoPuesto,
        Puesto2: nuevoPuestoAux,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            //Recargar Contenido
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  $sessionStorage.Orden = [];
                  var auxseccion = [];
                  var auxnseccion = [];
                  var auxorden = [];
                  var auxcont = 0;

                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                    if ($sessionStorage.tema[i].NombSeccion != "NULL") {
                      auxseccion[auxcont] = $sessionStorage.tema[i].NombSeccion;
                      auxnseccion[auxcont] = $sessionStorage.tema[i].Seccion;
                      auxorden[auxcont] = $sessionStorage.tema[i].Orden;
                      auxcont = auxcont + 1;
                    }
                  }

                  $scope.n_seccion($sessionStorage.tema[$sessionStorage.tema.length - 2].Orden);
                }, 100);
              },
            );
            $("#modalEvaluacion").modal("hide"); //ocultamos el modal

            $("#modalEvaluacion").on("hidden.bs.modal", function (e) {
              $(this).find("#formEvaluacion")[0].reset(); // Resetear formulario
            });
          } else {
            if (array[0].message == "false2") {
              alert("La evaluacion ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 100);
      },
    );
  };

  /*-----------------------------------Eliminar Módulo - Lección - Sección -----------------------------------------*/

  $scope.eliminar_ModSecLec = function (Tipo) {
    var answer = confirm("¿Estas seguro de eliminar la seccion? , todas las subsecciones tambien se eliminaran en el proceso.");
    if (answer) {
      if (Tipo == "NombModulo") {
        var NombDel = $sessionStorage.modaux;
      } else {
        if (Tipo == "NombLeccion") {
          var NombDel = $sessionStorage.lecaux;
          var ModDel = $sessionStorage.LecMod;
          console.log(ModDel);
        } else {
          var NombDel = $sessionStorage.secaux;
          var LecDel = $sessionStorage.secLec;
          var ModDel = $sessionStorage.secMod;
        }
      }
      $.post(
        "php/eliminar_mod_sec_lec.php",
        {
          Nombre: NombDel,
          Mod: ModDel,
          Lec: LecDel,
          Tipo: Tipo,
          Codigo: $sessionStorage.idCurso,
          Categoria: $sessionStorage.Tipo,
        },
        function (mensaje) {
          $timeout(function () {
            console.log(mensaje);
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  $sessionStorage.Orden = [];
                  var auxseccion = [];
                  var auxnseccion = [];
                  var auxorden = [];
                  var auxcont = 0;

                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                    if ($sessionStorage.tema[i].NombSeccion != "NULL") {
                      auxseccion[auxcont] = $sessionStorage.tema[i].NombSeccion;
                      auxnseccion[auxcont] = $sessionStorage.tema[i].Seccion;
                      auxorden[auxcont] = $sessionStorage.tema[i].Orden;
                      auxcont = auxcont + 1;
                    }
                  }

                  $scope.n_seccion($sessionStorage.tema[0].Orden);
                }, 100);
              },
            );
            $("#modalModulo").modal("hide"); //ocultamos el modal

            $("#modalModulo").on("hidden.bs.modal", function (e) {
              $(this).find("#formModulo")[0].reset(); // Resetear formulario
            });

            $("#modalTaller").modal("hide"); //ocultamos el modal

            $("#modalTaller").on("hidden.bs.modal", function (e) {
              $(this).find("#formTaller")[0].reset(); // Resetear formulario
            });

            $("#modalContenido").modal("hide"); //ocultamos el modal

            $("#modalContenido").on("hidden.bs.modal", function (e) {
              $(this).find("#formContenido")[0].reset(); // Resetear formulario
            });

            $("#modalLeccion").modal("hide"); //ocultamos el modal

            $("#modalLeccion").on("hidden.bs.modal", function (e) {
              $(this).find("#formLeccion")[0].reset(); // Resetear formulario
            });
          }, 100);
        },
      );
    }
  };

  $scope.modTaller = function () {
    $scope.$broadcast("modTaller");
    $("#modalTaller").modal("hide"); //ocultamos el modal

    $("#modalTaller").on("hidden.bs.modal", function (e) {
      $(this).find("#formTaller")[0].reset(); // Resetear formulario
    });
  };
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CONTROLADOR CONTENIDO MATERIAS - CURSOS////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Jacob_App.controller("contenido_curso", function ($scope, $state, $timeout, $rootScope, $stateParams, $localStorage, $sessionStorage, $http) {
  /*-----------------Asignar contenido de curso-----------------*/

  $scope.id = $sessionStorage.idCurso;
  $scope.progre = $sessionStorage.progreCurso;
  $scope.nombreCurso = $sessionStorage.nombreCurso;
  $scope.imgCurso = $sessionStorage.imgCurso;
  $scope.infoCurso = $sessionStorage.infoCurso;
  $scope.NombModulo = $sessionStorage.NombModulo;
  $scope.NombLeccion = $sessionStorage.NombLeccion;
  $scope.NombSeccion = [];

  $scope.usuario = $sessionStorage.Usuario;

  //Variables para editar contenido
  $scope.content = true;
  $scope.edit = false;
  $scope.edicion = function () {
    $scope.content = false;
    $scope.edit = true;
  };
  $scope.contenido = function () {
    $scope.n_seccion($sessionStorage.actualSecId);
  };

  /*----------- Editar contenido de seccion----------*/

  //Caso especial Taller
  $scope.$on("modTaller", function (e) {
    $scope.refuerzo_upload();
    $scope.modContenido("Taller");
  });

  $scope.upload = function () {
    var fd = new FormData();
    var file1 = document.getElementById("Contenido").files[0];
    var file2 = document.getElementById("LibroGuia").files[0];
    var file3 = document.getElementById("Archivo").files[0];
    var file4 = "NULL";
    var folder1 = $sessionStorage.Programa;
    var folder2 = $sessionStorage.nombreCurso;
    var categoria = "Materias";

    fd.append("Contenido", file1);
    fd.append("LibroGuia", file2);
    fd.append("Archivo", file3);
    fd.append("Calendario", file4);
    fd.append("Folder1", folder1);
    fd.append("Folder2", folder2);
    fd.append("Categoria", categoria);

    // AJAX request
    $http({
      method: "post",
      url: "upload.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      $scope.response = response.data;
    });
  };

  $scope.refuerzo_upload = function () {
    var fd = new FormData();
    var file1 = document.getElementById("Archivo").files[0];
    var file2 = document.getElementById("Video").files[0];
    var nombre = $sessionStorage.actualNombSec;
    var folder1 = $sessionStorage.Programa;
    var folder2 = $sessionStorage.nombreCurso;
    var categoria = "Materias";

    fd.append("Archivo", file1);
    fd.append("Video", file2);
    fd.append("Nombre", nombre);
    fd.append("Folder1", folder1);
    fd.append("Folder2", folder2);
    fd.append("Categoria", categoria);

    // AJAX request
    $http({
      method: "post",
      url: "refuerzo_upload.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      $scope.response = response.data;
    });
  };

  $scope.modContenido = function (categoria) {
    switch (categoria) {
      case "Objetivos":
        var Objetivos;
        var cont = 0;
        for (var i = 0; i < 10; i++) {
          if ($scope.Objetivos[i] !== undefined && $scope.Objetivos[i] !== "") {
            cont = cont + 1;
            if (cont == 1) {
              Objetivos = $scope.Objetivos[i];
            } else {
              Objetivos = Objetivos + "</p>" + $scope.Objetivos[i];
            }
          }
        }

        if (Objetivos === undefined || Objetivos == "") {
          Objetivos = "NULL";
        }

        $sessionStorage.editCont = Objetivos + "</p>" + $scope.Fundamentos;

        break;

      case "Equipo":
        $sessionStorage.editCont = $scope.Equipo[0] + "</p>" + $scope.Equipo[1];
        break;

      case "Horario":
        var cont = 0;

        for (var i = 0; i < $scope.Dia.length; i++) {
          if ($scope.Dia[i] == null || $scope.Dia[i] == undefined) {
            continue;
          } else {
            if (cont == 0) {
              $sessionStorage.editCont =
                $scope.Dia[i] +
                "</p>" +
                $scope.HoraInicio[i].getHours() +
                ":" +
                $scope.HoraInicio[i].getMinutes() +
                "</p>" +
                $scope.HoraFin[i].getHours() +
                ":" +
                $scope.HoraFin[i].getMinutes();
              cont = cont + 1;
            } else {
              $sessionStorage.editCont =
                $sessionStorage.editCont +
                "</p>" +
                $scope.Dia[i] +
                "</p>" +
                $scope.HoraInicio[i].getHours() +
                ":" +
                $scope.HoraInicio[i].getMinutes() +
                "</p>" +
                $scope.HoraFin[i].getHours() +
                ":" +
                $scope.HoraFin[i].getMinutes();
              cont = cont + 1;
            }
          }
        }
        var fd = new FormData();
        var Calendario = document.getElementById("Calendario").files[0];
        var folder1 = $sessionStorage.Programa;
        var folder2 = $sessionStorage.nombreCurso;
        var categoria = "Materias";

        fd.append("Calendario", Calendario);
        fd.append("Folder1", folder1);
        fd.append("Folder2", folder2);
        fd.append("Categoria", categoria);

        // AJAX request
        $http({
          method: "post",
          url: "upload.php",
          data: fd,
          headers: { "Content-Type": undefined },
        }).then(function successCallback(response) {});

        break;
      case "Teoria":
        $sessionStorage.editCont = tinyMCE.get("contenidoTeoria").getContent();
        break;
      case "Video":
        $sessionStorage.editCont = $scope.Video[0] + "</p>" + $scope.Video[1];
        break;
      case "PruebaAsoc":
        for (var i = 0; i < 8; i++) {
          if (i == 0) {
            $sessionStorage.editCont = $scope.PruebaAsoc[i];
          } else {
            $sessionStorage.editCont = $sessionStorage.editCont + "</p>" + $scope.PruebaAsoc[i];
          }
        }

        break;
      case "PruebaRespUnica":
        for (var i = 0; i < $scope.opcionesUnic.length; i++) {
          if (i == 0) {
            $sessionStorage.editCont = $scope.opcionesUnic[i];
          } else {
            $sessionStorage.editCont = $sessionStorage.editCont + "</p>" + $scope.opcionesUnic[i];
          }
        }
        $sessionStorage.editCont = $sessionStorage.editCont + "</p>" + $scope.enunciado + "</p>" + $scope.model.respuestas;

        break;
      case "PruebaFrase":
        for (var i = 0; i < 8; i++) {
          if (i == 0) {
            $sessionStorage.editCont = $scope.PruebaAsoc[i];
          } else {
            $sessionStorage.editCont = $sessionStorage.editCont + "</p>" + $scope.PruebaAsoc[i];
          }
        }

        break;
      case "ActividadRef":
        $sessionStorage.editCont = tinyMCE.get("contenidoRefuerzo").getContent();
        break;
      case "Taller":
        $sessionStorage.editCont = tinyMCE.get("contenidoTaller").getContent();
        break;
      case "Evaluacion":
        $sessionStorage.editCont = "UNDEFINED";
        break;
    }

    $.post(
      "php/editar_contenido.php",
      {
        Codigo: $sessionStorage.idCurso,
        NombSeccion: $sessionStorage.actualNombSec,
        Contenido: $sessionStorage.editCont,
        idContenido: $sessionStorage.actualSecId,
        Categoria: $sessionStorage.Tipo,
      },
      function (mensaje) {
        $timeout(function () {
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            //Recargar Contenido
            $scope.curso = "Contenido Curso";
            $.post(
              "php/contenido_materias.php",
              {
                idCurso: $sessionStorage.idCurso,
                Tipo: $sessionStorage.Tipo,
              },
              function (curso) {
                var array = JSON.parse(curso);
                $timeout(function () {
                  array.sort(function (x, y) {
                    return x.Puesto - y.Puesto;
                  });

                  //Revisar Datos //
                  $sessionStorage.tema = array;
                  $sessionStorage.NombModulo = [];
                  $sessionStorage.NombLeccion = [];
                  for (i = 0; i < $sessionStorage.tema.length; i++) {
                    $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                    $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                    $sessionStorage.Objetivos = $sessionStorage.tema[i].Contenido.split("</p>");
                  }
                  //$sessionStorage.actualSec = $sessionStorage.actualSec;
                  //$sessionStorage.actualNombSec = $scope.nombreContenido;

                  $scope.n_seccion($sessionStorage.actualSecId);
                }, 100);
              },
            );
          } else {
            if (array[0].message == "false2") {
              alert("Se genero un error!!");
            } else {
              console.log("Sin cambios");
              $scope.n_seccion($sessionStorage.actualSecId);
            }
          }
        }, 100);
      },
    );
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

      $.post("php/listar_docentes.php", { TipoUsua: "3" }, function (mensaje) {
        $timeout(function () {
          var array2 = JSON.parse(mensaje);
          $scope.listaDoc = [];
          for (i = 0; i < array2.length; i++) {
            $scope.listaDoc[i] = array2[i].Nom1Usua;
          }
        }, 50);
      });

      break;
    case "Teoria":
      $scope.Teoria = $sessionStorage.Teoria;
      document.getElementById("DisplayContent").innerHTML += $scope.Teoria.toString();

      //Configuracion TinyMCE
      tinymce.remove();
      tinymce.init({
        language: "es",
        height: 500,
        mode: "textareas",
        entity_encoding: "raw",
        encoding: "UTF-8",
        content_css: "css/estilos.css",
        selector: "#contenidoTeoria",
        setup: function (editor) {
          editor.on("init", function (e) {
            editor.setContent($scope.Teoria.toString());
          });
        },
        // CARGAR IMAGENES
        plugins: "image code",
        toolbar:
          "undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code",
        toolbar_location: "bottom",
        image_title: true,
        images_upload_url: "postAcceptor.php",
      });

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

      $scope.nuevaOpcion = function () {
        var newItemNo = $scope.opcionesUnic.length + 1;
        $scope.opcionesUnic.push("Opción " + newItemNo);
      };

      $scope.eliminarOpcion = function () {
        var newItemNo = $scope.opcionesUnic.length - 1;
        if (newItemNo !== 0) {
          $scope.opcionesUnic.pop();
        }
      };
      $scope.botonEliminar = function () {
        if ($scope.opcionesUnic.length > 4) {
          return true;
        } else {
          return false;
        }
      };

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

      //Configuracion TinyMCE
      tinymce.remove();
      tinymce.init({
        language: "es",
        height: 500,
        mode: "textareas",
        entity_encoding: "raw",
        encoding: "UTF-8",
        content_css: "css/estilos.css",
        selector: "#contenidoRefuerzo",
        setup: function (editor) {
          editor.on("init", function (e) {
            editor.setContent($scope.ActividadRef.toString());
          });
        },
        // CARGAR IMAGENES
        plugins: "image code",
        toolbar:
          "undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code",
        toolbar_location: "bottom",
        image_title: true,
        images_upload_url: "postAcceptor.php",
      });

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

          // Controles para super usuario y doncente en creacion////

          //Llenar valores por defecto
          $scope.tema_examen = [];
          $scope.subtema_examen = [];
          $scope.pregunta_examen = [];
          $scope.opcion = [];
          $scope.numeroPreguntas = [];

          for (let i = 0; i < $sessionStorage.numeroPreguntas; i++) {
            $scope.numeroPreguntas[i] = i;
          }

          $scope.nuevaOpcion = function () {
            var newItemNo = $scope.numeroPreguntas.length + 1;
            $scope.numeroPreguntas.push(newItemNo);
          };

          $scope.eliminarOpcion = function () {
            var newItemNo = $scope.numeroPreguntas - 1;
            if (newItemNo !== 0) {
              $scope.numeroPreguntas.pop();
            }
          };
          $scope.botonEliminar = function () {
            if ($scope.numeroPreguntas.length > 1) {
              return true;
            } else {
              return false;
            }
          };
          $scope.botonAgregar = function () {
            if ($scope.numeroPreguntas.length < 50) {
              return true;
            } else {
              return false;
            }
          };

          for (let i = 0; i < $scope.Evaluacion.length; i++) {
            $scope.tema_examen[i] = $scope.Evaluacion[i].split(":")[0];
            $scope.subtema_examen[i] = $scope.Evaluacion[i].split(":")[1];
          }

          ///Funcion para guardar evaluacion

          $scope.guardarEvaluacion = function () {
            for (var i = 0; i < $scope.tema_examen.length; i++) {
              if (i == 0) {
                var contenidoEvaluacion = $scope.tema_examen[i] + ":" + $scope.subtema_examen[i];
              } else {
                contenidoEvaluacion = contenidoEvaluacion + "</p>" + $scope.tema_examen[i] + ":" + $scope.subtema_examen[i];
              }
            }

            var contenidoCalificacion = contenidoEvaluacion;
            console.log($sessionStorage.actualSecId);

            $.post(
              "php/guardar_evaluacion.php",
              {
                Codigo: $sessionStorage.idCurso,
                Categoria: $sessionStorage.Tipo,
                Contenido_Evaluacion: contenidoEvaluacion,
                Contenido_Calificacion: contenidoCalificacion,
                Id: $sessionStorage.actualSecId,
              },
              function (mensaje) {
                var array = JSON.parse(mensaje);
                if (array[0].message == "true") {
                  //Recargar Contenido
                  $scope.curso = "Contenido Curso";
                  $.post(
                    "php/contenido_materias.php",
                    {
                      idCurso: $sessionStorage.idCurso,
                      Tipo: $sessionStorage.Tipo,
                    },
                    function (curso) {
                      var array = JSON.parse(curso);

                      alert("Evaluacion guardada con exito!!");
                      array.sort(function (x, y) {
                        return x.Puesto - y.Puesto;
                      });

                      //Revisar Datos //
                      $sessionStorage.tema = array;
                      $sessionStorage.NombModulo = [];
                      $sessionStorage.NombLeccion = [];
                      $sessionStorage.Orden = [];
                      var auxseccion = [];
                      var auxnseccion = [];
                      var auxorden = [];
                      var auxcont = 0;

                      for (i = 0; i < $sessionStorage.tema.length; i++) {
                        $sessionStorage.NombModulo[i] = $sessionStorage.tema[i].NombModulo;
                        $sessionStorage.NombLeccion[i] = $sessionStorage.tema[i].NombLeccion;
                        $sessionStorage.Orden[i] = $sessionStorage.tema[i].Orden;
                        if ($sessionStorage.tema[i].NombSeccion != "NULL") {
                          auxseccion[auxcont] = $sessionStorage.tema[i].NombSeccion;
                          auxnseccion[auxcont] = $sessionStorage.tema[i].Seccion;
                          auxorden[auxcont] = $sessionStorage.tema[i].Orden;
                          auxcont = auxcont + 1;
                        }
                      }

                      $scope.n_seccion($sessionStorage.actualSecId);
                    },
                  );
                } else {
                  if (array[0].message == "false2") {
                    alert("No se realizo ningun cambio!!");
                  } else {
                    console.log("no");
                    alert("Se genero un error!!");
                  }
                }
              },
            );
          };
        }, 50);
      });

      break;

    ////////////////////////////////////CALIFICACION//////////////////////////
    case "CalificacionE":
      console.info($sessionStorage.Nota);
      if ($sessionStorage.Nota == -1) {
        $scope.esconder = "true";
      }
      $scope.CalificacionE = $sessionStorage.CalificacionE;
      $scope.MensajeDesp = "Felicitaciones culminaste esta unidad";
      $scope.Evaluacion = $sessionStorage.preguntasEvalTemp;
      $scope.Preguntas = $sessionStorage.preguntasEvalTemp;
      $scope.Opciones = [];

      for (let i = 0; i < $sessionStorage.preguntasEvalTemp.length; i++) {
        $scope.Opciones[i] = $sessionStorage.preguntasEvalTemp[i].opciones.split("</p>");
      }

      $scope.OpcCorrectas = [];
      $scope.Explicacion = [];
      var cont = 0;
      for (var i = 0; i < $scope.Evaluacion.length; i++) {
        $scope.OpcCorrectas[i] = $scope.Evaluacion[i].respuesta;
        $scope.Explicacion[i] = $scope.Evaluacion[i].explicacion;
      }
      $scope.calificacion = $sessionStorage.Calificacion;
      $scope.nota = $sessionStorage.Nota.toFixed(1);

      //Checked-disabled//
      $scope.checked = [];
      for (var i = 0; i < $scope.Preguntas.length; i++) {
        $scope.checked[i] = [];
        for (var j = 0; j < $scope.Opciones[i].length; j++) {
          if ($scope.Opciones[i][j] == $scope.OpcCorrectas[i]) {
            $scope.checked[i][j] = "true";
          } else {
            $scope.checked[i][j] = "";
          }
        }
      }
      console.log($scope.OpcCorrectas);
      console.log($scope.checked);

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
          $scope.OpcCorrectas = [];
          for (var i = 0; i < $scope.Evaluacion.length; i++) {
            $scope.OpcCorrectas[i] = $scope.Evaluacion[i].respuesta;
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
          "background-color": "#002053",
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

Jacob_App.controller("usuarios", function ($scope, $state, $timeout, $rootScope, $stateParams, $localStorage, $sessionStorage, $http) {
  $.post("php/listar_usuarios.php", function (mensaje) {
    $timeout(function () {
      $scope.array = JSON.parse(mensaje);
    }, 50);
  });

  $scope.crear_docente = function () {
    var fd = new FormData();
    var fileD = document.getElementById("fotoDoc").files[0];
    $scope.foto = fileD.name;

    fd.append("fotoDoc", fileD);

    // AJAX request
    $http({
      method: "post",
      url: "upload.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      //$scope.response = response.data;
      //console.log($scope.response)
    });

    //Profesion
    var Profesion;
    var cont = 0;
    for (var i = 1; i < 3; i++) {
      if ($scope["profesion" + i] !== undefined && $scope["profesion" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Profesion = $scope["profesion" + i];
        } else {
          Profesion = Profesion + "</p>" + $scope["profesion" + i];
        }
      }
    }

    if (Profesion === undefined || Profesion == "") {
      Profesion = "NULL";
    }

    //Especialización
    var Especializacion;
    var cont = 0;
    for (var i = 1; i < 4; i++) {
      if ($scope["especializacion" + i] !== undefined && $scope["especializacion" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Especializacion = $scope["especializacion" + i];
        } else {
          Especializacion = Especializacion + "</p>" + $scope["especializacion" + i];
        }
      }
    }

    if (Especializacion === undefined || Especializacion == "") {
      Especializacion = "NULL";
    }

    //Maestría
    var Maestria;
    var cont = 0;
    for (var i = 1; i < 4; i++) {
      if ($scope["maestria" + i] !== undefined && $scope["maestria" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Maestria = $scope["maestria" + i];
        } else {
          Maestria = Maestria + "</p>" + $scope["maestria" + i];
        }
      }
    }

    if (Maestria === undefined || Maestria == "") {
      Maestria = "NULL";
    }

    //Doctorado
    var Doctorado;
    var cont = 0;
    for (var i = 1; i < 3; i++) {
      if ($scope["doctorado" + i] !== undefined && $scope["doctorado" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Doctorado = $scope["doctorado" + i];
        } else {
          Doctorado = Doctorado + "</p>" + $scope["doctorado" + i];
        }
      }
    }

    if (Doctorado === undefined || Doctorado == "") {
      Doctorado = "NULL";
    }

    if ($scope.contrasena != $scope.confirmar) {
      alert("Las contrasenas no coinciden!!");
    } else {
      $.post(
        "php/crear_docente.php",
        {
          NumeDocu: $scope.identificacion,
          NombUsua: $scope.nombreDocente,
          EmaiUsua: $scope.email,
          TeleUsua: $scope.contacto,
          Foto: $scope.foto,
          password: $scope.contrasena,
          EdadUsua: $scope.edad,
          Profesion: Profesion,
          Especializacion: Especializacion,
          Maestria: Maestria,
          Doctorado: Doctorado,
          Perfil: $scope.perfil,
          Sede: $scope.sede,
        },
        function (mensaje) {
          $timeout(function () {
            console.log(mensaje);
            var array = JSON.parse(mensaje);
            if (array[0].message == "true") {
              console.log("si");
              alert("Creacion exitosa!!");
              $state.go("usuarios");
            } else {
              if (array[0].message == "false2") {
                alert("El correo o el documento ya existen!!");
              } else {
                console.log("no");
                alert("Se genero un error!!");
              }
            }
          }, 200);
        },
      );
    }
  };
});

Jacob_App.controller("crear_programa", function ($scope, $state, $timeout, $rootScope, $stateParams, $localStorage, $sessionStorage, $http) {
  $scope.crear_programa = function () {
    $.post(
      "php/crear_programa.php",
      {
        Nombre: $scope.nombrePrograma,
        Tipo: $scope.Programa,
        Modalidad: $scope.modalidad,
        NumSemestres: $scope.semestres,
      },
      function (mensaje) {
        $timeout(function () {
          console.log(mensaje);
          var array = JSON.parse(mensaje);
          if (array[0].message == "true") {
            console.log("si");
            alert("Creacion exitosa!!");
            $state.go("materias");
          } else {
            if (array[0].message == "false2") {
              alert("El programa ya existen!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 200);
      },
    );
  };
});

Jacob_App.controller("aceptarMatricula", function ($scope, $state, $timeout, $rootScope, $stateParams, $localStorage, $sessionStorage, $http) {
  $scope.idCurso = 0;
  $scope.nombreUsua = "";
  $scope.nombreCurso = "";
  var xmlhttp = new XMLHttpRequest();
  var url = "php/matriculasMateriasPendientes.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.records = array;
        console.table(array);
        $scope.materias = array;
        $sessionStorage.Materias = array;

        // Funcion para remover valores
        function removerDuplicados(data) {
          return data.filter((value, indice) => data.indexOf(value) == indice);
        }

        //Funcion para romanizar numeros

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
        if ($scope.records[0].message != "false") {
          $scope.val = 1;
          console.log($scope.val);
          console.log(array.message);
        }
      }, 20);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  $scope.confirmarMatricula = function (Dato) {
    $.post("php/confirmarMatricula.php", { Dato: Dato }, function (mensaje) {
      var array = JSON.parse(mensaje);
      $timeout(function () {
        console.log(mensaje);
        alert("Matricula aceptada");
        $state.reload();
      }, 100);
    });
  };
});

Jacob_App.controller("crear_estudiante", function ($scope, $timeout) {
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

  //Cargar programas
  var xmlhttp1 = new XMLHttpRequest();
  var url = "php/buscar_programa.php";
  xmlhttp1.onreadystatechange = function () {
    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
      var array = JSON.parse(xmlhttp1.responseText);
      $timeout(function () {
        $scope.programas = array;
      }, 50);
    }
  };
  xmlhttp1.open("GET", url, true);
  xmlhttp1.send();

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
            alert("Registro exitoso!!");
            state.go("homeAdmin");
            console.log(mensaje);
            var array = JSON.parse(mensaje);
            if (array[0].message == "true") {
              console.log("si");
              alert("Registro exitoso!!");
              state.go("homeAdmin");
            } else {
              if (array[0].message == "false2") {
                alert("Registro exitoso!!");
                state.go("homeAdmin");
              } else {
                console.log("no");
                alert("Registro exitoso!!");
                state.go("homeAdmin");
              }
            }
          }, 50);
        },
      );
    }
  };
});

Jacob_App.controller("crear_curso", function ($scope, $timeout, $state, $http, $sessionStorage) {
  $scope.upload = function () {
    var fd = new FormData();
    var file1 = document.getElementById("Contenido").files[0];
    var file2 = document.getElementById("LibroGuia").files[0];
    var file3 = document.getElementById("Archivo").files[0];
    var fileIm = document.getElementById("ImCurs").files[0];
    var folder1 = document.getElementById("CategoriaCurs").value;
    var folder2 = document.getElementById("Nombre").value;
    var categoria = "Cursos";

    fd.append("Contenido", file1);
    fd.append("LibroGuia", file2);
    fd.append("Archivo", file3);
    fd.append("Imagen", fileIm);
    fd.append("Folder1", folder1);
    fd.append("Folder2", folder2);
    fd.append("Categoria", categoria);

    // AJAX request
    $http({
      method: "post",
      url: "upload.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      $scope.response = response.data;
      console.log($scope.response);
    });
  };

  $scope.sss = 2;
  //Cargar docentes
  $.post("php/listar_docentes.php", { TipoUsua: "3" }, function (mensaje) {
    $timeout(function () {
      var array2 = JSON.parse(mensaje);
      $scope.listaDoc = [];
      for (i = 0; i < array2.length; i++) {
        $scope.listaDoc[i] = array2[i].Nom1Usua;
      }
    }, 50);
  });

  //Cargar categorias
  var xmlhttp = new XMLHttpRequest();
  var url = "php/buscar_categoria.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $timeout(function () {
        $scope.categorias = array;
      }, 50);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  ///////////////////// Funcion creación de materias //////////////////////////

  $scope.crear_curso = function () {
    //Objetivos
    var Objetivos;
    var cont = 0;
    for (var i = 1; i < 11; i++) {
      if ($scope["Objetivo" + i] !== undefined && $scope["Objetivo" + i] !== "") {
        cont = cont + 1;
        if (cont == 1) {
          Objetivos = $scope["Objetivo" + i];
        } else {
          Objetivos = Objetivos + "</p>" + $scope["Objetivo" + i];
        }
      }
    }

    if (Objetivos === undefined || Objetivos == "") {
      Objetivos = "NULL";
    }

    $.post(
      "php/crear_curso.php",
      {
        Nombre: $scope.Nombre,
        Categoria: $scope.CategoriaCurs,
        Descripcion: $scope.Acercade,
        Fundamentos: $scope.Fundamentos,
        Objetivos: Objetivos,
        Nomb_Docente: $scope.Docente,
        Bienvenida: $scope.Bienvenida,
        Precio: $scope.Precio,
        Informacion: $scope.Informacion,
      },
      function (mensaje) {
        $timeout(function () {
          try {
            var array = JSON.parse(mensaje);
          } catch (err) {
            console.log("Error: ", err.message);
            console.log(mensaje);
          }

          if (array[0].message == "true") {
            console.log("si");
            alert("Curso Creado!!");
            $state.go("plus_cursos");
          } else {
            if (array[0].message == "false2") {
              alert("El curso ya existe!!");
            } else {
              console.log("no");
              alert("Se genero un error!!");
            }
          }
        }, 200);
      },
    );
  };
});

Jacob_App.controller("repositorio", function ($scope, $state, $timeout, $sessionStorage) {
  //Cargar programas
  var xmlhttp = new XMLHttpRequest();
  var url = "php/buscar_programa.php";
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var array = JSON.parse(xmlhttp.responseText);
      $sessionStorage.listProgramas = array;
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  //Cargar categorias
  var xmlhttp1 = new XMLHttpRequest();
  var url = "php/buscar_categoria.php";
  xmlhttp1.onreadystatechange = function () {
    if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
      var array = JSON.parse(xmlhttp1.responseText);
      $sessionStorage.listCategorias = array;
    }
  };
  xmlhttp1.open("GET", url, true);
  xmlhttp1.send();

  $scope.lista = $sessionStorage.listProgramas;

  $scope.busqueda = function (categoria) {
    $scope.buscarCategoria = categoria;
  };
  //Cargar archivos
  $.post("php/buscarDirectorio.php", { TipoUsua: "3" }, function (mensaje) {
    $timeout(function () {
      var array = JSON.parse(mensaje);
      $sessionStorage.archivos = array;
      console.log($sessionStorage.archivos);
    }, 50);
  });
});
