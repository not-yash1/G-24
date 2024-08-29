
// Comparsison b/w sessions and cookies :

    // 1. Persistence - Cookies can persist across multiple sessions if set with a long expiration date. Sessions, by default, do not persist across browser restarts unless configured to do so (e.g., using "remember me" functionality).

    // 2. Security - Sessions are generally more secure since the data is stored on the server and only the session ID is exposed to the client. Cookies can be easily accessed and modified by the client, making them less secure for sensitive data.

    // 3. Data Storage - Cookies are limited to around 4KB of data, while sessions can store much larger amounts of data since they reside on the server.

    // 4. Use Cases:

        // 4.1 Cookies: Remembering user preferences, tracking user behavior, storing non-sensitive data.

        // 4.2 Sessions: Managing user authentication, storing sensitive information, handling temporary data that should not be accessible after the session ends.

    // 5. Example Scenario:

        // Imagine an online shopping website:

        // Cookies: Could be used to remember the user’s language preference or items in their shopping cart if they haven’t logged in.

        // Sessions: Would be used to keep the user logged in after they sign in, manage the contents of their shopping cart securely, and ensure that their data is protected on the server.





