import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=901 lang=java
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {

    static List<Integer> spans = new  ArrayList<>();
    static List<Integer> prices = new ArrayList<>();
    public StockSpanner() {
        spans.clear();
        prices.clear();
    }
    
    public int next(int price) {
        int i = prices.size();
        prices.add(price);
        int s = 1;
        while (i > 0 && price >= prices.get(i - 1)) {
            s += spans.get(i - 1);
            i -= spans.get(i - 1);
        }
        spans.add(s);
        return s;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
// @lc code=end

