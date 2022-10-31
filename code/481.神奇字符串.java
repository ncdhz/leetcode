/*
 * @lc app=leetcode.cn id=481 lang=java
 *
 * [481] 神奇字符串
 */

// @lc code=start
class Solution {
    public int magicalString(int n) {
        if (n <= 3) {
            return 1;
        }
        int[] ls = new int[n];
        ls[2] = 2;
        int i = 2;
        int j = 3;
        boolean isOne = true;
        int sum = 1;
        while(j < n) {
            for (int k = 0; j < n && k < ls[i]; k++) {
                if (isOne) {
                    sum++;
                }
                ls[j++] = isOne ? 1 : 2; 
            }
            isOne = !isOne;
            i++;
        }
        return sum;
    }
}
// @lc code=end

