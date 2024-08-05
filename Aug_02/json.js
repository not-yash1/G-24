
// JSON - JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It is used primarily to transmit data between a server and web application as text.


// 1. Key Features :

    // 1.1 Human-Readable: JSON's syntax is straightforward and easy to understand, making it simple to write and interpret.

    // 1.2 Language Independent: Although derived from JavaScript, JSON is language-agnostic and can be used with many programming languages.

    // 1.3 Lightweight: JSON is designed to be lightweight, making it efficient for data transmission.


// 2. Example :

// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "address": {
//       "street": "123 Main St",
//       "city": "New York",
//       "zipcode": "10001"
//     },
//     "phoneNumbers": ["123-456-7890", "098-765-4321"],
//     "hobbies": ["reading", "traveling", "coding"]
// }



// 3. JSON vs. XML - JSON and XML are both used for data interchange, but JSON is often preferred due to its simplicity and ease of use. Here’s a comparison:

    // 3.1 Readability: JSON is more readable and easier to write than XML.

    // 3.2 Data Interchange: JSON's format is more compact, making it more efficient for data interchange.

    // 3.3 Parsing: JSON is easier and faster to parse, especially in JavaScript environments.

    // 3.4 Structure: JSON is structured in a way that maps directly to data structures in many programming languages.



// 4. Using JSON in different contexts :

    // 4.1 Parsing JSON :
    const jsonString = '{"name": "John Doe", "age": 30}';
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject.name); // Output: John Doe

    // 4.2 Stringify JSON :
    const jsObject = { name: "John Doe", age: 30 };
    const jsString = JSON.stringify(jsObject);
    console.log(jsString); // Output: {"name":"John Doe","age":30}


