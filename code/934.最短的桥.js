/*
 * @lc app=leetcode.cn id=934 lang=javascript
 *
 * [934] 最短的桥
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 1) {
                continue;
            }
            ns = []
            // 深度遍历找全第一个岛的所有节点
            function dfs(x, y) {
                if (0 <= x && 0 <= y && x < grid.length && y < grid[0].length) {
                    if (grid[x][y] == 1) {
                        ns.push([x, y])
                        grid[x][y] = -1
                    } else {
                        return
                    }
                    for (let a of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
                        dfs(a[0], a[1])
                    }
                } 
            }
            dfs(i, j)

            // 一圈圈向小岛外查询
            let step = 0
            while (true) {
                let tmp = ns
                ns = []
                for (let a of tmp) {
                    let x = a[0]
                    let y = a[1]
                    for (let aa of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
                        if (0 <= aa[0] && 0 <= aa[1] && aa[0] < grid.length && aa[1] < grid[0].length) {
                            if (grid[aa[0]][aa[1]] === 1) {
                                return step
                            } else if (grid[aa[0]][aa[1]] === 0) {
                                ns.push(aa)
                                grid[aa[0]][aa[1]] = -1
                            }
                        }
                    }
                }
                step++
            }
        }
    }
};
// @lc code=end