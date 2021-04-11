//uzel
var uuNode = /** @class */ (function () {
    function uuNode(value) {
        /**
         * Pokud nevíte, co je konstruktor, tak to berte jako inicializační funkci.
         * Vezme proměnné v konstruktoru a nastaví jim základní hodnotu.
         */
        this.value = value;
        this.next = null;
    }
    uuNode.prototype.getValue = function () {
        return this.value;
    };
    uuNode.prototype.getNext = function () {
        return this.next;
    };
    uuNode.prototype.setNext = function (next) {
        this.next = next;
    };
    return uuNode;
}());
//spojovy seznam
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    LinkedList.prototype.add = function (i) {
        var n = new uuNode(i);
        if (this.size == 0) {
            this.first = n;
            this.last = n;
        }
        else {
            this.last.next = n;
            this.last = n;
        }
        this.size++;
    };
    LinkedList.prototype.get = function (i) {
        if (i >= this.size) {
            throw new Error("Index vetsi nez pocet prvku v seznamu!");
        }
        if (i < 0) {
            throw new Error("Index mensi nez 0!");
        }
        var current = this.first;
        for (var j = 0; j < i; j++) {
            current = current.next;
        }
        return current.value;
    };
    LinkedList.prototype.remove = function (i) {
        if (i >= this.size) {
            throw new Error("Index vetsi nez pocet prvku v seznamu!");
        }
        if (i < 0) {
            throw new Error("Index mensi nez 0!");
        }
        var element;
        if (i == 0) {
            element = this.first;
            this.first = this.first.next;
        }
        else {
            var current = this.first;
            for (var j = 0; j < i - 1; j++) { //najdeme predchozi
                current = current.next;
            }
            element = current.next;
            current.next = current.next.next; //mazany prvek vynechame
            if (i == this.size - 1) { //mazeme posledni
                element = this.last;
                this.last = current;
            }
        }
        this.size--;
        return element;
    };
    LinkedList.prototype.numberOfElements = function () {
        return this.size;
    };
    LinkedList.prototype.toString = function () {
        var string = "";
        var current = this.first;
        for (var i = 0; i < this.size; i++) {
            string = string + current.value + ", ";
            current = current.next;
        }
        return string;
    };
    return LinkedList;
}());
var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
console.log("Prvků ve spojovém seznamu: ", ll.numberOfElements());
console.log("Zobrazení prvků stringem: ", ll.toString());
console.log("Získej prvek dle zadaného indexu: ", ll.get(1));
var el = ll.remove(1); //Odstraněný prvek se vloží do proměnné, ale ve spojovém seznamu už není
console.log("Odstranění prvku: ", el.getValue());
console.log("Hodnota na daném indexu po odstranění ", ll.get(1));
console.log("Zobrazí finální spoják ", ll.toString());
