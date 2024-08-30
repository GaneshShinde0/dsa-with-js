function bubbleSort(arr) {
    for(var j=0;j<arr.length;j++){
        for (var i = 1; i < arr.length-j; i++) {
            if(arr[i-1]>arr[i]){
                swap(arr,i-1,i);
            }
        }
    }
    return arr;
}

function swap(arr,i,j){
    const temp = arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    return arr;
}
