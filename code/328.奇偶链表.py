#
# @lc app=leetcode.cn id=328 lang=python3
#
# [328] 奇偶链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        
        root = head
        r2s = None
        r2 = None

        while root is not None and root.next is not None:
            if r2 is None:
                r2 = root.next
                r2s = root.next
            else:
                r2.next = root.next
                r2 = r2.next
            root.next = root.next.next
            if root.next is None:
                break
            root = root.next
        if r2 is not None:
            r2.next = None
        root.next = r2s
        return head
# @lc code=end
