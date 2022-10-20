/*
 * @lc app=leetcode.cn id=779 lang=java
 *
 * [779] 第K个语法符号
 */

// @lc code=start
class Solution {
    public int kthGrammar(int n, int k) {
        int s = 1;
        while (s < k) {
            s *= 2;
        }
        int i = 0;
        while (k > 1) {
            s /= 2;
            if (k > s) {
                k -= s;
                i ++;
            }
        }
        if (k == 0) {
            if (i % 2 == 0) {
                return 1;
            }
            return 0;
        }
        if (i % 2 == 0) {
            return 0;
        }
        return 1;
    }
}
// @lc code=end

