
var app = angular.module('myApp', ['oitozero.ngSweetAlert','ngRoute']);

app.controller('myCtrl', function($scope,$timeout,SweetAlert) {

    $scope.num_emp = "";
    $scope.cobertura ={}
    $scope.cobertura.show =false;
    $scope.problemas ={}
    $scope.problemas.show =false;
    $scope.gestion ={}
    $scope.gestion.show =false;
    $scope.apoyo ={}
    $scope.apoyo.show =false;
    $scope.informalidad ={}
    $scope.informalidad.show =false;
    $scope.ubicacion ={}
    $scope.ubicacion.show =false;
    $scope.geografica ={}
    $scope.geografica.show =false;
    $scope.estrato={}
    $scope.estrato.show=false;
    $scope.estado_act={}
    $scope.estado_act.show=false;
    $scope.tipo_empla={}
    $scope.tipo_empla.show=false;
    $scope.tipo_doc={}   
    $scope.tipo_doc.show=false;
    $scope.tenencia={}     
    $scope.tenencia.show =false;
    $scope.actividad_econ={}   
    $scope.actividad_econ.show=false;
    $scope.tamanio_empr={}
    $scope.tamanio_empr.show=false;
    $scope.organizacion={}
    $scope.organizacion.show=false;
    $scope.vigencia_reg={}
    $scope.vigencia_reg.show=false;
    $scope.tiempo_func={}
    $scope.tiempo_func.show=false;
    $scope.numero_esta={}
    $scope.numero_esta.show=false;
    $scope.empleo_gen={}
    $scope.empleo_gen.show=false;
    $scope.aportes_seg={}
    $scope.aportes_seg.show=false;
    $scope.conocimiento = {} 
    $scope.conocimiento.show=false;
    $scope.necesidad ={} 
    $scope.necesidad.show=false;
    $scope.formulario ={} 
    $scope.formulario.show=false;

    /////

    $scope.num_pla = "";
    $scope.alert = {};
    $scope.alert.show=false;
    $scope.censal_basico = {};
    $scope.censal_basico.show = false;
    $scope.censal_ampliado = {};
    $scope.censal_ampliado.show = false;

    /////
    $scope.habilitar1 = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
           $scope.cobertura.show =true;
        }
    }
    $scope.habilitar2 = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
            $scope.problemas.show =true;
        }
    }
    $scope.habilitar3 = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
            $scope.gestion.show=true;
        }
    }

    $scope.habilitar4 = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
            $scope.apoyo.show=true;
        }
    }
    $scope.habilitar5 = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
            $scope.informalidad.show=true;
        }
    }

    ////
    $scope.form_enc = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();            
        }else{
            $scope.deshabilitar1();
            $scope.deshabilitar2();
            $scope.formulario.show=true;
        }
    }   
    //// 

    $scope.form_enc = function(){
        $scope.deshabilitar1();
        $scope.deshabilitar2();
        $scope.formulario.show=true;
    }    

    $scope.deshabilitar1 = function(){
        $scope.informalidad.show=false;
        $scope.problemas.show =false;
        $scope.cobertura.show =false;
        $scope.apoyo.show=false;
        $scope.gestion.show=false;
        $scope.ubicacion.show=false;        
        $scope.geografica.show=false;
        $scope.estrato.show=false;
        $scope.estado_act.show=false;
        $scope.tipo_empla.show=false;
        $scope.tipo_doc.show=false;
        $scope.tenencia.show =false; 
        $scope.actividad_econ.show=false;
        $scope.tamanio_empr.show=false; 
        $scope.organizacion.show=false; 
        $scope.vigencia_reg.show=false;
        $scope.tiempo_func.show=false; 
        $scope.numero_esta.show=false; 
        $scope.empleo_gen.show=false;
        $scope.aportes_seg.show=false; 
        $scope.conocimiento.show=false
        $scope.necesidad.show=false;  
        $scope.formulario.show=false;
        $scope.nuevoTipo=""; 
        //////////

        $scope.alert.show=false;
        $scope.censal_basico.show = false;
        $scope.censal_ampliado.show = false;

        /////////
    }

    $scope.deshabilitar2 = function(){
        $scope.ubicacion.show=false;        
        $scope.geografica.show=false;
        $scope.estrato.show=false;
        $scope.estado_act.show=false;
        $scope.tipo_empla.show=false;
        $scope.tipo_doc.show=false;
        $scope.tenencia.show =false; 
        $scope.actividad_econ.show=false;
        $scope.tamanio_empr.show=false; 
        $scope.organizacion.show=false; 
        $scope.vigencia_reg.show=false;
        $scope.tiempo_func.show=false; 
        $scope.numero_esta.show=false; 
        $scope.empleo_gen.show=false;
        $scope.aportes_seg.show=false;
    }

    $scope.nuevoTipo = "";    
 
    $scope.agregarTipo = function(){
        if($scope.nuevoTipo==1){
            $scope.deshabilitar2();
            $scope.buscar();
            $scope.ubicacion.show=true;         
        }else {
            if ($scope.nuevoTipo==2) {
                $scope.deshabilitar2();
                $scope.buscar();
                $scope.geografica.show=true;                
            }else{
                if ($scope.nuevoTipo==3) {
                    $scope.deshabilitar2();
                    $scope.estrato.show=true;                    
                }else{
                        if ($scope.nuevoTipo==4) {
                            $scope.deshabilitar2();                           
                            $scope.estado_act.show=true;                        
                        }else{
                            if ($scope.nuevoTipo==5) {
                                $scope.deshabilitar2();
                                $scope.tipo_empla.show=true;                                
                            }else{
                                if ($scope.nuevoTipo==6) {
                                    $scope.deshabilitar2();
                                    $scope.tipo_doc.show=true;
                                }else{
                                    if ($scope.nuevoTipo==7) {
                                        $scope.deshabilitar2();
                                        $scope.tenencia.show =true;
                                    }else{
                                        if ($scope.nuevoTipo==8) {
                                            $scope.deshabilitar2();
                                            $scope.actividad_econ.show=true;
                                        }else{
                                            if ($scope.nuevoTipo==9) {
                                                $scope.deshabilitar2();
                                                $scope.tamanio_empr.show=true;
                                            }else{
                                                if ($scope.nuevoTipo==10) {
                                                    $scope.deshabilitar2();
                                                    $scope.organizacion.show=true;
                                                }else{
                                                    if ($scope.nuevoTipo==11) {
                                                        $scope.deshabilitar2();
                                                        $scope.vigencia_reg.show=true;
                                                    }else{
                                                        if ($scope.nuevoTipo==12) {
                                                            $scope.deshabilitar2();
                                                            $scope.tiempo_func.show=true;
                                                        }else{
                                                            if ($scope.nuevoTipo==13) {
                                                                $scope.deshabilitar2();
                                                                $scope.numero_esta.show=true;   
                                                            }else{
                                                                if ($scope.nuevoTipo==14) {
                                                                    $scope.deshabilitar2();
                                                                    $scope.empleo_gen.show=true; 
                                                                }else{
                                                                    if ($scope.nuevoTipo==15) {
                                                                        $scope.deshabilitar2();
                                                                        $scope.aportes_seg.show=true; 
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 

    $scope.nuevoTipo2 = "";
    
     $scope.agregarTipo2 = function(){
        if($scope.nuevoTipo2==1){
            $scope.conocimiento.show=true;            
            $scope.necesidad.show=false;
        }else{
            $scope.necesidad.show=true;
            $scope.conocimiento.show=false;
        }
     }

    $scope.buscar = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "dist/php/caracterizacion.php";
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var array = JSON.parse(xmlhttp.responseText);                      
                $timeout(function() { $scope.num_emp = array[0].num_empre_u; }, 500);    
                $scope.num_emp_c = array[1].num_emp_c;
                $scope.num_emp_r = array[2].num_emp_r;

                var porcentaje = array[1].num_emp_c * 100 / array[0].num_empre_u;
                var porcentaje2 = array[2].num_emp_r* 100 / array[0].num_empre_u;

                $scope.por_num_emp = "100%";
                $scope.por_emp_c = porcentaje+"%";
                $scope.por_emp_r =porcentaje2+"%";

            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();         
    };

    /////
    $scope.num_planilla = function(){
        if($scope.censal_basico.show==true){
            $scope.validarFormulario();
        }else{
            $scope.alert.show=false;
            $scope.censal_basico.show=false;
            var textoBusqueda = $scope.num_pla;  
            console.log(textoBusqueda);
            if (textoBusqueda != "" && textoBusqueda != null) {
               $.post("dist/php/buscarPlanilla.php", {valorBusqueda: textoBusqueda}, function(mensaje) {     
                   console.log(mensaje);
                   var array = JSON.parse(mensaje); 
                   console.log(array[0].var);   
                   if(array[0].var!="false"){                        
                       $timeout(function() { $scope.alert.show=true;}, 500);
                       $scope.men_alert="Ya se ha registrado un formulario con este número de planilla";
                   }else{
                       $timeout(function() {$scope.censal_basico.show=true; }, 500); 
                       $scope.censal_ampliado.show=true;
                   }
               }); 
            }else{
               $scope.alert.show=true;
               $scope.men_alert="Ingrese un número de planilla";
            }
        }
    }

    $scope.limpiar = function(){
        $scope.nom_est="";
        $scope.dir_est="";
        $scope.bar_est="";
        $scope.cod_bar="";
        $scope.cod_sec="";
        $scope.estrato_emp="";
        $scope.tel_est="";
        $scope.nom_rep="";
    }

    $scope.validarFormulario= function(){

      SweetAlert.swal({
        title: "Advertencia",
        text: "¿Esta seguro de salir del formulario?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Aceptar",
        closeOnConfirm: true
      }, 
      function(isConfirm){
        if(isConfirm){ 
            $scope.alert.show=false;
            $scope.censal_basico.show=false;
            $scope.num_planilla();
            $scope.limpiar();
        }
      });
};

    ////

});

app.controller('as', function($scope,$timeout,SweetAlert) {



});

  


