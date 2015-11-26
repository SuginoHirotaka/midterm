function isPrimeNumber(a){
if(a == 1){
  return false;
}else{
 i = 2;
  while(i < a){
    if(a % i == 0){
    return false;
  }else{
    i = i + 1;
  }
  }
}
  return true;
}
