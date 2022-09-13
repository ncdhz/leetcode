/*
 * @lc app=leetcode.cn id=476 lang=java
 *
 * [476] 数字的补数
 */

// @lc code=start
class Solution {
    public int findComplement(int num) {
        int x = 0;
        int i = 0;
        while(num != 0) {
            if (num % 2 == 0) {
                x += Math.pow(2, i);
            }
            i++;
            num /= 2;
        }
        return x;
    }
}
// @lc code=end

