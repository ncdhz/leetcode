import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=496 lang=java
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> ls = new ArrayList<>();
        for (int i = 0; i < nums2.length; i++) {
            map.put(nums2[i], -1);
            Iterator<Integer> iterator = ls.iterator();
            while(iterator.hasNext()) {
                Integer it = iterator.next();
                if (it < nums2[i]) {
                    map.put(it, nums2[i]);
                    iterator.remove();
                }
            }
            ls.add(nums2[i]);
        }
        int[] rs = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            rs[i] = map.get(nums1[i]);
        }
        return rs;
    }
}
// @lc code=end

