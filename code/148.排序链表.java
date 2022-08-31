/*
 * @lc app=leetcode.cn id=148 lang=java
 *
 * [148] 排序链表
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
    public ListNode sortList(ListNode head) {
        if (head == null) {
            return head;
        }
        int nodeLen = 0;
        
        ListNode node = head;
        while (node != null) {
            nodeLen += 1;
            node = node.next;
        }

        ListNode temp = new ListNode(0, head);
        for (int i = 1; i < nodeLen; i <<= 1) {
            ListNode pre = temp;
            ListNode m = temp.next;
            while(m != null) {
                ListNode head1 = m;
                for (int j = 1; j < i && m != null; j ++) {
                    m = m.next;
                }
                ListNode head2 = null;
                if (m != null) {
                    head2 = m.next;
                    m.next = null;
                    m = head2;
                    for (int j = 1; j < i && m != null; j ++) {
                        m = m.next;
                    }
                }

                if (m != null) {
                    ListNode next = m;
                    m = m.next;
                    next.next = null;
                }

                ListNode n = mergeList(head1, head2);
                pre.next = n.next;
                pre = n;
                n.next = null;
            }
        }
        return temp.next;
    }

    public ListNode mergeList(ListNode head1, ListNode head2) {
        ListNode root = new ListNode();
        ListNode temp = root;
        while(head1 != null && head2 != null) {
            if (head1.val <= head2.val) {
                temp.next = head1;
                temp = head1;
                head1 = head1.next;
            } else {
                temp.next = head2;
                temp = head2;
                head2 = head2.next;
            }
        }
        if (head1 != null) {
            temp.next = head1;
        } else {
            temp.next = head2;
        }
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = root.next;
        return temp;
    }
}
// @lc code=end

