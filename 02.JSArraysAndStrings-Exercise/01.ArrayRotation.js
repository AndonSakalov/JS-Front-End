function solve2(arr, rotations){
    for (let i = 0; i < rotations; i++) {
        
         for (let j = 0; j <= arr.length - 2; j++) {
             let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
         }
    }
         console.log(arr.join(' '));
}