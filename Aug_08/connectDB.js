
// Connecting DB -


// 1. Installing MongoDB Compass
// 2. Creating MongoDB Atlas Account
// 3. Creating MongoDB Cluster
// 4. Creating MongoDB Database
// 5. Creating MongoDB Collection
// 6. Creating MongoDB Document
// 7. Creating MongoDB Index
// 8. Creating MongoDB User
// 9. Connecting MongoDB Cluster


// DB_URI = "mongodb+srv://<username>:<password>@mern-projects.pn3jint.mongodb.net/<DB_NAME>?retryWrites=true&w=majority";


// 1. Components of URI -

// 1.1 Scheme: mongodb+srv://

    // 1.1.1 mongodb+srv: Indicates that the connection string uses the DNS Seedlist Connection Format. This is used for connecting to a MongoDB Atlas cluster.


// 1.2 Credentials: <username>:<password>

    // 1.2.1 <username>: The username for authentication.
    // 1.2.2 <password>: The password for the specified user.
    // 1.2.3 These credentials must be URL-encoded if they contain special characters.


// 1.3 Host: mern-projects.pn3jint.mongodb.net

    // 1.3.1 mern-projects: This is the subdomain specific to your project.
    // 1.3.2 pn3jint.mongodb.net: This is the domain provided by MongoDB Atlas.
    
    
// 1.4 Database Name: <DB_NAME>

    // 1.4.1 <DB_NAME>: The name of the database you want to connect to.


// 1.5 Options: ?retryWrites=true&w=majority

    // 1.5.1 retryWrites=true: This option enables retryable writes, which means that certain write operations will be retried once if they fail due to transient errors.

    // 1.5.2 w=majority: This option sets the write concern to "majority", ensuring that the write operation is acknowledged by the majority of the nodes in the replica set.