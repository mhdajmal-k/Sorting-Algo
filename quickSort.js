function quickSort(arr){
    if (arr.length<2) {
        return arr
    }
    if(arr.length<0){
        console.log("list is empty");
        return
    }
    let pivot=arr[arr.length-1]
    console.log(pivot);
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    console.log(left);
    console.log(right);
    return [...quickSort(left),pivot,...quickSort(right)]

}

const arr=[-2,-6,8,6,20]
console.log(quickSort(arr))