
// 1. Authentication - Authentication is the process of verifying the identity of a user or entity before granting access to a system or service. It is a crucial aspect of any application, ensuring that only authorized users can access certain resources. Authentication is typically followed by authorization, which determines what an authenticated user is allowed to do.

// 2. Types of Authentication - 

    // 2.1 Basic Authentication:

        // 2.1.1 Users provide a username and password, which are checked against stored credentials.

        // 2.1.2 Simple but less secure if not implemented over HTTPS.

        // 2.1.3 Common in web applications, especially in RESTful APIs.


    // 2.2 Token-Based Authentication:

        // 2.2.1 Common in modern web applications, particularly in RESTful APIs.

        // 2.2.2 A user logs in with their credentials, and the server generates a token (usually a JSON Web Token - JWT).

        // 2.2.3 The token is sent with subsequent requests to verify the user's identity.


    // 2.3 OAuth:

        // 2.3.1 A more complex system often used for single sign-on (SSO).

        // 2.3.1 Users authenticate through a third-party provider (e.g., Google, Facebook).

        // 2.3.1 The third-party provider issues a token that the application uses to authenticate the user.


    // 2.4 Multi-Factor Authentication (MFA):

        // 2.4.1 Involves two or more authentication factors, such as a password and a verification code sent to a mobile device.
        
        // 2.4.2 Increases security by requiring multiple proofs of identity.


    // 2.5 Session-Based Authentication:

        // 2.5.1 The server creates a session for a user upon successful login.

        // 2.5.1 A session ID is stored in a cookie and sent with each request.