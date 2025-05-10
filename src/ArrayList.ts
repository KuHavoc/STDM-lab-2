import { Character, List } from './types';

export class ArrayList implements List {
    private items: Character[] = [];

    length(): number {
        return this.items.length;
    }

    append(element: Character): void {
        this.items.push(element);
    }

    insert(element: Character, index: number): void {
        if (index < 0 || index > this.items.length) {
            throw new RangeError('Index out of bounds');
        }
        this.items.splice(index, 0, element);
    }

    delete(index: number): Character {
        if (index < 0 || index >= this.items.length) {
            throw new RangeError('Index out of bounds');
        }
        return this.items.splice(index, 1)[0];
    }

    deleteAll(element: Character): void {
        this.items = this.items.filter(item => item !== element);
    }

    get(index: number): Character {
        if (index < 0 || index >= this.items.length) {
            throw new RangeError('Index out of bounds');
        }
        return this.items[index];
    }

    clone(): List {
        const newList = new ArrayList();
        //newList.items = [...this.items];
        return newList;
    }

    reverse(): void {
        this.items.reverse();
    }

    findFirst(element: Character): number {
        return this.items.indexOf(element);
    }

    findLast(element: Character): number {
        return this.items.lastIndexOf(element);
    }

    clear(): void {
        this.items = [];
    }

    extend(elements: List): void {
        const other = elements.clone();
        for (let i = 0; i < other.length(); i++) {
            this.items.push(other.get(i));
        }
    }
}
