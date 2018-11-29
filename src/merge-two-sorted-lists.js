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

    let head = new ListNode(undefined);
    const nullHead = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else if (l1.val > l2.val) {
            head.next = l2;
            l2 = l2.next;
        } else {
            head.next = l1;
            l1 = l1.next;
            head = head.next;
            head.next = l2;
            l2 = l2.next;
        }

        head = head.next;
        head.next = null;
    }
    head.next = l1 || l2;

    return nullHead.next;
};

// faster than 100% JS online solutions
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
