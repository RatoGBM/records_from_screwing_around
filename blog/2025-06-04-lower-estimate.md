# Lower Estimate for Password Strength

`number_of_unique_characters ^ password_length`

<!-- truncate -->

I reasonable lower estimate for password strength is to assume only the characters being used are being used. This eliminates the mistake some password strength estimates might be making, in assuming the characters of a password are picked from a larger subset.

Curiously, applying the same equation to the binary version of the same password, will instead produce an upper estimate.

Using logarithms to measure password strength is also great, because estimates tend to be off by zeros, and logarthims are more clear about that.
