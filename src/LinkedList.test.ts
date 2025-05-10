import { LinkedList } from './LinkedList';

describe("LinkedList", () => {
    let list: LinkedList;
    beforeEach(() => {
        list = new LinkedList();
    });

    test("initial length is 0", () => {
        expect(list.length()).toBe(0);
    });

    test("append and get work correctly", () => {
        list.append('a');
        list.append('b');
        expect(list.length()).toBe(2);
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('b');
    });

    test("insert at bounds and middle", () => {
        list.append('a');
        list.insert('b', 1);
        list.insert('c', 1);
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('c');
        expect(list.get(2)).toBe('b');
    });

    test("get out of range throws", () => {
        expect(() => list.get(-1)).toThrow(RangeError);
        expect(() => list.get(1)).toThrow(RangeError);
    });

    test("insert out of range throws", () => {
        expect(() => list.insert('x', -1)).toThrow(RangeError);
        expect(() => list.insert('x', 1)).toThrow(RangeError);
    });

    test("delete returns and removes element", () => {
        list.append('a');
        list.append('b');
        expect(list.delete(0)).toBe('a');
        expect(list.length()).toBe(1);
        expect(list.delete(0)).toBe('b');
        expect(list.length()).toBe(0);
    });

    test("delete out of range throws", () => {
        expect(() => list.delete(0)).toThrow(RangeError);
    });

    test("deleteAll removes all matching elements", () => {
        ['a','b','a','c'].forEach(ch => list.append(ch));
        list.deleteAll('a');
        expect(list.length()).toBe(2);
        expect(list.get(0)).toBe('b');
        expect(list.get(1)).toBe('c');
    });

    test("clone creates independent copy", () => {
        list.append('a');
        const c = list.clone();
        list.append('b');
        expect(c.length()).toBe(1);
        expect(list.length()).toBe(2);
    });

    test("reverse inverts list order", () => {
        ['a','b','c'].forEach(ch => list.append(ch));
        list.reverse();
        expect(list.get(0)).toBe('c');
        expect(list.get(2)).toBe('a');
    });

    test("findFirst and findLast return correct indices or -1", () => {
        ['a','b','a'].forEach(ch => list.append(ch));
        expect(list.findFirst('a')).toBe(0);
        expect(list.findLast('a')).toBe(2);
        expect(list.findFirst('x')).toBe(-1);
        expect(list.findLast('x')).toBe(-1);
    });

    test("clear empties the list", () => {
        list.append('a');
        list.clear();
        expect(list.length()).toBe(0);
    });

    test("extend adds elements from another list", () => {
        list.append('a');
        const other = new LinkedList();
        other.append('b');
        other.append('c');
        list.extend(other);
        expect(list.length()).toBe(3);
        expect(list.get(2)).toBe('c');
        other.append('d');
        expect(list.length()).toBe(3);
    });

    test("insert at 0 in empty list", () => {
        list.insert('a', 0);
        expect(list.length()).toBe(1);
        expect(list.get(0)).toBe('a');
        expect(list.head).toBe(list.tail);
    });

    test("insert at size calls append", () => {
        list.append('a');
        list.insert('b', 1);
        expect(list.get(1)).toBe('b');
        expect(list.tail!.value).toBe('b');
    });

    test("delete middle node updates links", () => {
        list.append('a');
        list.append('b');
        list.append('c');
        list.delete(1);
        expect(list.get(0)).toBe('a');
        expect(list.get(1)).toBe('c');
        expect(list.head!.next!.value).toBe('c');
        expect(list.tail!.prev!.value).toBe('a');
    });

    test("delete head updates next node's prev", () => {
        list.append('a');
        list.append('b');
        list.delete(0);
        expect(list.head!.prev).toBeNull();
        expect(list.head!.value).toBe('b');
    });

    test("delete tail updates prev node's next", () => {
        list.append('a');
        list.append('b');
        list.delete(1);
        expect(list.tail!.next).toBeNull();
        expect(list.tail!.value).toBe('a');
    });

    test("clone creates deep copy", () => {
        list.append('a');
        list.append('b');
        const cloned = list.clone() as LinkedList;
        cloned.append('c');
        expect(list.length()).toBe(2);
        expect(cloned.length()).toBe(3);
        expect(cloned.get(2)).toBe('c');
    });

    test("insert at 0 in non-empty list", () => {
        list.append('b');
        list.insert('a', 0);
        expect(list.get(0)).toBe('a');
        expect(list.head!.next!.value).toBe('b');
        expect(list.head!.next!.prev!.value).toBe('a');
    });

    test("delete head in list with multiple elements", () => {
        list.append('a');
        list.append('b');
        list.delete(0);
        expect(list.head!.prev).toBeNull();
        expect(list.head!.value).toBe('b');
    });

    test("delete tail in list with multiple elements", () => {
        list.append('a');
        list.append('b');
        list.delete(1);
        expect(list.tail!.next).toBeNull();
        expect(list.tail!.value).toBe('a');
    });

    test("reverse empty list", () => {
        expect(list.length()).toBe(0);
        list.reverse();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });
});
