
// httpMethods - HTTP methods, also known as HTTP verbs, define the type of action to be performed on the specified resource. They are a fundamental part of HTTP (Hypertext Transfer Protocol) used in RESTful APIs and web applications. Each method performs a specific action and has distinct semantics, making them critical in designing and interacting with web services.


// 1. GET

    // 1.1 Purpose: Retrieves data from a server at the specified resource.

    // 1.2 Characteristics:
        // 1.2.1 Safe: Does not alter the state of the server.
        // 1.2.2 Idempotent: Multiple identical requests have the same effect as a single request.
        // 1.2.3 Cacheable: Responses can be cached.

    // 1.3 Usage: Typically used to fetch data or query information.

    // Example usage:
        // GET /users/123 HTTP/1.1
        // Host: example.com



// 2. POST

    // 2.1 Purpose: Submits data to be processed to a specified resource, often resulting in a change of state or side effects on the server.

    // 2.2 Characteristics:
        // 2.2.1 Not Safe: Alters the state of the server.
        // 2.2.2 Not Idempotent: Multiple identical requests may result in different effects.
        // 2.2.3 Cacheable: Responses are generally not cacheable, but this can be overridden.

    // 2.3 Usage: Typically used to create a new resource or submit data for processing.

    // Example usage:

    // POST /users HTTP/1.1
    // Host: example.com
    // Content-Type: application/json

    // {
        // "name": "John Doe",
        // "email": "john.doe@example.com"
    // }



// 3. PUT

    // 3.1 Purpose: Replaces all current representations of the target resource with the request payload.

    // 3.2 Characteristics:
        // 3.2.1 Not Safe: Alters the state of the server.
        // 3.2.2 Idempotent: Multiple identical requests have the same effect as a single request.
        // 3.2.3 Cacheable: Responses are generally not cacheable.

    // 3.3 Usage: Typically used to update an existing resource or create a new resource if it does not exist.

    // Example usage:
    // PUT /users/123 HTTP/1.1
    // Host: example.com
    // Content-Type: application/json

    // {
    //   "name": "John Doe",
    //   "email": "john.doe@example.com"
    // }



// 4. DELETE

    // 4.1 Purpose: Deletes the specified resource.

    // 4.2 Characteristics:
        // 4.2.1 Not Safe: Alters the state of the server.
        // 4.2.2 Idempotent: Multiple identical requests have the same effect as a single request.
        // 4.2.3 Not Cacheable: Responses are generally not cacheable.

    // 4.3 Usage: Typically used to delete a resource.

    // Example usage:
    // DELETE /users/123 HTTP/1.1
    // Host: example.com



// 5. PATCH

    // 5.1 Purpose: Applies partial modifications to a resource.

    // 5.2 Characteristics:
        // 5.2.1 Not Safe: Alters the state of the server.
        // 5.2.2 Not Idempotent: Multiple identical requests may result in different effects.
        // 5.2.3 Not Cacheable: Responses are generally not cacheable.

    // 5.3 Usage: Typically used to update a part of an existing resource.