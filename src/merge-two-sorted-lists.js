/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    let node1 = l1;
    let node2 = l2;
    let head = new ListNode(undefined);
    const nullHead = head;
    while (node1 && node2) {
        if (node1.val < node2.val) {
            head.next = node1;
            node1 = node1.next;
        } else if (node1.val > node2.val) {
            head.next = node2;
            node2 = node2.next;
        } else {
            head.next = node1;
            node1 = node1.next;
            head = head.next;
            head.next = node2;
            node2 = node2.next;
        }

        head = head.next;
        head.next = null;
    }

    if (node1) {
        head.next = node1;
    } else if (node2) {
        head.next = node2;
    }

    return nullHead.next;
};

// test case
function createTestCase(list1, list2) {
    let last1 = new ListNode(list1[0]);
    let last2 = new ListNode(list2[0]);
    const head1 = last1;
    const head2 = last2;
    for (let i = 1; i < list1.length; i++) {
        last1.next = new ListNode(list1[i]);
        last1 = last1.next;
    }
    for (let j = 1; j < list2.length; j++) {
        last2.next = new ListNode(list2[j]);
        last2 = last2.next;
    }

    return [head1, head2];
}

const [ l1, l2 ] = createTestCase([1, 2, 4], [1, 3, 4]);
mergeTwoLists(l1, l2);
