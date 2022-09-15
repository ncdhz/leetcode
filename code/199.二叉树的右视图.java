import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
/*
 * @lc app=leetcode.cn id=199 lang=java
 *
 * [199] 二叉树的右视图
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
    
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> rs = new ArrayList<>();
        if (root == null) {
            return rs;
        }
        Deque<TreeNode> ds = new ArrayDeque<>();
        ds.add(root);
        while (!ds.isEmpty()) {
            rs.add(ds.getLast().val);
            Deque<TreeNode> newDs = new ArrayDeque<>(); 
            while(!ds.isEmpty()) {
                TreeNode node = ds.pop();
                if (node.left != null) {
                    newDs.add(node.left);
                }
                if (node.right != null) {
                    newDs.add(node.right);
                }
            }
            ds = newDs;
        }
        return rs;
    }
}
// @lc code=end

