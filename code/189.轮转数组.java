import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=189 lang=java
 *
 * [189] 轮转数组
 */

// @lc code=start
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        int i = 0;
        int r = nums[0];
        int m = 0;
        int j = 0;
        Set<Integer> ss = new HashSet<>();
        ss.add(0);
        while(j < nums.length) {
            i = (i + k) % nums.length;
            m = nums[i];
            nums[i] = r;
            r = m;
            j++;
            if (ss.contains(i) && j < nums.length) {
                i++;
                r = nums[i];
                ss.add(i);
                continue;
            } 
            ss.add(i);
        }
    }
}
// @lc code=end

