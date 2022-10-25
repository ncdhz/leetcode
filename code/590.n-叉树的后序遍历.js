/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root === null) return []
    let rs = []
    let a = []
    a.push(root)
    while (a.length > 0) {
        let n = a.pop()
        rs.unshift(n.val)
        for (let r of n.children) {
            a.push(r)
        }
    }
    return rs
};
// @lc code=end

