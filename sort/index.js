var arr=[1,7,3,5,9,17,89,45];
/*都是从小到大*/

//冒泡排序

function maopao(arr) {
	const len=arr.length;
	for(let i=0;i<len-1;i++){
		for(let j=i+1;j<len;j++)
		{
			if(arr[j]<arr[i]){
				let temp = arr[i];
				arr[i] = arr[j ];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);
}

// maopao(arr);

//插入排序

function charu(arr) {
	const len=arr.length;
	for(let i=1;i<len;i++){
		for(let j=i-1;j>=0;j--){
			if(arr[i]<arr[j]){
				let temp=arr[i];
				for(let k=i;k>j;k--){
					arr[k]=arr[k-1];
				}
				arr[j]=temp;
				break;
			}
		}
	}
	console.log(arr);
}

charu(arr);

//选择排序

function xuanze(arr) {
	const len=arr.length;
	for(let i=0;i<len-1;i++){
		for(let j=i+1;j<len;j++){
			if(arr[i]>arr[j]){
				var temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);
}

xuanze(arr);

//var arr=[1,7,3,5,9,17,89,45];

/*
function quickSort(arr,nleft,nright) {
    var temp=arr[nleft];
    var left=nleft;
    var right=nright;
    if(left<0||left>right){
        console.log(arr);
        return;
    }
    while(left<right){
        while(left<right&&arr[right]>=temp){
            right=right-1;
        }
        arr[left]=arr[right];
        while(left<right&&arr[left]<=temp){
            left+=1;
        }
        arr[right]=arr[left];
    }
    arr[left]=temp;
    quickSort(arr,0,left-1);
    quickSort(arr,left+1,nright);
}

quickSort(arr,0,arr.length-1);
*/




