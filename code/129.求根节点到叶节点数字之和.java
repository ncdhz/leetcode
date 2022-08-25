/*
 * @lc app=leetcode.cn id=129 lang=java
 *
 * [129] 求根节点到叶节点数字之和
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

    static int sum = 0;

    public void sn(TreeNode r, int s) {

        s = s * 10 + r.val;

        if (r.left == null && r.right == null) {
            sum += s;
            return;
        }

        if (r.left != null) {
            sn(r.left, s);
        }
        
        if (r.right != null) {
            sn(r.right, s);
        }
        
    }

    public int sumNumbers(TreeNode root) {
        sum = 0;
        if (root != null) {
            sn(root, 0);
        }
        return sum;
    }
}
// @lc code=end

