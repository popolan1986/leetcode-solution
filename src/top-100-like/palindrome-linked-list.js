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
 * 思路： 题目要求空间复杂度为O(1)。所以不能借用多余的存储空间。这个解法首先通过双指针（快慢指针）找到链表的中点位置，从这里开始原地反转后半部分链表。
 * 然后开始比较前半部分和后半部分链表
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
