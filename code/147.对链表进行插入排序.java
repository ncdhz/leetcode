/*
 * @lc app=leetcode.cn id=147 lang=java
 *
 * [147] 对链表进行插入排序
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
    public ListNode insertionSortList(ListNode head) {
        ListNode root = new ListNode();
        ListNode first = root;
        while (head != null) {
            ListNode r = head;
            head = head.next;
            while (first != null) {
                if (first.next == null || first.next.val > r.val) {
                    r.next = first.next;
                    first.next = r;
                    first = root;
                    break;
                }
                first = first.next;
            }
        }

        return root.next;
    }
}
// @lc code=end

