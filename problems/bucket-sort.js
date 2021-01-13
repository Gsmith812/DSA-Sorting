// Write an O(n) algorithm to sort an array of integers, where you know in 
// advance what the lowest and highest values are. You can't use 
// arr.splice(), shift() or unshift() for this exercise.

const bucketSort = (arr, bucketSize = 10) => {
    if(arr.length <= 0) return arr;

    const _insertionSort = arr => {
        count = count + 1;
        let length = arr.length;

        for(let i = 1; i < length; i++) {
            let tmp = arr[i];
            let j = i - 1;
            for(j; j >= 0 && arr[j] > tmp; j--) {
                arr[j + 1] = arr[j];
            };
            arr[j + 1] = tmp;
        }

        return arr;
    };

    let minVal = arr[0];
    let maxVal = arr[0];

    arr.forEach(val => {
        if(val < minVal) {
            minVal = val;
        } else if(val > maxVal) {
            maxVal = val;
        }
    });

    let bucketCount = Math.floor(
        (maxVal - minVal) / bucketSize
    ) + 1;

    let allBuckets = new Array(bucketCount);

    for(let i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    arr.forEach(val => {
        allBuckets[Math.floor((val - minVal) / bucketSize)].push(val);
    });

    arr.length = 0;

    allBuckets.forEach(bucket => {
        _insertionSort(bucket);
        bucket.forEach(num => {
            arr.push(num);
        });
    });

    return arr;
}