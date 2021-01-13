// Write an algorithm to shuffle an array into a random order in place 
// (i.e., without creating a new array).

const sortRandom = arr => {
    for(let i = 0; i < arr.length; i++) {
        let newIndex = Math.floor(Math.random() * arr.length);
        let tmp = arr[i];
        arr[i] = arr[newIndex];
        arr[newIndex] = tmp;
    }
    return arr;
}