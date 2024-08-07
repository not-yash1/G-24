
// 1. HTTP Headers - HTTP headers are key-value pairs sent between the client and the server in an HTTP request or response. They provide essential information about the request or response, such as metadata, content type, caching policies, and more.


// 2. Type of Headers :
    // 2.1 General Headers
    // 2.2 Request Headers
    // 2.3 Response Headers
    // 2.4 Entity Headers




// 2.1 General Headers - General headers are applied to both requests and responses, but do not have any direct relation to the data being transferred.

// Common General Headers:

    // 2.1.1 Cache-Control: Specifies caching policies.
        // Example: Cache-Control: no-cache

    // 2.1.2 Connection: Controls options for the current connection.
        // Example: Connection: keep-alive

    // 2.1.3 Date: The date and time at which the message was sent.
        // Example: Date: Wed, 26 Jul 2023 07:28:00 GMT

    // 2.1.4 Transfer-Encoding: Specifies the form of encoding used to safely transfer the payload body.
        // Example: Transfer-Encoding: chunked

    // 2.1.5 Via: Informs about intermediate protocols and recipients.
        // Example: Via: 1.1 example.com (squid/3.5.27)




// 2.2 Request Headers - Request headers contain more information about the resource to be fetched or about the client itself.

// Common Request Headers:

    // 2.2.1 Accept: Indicates which content types the client is able to understand.
        // Example: Accept: text/html

    // 2.2.2 Authorization: Contains the credentials to authenticate a user agent with a server.
        // Example: Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l

    // 2.2.3 Host: Specifies the domain name of the server and the TCP port number.
        // Example: Host: example.com

    // 2.2.4 User-Agent: Contains information about the user agent originating the request.
        // Example: User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36

    // 2.2.5 Referer: The address of the previous web page from which a link to the currently requested page was followed.
        // Example: Referer: http://example.com/previous-page




// 2.3 Response Headers - Response headers contain additional information about the response, like its location or about the server itself.

// Common Response Headers:

    // 2.3.1 Location: Used in redirection or when a new resource has been created.
        // Example: Location: http://example.com/new-resource

    // 2.3.2 Server: Contains information about the software used by the origin server to handle the request.
        // Example: Server: Apache/2.4.1 (Unix)

    // 2.3.3 Set-Cookie: Sends cookies from the server to the user agent.
        // Example: Set-Cookie: sessionId=abc123; Path=/; HttpOnly

    // 2.3.4 WWW-Authenticate: Defines the authentication method that should be used to access a resource.
        // Example: WWW-Authenticate: Basic realm="Access to the staging site"




// 2.4 Entity Headers - Entity headers contain information about the body of the resource, like its content length or MIME type.

// Common Entity Headers:

    // 2.4.1 Content-Type: The media type of the resource.
        // Example: Content-Type: application/json

    // 2.4.2 Content-Length: The size of the body in bytes.
        // Example: Content-Length: 348

    // 2.4.3 Content-Encoding: The type of encoding used on the data.
        // Example: Content-Encoding: gzip

    // 2.4.4 Content-Language: Describes the natural language(s) of the intended audience for the enclosed content.
        // Example: Content-Language: en-US

    // 2.4.5 Content-Disposition: Provides information on how to handle the entity body, e.g., for attachment.
        // Example: Content-Disposition: attachment; filename="filename.jpg"
