/*
 * @lc app=leetcode.cn id=902 lang=java
 *
 * [902] 最大为 N 的数字组合
 */

// @lc code=start
class Solution {
    public int atMostNGivenDigitSet(String[] digits, int n) {
        
        String ss = Integer.toString(n);
        int num = ss.length() - 1;
        int sum = 0;
        
        for (int i = 0; i < num; i++) {
            sum = (sum + 1) * digits.length;
        }

        int[] nmin = new int[ss.length()];
        boolean[] nmax = new boolean[ss.length()];
    
        for (int i = 0; i < ss.length(); i++) {
            for (int j = 0; j < digits.length; j++) {
                if (ss.charAt(i) > digits[j].charAt(0)) {
                    nmin[i] += 1;
                } else if (ss.charAt(i) == digits[j].charAt(0)) {
                    nmax[i] = true;
                }
            }
        }

        if (nmax[nmax.length - 1]) {
            nmin[nmin.length - 1] += 1;
        }

        for (int i = 0; i < nmin.length; i++) {
            sum += nmin[i] * Math.pow(digits.length, (nmin.length - 1 - i));
            if (!nmax[i]) {
                break;
            }
        }
        return sum;
    }
}
// @lc code=end

