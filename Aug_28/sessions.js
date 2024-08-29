
// 1. What are sessions ?

// Sessions are server-side storage mechanisms that keep track of user-specific data as they interact with a web application. Each user is assigned a unique session ID that is stored on the server, and this ID is usually passed back and forth between the client and server via cookies.


// 2. About Sessions :

    // 2.1 Storage Location - Stored on the server, with only the session ID stored on the client (typically as a cookie).

    // 2.2 Lifetime - Sessions generally expire after a certain period of inactivity or when the user closes the browser. The lifetime can be configured on the server.

    // 2.3 Size Limit - Since sessions are stored on the server, they can hold a much larger amount of data compared to cookies.

    // 2.4 Security - More secure because the data is stored on the server. Only the session ID is passed between the client and server, reducing the risk of data exposure.

    // 2.5 Usage - Commonly used to store sensitive information like user authentication data, shopping cart items, or user preferences that need to persist throughout the user’s visit to the site.


// 3. Advantages of Sessions :

    // 3.1 Stateless: More secure, as data is stored server-side.
    // 3.2 Can handle larger amounts of data.
    // 3.3 Typically more reliable since the server manages the session data.


// 4. Drawbacks of Sessions :

    // 4.1 Requires server resources to manage sessions.
    // 4.2 Not persistent across browser sessions unless explicitly managed.