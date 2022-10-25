/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (root === null) {
        return []
    }
    let a = []
    a.push(root)
    let rs = []
    while (a.length > 0) {
        let r = a.pop()
            
        rs.push(r.val)

        for (let i = r.children.length - 1; i > -1;i--) {
            a.push(r.children[i])
        }

    }
    return rs
};
// @lc code=end

