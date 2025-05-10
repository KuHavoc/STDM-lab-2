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
}