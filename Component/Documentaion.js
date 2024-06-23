export default {
    Euclidean:`The Euclidean algorithm is named after the ancient Greek mathematician Euclid, who first described it in his book "Elements". It is an efficient method for computing the greatest common divisor (GCD) of two integers.
    
1. Identify the Two Numbers:
   - Let the two numbers be a and b, where a >= b.

2. Initial Check:
   - If b = 0, then GCD(a, b) = a. You can stop here.

3. Divide and Find the Remainder:
   - Divide a by b to find the quotient and the remainder. Mathematically, this can be expressed as:
     a = bq + r
     where q is the quotient and r is the remainder. This can also be written as:
     r = a % b

4. Update the Numbers:
   - Replace a with b and b with r.

5. Repeat the Process:
   - Repeat steps 2-4 until b becomes 0. The last non-zero remainder is the GCD of the original two numbers.

Example:
Let's find the GCD of 252 and 105 using the Euclidean algorithm.

1. Initial numbers:
   - a = 252
   - b = 105

2. First iteration:
   - 252 / 105 gives a quotient of 2 and a remainder of 42.
   - Update a = 105, b = 42.

3. Second iteration:
   - 105 / 42 gives a quotient of 2 and a remainder of 21.
   - Update a = 42, b = 21.

4. Third iteration:
   - 42 / 21 gives a quotient of 2 and a remainder of 0.
   - Update a = 21, b = 0.

5. Conclusion:
   - Since b = 0, the GCD is the last non-zero remainder, which is 21.

Therefore, the GCD of 252 and 105 is 21.
`
}