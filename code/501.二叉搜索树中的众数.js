/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var fM = function(root, rs) {
    if (root === null) {
        return
    }
    
    fM(root.left, rs)

    if (rs[root.val] !== undefined) {
        rs[root.val]++
    } else {
        rs[root.val] = 1
    }
    
    fM(root.right, rs)
}

var findMode = function(root) {
    let rs = {}
    fM(root, rs)
    let r = []
    let rn = 0
    for (const rr in rs) {
        if (rs[rr] > rn) {
            r = [rr]
            rn = rs[rr]
        } else if (rs[rr] === rn) {
            r.push(rr)
        }
    }
    return r
};
// @lc code=end

