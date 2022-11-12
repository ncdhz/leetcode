/*
 * @lc app=leetcode.cn id=790 lang=cpp
 *
 * [790] 多米诺和托米诺平铺
 */
#include <map>
using namespace std;
// @lc code=start
class Solution {
    int max_value = 1000000007;
    map<int, int> cache;
public:
    int numTilings(int n) {
        if (n == 0) {
            return 1;
        }
        
        if (cache.count(n) > 0) {
            return cache.at(n);
        }
        
        long x = 0;
        x += numTilings(n - 1);
        if (n >= 2) {
            x += numTilings(n - 2);
        }
        
        for (size_t i = 3; i <= n; i++) {
            x += 2 * numTilings(n - i);
        }
        
        int r = (int)(x % max_value);
        
        auto pr = make_pair(n, r);

        cache.insert(pr);
        return r;
    }
};
// @lc code=end

