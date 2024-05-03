// function bubbleSort(arr){
//     if(arr.length==0){
//         console.log("list is empty");
//         return
//     }
//     let swapped;
//     do{
//  swapped=false
//         for (let i = 0; i < arr.length; i++) {
//            if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//            }
            
//         }
//     }while(swapped)
//         return arr

// }


function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = 0; j < arr.length-1-i; j++) {
       if (arr[j]>arr[j+1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
       }
        
      }  
    }
    return arr
}

const arr=[8,20,-2,4,-6]  //[-6,2,4,8,20]
console.log(bubbleSort(arr));