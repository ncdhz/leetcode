/*
 * @lc app=leetcode.cn id=135 lang=java
 *
 * [135] 分发糖果
 */

// @lc code=start
class Solution {

    public int candy(int[] ratings) {
        int min = 0;
        for (int i = 1; i < ratings.length; i++) {
            if (ratings[i] < ratings[min]) {
                min = i;
            }
        }
        int[] rs = new int[ratings.length];
        rs[min] = 1;
        for (int i = min - 1; i >= 0 ; i--) {
            if (ratings[i] > ratings[i + 1]) {
                rs[i] =rs[i + 1] + 1;
            } else if (rs[i + 1] > 1 || ratings[i + 1] == ratings[i]){
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i + j] += 1;
                    if (rs[i + j] < rs[i + j + 1] || ratings[i + j] >= ratings[i + j + 1]) {
                        break;
                    }   
                }
                rs[i] = 1;
            }
        }
        for (int i = min + 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                rs[i] = rs[i - 1] + 1;
            } else if (rs[i - 1] > 1 || ratings[i - 1] == ratings[i]) {
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i - j] += 1;
                    if (rs[i - j - 1] > rs[i - j] || ratings[i - j - 1] <= ratings[i - j]) {
                        break;
                    }
                }
                rs[i] = 1;
            }
        }
        int sum = 0;
        for (int r: rs) {
            sum += r;
        }
        return sum;
    }
}
// @lc code=end

