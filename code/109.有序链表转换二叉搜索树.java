/*
 * @lc app=leetcode.cn id=109 lang=java
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
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

    public TreeNode sLTBST(ListNode head, int num) {
        System.out.println(num);
        if (num == 0) {
            return null;
        }
        int m = num / 2;
        if (num % 2 == 1) {
            m ++;
        }
        int i = m;
        ListNode hc = head;
        while (--i > 0) hc = hc.next;

        TreeNode root = new TreeNode(hc.val);
        root.left = sLTBST(head, m - 1);
        root.right = sLTBST(hc.next, num - m);
        return root;
    }

    public TreeNode sortedListToBST(ListNode head) {
        if (head == null) {
            return null;
        }
        int i = 0;
        ListNode hc = head;
        while (hc != null) {
            i++;
            hc = hc.next;
        }
        return sLTBST(head, i);
    }
}
// @lc code=end

