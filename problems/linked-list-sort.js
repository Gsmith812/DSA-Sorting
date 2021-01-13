// Given a Linked List, sort the linked list using merge sort. You will need 
// your linked list class from previous lesson to create the list and use 
// all of its supplemental functions to solve this problem.


const { LinkedList, _Node } = require('./LinkedListClass');

const linkedList = new LinkedList();

const exampleArr = [ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 32, 26, 2, 14, 33, 45, 72, 56, 
    44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 
    91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 
   64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

let data = exampleArr.forEach(num => linkedList.insertLast(num));

const mergeSort = head => {
    if(head === null || head.next === null) {
        return head;
    }

    let prev = null;
    let singly = head;
    let doubly = head;

    while(doubly !== null && doubly.next !== null) {
        doubly = doubly.next.next;
        prev = singly;
        singly = singly.next;
    }

    prev.next = null;

    const list1 = mergeSort(head);
    const list2 = mergeSort(singly);

    const _merge = (list1, list2) => {
        const head = new _Node;
        let curr = head;
        
        while(list1 !== null && list2 !== null) {
            if(list1.value < list2.value){
                curr.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }
        curr.next = (list1 === null) ? list2 : list1;
        return head.next;
    };

    return _merge(list1, list2);

}