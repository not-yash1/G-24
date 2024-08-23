
// 1. What is Password Hashing?

// Password hashing is a process used to securely store passwords in databases by converting the plain text password into a fixed-length string of characters, which is unique to the password provided. Hashing ensures that even if someone gains unauthorized access to the database, they won't be able to easily retrieve the original passwords.


// 2. Why Hash Passwords?

    // 2.1 Security: Storing plain text passwords is dangerous because if the database is compromised, all user passwords can be exposed.

    // 2.2 One-way Process: Hashing is a one-way process, meaning the original password cannot be retrieved from the hash.

    // 2.3 Consistency: The same input will always produce the same hash, allowing the system to verify the password during login.

    // 2.4 Prevention of Brute-force Attacks: By using hashing combined with salts (random data), it becomes computationally infeasible to crack passwords using brute-force attacks.


// 3. Salting : Salt is a random string added to the password before hashing. This ensures that even if two users have the same password, their hashed passwords will be different. Salting is crucial for preventing rainbow table attacks, where precomputed hash tables for common passwords are used to crack passwords.


// 4. Common Hashing Algorithms

    // 1. SHA-256: A popular cryptographic hash function that produces a 256-bit hash value.

    // 2. bcrypt: A hashing function designed specifically for hashing passwords. It is computationally expensive, making it resistant to brute-force attacks.
    
    // 3. argon2: Another strong password hashing function that is highly resistant to attacks.