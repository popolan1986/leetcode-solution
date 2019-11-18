## Problem Statement
输入一个链表的头结点，从尾到头反过来打印出每个结点的值。

## Solution
后进先出，使用栈这种结构。
```js
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const printListReversingly = (head) => {
    const stack = [];
    let node = head;
    while (node !== null) {
        stack.push(node.val);
        node = head.next;
    }

    while (stack.length !== 0) {
        const cur = stack.pop();
        console.log()
    }
};

const printListReversinglyRecursively = (head) => {
    if (head !== null) {
        if (head.next !== null) {
            printListReversinglyRecursively(head.next);
        }
        console.log(head.val);
    }
};
```