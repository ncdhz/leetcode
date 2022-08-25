import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=107 lang=java
 *
 * [107] 二叉树的层序遍历 II
 */

import javax.swing.tree.TreeNode;

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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new LinkedList<>();
        if (root == null) {
            return result;
        }

        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.add(root);
        while (true) {
            List<Integer> r = new LinkedList<>();
            Deque<TreeNode> new_stack = new ArrayDeque<>();
            while(!stack.isEmpty()) {
                TreeNode treeNode = stack.pop();
                if (treeNode.left != null) {
                    new_stack.add(treeNode.left);
                }
                if (treeNode.right != null) {
                    new_stack.add(treeNode.right);
                }
                r.add(treeNode.val);
            }
            result.add(0, r);
            stack = new_stack;
            if (stack.isEmpty()) {
                break;
            }
        }
        return result;
    }
}
// @lc code=end

