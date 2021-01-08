function isPrime(num ) {
    
  if(num < 2){
      return false;
  } 
  
  for (var i = 2; i < num; i++) 
  {
      if(num % i == 0){
          return false;
      }       
  }
  return true;
}
n = 20
var x = []
for(var num = 0; num < n; num++){
  if(isPrime(num)){
      x.push(num);
  }  
}
console.log(`There are ${x.length} prime numbers less than ${n}, they are ${x}`