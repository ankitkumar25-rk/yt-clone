//

// statusCode

// API mein status code < 400 ka matlab hota hai ki request successful hai ya properly handled hui hai
// 👉 Inhe non-error responses kehte hain.

// Status code < 400 = Error nahi hai
// Status code ≥ 400 = Error hai

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}
