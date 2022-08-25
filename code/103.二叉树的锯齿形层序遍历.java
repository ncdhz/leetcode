import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode.cn id=103 lang=java
 *
 * [103] 二叉树的锯齿形层序遍历
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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        boolean is_s = false;
        Deque<TreeNode> d =  new ArrayDeque<>();
        d.push(root);
        while (!d.isEmpty()) {
            Deque<TreeNode> new_d = new ArrayDeque<>();
            List<Integer> r = new ArrayList<>();
            while (!d.isEmpty()) {
                TreeNode treeNode = d.pop();
                if (!is_s) {
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                } else {
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                }
                r.add(treeNode.val);
            } 
            is_s = !is_s;
            result.add(r);
            if (new_d.isEmpty())
                break;
            d = new_d;
        }
        return result;
    }
}
// @lc code=end

