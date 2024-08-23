
// 1. Importing bcrypt
import bcrypt from 'bcrypt';


// 2. Generating salt
    // 1. Asynchronously generate a salt
    const salt = await bcrypt.genSalt(10);

    // 2. Synchronously generate a salt
    const salt1 = bcrypt.genSaltSync(10);


// 3. Hashing the password
    // 1. Asynchronously hash the password
    const hash = await bcrypt.hash('secret', 10);

    // 2. Synchronously hash the password
    const hash1 = bcrypt.hashSync('secret', 10);


// 4. Explicitly hashing the password
    const salt2 = await bcrypt.genSalt(10);
    const hash2 = await bcrypt.hash('secret', salt2);


// 5. Implicitly hashing the password
    const hash3 = bcrypt.hashSync('secret', 10);


// 6. Verifying the password
    // 1. Asynchronously verify the password
    const isMatch = await bcrypt.compare('secret', hash);

    // 2. Synchronously verify the password
    const isMatch1 = bcrypt.compareSync('secret', hash);