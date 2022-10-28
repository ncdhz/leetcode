import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @lc app=leetcode.cn id=907 lang=java
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
class Solution {
    
    static int mod = 1000000007; 

    public int sumSubarrayMins(int[] arr) {
        
        int[] ls = new int[arr.length];
        int[] rs = new int[arr.length];
        Deque<Integer> ds = new ArrayDeque<Integer>();

        for (int i = 0; i < arr.length; i++) {
            while (!ds.isEmpty() && arr[i] <= arr[ds.peek()]) {
                ds.pop();
            }
            
            ls[i] = i - (!ds.isEmpty() ? ds.peek(): -1);
            ds.push(i);
        }

        ds.clear();
        for (int i = arr.length - 1; i >= 0; i--) {
            while(!ds.isEmpty() && arr[i] < arr[ds.peek()]) {
                ds.pop();
            }
            rs[i] = (!ds.isEmpty() ? ds.peek() : arr.length) - i;
            ds.push(i);
        }

        long result = 0;

        for (int i = 0; i < rs.length; i++) {
            result += (long)ls[i] * rs[i] * arr[i];
            result %= mod;
        }

        return (int) result;
    }
}
// @lc code=end

