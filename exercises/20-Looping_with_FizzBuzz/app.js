function fizzBuzz() {  
	for (let i=1; i<=100; i++){   // <-- iterar 100 veces
		if (i % 15 == 0){
			console.log("FizzBuzz");	
		} else if (i % 5 == 0){
			console.log("Buzz");
		} else if (i % 3 == 0){
			console.log("Fizz");
		} else console.log(i);
		
	}
}






fizzBuzz();