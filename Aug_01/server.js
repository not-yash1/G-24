
import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {
    const URL = url.parse(req.url, true);
    if(URL.pathname === '/'){
        res.write("Home Page")
    } else if(URL.pathname === '/about'){
        res.write("About Page")
    } else if(URL.pathname === '/contact'){
        res.write("Contact Page")
    } else {
        res.write("Page Not Found")
    }
    res.end("\n End");
});

const PORT = 4002;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

