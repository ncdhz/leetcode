/*
 * @lc app=leetcode.cn id=115 lang=cpp
 *
 * [115] 不同的子序列
 */
class Solution {
private:
    unordered_map<string, int> cache;
public:
    int nd(string s, string t, int i, int j) {
        if (j == t.length()) {
            return 1;
        }
        
        int sum = 0;
        for (size_t k = i; k < s.length() - t.length() + j + 1; k++)
        {
            if (s.at(k) == t.at(j)) {
                string ss = s.substr(k, s.length()) + "-" + t.substr(j, t.length());
                if (cache.count(ss) > 0) {
                    sum += cache[ss];
                    continue;   
                }
                int n = nd(s, t, k + 1, j + 1);
                cache.emplace(ss, n);
                sum += n;
            }
        }
        return sum;
    }
    int numDistinct(string s, string t) {
        cache.clear();
        return nd(s, t, 0, 0);
    }
};
// @lc code=end

