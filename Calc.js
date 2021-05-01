export function Calc(a, check) {
  if(!check){
    a = Math.PI * Math.pow(a, 2);
  }else{
    a = Math.PI * Math.pow(a, 2) / 4;
  }
  return a;
}

export default Calc;