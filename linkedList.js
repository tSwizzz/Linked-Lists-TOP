class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //adds a new node to the start of the list
    prepend(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //adds a new node to the end of the list
    append(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //returns the total number of nodes in the list
    size() {
        return this.size;
    }

    //returns the first node in the list
    head() {
        if(this.head) {
            return this.head;
        } else {
            return console.log("The list is empty!");
        }
    }

    //returns the last node in the list
    tail() {
        let current = this.head;

        if(!current) {
            return console.log("The list is empty");
        } else if(this.size == 1) {
            return current;
        } else {
            while(current.next) {
                current = current.next;
            }
            return current;
        }
    }

    //returns the node at the given index
    at(index) {
        let current = this.head;

        if(current) {
            if(this.size > index) {
                while(current && index != 0) {
                    current = current.next;
                    index--;
                }
                return current;
            } else {
                return console.log("That position in the list doesn't exist!");
            }
        }
        return console.log("The list is empty!");
    }

    //removes the last element from the list
    pop() {
        let current = this.head;

        if(!current) {
            return console.log("The list is empty");
        } else if(this.size == 1) {
            return current;
        } else {
            while(current.next.next != null) {
                current = current.next;
            }
            current.next.data = null;
            this.size--;
            return ll;
        }
    }

    //returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        let current = this.head;

        if(!current) {
            return console.log("The list is empty!");
        } else {
            while(current && current.data !== value) {
                current = current.next;
            }
            if(current && current.data == value) {
                return true;
            } else {
            return false;
            }
        }
    }

    //returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.head;
        let index = 0;

        if(!current) {
            return console.log("The list is empty");
        } else if(current.data == value) {
            return index;
        } else {
            while(current && current.data != value) {
                current = current.next;
                index++;
            }
            if(current && current.data == value) {
                return index;
            } else {
                return null;
            }
        }
    }

    //represents your LinkedList objects as strings, so you can print 
    //them out and preview them in the console
    toString() {
        let current = this.head;

        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    //extra, not required :) might add later :/
    //inserts a new node with the provided value at the give index
    insertAt(value, index) {

    }

    //also extra, not required :)
    removeAt(index) {

    }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);

ll.append(500);
ll.append(600);
ll.append(700);

//current list = 300 -> 200 -> 100 -> 500 -> 600 -> 700 -> null

//tests
console.log(ll.size);           //returns 6
console.log(ll.head);           //returns data: 300, next: Node
console.log(ll.tail());         //returns data: 700, next: null
console.log(ll.at(3));          //returns data: 500, next: Node
console.log(ll.pop());          //returns 300 -> 200 -> 100 -> 500 -> 600 -> null
console.log(ll.contains(600));  //returns true
console.log(ll.find(600));      //returns 4
console.log(ll.toString());     //returns the objects as strings
