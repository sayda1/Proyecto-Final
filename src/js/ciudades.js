$(document).ready(init());
function init(){
    get_regiones();
}
function get_regiones(){
    
	var listaCiudades=[
        {"name": "Seleciona" , "val":"0"},
		{"name": "arica <span class='kilomeros'>2059</span>", "distance": 0, "val":"1"},
        
		{"name": "iquique<span class='kilomeros'>1789</span>","distance": 0, "val":"2"},
		{"name": "antofagasta <span class='kilomeros'>1368</span>","distance": 0, "val":"3"},
		{"name": "copiapo <span class='kilomeros'>1567</span>","distance": 0, "val":"4"},
		{"name": "la_serena <span class='kilomeros'>116</span>","distance": 0, "val":"5" },
		{"name": "valparaiso <span class='kilomeros'>0</span>","distance": 0, "val":"6"},
		{"name": "rancagua <span class='kilomeros'>84</span>","distance": 0, "val":"7"},
		{"name": "talca <span class='kilomeros'>257</span>",	"distance": 0, "val":"8"},
		{"name": "concepcion <span class='kilomeros'>500</span>","distance": 0, "val":"9" },
		{"name": "temuco <span class='kilomeros'>690</span>","distance": 0, "val":"10"	 },
		{"name": "valdivia <span class='kilomeros'>148</span>","distance": 0, "val":"11" },
		{"name": "puerto_montt <span class='kilomeros'>1032</span>","distance": 0, "val":"12"},
		{"name":"coyhaique <span class='kilomeros'>18888</span>","distance": 0, "val":"13"},
		{"name": "punta_arenas <span class='kilomeros'>3004</span>","distance": 0, "val":"14" },	
		{"name": "santiago <span class='kilomeros'>1006</span>","distance": 0, "val":"15"}
	];
    
    var carga='';
    for(var i in listaCiudades){
     var html =
    '<option value="'+listaCiudades[i].val+'">'+listaCiudades[i].name+'</option>';
        carga+=html;
    }
    var selec = $('.selectpicker').html(carga);
    
    $('#buscar').click(elijirVehiculos);
    $('.kilomeros').css('dispay',' none');
    
}
///funcion para aparicion de vehiculos 
function elijirVehiculos(){
    var origen =$('#origen');
    var destino =$('#destino');
    
    if(origen.val()==0 ||destino.val()==0){
        sweetAlert('Elija una opcion');
    }else if (origen.val()==destino.val()){
        sweetAlert("se dirige a la misma cuidad.")
    }else{
        $('#info').show(100);
        listaVehiculos ();
    }
    localStorage.setItem('rutaDestino', destino);
}
//PARA LISTA VEHICULOS
function listaVehiculos (){
    var lista=[
        {
            "input":'<input type="radio" id="moto">',
            "imagen" :"src/img/moto.png" ,
            "texto":"Moto </br> maximo 2 pasajeros"
        },
        
        {
         "input":'<input type="radio" id="auto">',
         "imagen" :"src/img/auto.png",
         "texto":"Auto </br> maximo 5 pasajeros"
        },
        {
            "input":'<input type="radio" id="camioneta">',
            "imagen" :"src/img/camioneta.png",
            "texto":"Camioneta </br> maximo 10 personas"
        },
        {
            "input":'<input type="radio" id="camion">',
            "imagen" :"src/img/camion.png",
            "texto":"Camion </br>maximo 3 pasajeros"
        }
        
    ];
    var carga='';
    for (var x in lista){
        var htmlVehiculos='<div class="col-xs-4">'+lista[x].input+'</div>'+
            '<div class="col-xs-4"><img src="'+lista[x].imagen+'" alt=""></div>'+
            '<div class="col-xs-4"><h4>'+lista[x].texto+'</h4></div>';
        carga+=htmlVehiculos;
    };
    $('#vehiculos').html(carga);
    $('#moto').click(viajeMoto);
    $('#auto').click(viajeAuto);
    $('#camioneta').click(viajeCamaioneta);
    $('#camion').click(viajeCamaion);
    
}
var mutiplicar;
function viajeMoto (){
    
    var pasajeros = $('#pasajeros').val();    
    var distancia=$('#destino').val();
    var origen=$('#origen').val();
    
    if (pasajeros==''){
        sweetAlert('Ingre el numero de pasajeros');
    }else if(pasajeros =='1'||pasajeros=="2"){
        
        mutiplicar = ((distancia + origen) * 763);
        var resultado=parseInt(mutiplicar/ pasajeros);
        alert('El presio total del viaje ' + '$'+mutiplicar);
        $('#compartir').click(compartirViaje);
    }else{
        sweetAlert('Maximo 2 pasajeros');
    }
}
function viajeAuto(){
    var pasajeros = $('#pasajeros').val();
    var distancia=$('#destino').val();
    var origen=$('#origen').val();
    if (pasajeros==''){
        sweetAlert('Ingre el numero de pasajeros');
    }else if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"||pasajeros=="4"||pasajeros=="5"){
        mutiplicar = ((origen + distancia ) * 763);
        alert('El presio total del viaje' +'$'+mutiplicar);
        $('#compartir').click(compartirAuto);
    }else{
        sweetAlert('Maximo 5 pasajeros');
    }
}

function viajeCamaioneta(){
    
    var pasajeros = $('#pasajeros').val();
    var distancia=$('#destino').val();
    var origen=$('#origen').val();

    if (pasajeros==''){
        sweetAlert('Ingre el numero de pasajeros');
    }else if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"||pasajeros=="4"||pasajeros=="5" || pasajeros=="6"||pasajeros=="6"||pasajeros=="7"||pasajeros=="8"){
        
        mutiplicar =  ((origen + distancia ) *763);        
        alert('El presio total del viaje ' + '$'+mutiplicar);
        $('#compartir').click(compartirCamioneta);

    }else{
        sweetAlert('Maximo 8 pasajeros');
    }
}

function viajeCamaion(){
    var pasajeros = $('#pasajeros').val();
    var distancia=$('#destino').val();
    var origen=$('#origen').val();
    
    if (pasajeros==''){
        sweetAlert('Ingre el numero de pasajeros');
    }else if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"){
        
       mutiplicar = ((origen + distancia ) * 763);
        alert('El presio total del viaje ' +'$'+mutiplicar);
        $('#compartir').click(compartirCamion);

    }else{
        sweetAlert('Maximo 3 pasajeros');
    }
}

function compartirViaje(){
    var pasajeros = $('#pasajeros').val();
    
    if(pasajeros =='1'||pasajeros=="2"){
        
        console.log(parseInt(mutiplicar/ pasajeros));
        
        var resultado=parseInt(mutiplicar/ pasajeros);
        alert('El presio total por persona ' +'$'+resultado);
    }
}
function compartirAuto(){
    //viaje por perosna en auto
    if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"||pasajeros=="4"||pasajeros=="5"){
        
       mutiplicar =  ((origen + distancia )* 763);
        console.log(parseInt(mutiplicar / pasajeros));
        
        var resultado=parseInt(mutiplicar/ pasajeros);
        alert('El presio total por persona ' +'$'+resultado);
    }
}
function compartirCamioneta(){
    //viaje por perosna en camioneta
    if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"||pasajeros=="4"||pasajeros=="5"|| pasajeros=="6"||pasajeros=="6"||pasajeros=="7"||pasajeros=="8"){
    
        console.log(parseInt(mutiplicar/ pasajeros));
        
        var resultado=parseInt(mutiplicar/ pasajeros);
        alert('El presio total por persona ' +'$'+resultado);
    }
}
function compartirCamion(){
    //viaje por persona en camion 
    if(pasajeros =='1'||pasajeros=="2"||pasajeros=="3"){
        console.log(parseInt(mutiplicar / pasajeros));
        
        var resultado=parseInt(mutiplicar / pasajeros);
        alert('El presio total por persona ' +'$'+resultado);
    }
}