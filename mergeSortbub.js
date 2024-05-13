function qucke(arr){
    if(arr.length<=1){
        return arr
    }
   let mid=Math.floor(arr.length/2)
   let left=arr.slice(0,mid)
   let right=arr.slice(mid)
   console.log(left,"left")
   console.log(right,"right")

   return merge(qucke(left),qucke(right))
}
function merge(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    console.log(sorted,"sorted");
    return [...sorted,...left,...right]
}
 const arr=[1,-1,-5,30,10,3];
 console.log(qucke(arr))