const Node = require('./Node.js');

class LinkedList {

	constructor() {
		this.head = null;
		this.size = 0;
	}

	print(cb = console.log) {
		let current = this.head;
		if (current == null){

		}else{
			let i = 0;
			while (i < this.size){
				cb(current.value);
				if(current.next == null){

				}else{
					current = current.next;
				}
				i++;
			}
		}

	}

	append(value) {
		let node = new Node(value);

		if (this.head == null){
			this.head = node;
		}else{
			let current = this.head;
			let i = 0;
			while(i < this.size){
				if (current.next == null){
					current.next = node;
				}else{
					current = current.next;
				}
				
				i++;
			}
		}
		this.size += 1;
	}

	prepend(value){
		let node = new Node(value);
		
		if (this.head == null){
			this.head = node;
		}else{
			let current = node;
			current.next = this.head;
			this.head = current;

			
		}
		this.size += 1;
	}
}

module.exports = LinkedList;