$(document).ready(get_regiones());
var listaCiudades;
function get_regiones(){
	listaCiudades=[
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
    
}

function vehiculos(){
    var origen =$('#origen');
    var destino =$('#destino');
    
    if(origen.val()==0 ||destino.val()==0){
        alert('Elija una opcion');
    }else if (origen.val()==destino.val()){
        alert("se dirige a la misma cuidad.")
    }else{
        $('#info').show(100); 
    }
}