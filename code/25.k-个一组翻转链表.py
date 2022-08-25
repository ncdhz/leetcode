#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K 个一组翻转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        stack = []
        start = None
        end = None
        hd = head
        i = 0
        while hd != None:
            stack.append(hd)
            hd = hd.next
            i += 1
            if i == k:
                i = 0
                for _ in range(k):
                    n = stack.pop()
                    if start == None:
                        start = n
                    else:
                        end.next = n
                    end = n 
            
        if end != None:
            end.next = None

        if len(stack) != 0:
            if start == None:
                start = stack[0]
            else:
                end.next = stack[0]
        
        return start
# @lc code=end

