import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=401 lang=java
 *
 * [401] 二进制手表
 */

// @lc code=start
class Solution {
    public int[] hours = {1, 2, 4, 8};
    public int[] minutes = {1, 2, 4, 8, 16, 32};

    public void getHours(int s, int num, int sum, List<String> hour_list) {
        
        if (num == 0) {
            if (sum < 12)
                hour_list.add(sum + "");
            return;
        }

        for (int i = s; i < this.hours.length - num + 1; i++) {
            getHours(i + 1, num - 1, sum + this.hours[i], hour_list);    
        }
    }
    
    public List<String> getHours(int num) {
        List<String> hour_list = new ArrayList<>();
        getHours(0, num, 0, hour_list);
        return hour_list;
    }

    public void getMinutes(int s, int num, int sum, List<String> minute_list) {
        if(num == 0) {
            if (sum < 60)
                minute_list.add(sum < 10 ? "0"+sum : "" + sum);
            return;
        }

        for (int i = s; i < this.minutes.length - num + 1; i++) {
           getMinutes(i + 1, num - 1, sum + this.minutes[i], minute_list); 
        }
    }

    public List<String> getMinutes(int num) {
        List<String> minute_list = new ArrayList<>();
        getMinutes(0, num, 0, minute_list);
        return minute_list;
    }

    public List<String> readBinaryWatch(int turnedOn) {
        List<String> results = new ArrayList<>();
        if (turnedOn > 8) {
            return results;
        }

        for (int i = 0; i < 4 && i <= turnedOn; i++) {
            List<String> hours = getHours(i);
            List<String> minutes = getMinutes(turnedOn - i);
            for (String hour : hours) {
                for (String minute : minutes) {
                    results.add(hour + ':' + minute);
                }
            }
        }
        return results;
    }
}
// @lc code=end

