### **1. Deep Understanding of Objects and Prototypes (60 minutes)**

**Task:**  
Implement a `Book` constructor function with properties:
- `title`
- `author`
- `pages`
- `read` (boolean)

Add methods on the prototype:
- `toggleReadStatus()`: Toggle the `read` status of the book.
- `getBookInfo()`: Returns a formatted string with book details in this format:  
  `"The book [title] by [author] has [pages] pages. Status: [Read/Not Read]"`.

**Bonus Task:**  
Convert the `Book` constructor to an ES6 `class` with the same functionality.

---

### **2. Handling Promises and Callbacks (60 minutes)**

**Task:**  
Create two functions:  
- `fetchUserData(callback)` - Uses a callback pattern and after a 2-second delay returns user data: `{ name: 'Alice', age: 30, city: 'New York' }`.
- `fetchOrderData(callback)` - After a 2-second delay returns order data: `{ orderId: '5678', amount: 1500, product: 'Smartphone' }`.

Then, write a `main` function that calls both `fetchUserData` and `fetchOrderData` using callbacks, ensuring that the order data is fetched only after the user data is successfully retrieved.

**Bonus Task:**  
Rewrite this solution using **Promises** and `.then()/.catch()` to handle the asynchronous logic.

---

### **3. Advanced Asynchronous Handling: Async/Await and Error Handling (60 minutes)**

**Task:**  
Write two functions using `async/await` to:
- `getUser()`: After a 2-second delay, resolves a promise with user data (`{ name: 'John', email: 'john@example.com' }`).
- `getOrder()`: After a 3-second delay, resolves a promise with order data (`{ orderId: '7890', total: 3000 }`).

Then write a function `processData()` that:
- Fetches user and order data concurrently using `Promise.all()`.
- Logs the data if successful.
- Catches any errors if the promises are rejected.

**Bonus Task:**  
Modify the `getUser()` function to sometimes throw an error (e.g., based on a random condition) and ensure that the error is handled properly using `try/catch` in `processData()`.

---

### **4. Optional Chaining and Conditional Branching (45 minutes)**

**Task:**  
Write a function `getUserDetails(user)` that:
- Takes a `user` object with properties `name`, `age`, and `address` (optional, might be missing).
- Uses **optional chaining** to safely access `user.address.city` and return `"City not available"` if the city is missing.
- Uses a **ternary operator** to return `"Adult"` if `user.age` is 18 or older, otherwise `"Minor"`.

Example Input:
```javascript
const user = { name: 'Jane', age: 17, address: { city: 'Los Angeles' } };
```

Expected Output:
```plaintext
Minor from Los Angeles
```

Modify the object to simulate cases where `address` or `city` is missing and test that optional chaining works as expected.

---

### **5. Object.keys, Object.values, Object.entries (45 minutes)**

**Task:**  
You are given the following object:

```javascript
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  owner: { name: 'John', age: 35 }
};
```

- Write a function `logCarProperties(car)` that:
  - Uses **`Object.keys()`** to log all property names of the car.
  - Uses **`Object.values()`** to log all property values of the car.
  - Uses **`Object.entries()`** to log key-value pairs of the car object.

**Bonus Task:**  
Use a `for...of` loop to iterate over the results of `Object.entries()` and print each key-value pair in the format:  
`"[key]: [value]"`

---

### **6. JSON and Data Manipulation (45 minutes)**

**Task:**  
Write a function `transformData()` that:
- Takes an object like this:  

```javascript
const data = {
  productId: 123,
  productName: 'Laptop',
  price: 1000,
  availability: true,
};
```

- Uses `JSON.stringify()` to convert the object into a JSON string.
- Uses `JSON.parse()` to convert the JSON string back to an object.
- Modifies the returned object by adding a new property `discountedPrice`, which is 10% lower than the original price.
- Returns the final object.

---

### **7. Combining it All: Complex Data Manipulation and API Simulation (75 minutes)**

**Scenario:**  
You're building a simple **user-order management system** that simulates data fetching from an API and processes it in various ways.

**Task:**  
- Create two mock API calls:
  - `getUserData()`: Returns a user object: `{ name: 'Alice', age: 25, address: { city: 'Seattle' } }`.
  - `getOrderData()`: Returns an order object: `{ orderId: 'ORD123', total: 200, product: { name: 'Phone', price: 200 } }`.
  
- Write a function `fetchAndProcessData()` that:
  - Fetches user data and order data concurrently using `Promise.all()`.
  - Uses **optional chaining** to check if the `user.address.city` and `order.product.price` are available.
  - Uses **`Object.keys()`, `Object.values()`, and `Object.entries()`** to log details of the user and order.
  - Converts both objects into JSON format using `JSON.stringify()` and logs the result.
  - Adds error handling with `try/catch` to log any errors if the promises fail.
