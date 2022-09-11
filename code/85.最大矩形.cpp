/*
 * @lc app=leetcode.cn id=85 lang=cpp
 *
 * [85] 最大矩形
 */
#include <unordered_map>
#include <vector>
#include <tuple>
using namespace std;
// @lc code=start
class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        unordered_map<int, vector<tuple<int, int>>> map;
        for (int i = 0; i < matrix.size(); i++) {
            int s = -1;
            int j = 0;
            for (; j < matrix[i].size(); j++) {
                if (matrix[i][j] == 0) {
                    if (s != -1) {
                        if (map.count(i) == 0) {
                            vector<tuple<int, int>> ve;
                            ve.push_back(make_tuple(s, j));
                            map.emplace(i, ve);
                        } else {
                            vector<tuple<int, int>> ve = map.at(i);
                            ve.push_back(make_tuple(s, j));
                        }
                        s = -1;
                    }
                } else {
                    if (s == -1) {
                        s = j;
                    }
                }
            }
            if (s != -1) {
                if (map.count(i) == 0) {
                    vector<tuple<int, int>> ve;
                    ve.push_back(make_tuple(s, j));
                    map.emplace(i, ve);
                } else {
                    vector<tuple<int, int>> ve = map.at(i);
                    ve.push_back(make_tuple(s, j));
                }
                s = -1;
            }
        }

        for (int i = 0; i < matrix.size() ; i++) {
            for (int j = i + 1; j < matrix[i].size() ; j++) {
                
            }
        }
    }
};
// @lc code=end

