function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2) ///
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    console.log(left);
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sorted=[]
    while (left.length&&right.length) {
        
        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}

const arr=[1,-2,3,5,2,0,9,6]
console.log(mergeSort(arr))