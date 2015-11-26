function distance(a,b,c,d){
  if(a == c && b == d){
    return 0;
  }
  return Math.sqrt((a-c) * (a-c) + (b-d) * (b-d));
}
