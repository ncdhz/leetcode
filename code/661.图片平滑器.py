#
# @lc app=leetcode.cn id=661 lang=python3
#
# [661] 图片平滑器
#

# @lc code=start
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        results = []
        for i in range(len(img)):
            r = []
            for j in range(len(img[i])):
                sum_ = 0
                count = 0
                for m in [-1, 0, 1]:
                    for n in [-1, 0, 1]:
                        if 0 <= i + m < len(img) and 0 <= j + n < len(img[i]):
                            sum_ += img[i + m][j + n]
                            count += 1
                r.append(sum_ // count)
            results.append(r)
        return results
# @lc code=end

