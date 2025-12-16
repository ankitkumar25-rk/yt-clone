import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
/* 
CORS:-
a browser security mechanism that controls
how web pages from one domain can request
resources (like data or files) from a different domain
*/
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

/*
"URLencoded" (or percent-encoding) is the process of converting 
characters not allowed in URLs (like spaces, &) into a safe, 
standard format using % followed by two hexadecimal digits, 
ensuring data is transmitted correctly and safely in web addresses
and form submissions
*/

app.use(express.static("public"));

/*
express.static() function is a built-in middleware in the 
Express.js framework for Node.js that is used to serve 
static files such as images, CSS, 
and client-side JavaScript to the client. 
*/

app.use(cookieParser());
/*
Cookie Parser ek middleware hoti hai jo HTTP 
request ke cookies ko 
read (parse) karne me madad karti hai
*/

export default app;
// export {app}
