function merge(left, right){
	const results =[];

	while(left.length && right.length){
		if(left[0]<right[0]){
			results.push(left.shift());
		}else{
			results.push(right.shift());
		}
	}
	return [...results, ...left, ...right]; // sequence for left and right does not matter, this is same as concat
}

function mergeSort(arr){
	if(arr.length <= 1){
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}