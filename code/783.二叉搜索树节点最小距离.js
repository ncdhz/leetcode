/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function(root) {
    let min = 100000
    let l = -100000
    let mD = function(r) {
        if (r === null) return
        mD(r.left)
        if (r.val - l < min) {
            min = r.val - l
        }
        l = r.val
        mD(r.right)
    }
    mD(root)
    return min
};
// @lc code=end

