#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] 去除重复字母
#

# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        l = [ss for ss in s]
        save = {}

        for i, ll in enumerate(l):
            if ll not in save:
                save[ll] = i
            else:
                min_j = 'z'
                for j in range(0, save[ll] + 1):
                    if l[j] != '' and ord(l[j]) < ord(min_j):
                        min_j = l[j]

                min_k = 'z'
                for k in range(save[ll], i):
                    if l[k] != '' and ord(l[k]) < ord(min_k):
                        min_k = l[k]
                
                if ord(min_k) < ord(min_j):
                    l[save[ll]] = ''
                    save[ll] = i
                else:
                    l[i] = ''

        return ''.join(l)
# @lc code=end

