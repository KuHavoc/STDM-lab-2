export type Character = string;

export interface List {
    length(): number;
    append(element: Character): void;
    insert(element: Character, index: number): void;
    delete(index: number): Character;
    deleteAll(element: Character): void;
    get(index: number): Character;
    clone(): List;
    reverse(): void;
    findFirst(element: Character): number;
    findLast(element: Character): number;
    clear(): void;
    extend(elements: List): void;
}