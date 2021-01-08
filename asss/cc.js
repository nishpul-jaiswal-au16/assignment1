function rotate(numsa, k) {
  let final=numsa.splice(numsa.length-k);
  for (let i=0;i<final.length;i++){
      numsa.splice(i,0,final[i]);
  }
  return numsa;
  };
  
  nums = [1,2,3,4,5,6,7,8];
  
  k = 3;
  console.log(rotate(nums,k));