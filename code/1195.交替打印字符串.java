/*
 * @lc app=leetcode.cn id=1195 lang=java
 *
 * [1195] 交替打印字符串
 */

// @lc code=start
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

class FizzBuzz {
    private int n;
    private volatile int index;

    public FizzBuzz(int n) {
        this.n = n;
        this.index = 1;
    }
    private final ReentrantLock rLock = new ReentrantLock();
    private final Condition  condition = rLock.newCondition();

    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 != 0) {
                printFizz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }

    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 == 0) {
                printBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }

    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 == 0) {
                printFizzBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }

    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 != 0) {
                printNumber.accept(this.index);
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
}
// @lc code=end

