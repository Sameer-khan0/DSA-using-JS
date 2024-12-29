// A key-value store where a hash function determines where data is stored. 

class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) return v;
            }
        }
        return undefined;
    }
}

// Example
const hashTable = new HashTable();
hashTable.set("name", "Alice");
console.log(hashTable.get("name")); // Alice
