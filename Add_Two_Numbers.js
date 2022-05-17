// https://leetcode.com/problems/add-two-numbers/

// solution 1 : Converting the lists to numbers

let addTwoNumbers = (l1, l2) => {
  let ConvertReverseLinkedListToArray = (listNode) => {
    let arr = [];
    if (listNode.next !== null) {
      arr = arr.concat(ConvertReverseLinkedListToArray(listNode.next));
    }
    arr.push(listNode.val);
    return arr;
  };

  let l1Arr = ConvertReverseLinkedListToArray(l1);
  let l2Arr = ConvertReverseLinkedListToArray(l2);

  let total = BigInt(l1Arr.join("")) + BigInt(l2Arr.join(""));

  let totalSplitted = total.toString().split("");

  let resultLinkedList = null;

  for (let i = 0; i < totalSplitted.length; i++) {
    resultLinkedList = { val: totalSplitted[i], next: resultLinkedList };
  }

  return resultLinkedList;
};

// --------------------------------------------------------------------------------

// solution 2 : while loop

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let addTwoNumbers2 = (l1, l2) => {
    // initialize a new list node to be returned
    let newListNode = new ListNode(0);
    let headOfNewListNode = newListNode;

    // initialize variables to be utilized on each run
    let sum = 0;
    let carry = 0;

    // while there are elements (or a carried number) to add
    while (l1 !== null || l2 !== null || sum > 0) {
        // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
        if(l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
        if(l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if(sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        // Add the sum to the new ListNode, and then move it to the next entry
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;

        // Set the sum for the next addition to equal the carry-over (if there was one)
        sum = carry;
        carry = 0;
    }
    // Return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;
}