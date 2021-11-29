function humanReadable (seconds) {
  let defaultString1 = '00:00:ab';
  let defaultString2 = '00:ab:00';
  let defaultString3 = '00:ab:cd';
 let defaultString4 = 'ab:cd:ef';
  let defaultString5 = 'ab:00:00';
  let calc1 = Math.floor(seconds/60);
  let calc2 = seconds % 60;
  let calc3 = Math.floor(seconds/3600);
  let calc4 = seconds % 3600;
  let calc5 = Math.floor(calc4/60);
  let calc6 = calc4 % 60;
  let case1 = defaultString2.replace("ab", (("0" + calc1).slice(-2)));
  let test1 = defaultString3.replace(/\w{2}/g, function(match){
      if(match == 'ab'){
        return ("0" + calc1).slice(-2);
      }
      if(match == 'cd'){
        return calc2;
      }
    if(match == '00'){
      return '00';
    }
    });
  let test2 = defaultString4.replace(/\w{2}/g, function(match){
    if(match == 'ab'){
      
    }
  });
  let test3 = defaultString4.replace(/\w{2}/g, function(match){
    if(match == 'ab'){
      return (("0" + calc3).slice(-2));
    }
    if(match == 'cd'){
      return (("0" + calc5).slice(-2));
    }
    if(match == 'ef'){
      return (("0" + calc6).slice(-2));
    }
  })
  
  if(seconds == 0){
    return(defaultString1.replace("ab", "00"));
  }
  if(seconds < 60 && seconds > 0){
    return(defaultString1.replace("ab", seconds));
       
  }
  if(seconds == 60){
    return(case1);
  }
  if(seconds > 59 && seconds < 3600 && seconds != 60 && seconds % 60 != 0){
    return(test1);
  }
  if(seconds == 3600){
    return(defaultString5.replace("ab", "01"));
  }
  if(seconds > 3599 && seconds != 3600){
    return(test3);
  }
}