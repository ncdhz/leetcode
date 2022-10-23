import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=1235 lang=java
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
class Solution {

    class Data {
        
        int startTime;
        int endTime;
        int profit;

        Data(int startTime, int endTime, int profit) {
            this.startTime = startTime;
            this.endTime = endTime;
            this.profit = profit;
        }

        
    }

    public int binarySearch(Data[] jobs, int right, int target) {
        int left = 0;
        while(left < right) {
            int mid = (left + right) / 2;
            if (jobs[mid].endTime > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {

        Data[] ds = new Data[startTime.length];

        for (int i = 0; i < ds.length; i++) {
            ds[i] = new Data(startTime[i], endTime[i], profit[i]);
        }

        Arrays.sort(ds, (a, b) -> {return a.endTime - b.endTime;});

        int[] dp = new int[startTime.length + 1];

        for (int i = 1; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[binarySearch(ds, i, ds[i - 1].startTime)] + ds[i - 1].profit);
        }
        return dp[startTime.length];
    }
}
// @lc code=end

