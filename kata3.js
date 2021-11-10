function createPhoneNumber(numbers){
    let firstPart = numbers.slice(0,3).join("");
    let secondPart = numbers.slice(3,6).join("");
    let lastPart = numbers.slice(6,10).join("");
    
    return("("+firstPart+")"+ " " +secondPart+"-"+lastPart);
  }