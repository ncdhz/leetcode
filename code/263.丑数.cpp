/*
 * @lc app=leetcode.cn id=263 lang=cpp
 *
 * [263] 丑数
 */

// @lc code=start
class Solution {
public:
    bool isUgly(int n) {
        if (n == 0) return false;
        while (n != 1) {
            if (n % 2 == 0) {
                n /= 2;
                continue;
            }
            if (n % 5 == 0) {
                n /= 5;
                continue;
            }
            if (n % 3 == 0) {
                n /= 3;
                continue;
            }
            break;
        }
        if (n == 1) {
            return true;
        }
        return false;
    }
};
// @lc code=end

