// In selection Sort there will be less number of swaps than bubblesort
function selectionsort(arr){

	for(var i=0;i<arr.length;i++){
		const indexOfMin = i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[indexOfMin]>arr[j]){
				indexOfMin = j;
			}
		}
		swap(arr,i,indexOfMin);
	}
	return arr;
}


function swap(arr,i,j){
    const temp = arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
    return arr;
}