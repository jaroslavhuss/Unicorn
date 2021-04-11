//uzel
class uuNode {
    //Zde jsou TS typy
    value:number;
    next:number;
    constructor(value:number) {
        /**
         * Pokud nevíte, co je konstruktor, tak to berte jako inicializační funkci. 
         * Vezme proměnné v konstruktoru a nastaví jim základní hodnotu.
         */
      this.value = value;
      this.next = null;
    }
  
    getValue():number {
      return this.value;
    }
  
    getNext():number {
      return this.next;
    }
  
    setNext(next:number) {
      this.next = next;
    }
  }
  
  //spojovy seznam
  class LinkedList {
      first:any;
      last:any;
      size:number;
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    add(i:number) {
      let n = new uuNode(i);
      if (this.size == 0) {
        this.first = n;
        this.last = n;
      } else {
        this.last.next = n;
        this.last = n;
      }
      this.size++;
    }
  
    get(i:number) {
      if (i >= this.size) {
          throw new Error("Index vetsi nez pocet prvku v seznamu!");
      }
      if (i < 0) {
          throw new Error("Index mensi nez 0!");
      } 
          
      let current = this.first;
      for (let j = 0; j < i; j++) {
        current = current.next;
      }
      return current.value;
    }
  
    remove(i:number) {
      if (i >= this.size) {
          throw new Error("Index vetsi nez pocet prvku v seznamu!");
      }
      if (i < 0) {
        throw new Error("Index mensi nez 0!");
      }
  
      let element:any;
      if (i == 0) {
        element = this.first;
        this.first = this.first.next;
      } else {
        let current:any = this.first;
        for (let j:number = 0; j < i - 1; j++) { //najdeme predchozi
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
    }
  
    numberOfElements() {
      return this.size;
    }
  
    toString() {
      let string = "";
      let current = this.first;
      for (let i = 0; i < this.size; i++) {
        string = string + current.value + ", ";
        current = current.next;
      }
      return string;
    }
  }
  
  let ll = new LinkedList();
  ll.add(10);
  ll.add(20);
  ll.add(30);
  console.log("Prvků ve spojovém seznamu: ",ll.numberOfElements());
  console.log("Zobrazení prvků stringem: ",ll.toString());
  
  console.log("Získej prvek dle zadaného indexu: ",ll.get(1));
  
  let el = ll.remove(1); //Odstraněný prvek se vloží do proměnné, ale ve spojovém seznamu už není
  console.log("Odstranění prvku: ",el.getValue());
  
  console.log("Hodnota na daném indexu po odstranění ", ll.get(1));
  console.log("Zobrazí finální spoják ",ll.toString());