import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=102 lang=java
 *
 * [102] 二叉树的层序遍历
 */
import java.util.List;

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

class Tuple{
    public TreeNode treeNode;
    public int i;
    
    Tuple(TreeNode treeNode, int i) {
        this.treeNode = treeNode;
        this.i = i;
    }

    public int getI() {
        return i;
    }

    public TreeNode getTreeNode() {
        return treeNode;
    }
}

class Solution {
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        Deque<Tuple> deque = new ArrayDeque<>();
        deque.add(new Tuple(root, 1));
        while(!deque.isEmpty()) {
            Tuple tuple = deque.pop();
            TreeNode treeNode = tuple.getTreeNode();
            if (tuple.getI() > result.size()) {
                result.add(new ArrayList<Integer>());
            }
            List r =  result.get(tuple.getI() - 1);
            r.add(treeNode.val);
            if (treeNode.left != null) {
                deque.add(new Tuple(treeNode.left, tuple.getI() + 1));
            }
            if (treeNode.right != null) {
                deque.add(new Tuple(treeNode.right, tuple.getI() + 1));
            }
        }
        return result;
    }
}
// @lc code=end

