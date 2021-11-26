function isPrime(num) {
    let numSquare = Math.sqrt(num);
    if(num < 2){
      return false;
    }
    if(num == 2 || num == 3 || num == 5 || num == 7){
      return true;
    }
    if(num % numSquare == 0){
      return false;
    }
    for(let i = 2; i <= numSquare; i++){
      if(num % i == 0){
        return false;
      }
    }
    for(let i = 2; i <= numSquare; i++){
      if(num % i != 0){
        return true;
      }
    }
  }