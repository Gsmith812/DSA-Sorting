class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

// Building a linked-list

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    };
    insertLast(item) {
        // Check to see if list is empty
        if(this.head === null) {
            this.insertFirst(item);
        } else {
            // Set stored value for moving nodes
            let tempNode = this.head;
            // Move to the next node while there is one
            while( tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            // Once at the end of the list add new Node to the end
            tempNode.next = new _Node(item, null);
        }
    };
    remove(item) {
        // Check if the list is empty
        if(this.head === null) {
            return null;
        }
        // If the node to be removed is the head, make the next node point
        // to the next node
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Set start point to the head
        let currNode = this.head;
        // Track previous node
        let prevNode = this.head;

        // Move through the nodes until we have matched the item
        while(currNode !== null && currNode.value !== item) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log(`Item not found`);
            return;
        }
        prevNode.next = currNode.next;
    };
    find(item) {
        // Start at the head
        let currNode = this.head;
        // Check if list is empty
        if(!this.head) {
            return null;
        }
        // Check for the item
        while(currNode.value !== item) {
            // If no match is found
            if(currNode.next === null) {
                console.log('Item not found');
                return null;
            } else {
                currNode = currNode.next;  
            }
        }
        return currNode;
    }
    insertBefore(item, key) {
        // Check if list is empty
        if(!this.head) {
            console.log('List empty, inserting at head.');
            this.insertFirst(item);
        }

        // Set current node position
        let currNode = this.head;
        // Set previous node
        let prevNode = this.head;

        // Find the key in the list
        while(currNode.value !== key) {
            // If no match is found
            if(currNode.next === null) {
                console.log('Item not found');
                return null;
            } else {
                //Shift the current and previous nodes forward
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        // Set next node after prevNode to new item
        prevNode.next = new _Node(item, prevNode.next);
    };
    insertAfter(item, key) {
        // Check if list is empty
        if(!this.head) {
            console.log('List empty, inserting at head.');
            this.insertFirst(item);
        }

        // Set current node start
        let currNode = this.head;

        // Find the key to insert after
        while(currNode.value !== key) {
            if(currNode.next === null) {
                console.log('Item not found');
                return null;
            } else {
                // Shift nodes to key
                currNode = currNode.next;
            }
        }
        // Set key's next to point to new node
        currNode.next = new _Node(item, currNode.next);
    };
    insertAt(item, index) {
        // Check if list is empty or if index is set to 0
        if(!this.head || index === 0) {
            this.insertFirst(item);
        }

        // Set current node
        let currNode = this.head;
        // Set prevNode start
        let prevNode = this.head;

        // Set counter to track index
        let currIndex = 0;

        // Search for matched index
        while(currIndex < index) {
            // If target is not found in the list
            if(currNode.next === null) {
                console.log('Index Error');
                return null;
            } else {
                currIndex++;
                // Move node positions
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        // Set previous items next to new item and new item points to current node
        prevNode.next = new _Node(item, currNode);
    }
}

module.exports = {LinkedList, _Node};