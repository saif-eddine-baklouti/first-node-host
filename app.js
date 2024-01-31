// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const http = require("http");
const dotenv = require("dotenv");
const fs = require("fs");

//AU DEBUT DU FICHIER
dotenv.config();

const server = http.createServer((request, response) => {
    if (request.method == "GET" && request.url == "/") {
        const file = fs.readFileSync("./public/index.html", "utf-8");

        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        console.log("allo");
        response.end(file);
    } else {
        const file = fs.readFileSync("./public/404.html", "utf-8");

        response.setHeader("Content-Type", "text/html");
        response.statusCode = 404;

        response.end(file);
    }
});

server.listen(process.env.PORT, () => {
    console.log("Le serveur a démarré");
});

// console.log('yes');