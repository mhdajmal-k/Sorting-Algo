function selectionSort(arr) {
    if(arr.length==0){
       console.log("array is empty");
        return 
    }
    for(let i=0;i<arr.length;i++){
        let min=i
       for (let j = i+1; j < arr.length; j++) {
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        
       }
    }
    return arr
}
const arr=[9,1,8,2,7,3,6,5,0]
console.log(selectionSort(arr))