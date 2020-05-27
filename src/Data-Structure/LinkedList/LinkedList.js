import LinkedListNode from './LinkedListNode';
import Comparator from '../utils/comparator/Comparator';

export default class LinkedList {
    /**
     * @param {Function} comparatorFunction 
     */
    constructor(comparatorFunction) {
        /** @var LinkedListNode */
        this.head = null;
        /** @var LinkedListNode */
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    prepend() {
        // Make new node to be a head.
        const newNode = new LinkedListNode(value, this.head);
        this.head = new newNode;

        // If there is no tail yes  letś make new node a tail.
        if (!this.tail) {
            this.tail = newNode
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let´s make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode

            return this;
        }
    }
}