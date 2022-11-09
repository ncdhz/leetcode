/*
 * @lc app=leetcode.cn id=605 lang=cpp
 *
 * [605] 种花问题
 */

// @lc code=start
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        if (n == 0) {
            return true;
        }
        for (int i = 0;i < flowerbed.size(); i++) {
            if ((i == 0 || (i > 0 && flowerbed[i - 1] == 0)) && flowerbed[i] == 0 && (i >= flowerbed.size() - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;
                n--;
            }

            if (n == 0) {
                return true;
            }
        }
        return false;
    }
};
// @lc code=end

