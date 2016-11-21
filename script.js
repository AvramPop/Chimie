function isInt(n) {
   return n % 1 === 0;
}


function functie() {
var input = document.getElementById('icon_prefix').value;

var input1 = input.split('');
console.log(input1);
var elemente = ['C', 'N', 'H', 'O', 'Cl', 'S'];
var mese = ['12', '14', '1', '16', '35.5', '32'];
var a1 = 1 - 1, b1 = 1 - 1, d1 = 1 - 1, e1 = 1 - 1;
var m = 0;
var ok =0;
var masaMolara = 1 - 1;
for(var i = 0; i <= input1.length; i++){
	for(var k = 0; k <= elemente.length; k++){
  	if(input1[i] == elemente[k] && input1[i + 1] !== 'l' ){
    //	console.log(input1[i]);
      var a = 0;
      while(!isNaN(input1[i + 1])) {
      		a = a * 10 + parseInt(input1[i + 1]);	
      		i++;
        }
        if(a == 0) a = 1;
    //    console.log(a);
        //console.log(parseInt(mese[k]));
	switch(elemente[k]){
		case 'C': 
			a1= a;
			break;
		case 'H': 
			b1= a;
			break;
		case 'D': 
			d1= a;
			break;
	}
        var b = a * parseInt(mese[k]);
        masaMolara = masaMolara + b;
      //  console.log(b);
    } else if(input1[i] == elemente[k] && input1[i + 1] == 'l'){
    	i++;
      var a = 0;
      while(!isNaN(input1[i + 1])) {
      		a = a * 10 + parseInt(input1[i + 1]);	
      		i++;
        } 

        if(a == 0) a = 1;
      // console.log(a);
	e1 = a;
        if(k == 0) k = 4;
        var b = a * parseInt(mese[k]);
        masaMolara = masaMolara + b;
       
    }
    console.log('1 ',masaMolara);
    
  }
  if(i == input1.length - 1){
var ne = ((2 * a1 + 2) - (b1- d1 + e1)) / 2;
     document.getElementById('masaMoleculara').innerHTML = "Masa moleculara = " + masaMolara + " uam";  
if(isInt(ne) && ne >= 0){
document.getElementById('nesaturareaEchivalenta').innerHTML = "Nesaturarea echivalenta: = " + ne; 
} else {
	document.getElementById('nesaturareaEchivalenta').innerHTML = "Substanta nu exista!"; 
}
     //ok = 1;
     }

  console.log('2 ',masaMolara);
  //document.getElementById('masaMoleculara').innerHTML = masaMolara + " uam";  
  
}
console.log('3 ',masaMolara);

} 
//console.log(masaMolara);
