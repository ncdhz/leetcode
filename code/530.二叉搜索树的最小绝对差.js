/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let min = 100000
let l = -100000
var md = function(root) {
    if (root === null) return
    md(root.left)
    if (root.val - l < min) {
        min = root.val - l
    }
    l = root.val
    md(root.right)
}
var getMinimumDifference = function(root) {
    min = 100000
    l = -100000
    md(root)
    return min
};
// @lc code=end

