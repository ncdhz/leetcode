/*
 * @lc app=leetcode.cn id=98 lang=java
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static Integer min = null;
    public boolean iVBST(TreeNode r) {
        if (r == null) {
            return false;
        }
        boolean l= iVBST(r.left);
        if (min != null && r.val <= min) {
            return true;
        } else {
            min = r.val;
        }
        boolean rr = iVBST(r.right);
        return l | rr;
    }
    public boolean isValidBST(TreeNode root) {
        min = null;
        return !iVBST(root);
    }
}
// @lc code=end

