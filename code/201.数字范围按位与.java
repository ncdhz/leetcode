/*
 * @lc app=leetcode.cn id=201 lang=java
 *
 * [201] 数字范围按位与
 */

// @lc code=start
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        if (right == left) return left;
        int rl = right - left - 1;
        int sum = 0;
        int i = 0;
        for (int j = 0; j < 32; j++) {
            if ((rl >> j & 1) == 1) {
                i = j;
            }
        }
        i++;
        for (; i < 32; i++) {
            if ((left >> i & 1) == 1 && (right >> i & 1) == 1) {
                sum += Math.pow(2, i);
            }
        }
        return sum;
    }
}
// @lc code=end

