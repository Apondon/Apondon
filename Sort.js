/* *插入排序
*原理为构建有序序列，对于未排序的数据在已排序的序列中从后向前扫描
 找到相应位置并插入。
*在从后向前扫描的过程中，需要把已排序的元素逐步向后挪位，
 为新插入的元素提供空间

*描述
*从第一个元素开始，该元素可以认为已经被排序
*取出下一个元素，在已经排序的元素序列中从后镶嵌扫描
*如果该元素（已排序）大于新元素（从小到大排列），将该元素移到下一位置
*重复上一步骤，直到找到已排序的元素小于或等于新元素的位置
*将新元素插入该位置
*/
//插入排序代码实现
function insertionSort{
	//对数组进行判断
	//slice(8,-1);返回一个数组
	if(Object.proptotype.toString.call(array).slice(8,-1) === 'Array'){
		//将元素按顺序放入序列
		for ( i = 1 ; i <= array.length ;i ++){
			var key = array[i];
			//对元素进行扫描和比较
			for( j = i - 1 ; j >= 0 ; j --){
				if(array[j] > key){
					//若符合判断条件则将该元素插入应在的位置
					array[i + 1] = array[j];		
			}
			return array;
		}else{
			console.log("array is not an Array");
		}
	}
}
/* *二分法插入排序
是在直接插入排序算法上小有改动的排序算法。在插入位置时使用二分


*从第一个元素开始认为该元素已经被排序
*取出下一个元素，在已经排序的元素的元素序列中查找到第一个比它大的数的位置
*将新元素插入该位置后
*重复前面的步骤
*/ 
function binaryInsertionSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		for (var i = 1;i<=array.length; i++) {
			var key = array[i],left = 0,right = i - 1;
			while(left<right){
				var middle = parseInt((left+right)/2);
				if (key<array[middle]) {
					right = middle -1;
				}else{
					left = middle + 1;
				}
			}
		for (var j =i -1;j>=left;j--){
			array[j+1] = array[j];
		}
		array[left] = key;
		}
	return array
	}else{
		console.log("array is not an Array");
	}
}


/* *选择排序
*原理:首先在未排序的序列中找到最小(大)元素，存放到排序序列起始位置
然后再从剩余未排序元素中继续找出最小(大)元素，存放到已排序序列末尾
以此类推

*初始状态：无序区为R[1..n],有序区为空
*第i趟排序(i=1,2,3....n-1)开始时，当前有序区和无序区分别为
R[1...i-1]和R(i...n)。该趟排序从前无序区中选出关键字最小的记录R[k]，
将它与无序区的第一个记录R交换，使R[1...i]和R[i+1..n)分别变为记录个数
增加1个的新有序区和记录个数减少1个的新无序区
*n-1趟结束，数组有序化
*/ 
function binaryInsertionSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		var len = array.length,temp;
		for(var i=0;i<len-1;i++){
			var min = array[i];
			for(var j=i+1;j<len;j++){
				if(array[i]<min){
					temp = min;
					min = array[j];
					array[j]= temp;
				}
			}
		array[i] = min;
		}
		return array;
	}else{
		console.log("array is not an Array");
	}
}

/* *冒泡排序
*原理:重复的访问要排序的数列，一次比较两个元素，如果它们顺序错误就把
它们的位置交换，直到没有元素需要交换位置

*比较相邻的两个元素，如果第一个比第二个大就交换它们的位置
*对每一对相邻元素做相同工作，从开始第一对到结尾最后一对，这样
在最后的元素应为最大的数
*针对所有元素重复以上步骤，除了最后一个
*/ 
function bubbleSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		var len = array.length,temp;
		for(var i = 0;i<len-1;i++){
			for(var j = len-1;j>=i;j--){
				if(array[j]<array[j-1]){
					temp = array[j];
					array[j] = array[j-1];
					array[j-1] =temp;
				}
			}
		}
		return array;
	}else{
		console.log("array is not an Array");
	}
}

/* *快速排序
*原理:通过一趟排序将待排序记录分隔成独立的两部分，其中一部分记录的关
键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达
到序列有序

*从数列中挑出一个元素称为"基准"
*重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大
的摆在基准的后面(相同的数字可以到任意一边)。在这个分区退出后，该基准就
处于数列的中间位置。这个称为分区操作
*递归的把小于基准值的子数列和大于基准值的元素子数列排序
*/ 
//方法1
function quickSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}

//方法2
function quickSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}


/* *堆排序
*原理:
*/ 
function heapSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}

/* *并归排序
*原理:
*/ 
function mergeSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}


/* *桶排序
*原理:
*/ 
function bucketSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}


/* *计数排序
*原理:
*/ 
function countingSort(array){
	if (Object.proptotype.toString.call(array).slice(8,-1) === 'Array') {
		
		return array;
	}else{
		console.log("array is not an Array");
	}
}