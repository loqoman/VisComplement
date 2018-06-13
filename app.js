function bus() {

// Object with info     
    var buses = [
  { to: 'Amsterdam', distance: 2000, price: 250},
  { to: 'Madrid', distance: 4500, price: 350},
  { to: 'Stockholm', distance: 1500, price: 90},
  { to: 'Riga', distance: 400, price: 100}
  ];

// Should get result which user has choosen
    var res = document.getElementById("boss");
    var result = res.value;
    console.log(value); // outputs html row... >.>

// Loop through the object
    var text = "";
    for(var i = 0; i < (buses.length); i++) {   

    if (result == buses[i].to) { text = '<p>' + buses[i].to + '<br> - Distance from Estonia: ' + buses[i].distance + ' km <br> - Price: ' + buses[i].price + ' euros <br>';
    alert("Works!!!!"); // Well, last thing is to change it to output "var text" result
    }

    };
    document.getElementById("test2").innerHTML = text; // If everything is correct, this should output sentence about selected bus
}
// ^^ Above is taken from a stack overflow question with everything I need to do some basic interaction in it

// 'value' does not need to be in quotes

function binaryVal(array){
	var length = array.length;
	var binary = []
	for (i = 0; i < length; i++) {	
		var bit = array[i];
		if (bit == '1');
	}
}
/*
function oensComp(array) {

}

function twosComp(array) {
    
}

function binaryAdd(value, array){
	
}

*/

// In JQuery

$(document).ready(function(){
	$(".btn-primary").click(function(){
		var text = $(this).text();
		if(text == "1"){
			$(this).text("0");
		} else {
			$(this).text("1");
		}
		console.log(text);
	});
	$("#reset").click(function(){
		$(".btn-primary").text("0")
		
	});


});
