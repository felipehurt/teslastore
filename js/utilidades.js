function calcularValor () {
	var vlr_iva;
	var porc_utilidad;
	var vlr_producto;
	var vlr_venta;
	var porc_iva;




	if ($("#valor_compra").val() != null && $("#ganancia").val() && $("#iva").val()){
	
	//Obtenemos el valor de compra y los procentajes
	vlr_producto= $("#valor_compra").val();
	porc_utilidad=($("#ganancia").val()/100);	
	porc_iva= ($("#iva").val()/100);

	//Calculamos el valor de la utilidad.
	vlr_utilidad= vlr_producto*porc_utilidad;
	//Calculamos el valor del producto sumando el valor de la compra + el valor de la utilidad
	vlr_total_producto = parseInt(vlr_producto) + parseInt(vlr_utilidad)
	//Calculamos el valor del iva.
	vlr_iva=vlr_total_producto*porc_iva;
	//Calculamos el valor de la venta, al valor del producto le sumamos el valor calculado del iva.
	vlr_venta= parseInt(vlr_total_producto)+parseInt(vlr_iva);
	//Le asignan valores a los campos en el formulario.
	$("#vlr_venta").val(vlr_venta)
	$("#vlr_ganancia").val(vlr_utilidad)	
	}else{
		alert("Por favor diligenciar tods los campos obligatorios");
	}

}

function cambio_banda (){
		var sel_banda_1 = 	document.getElementById('cmb_banda_1');
		var sel_banda_2 = 	document.getElementById('cmb_banda_2');
		var sel_banda_3 = 	document.getElementById('cmb_banda_3');
		var vlr_resitencia = document.getElementById('valor_o');

//Case para cambiar el color de la banda 1.
   switch (sel_banda_1.value){
	case "0":
		document.getElementById('banda_1').style.backgroundColor  = "black";
	break;

	case "1":
		document.getElementById('banda_1').style.backgroundColor  = "brown";
	break;

	case "2":
		document.getElementById('banda_1').style.backgroundColor  = "red";
	break;

	case "3":
		document.getElementById('banda_1').style.backgroundColor  = "orange";
	break;

	case "4":
		document.getElementById('banda_1').style.backgroundColor  = "yellow";
	break;

	case "5":
		document.getElementById('banda_1').style.backgroundColor  = "green";
	break;

	case "6":
		document.getElementById('banda_1').style.backgroundColor  = "blue";
	break;

	case "7":
		document.getElementById('banda_1').style.backgroundColor  = "darkviolet";
	break;

	case "8":
		document.getElementById('banda_1').style.backgroundColor  = "gray";
	break;

	case "9":
		document.getElementById('banda_1').style.backgroundColor  = "white";
	break;
  }

//Case para cambiar el color de la banda 2.
   switch (sel_banda_2.value){
	case "0":
		document.getElementById('banda_2').style.backgroundColor  = "black";
	break;

	case "1":
		document.getElementById('banda_2').style.backgroundColor  = "brown";
	break;

	case "2":
		document.getElementById('banda_2').style.backgroundColor  = "red";
	break;

	case "3":
		document.getElementById('banda_2').style.backgroundColor  = "orange";
	break;

	case "4":
		document.getElementById('banda_2').style.backgroundColor  = "yellow";
	break;

	case "5":
		document.getElementById('banda_2').style.backgroundColor  = "green";
	break;

	case "6":
		document.getElementById('banda_2').style.backgroundColor  = "blue";
	break;

	case "7":
		document.getElementById('banda_2').style.backgroundColor  = "darkviolet";
	break;

	case "8":
		document.getElementById('banda_2').style.backgroundColor  = "gray";
	break;

	case "9":
		document.getElementById('banda_2').style.backgroundColor  = "white";
	break;
  }  


//Case para cambiar el color de la banda 2.
   switch (sel_banda_3.value){
	case "0":
		document.getElementById('banda_3').style.backgroundColor  = "black";
	break;

	case "1":
		document.getElementById('banda_3').style.backgroundColor  = "brown";
	break;

	case "2":
		document.getElementById('banda_3').style.backgroundColor  = "red";
	break;

	case "3":
		document.getElementById('banda_3').style.backgroundColor  = "orange";
	break;

	case "4":
		document.getElementById('banda_3').style.backgroundColor  = "yellow";
	break;

	case "5":
		document.getElementById('banda_3').style.backgroundColor  = "green";
	break;

	case "6":
		document.getElementById('banda_3').style.backgroundColor  = "blue";
	break;

	case "7":
		document.getElementById('banda_3').style.backgroundColor  = "darkviolet";
	break;

	case "8":
		document.getElementById('banda_3').style.backgroundColor  = "gray";
	break;

	case "9":
		document.getElementById('banda_3').style.backgroundColor  = "white";
	break;
}
  var val_banda_1 = parseFloat(sel_banda_1.value)*10;
  var val_banda_2 = parseFloat(sel_banda_2.value);
  var val_banda_3 = Math.pow(10, parseFloat(sel_banda_3.value));  

  vlr_resitencia.value = (val_banda_1 + val_banda_2)*val_banda_3;
	$("#valor_o").val(valor_resistencia)
}