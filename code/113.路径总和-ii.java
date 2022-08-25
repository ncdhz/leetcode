import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/*
 * @lc app=leetcode.cn id=113 lang=java
 *
 * [113] 路径总和 II
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
    private static List<List<Integer>> results = new ArrayList<>();
    public void ps(TreeNode r, List<Integer> rs, int targetSum) {

        rs.add(r.val);
        targetSum -= r.val;

        if (r.left == null && r.right == null) {
            if (targetSum == 0) {
                List<Integer> ar = new ArrayList<Integer>();
                for (Integer integer : rs) {
                    ar.add(integer);
                }
                results.add(ar);
            }
        }

        if (r.left != null) {
            ps(r.left, rs, targetSum);
        }
        if (r.right != null) {
            ps(r.right, rs, targetSum);
        }
        rs.remove(rs.size() - 1);
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        results.clear();
        if (root == null) {
            return results;
        }
        ps(root, new ArrayList<Integer>(), targetSum);
        return results;
    }
}
// @lc code=end

