/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let nodes = []
    while (head !== null) {
        nodes.push(head)
        head = head.next
    } 
    head = nodes[0]
    
    let node = new ListNode(1, undefined)
    for (let i = 0; i < parseInt(nodes.length / 2); i++) {
        node.next = nodes[i]
        node = node.next
        node.next = nodes[nodes.length - 1 - i]
        node = node.next
    }
    
    if (nodes.length % 2 === 1) {
        node.next = nodes[parseInt(nodes.length / 2)]
        node = node.next
    }
    node.next = null
};
// @lc code=end

