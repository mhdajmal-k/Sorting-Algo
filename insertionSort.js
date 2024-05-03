function insertionSort(arr) {
    if (arr.length==0) {
        console.log("array is empty");
        return
    }
    for (let i = 1; i < arr.length; i++) {
       let numberToInsert=arr[i]
       let j=i-1
       while(j>=0&&arr[j]>numberToInsert){
        arr[j+1]=arr[j]
        j--
       }
       console.log(j+"it is the value of j");
       console.log(i+"this is the value of i");
       arr[j+1]=numberToInsert
       
        
    }
return arr
}

const arr=[8,20,-2,4,-6] //[-6,2,4,8,20]
console.log(insertionSort(arr))