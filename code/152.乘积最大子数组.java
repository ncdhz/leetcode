import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=152 lang=java
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
class Solution {
    public int maxProduct(int[] nums) {
        int result = nums[0];
        List<Integer> midRes = new ArrayList<>(); 
        for(int n: nums) {
            int size = midRes.size();
            for (int i = 0; i < size; i++) {
                int n1 = midRes.remove(0);
                n1 *= n;
                if (n1 > result) {
                    result = n1;
                }
                midRes.add(n1);
            }
            if (n > result) {
                result = n;
            }
            midRes.add(n);
        }
        return result;
    }
}
// @lc code=end

