/*
 * @lc app=leetcode.cn id=92 lang=java
 *
 * [92] 反转链表 II
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
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode root = new ListNode();
        root.next = head;
        ListNode first = root;
        boolean hasLeft = false;
        ListNode middle = null;
        ListNode end = null;
        int i = 1;
        while(head != null) {
            if (i == left) {
                hasLeft = true;
            } 
            ListNode x = head.next;
            if (!hasLeft) {
                first = head;
            } else {
                if (i == left) {
                    end = head;
                }
                head.next = middle;
                middle = head;
            }

            if (i == right) {
                first.next = middle;
                end.next = x;
                break;
            }
            i ++;
            head = x;
        }
        return root.next;
    }
}
// @lc code=end

