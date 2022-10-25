/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

var same = function(root, sub) {
    
    if (root === null) {
        if (sub === null)
            return true
        return false
    }

    if (sub === null) {
        return false
    }
    
    if (root.val !== sub.val) {
        return false
    }
    
    return same(root.left, sub.left) && same(root.right, sub.right)
}

var isSubtree = function(root, subRoot) {
    if (same(root, subRoot)) {
        return true
    }
    if (root.left !== null && isSubtree(root.left, subRoot)) {
        return true
    }
    if (root.right !== null && isSubtree(root.right, subRoot)) {
        return true
    } 
    return false
};
// @lc code=end

