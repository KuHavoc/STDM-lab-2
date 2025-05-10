import { Character, List } from './types';

class Node {
    value: Character;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(value: Character) {
        this.value = value;
    }
}

export class LinkedList {
    private head: Node | null = null;
    private tail: Node | null = null;
    private size: number = 0;

    length(): number {
        return this.size;
    }

    append(element: Character): void {
        const node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    insert(element: Character, index: number): void {
        if (index < 0 || index > this.size) {
            throw new RangeError('Index out of bounds');
        }
        const node = new Node(element);
        if (index === 0) {
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
        } else if (index === this.size) {
            this.append(element);
            return;
        } else {
            let current = this.head!;
            for (let i = 0; i < index; i++) current = current.next!;
            node.prev = current.prev;
            node.next = current;
            current.prev!.next = node;
            current.prev = node;
        }
        this.size++;
    }

    delete(index: number): Character {
        if (index < 0 || index >= this.size) {
            throw new RangeError('Index out of bounds');
        }
        let toDelete: Node;
        if (index === 0) {
            toDelete = this.head!;
            this.head = toDelete.next;
            if (this.head) this.head.prev = null;
        } else if (index === this.size - 1) {
            toDelete = this.tail!;
            this.tail = toDelete.prev;
            if (this.tail) this.tail.next = null;
        } else {
            toDelete = this.head!;
            for (let i = 0; i < index; i++) toDelete = toDelete.next!;
            toDelete.prev!.next = toDelete.next;
            toDelete.next!.prev = toDelete.prev;
        }
        this.size--;
        if (this.size === 0) {
            this.head = null;
            this.tail = null;
        }
        return toDelete.value;
    }

    deleteAll(element: Character): void {
        let current = this.head;
        while (current) {
            const nextNode = current.next;
            if (current.value === element) {
                if (current.prev) current.prev.next = current.next;
                else this.head = current.next;
                if (current.next) current.next.prev = current.prev;
                else this.tail = current.prev;
                this.size--;
            }
            current = nextNode;
        }
    }

    get(index: number): Character {
        if (index < 0 || index >= this.size) {
            throw new RangeError('Index out of bounds');
        }
        let current = this.head!;
        for (let i = 0; i < index; i++) current = current.next!;
        return current.value;
    }

    clone(): LinkedList {
        const newList = new LinkedList();
        let current = this.head;
        while (current) {
            newList.append(current.value);
            current = current.next;
        }
        return newList;
    }

    reverse(): void {
        let current = this.head;
        let temp: Node | null = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if (temp) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }
}