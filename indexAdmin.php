<?php
session_start();
if (!isset($_SESSION['user_session2'])) {
  header("homeAdmin");
}
?>
<!DOCTYPE html>
<html lang="es" ng-app="Jacob_App">

<head>

  <title>JACOB</title>

  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <link rel="stylesheet" href="./css/estilos.css">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="./css/bootstrap.min.css" />
  <!-- -------------------Titulo del sitio - Jacob-------------------- -->

  <link rel="shortcut icon" href="./imagenes/simbolo.ico">

  <!-- -------------------Tiny-MCE------------------- -->

  <script src="https://cdn.tiny.cloud/1/n0hzbe2ngp77nh6eh8daauz41o66okvhgtr4ylsgjp8kazil/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

</head>

<body ng-controller="adminController">
  <!-- -------------------Barra de Navegación-------------------- -->
  <nav class="navbar navbar-expand-lg navbar-light sticky-top p-0 pt-1" id="navegacion">
    <div class="container-fluid" id="navbar">
      <div class="col">
        <a class="navbar-brand text-primary" id="jacob" ui-sref="homeAdmin"><img id="Logo" src="./imagenes/Logo Unificado.png" class="d-block d-sm-block d-md-none pt-1"><img id="Logo" src="./imagenes/Logo Unificado.png" class="d-none d-sm-none d-md-block"></a>
      </div>

      <!-- -------------------Icono Hamburguesa-------------------- -->
      <button class="navbar-toggler border mr-2" type="button" data-toggle="collapse" data-target="#barra" aria-controls="barra" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- -------------------Fin Icono Hamburguesa-------------------- -->

      <!-- -------------------Barra colapsable-------------------- -->
      <div class="collapse navbar-collapse mx-4" id="barra">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ml-2 active">
            <a class="nav-link border-right" ui-sref="homeAdmin">Inicio</a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link border-right" ui-sref="materias">Materias</a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link border-right" ui-sref="repositorio">Repositorio</a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link border-right" ui-sref="plus_cursos">+ Cursos</a>
          </li>
        </ul>

        <ul class="nav navbar-nav" style="z-index: 5;">
          <li class="nav-item lang-menu">
            <div class="dropdown nav-item show">
              <a class="dropdown-toggle nav-link ml-2" id="drop-down-idioma" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-globe" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z" />
                </svg></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="drop-down-idioma">
                <a class="dropdown-item" href="inicio_jacob.html?lang=en" title="English ‎(en)‎">English ‎(en)‎</a>
                <a class="dropdown-item" href="inicio_jacob.html?lang=es" title="Español - Internacional ‎(es)‎">Español - Internacional ‎(es)‎</a>
              </div>
            </div>
          </li>

          <li class="nav-item lang-menu">
            <div class="dropdown nav-item show">
              <a class="dropdown-toggle nav-link ml-2" id="drop-down-notificaciones" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                  <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="drop-down-notificaciones">
                <h6>Notificaciones</h6>
              </div>
            </div>
          </li>

          <li class="nav-item lang-menu">
            <div class="dropdown nav-item show">
              <a class="dropdown-toggle nav-link ml-2" id="drop-down-mensajes" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="drop-down-mensajes">
                <a class="dropdown-item" href="#" title="ayuda">¿Necesitas ayuda con tu plataforma JACOB?</a>
                <a class="dropdown-item" href="#" title="info‎">¿Necesitas información sobre la institución?‎</a>
              </div>
            </div>
          </li>

          <li class="nav-item lang-menu">
            <div class="dropdown nav-item show">
              <a class="dropdown-toggle nav-link ml-2" id="drop-down-perfil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg></a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="drop-down-perfil">
                <a class="dropdown-item" href="#" title="nombre">
                  <h5>{{nom_usu}} {{ape_usu}}</h5>
                </a>
                <hr>
                <a class="dropdown-item" href="#" title="preferencias‎">Preferencias‎</a>
                <a class="dropdown-item" href="#" title="preferencias‎">contáctanos‎</a>
                <a class="dropdown-item" href="logout.php" title="salir‎">Salir</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- -------------------Fin Barra colapsable-------------------- -->
    </div>
  </nav>
  <!-- -------------------Fin Barra de navegación-------------------- -->
  <!-- -------------------Inicio Main-------------------- -->

  <main>

    <div ui-view> </div>
  </main>
  <!-- -------------------Fin Main-------------------- -->

  <!-- -------------------Footer-------------------- -->
  <footer class="container-fluid py-1 text-white">
    <!-- -------------------Información Institucional-------------------- -->
    <div class="row px-5">
      <div class="col-12 col-md-4 text-center pt-2">
        <ul class="list-unstyled">
          <li>Corporación Universitaria Autónoma de Nariño</li>
          <li>NIT: 891224762-9</li>
          <li>Código SNIES: 3817</li>
          <li>Calle 9 No. 7 - 05</li>
          <li>Ipiales, Colombia</li>
          <li>©Copyright 2020 - Derechos Reservados</li>
        </ul>
      </div>
      <div class="col-12 col-md-4 pt-3 text-center">
        <ul class="list-unstyled">
          <li>
            <h5>Contactos</h5>
          </li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-globe2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 0 1-1.198-.49 7.01 7.01 0 0 1 2.276-1.52 6.7 6.7 0 0 0-.597.932 8.854 8.854 0 0 0-.48 1.079zM3.509 7.5H1.017A6.964 6.964 0 0 1 2.38 3.825c.47.258.995.482 1.565.667A13.4 13.4 0 0 0 3.508 7.5zm1.4-2.741c.808.187 1.681.301 2.591.332V7.5H4.51c.035-.987.176-1.914.399-2.741zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5H7.5v2.409c-.91.03-1.783.145-2.591.332a12.343 12.343 0 0 1-.4-2.741zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696A12.63 12.63 0 0 1 7.5 11.91v3.014c-.67-.204-1.335-.82-1.887-1.855a7.776 7.776 0 0 1-.395-.872zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964a9.083 9.083 0 0 0-1.565.667A6.963 6.963 0 0 1 1.018 8.5h2.49a13.36 13.36 0 0 0 .437 3.008zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909c.81.03 1.577.13 2.282.287-.12.312-.252.604-.395.872-.552 1.035-1.218 1.65-1.887 1.855V11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5h-2.49a13.361 13.361 0 0 0-.437-3.008 9.123 9.123 0 0 0 1.565-.667A6.963 6.963 0 0 1 14.982 7.5zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z" />
            </svg> www.aunar.edu.co</li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg> (032) 773 0444</li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg> 307 xxx xxxx</li>
          <li><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
            </svg> jacob.ayuda@aunar.edu.co</li>
        </ul>
      </div>
      <div class="col-12 col-md-4 text-center">
        <ul class="list-unstyled">
          <li><img src="./imagenes/logo_aunar.svg" width="200"></li>
          <li>
            <div class="row p-0 no-gutters">
              <div class="col-2 col-lg-1 pb-1 offset-lg-3">
                <a class="nav-link p-0" href="https://api.whatsapp.com/send?phone=+573164612835&text=Por%20favor%20necesito%20informaci%C3%B3n%20"><button type="button" class="btn" id="categoria"><img src="./imagenes/whatsapp banco.png" width="20px"></button></a>
              </div>
              <div class="col-2 col-lg-1 pb-1 ">
                <a class="nav-link p-0" href="https://www.facebook.com/corporacionaunar"><button type="button" class="btn" id="categoria"><img src="./imagenes/facebook blanco.png" width="20px"></button></a>
              </div>
              <div class="col-2 col-lg-1 pb-1 ">
                <a class="nav-link p-0" href="https://twitter.com/autonomadenar"><button type="button" class="btn" id="categoria"><img src="./imagenes/twiter blanco.png" width="20px"></button></a>
              </div>
              <div class="col-2 col-lg-1 pb-1 ">
                <a class="nav-link p-0" href="https://www.instagram.com/corporacionaunar/"><button type="button" class="btn" id="categoria"><img src="./imagenes/instagram blanco.png" width="20px"></button></a>
              </div>
              <div class="col-2 col-lg-1 pb-1 ">
                <a class="nav-link p-0" href="https://www.youtube.com/channel/UC8MaEtIvAAZzrYLFX1AazIA"><button type="button" class="btn" id="categoria"><img src="./imagenes/youtube blanco.png" width="20px"></button></a>
              </div>
              <div class="col-2 col-lg-1 pb-1 ">
                <a class="nav-link p-0" href="https://www.flickr.com/photos/147246490@N05/albums"><button type="button" class="btn" id="categoria"><img src="./imagenes/flicker blanco.png" width="20px"></button></a>
              </div>
            </div>
          </li>
          <li><a class="nav-link p-0 text-white" href="https://www.aunar.edu.co/politicas-de-proteccion-de-datos/">Politica de protección de datos personales.</a></li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    <!-- -------------------Fin Información intitucional-------------------- -->
  </footer>



  <div ng-if="'materias' | includedByState" class="container-fluid" id="crear" class="ml-auto text-right">
    <a class="nav-link py-1" ui-sref="crear_programa"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Programa +</button></a>
    <a class="nav-link py-1" ui-sref="crear_materia"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Materia +</button></a>
  </div>

  <div ng-if="'usuarios' | includedByState" class="container-fluid" id="crear2" class="ml-auto text-right">
    <a class="nav-link py-1" ui-sref="crear_administrativo"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Administrativo +</button></a>
    <a class="nav-link py-1" ui-sref="crear_docente"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Docente +</button></a>
    <a class="nav-link py-1" ui-sref="crear_estudiante"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Estudiante +</button></a>
  </div>


  <div ng-if="'plus_cursos' | includedByState"  class="ml-auto text-right" id="crear">
    <a class="nav-link py-1" ui-sref="crear_categoria"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Categoría +</button></a>
    <a class="nav-link py-1" ui-sref="crear_curso"><button type="button" class="my-auto px-4 py-2 boton-naranja-borde">Crear Curso +</button></a>
  </div>






  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->

  <script src="js/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

  <script src="js/angular.min.js"></script>
  <script src="https://rawgithub.com/gsklee/ngStorage/master/ngStorage.js"></script>
  <script src="js/angular-route.js"></script>
  <script src="js/angular-ui-router.min.js"></script>
  <script src="js/ui-bootstrap.js"></script>
  <script src="js/mainAdmin.js"></script>
  <script src="./js/ngDraggable.js"></script>


  <script src="js/jquery-ui.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="./js/bootstrap.min.js"></script>


</body>

</html>