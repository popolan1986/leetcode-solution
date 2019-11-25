## Problem Statement
找到链表的倒数第K个结点。
## Solution
```js
// linked-list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// find the Kth node to the tail
const findKthToTail = (head, k) => {
    if (!head) {
        return null;
    }

    let fast = head;
    for (let i = 0; i < k; i++) {
        if (fast !== null) {
            fast = fast.next;
        } else {
            return null;
        }
    }

    let slow = head;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
```