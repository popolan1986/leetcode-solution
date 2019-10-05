/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function reverse(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let prev = null;
    let cur = head;
    let tempNext;
    while (cur) {
        tempNext = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tempNext;
    }
    
    return prev;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    
    // fast and slow pointer
    let fast = head;
    let slow = fast;
    let prev = null;
    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        }
    }
    
    // break the prev's next pointer
    prev.next = null;
    
    // reverse the linked list at the slow pointer's position
    let latter = reverse(slow);
    
    // iterate the two list
    let first = head;
    while (first && latter) {
        if (first.val === latter.val) {
            first = first.next;
            latter = latter.next;
        } else {
            return false;
        }
    }
    
    if (first && !first.next || latter && !latter.next || !first && !latter) {
        return true;
    }
    
    return false;
};
