#
# @lc app=leetcode.cn id=30 lang=python3
#
# [30] 串联所有单词的子串
#

# @lc code=start
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_len = len(words[0])
        words_len = word_len * len(words)
        if len(s) < words_len:
            return []

        result = []
        for i in range(len(s) - words_len + 1):
            x = s[i: i + word_len]
            if x in words:
                y = words.copy()
                is_start = True
                for j in range(len(words)):
                    sub = s[i + j * word_len: i + (j + 1) * word_len]
                    if sub not in y:
                        is_start = False
                        break
                    y.remove(sub)
                if is_start:
                    result.append(i)
        return result

# @lc code=end
