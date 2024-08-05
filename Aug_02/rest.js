
// REST API - A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications. It leverages HTTP requests to interact with web services, enabling various clients (such as web browsers, mobile apps, and servers) to communicate with a server over the internet. REST APIs are designed to be stateless, scalable, and easy to understand.


// 2. Core Principles of REST
    // 2.1 Stateless: Each request from a client to a server must contain all the information needed to understand and process the request. The server does not store any client context between requests.

    // 2.2 Client-Server Architecture: Separation of client and server concerns, allowing the client and server to evolve independently.

    // 2.3 Uniform Interface: Simplifies and decouples the architecture, which enables each part to evolve independently. This is achieved through:

        // 2.3.1 Resource Identification: Resources are identified in requests (e.g., /users/123).

        // 2.3.2 Resource Manipulation Through Representations: Clients interact with resources using representations (e.g., JSON).

        // 2.3.3 Self-Descriptive Messages: Each message includes enough information to describe how to process the message.

        // 2.3.4 Hypermedia as the Engine of Application State (HATEOAS): Clients interact with a network of resources, with actions driven by hypermedia.

    // 2.4 Cacheability: Responses must define themselves as cacheable or not to improve performance.

    // 2.5 Layered System: A client cannot ordinarily tell whether it is connected directly to the end server or an intermediary along the way.



// 3. HTTP Methods :



// 4. Benefits of REST APIs

    // 4.1 Scalability: Statelessness helps servers manage load by not storing client context between requests.

    // 4.2 Flexibility: Allows communication between different technologies and platforms.

    // 4.3 Modularity: Decouples client and server, enabling independent development and updates.

    // 4.4 Ease of Use: Utilizes standard HTTP methods, making it easy for developers to understand and use.

    // 4.5 Performance: Supports caching mechanisms to improve response times and reduce server load.



// 5. Challenges of REST APIs

    // 5.1 Over-fetching and Under-fetching: Clients may receive too much or too little data, requiring additional requests or data parsing.

    // 5.2 Statelessness: Requires each request to contain all necessary information, potentially leading to larger request sizes.

    // 5.3 Security: Requires careful implementation of authentication and authorization mechanisms to ensure data security.