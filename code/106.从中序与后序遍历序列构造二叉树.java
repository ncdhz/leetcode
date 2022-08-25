import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=106 lang=java
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
    public TreeNode buildTree(int[] inorder, int[] postorder) {

        if (inorder.length == 0) return null;
        TreeNode root = new TreeNode(postorder[postorder.length - 1]);
        
        int i = 0;
        while (inorder[i] != postorder[postorder.length - 1]) i++;

        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] pl = Arrays.copyOfRange(postorder, 0, i);
        root.left = buildTree(left, pl);

        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] pr = Arrays.copyOfRange(postorder, i, postorder.length - 1);
        root.right = buildTree(right, pr);
        
        return root;
    }
}
// @lc code=end

