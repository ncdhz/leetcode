#include <string>
#include <algorithm>
using namespace std;
/*
 * @lc app=leetcode.cn id=1668 lang=cpp
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
class Solution {
public:
    int maxRepeating(string sequence, string word) {
        if (sequence.size() < word.size()) {
            return 0;
        }
        int rM = 0;
        int r = 0;
        
        for (int k = 0; k < sequence.size() - word.size() + 1; k++){
            for (int i = k; i < sequence.size() - word.size() + 1; i++) {
                bool isS = true;
                for (int j = 0; j < word.size(); j++) {
                    if (sequence[i + j] != word[j]) {
                        isS = false;
                        break;
                    }
                }
                if (isS) {
                    r++;
                    i += word.size() - 1;
                } else {
                    break;
                }
            }
            rM = max(rM, r);
            r = 0;
        }
        return rM;
    }
};
// @lc code=end

