function sumFourDivisors(nums: number[]): number {
    let totalSum = 0;

    for (const num of nums) {
        let divisorsSum = 0;
        let divisorsCount = 0;

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                const pair = num / i;

                divisorsSum += i;
                divisorsCount++;

                if (pair !== i) {
                    divisorsSum += pair;
                    divisorsCount++;
                }

                if (divisorsCount > 4) break;
            }
        }

        if (divisorsCount === 4) {
            totalSum += divisorsSum;
        }
    }

    return totalSum;
}


/*
INTUITION BEHIND THE SOLUTION

We are asked to sum the divisors of numbers that have exactly four divisors.

A number has exactly four divisors only if:
1) It is of the form p³ where p is a prime
   → divisors: {1, p, p², p³}
OR
2) It is of the form p × q where p and q are distinct primes
   → divisors: {1, p, q, p×q}

Instead of factoring the number explicitly, we iterate through all possible
divisors up to √num.

For every divisor i:
- If i divides num, then num / i is also a divisor.
- We add both to the sum and increase the divisor count.

We stop early if the divisor count exceeds 4,
because such numbers are invalid for this problem.

If after the loop the divisor count is exactly 4,
we add its divisor sum to the final answer.

This avoids unnecessary work and ensures efficiency.
*/
