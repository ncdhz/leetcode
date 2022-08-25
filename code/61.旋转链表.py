#
# @lc app=leetcode.cn id=61 lang=python3
#
# [61] 旋转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head == None:
            return None
        i = k
        while i != 0:
            l = 0
            x = ListNode(next=head)
            hd = x
            start = None
            while hd.next != None:
                i -= 1
                if i <= 0:
                    if start == None:
                        start = x
                    else:
                        start = start.next
                l += 1
                hd = hd.next

            if start == x:
                return head
            
            if i <= 0:
                hd.next = head
                s = start.next
                
                start.next = None
                return s
            else:
                i %= l
        return head
# @lc code=end

