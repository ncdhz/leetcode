/*
 * @lc app=leetcode.cn id=204 lang=cpp
 *
 * [204] 计数质数
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int countPrimes(int n) {
        vector<int> prime;
        vector<int> isPrime(n, 1);
        for (size_t i = 2; i < n; i++) {
            if (isPrime[i]) {
                prime.push_back(i);
            }
            for (size_t j = 0; j < prime.size() && i * prime[j] < n; j++) {
                isPrime[i * prime[j]] = 0;
                if (i % prime[j] == 0) {
                    break;
                }
            }
        }
        return prime.size();
    }
};
// @lc code=end

