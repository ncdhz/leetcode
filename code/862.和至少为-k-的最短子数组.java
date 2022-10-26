import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @lc app=leetcode.cn id=862 lang=java
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        int maxN = nums.length + 1;
        long [] ns = new long[maxN];
        ns[0] = 0;
        
        for (int i = 0; i < nums.length; i++) {
            ns[i + 1] = nums[i] + ns[i];
        }

        Deque<Integer> deque = new ArrayDeque<>();

        for (int i = 0; i < ns.length; i++) {
            while (!deque.isEmpty() && ns[i] - ns[deque.peekFirst()] >= k) {
                maxN = Math.min(maxN, i - deque.pollFirst());
            }

            while (!deque.isEmpty() && ns[i] <= ns[deque.peekLast()]) {
                deque.pollLast();
            }

            deque.offerLast(i);
        }

        return (maxN == nums.length + 1) ? -1 : maxN;
    }
}
// @lc code=end

