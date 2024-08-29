
// 1. What is JWT ?

// JWT (JSON Web Token) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. The information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC) or a public/private key pair using RSA or ECDSA.


// 2. Key Concepts of JWT :

    // 2.1 Compact: JWTs are compact in size, making them easy to send via URLs, POST parameters, or inside HTTP headers. This makes them suitable for use in single-page applications and mobile apps.

    // 2.2 Self-Contained: JWTs contain all the necessary information about the user or other payloads within the token itself. This means that the token can be used to validate a user's identity or carry information without needing to query the database again.

    // 2.3 Security: JWTs can be signed and optionally encrypted. The signing process ensures that the token cannot be altered by anyone who doesn’t possess the secret key or private key, depending on the signing method. The encryption process ensures that the token cannot be read by anyone who doesn’t have the private key.


// 3. Structure of JWT :

    xxxxx.yyyyy.zzzzz


// 4. Components of JWT :

    // 4.1 Header:

        // 4.1.1 Algorithm: Specifies the signing algorithm (e.g., HMAC SHA256, RSA).

        // 4.1.2 Type: Typically set to "JWT".

        // 4.1.3 Example :

            // {
            //     "alg": "HS256",
            //     "typ": "JWT"
            // }


    // 4.2 Payload: The payload contains the claims, which are statements about an entity (typically, the user) and additional metadata. There are three types of claims:

        // 4.2.1 Registered claims: Predefined claims like iss (issuer), exp (expiration time), sub (subject), and aud (audience).

        // 4.2.2 Public claims: Custom claims that you can define, like username or role.

        // 4.2.3 Private claims: Custom claims created to share information between parties that agree on using them.

        // 4.2.4 Example :

            // {
            //     "sub": "1234567890",
            //     "name": "John Doe",
            //     "admin": true
            // }


    // 4.3 Signature : To create the signature, you take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, then sign that.

    // Example :

    HMACSHA256(
        base64UrlEncode(header) + "." + base64UrlEncode(payload),
        secret
    )



// 5. How JWT works ?

    // 5.1 User Authentication:

        // When a user logs in, the server validates their credentials (e.g., username and password).
        
        // If the credentials are valid, the server generates a JWT that includes the user’s details and other claims. The token is signed using a secret key.


    // 5.2 Token Storage:

        // The generated JWT is then sent back to the user. The user typically stores this token in their browser’s local storage or a cookie.


    // 5.3 Authorization:

        // 5.3.1 For each subsequent request to the server, the user includes the JWT in the HTTP header (usually under Authorization: Bearer <token>).

        // 5.3.2 The server receives the request and extracts the JWT from the header. The server then verifies the token’s signature and checks its expiration time.

        // 5.3.3 If the token is valid, the server processes the request; otherwise, it returns an error (e.g., 401 Unauthorized).
      


// 6. Advantages of JWT

    // 6.1 Stateless: JWTs are self-contained, so the server does not need to store session information or query a database on each request.

    // 6.2 Scalability: Since JWTs are stateless, they can easily scale across multiple servers or microservices without requiring session management.

    // 6.3 Security: JWTs can be signed and optionally encrypted, ensuring that the data is secure and has not been tampered with.

    // 6.4 Interoperability: JWTs are language-agnostic and can be used across different platforms, making them ideal for distributed systems.



// 7. Drawbacks of JWT

    // 7.1 Size: JWTs can become large if they include a lot of claims, leading to increased bandwidth usage.

    // 7.2 Irrevocability: Once issued, a JWT cannot be easily revoked. This means that if a JWT is compromised, it remains valid until it expires.

    // 7.3 Exposure: If the JWT is stored insecurely (e.g., in local storage), it can be stolen and misused.



// 8. Example Usage of JWT :

    // 8.1.1 Generating JWTs :
    const jwt = require('jsonwebtoken');

    const secret = "adkdksdwhwdgwudhiwdjwkdmkwd"

    const user = {
        id: 1,
        username: "johndoe",
        admin: true
    };

    const token = jwt.sign(user, secret, { expiresIn: '1h' });

    console.log(token);


    // 8.1.2 Verifying JWTs with a secret key :
    jwt.verify(token, 'your-256-bit-secret', (err, decoded) => {
        if (err) {
          console.log('Token is not valid');
        } else {
          console.log(decoded);
        }
    });
      






// res.setHeader("Set-Cookie", `token=${token}; Path=/; Expires=${new Date(Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000)}; HttpOnly; SameSite=None; Secure`);