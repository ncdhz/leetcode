#
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] 最后一个单词的长度
#

# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        
        end_word_len = 0
        sign = False
        for ss in s:
            if ss == ' ':
                sign = True
            elif sign:
                sign = False
                end_word_len = 1
            else:
                end_word_len += 1
        return end_word_len
# @lc code=end

