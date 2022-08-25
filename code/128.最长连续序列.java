import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=128 lang=java
 *
 * [128] 最长连续序列
 */

// @lc code=start
class Solution {
    public int longestConsecutive(int[] nums) {
        int sum = 0;
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (!set.contains(n)) {
                int s = 1;
                set.add(n);
                for (int j = 1;; j++) {
                    if (set.contains(n + j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                for (int j = 1;; j++) {
                    if (set.contains(n - j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                if (s > sum) {
                    sum = s;
                }
            }

        }
        return sum;
    }
}
// @lc code=end

