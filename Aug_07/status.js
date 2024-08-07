
// Status Codes - HTTP status codes are three-digit responses issued by a server in response to a client's request made to the server. These codes are part of the HTTP/1.1 standard and are categorized into five classes based on the first digit of the code:

    // 1xx: Informational – Request received, continuing process

    // 2xx: Success – The action was successfully received, understood, and accepted

    // 3xx: Redirection – Further action must be taken to complete the request

    // 4xx: Client Error – The request contains bad syntax or cannot be fulfilled

    // 5xx: Server Error – The server failed to fulfill an apparently valid request



// 1. 1xx - Informational : These status codes indicate a provisional response, consisting only of the Status-Line and optional headers, and are terminated by an empty line. There are no required headers for this class.

    // 1.1 100 Continue: The client should continue with its request. 
        // Example: HTTP/1.1 100 Continue

    // 1.2 101 Switching Protocols: The server is switching protocols as requested by the client. 
        // Example: HTTP/1.1 101 Switching Protocols



// 2. 2xx - Success : This class of status codes indicates that the client's request was successfully received, understood, and accepted.

    // 2.1 200 OK: The request has succeeded. 
        // Example: 
            // HTTP/1.1 200 OK
            // Content-Type: text/html
            
            // <html>
            // <body>
            //   <h1>Hello, world!</h1>
            // </body>
            // </html>

    // 2.2 201 Created: The request has been fulfilled and has resulted in one or more new resources being created. 
        // Example:
            // HTTP/1.1 201 Created
            // Location: http://example.com/new-resource

    // 2.3 202 Accepted: The request has been accepted for processing, but the processing has not been completed. 
        // Example: HTTP/1.1 202 Accepted

    // 2.4 203 Non-Authoritative Information: The server successfully processed the request, but is returning information that may be from another source.
        // Example: HTTP/1.1 203 Non-Authoritative Information

    // 2.5 204 No Content: The server successfully processed the request, but is not returning any content. 
        // Example: HTTP/1.1 204 No Content



// 3. 3xx - Redirection : This class of status codes indicates that further action needs to be taken by the user agent in order to fulfill the request.

    // 3.1 300 Multiple Choices: Indicates multiple options for the resource that the client may follow. 
        // Example: HTTP/1.1 300 Multiple Choices

    // 3.2 301 Moved Permanently: This and all future requests should be directed to the given URI.
        // Example: HTTP/1.1 301 Moved Permanently

    // 3.3 302 Found: The resource requested has been temporarily moved to another URI. 
        // Example: HTTP/1.1 302 Found

    // 3.4 303 See Other: The response to the request can be found under another URI.
        // Example: HTTP/1.1 303 See Other

    // 3.5 304 Not Modified: Indicates that the resource has not been modified since last requested. 
        // Example: HTTP/1.1 304 Not Modified

    // 3.6 305 Use Proxy: The requested resource must be accessed through the proxy specified by the Location field. 
        // Example: HTTP/1.1 305 Use Proxy

    // 3.7 307 Temporary Redirect: The request should be repeated with another URI. 
        // Example: HTTP/1.1 307 Temporary Redirect



// 4. 4xx - Client Error : These status codes indicate that the client's request was invalid.

    // 4.1 400 Bad Request: The request cannot be fulfilled due to bad syntax. 
        // Example: HTTP/1.1 400 Bad Request
    
    // 4.2 401 Unauthorized: The request was a valid request, but the server is refusing to respond to it. 
        // Example: HTTP/1.1 401 Unauthorized
    
    // 4.3 402 Payment Required: Reserved for future use.
        // Example: HTTP/1.1 402 Payment Required

    // 4.4 403 Forbidden: The request was a valid request, but the server is refusing to respond to it. 
        // Example: HTTP/1.1 403 Forbidden

    // 4.5 404 Not Found: The requested resource could not be found but may be available again in the future. 
        // Example: HTTP/1.1 404 Not Found

    // 4.6 405 Method Not Allowed: The request method is known by the server but has been disabled and cannot be used. 
        // Example: HTTP/1.1 405 Method Not Allowed

    // 4.7 406 Not Acceptable: The resource identified by the request is only capable of generating content not acceptable according to the Accept headers sent in the request. 
        // Example: HTTP/1.1 406 Not Acceptable

    // 4.8 407 Proxy Authentication Required: The client must first authenticate itself with the proxy. 
        // Example: HTTP/1.1 407 Proxy Authentication Required

    // 4.9 408 Request Timeout: The server timed out waiting for the request. 
        // Example: HTTP/1.1 408 Request Timeout

    // 4.10 409 Conflict: Indicates that the request could not be processed because of conflict in the request. 
        // Example: HTTP/1.1 409 Conflict

    // 4.11 410 Gone: Indicates that the resource requested is no longer available and will not be available again. 
        // Example: HTTP/1.1 410 Gone

    // 4.12 411 Length Required: The request did not specify the length of its content, which is required by the requested resource. 
        // Example: HTTP/1.1 411 Length Required

    

// 5. 5xx - Server Error : These status codes indicate that the server failed to fulfill an apparently valid request.

    // 5.1 500 Internal Server Error: A generic error message, given when no more specific message is suitable. 
        // Example: HTTP/1.1 500 Internal Server Error

    // 5.2 501 Not Implemented: The server either does not recognize the request method, or it lacks the ability to fulfill the request. 
        // Example: HTTP/1.1 501 Not Implemented

    // 5.3 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
        // Example: HTTP/1.1 502 Bad Gateway

    // 5.4 503 Service Unavailable: The server is currently unavailable (because it is overloaded or down for maintenance). 
        // Example: HTTP/1.1 503 Service Unavailable

    // 5.5 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server. 
        // Example: HTTP/1.1 504 Gateway Timeout

        
