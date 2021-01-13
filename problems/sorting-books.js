// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and then implement your algorithm.

const sortBooks = arr => {
    if(arr.length < 2) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for(let element of arr) {
        if(element > pivot) right.push(element);
        else if(element < pivot) left.push(element);
        else equal.push(element);
    }

    return sortBooks(left).concat(equal).concat(sortBooks(right));
}