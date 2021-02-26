module.exports = function towelSort (arr) {
  let newArr=[];
  if(arr==null){
    return newArr;
  }
  for(let i=0;i<arr.length;i++){
    if(i%2==0){
      newArr=newArr.concat(arr[i]);
    }else{
      newArr=newArr.concat(arr[i].reverse());
    }
  }
  return newArr;
}
