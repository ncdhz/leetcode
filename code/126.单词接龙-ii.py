#
# @lc app=leetcode.cn id=126 lang=python3
#
# [126] 单词接龙 II
#
from collections import defaultdict
from typing import List
# @lc code=start
class Solution:

    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:

        if endWord not in wordList:
            return []

        wordList, res_paths = set(wordList), defaultdict(set)
        forward = {beginWord}
        a_ord = ord('a')

        while forward:

            ws = set()

            wordList -= forward
            for word in forward:
                for i in range(len(word)):
                    left, right = word[:i], word[i + 1 :]
                    for j in range(26):
                        w = f'{left}{chr(a_ord + j)}{right}'

                        if w in wordList:
                            
                            ws.add(w)
                            res_paths[w].add(word)
            

            if endWord in ws:
                res = [[endWord]]
                while res[0][0] != beginWord:
                    res = [[w] + r for r in res for w in res_paths[r[0]]]
                return res
            forward = ws

        return []
# @lc code=end
