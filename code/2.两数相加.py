#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        root = ListNode()
        f = root
        carry = 0
        while l1 is not None and l2 is not None: 
            val = l1.val + l2.val + carry
            carry = val // 10
            val = val % 10
            f.next = ListNode(val=val)
            f = f.next
            l1 = l1.next
            l2 = l2.next
        
        l3 = None
        
        if l1 is not None:
            l3 = l1 
        
        if l2 is not None:
            l3 = l2
        
        if carry > 0:
            if l3 is not None:
                while l3 is not None and carry != 0:
                    val = l3.val + carry
                    carry = val // 10
                    val = val % 10
                    f.next = ListNode(val=val)
                    f = f.next
                    l3 = l3.next
                if l3 is None and carry != 0:
                    f.next = ListNode(val=carry)
                else:
                    f.next = l3
            else:
                f.next = ListNode(val=carry)
        else:
            f.next = l3

        return root.next
# @lc code=end

