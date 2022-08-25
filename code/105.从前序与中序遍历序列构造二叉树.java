import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=105 lang=java
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0) {
            return null;
        }

        TreeNode root = new TreeNode(preorder[0]);
        int i = 0;
        while(preorder[0] != inorder[i]) i++;
        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] lp = Arrays.copyOfRange(preorder, 1, left.length + 1);
        root.left = buildTree(lp, left);
        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] rp = Arrays.copyOfRange(preorder, left.length + 1, preorder.length);
        root.right = buildTree(rp, right);

        return root;
    }
}
// @lc code=end

