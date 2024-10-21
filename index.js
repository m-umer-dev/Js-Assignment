// **Task:**
// Implement a `Book` constructor function with properties:
// - `title`
// - `author`
// - `pages`
// - `read` (boolean)

// Add methods on the prototype:
// - `toggleReadStatus()`: Toggle the `read` status of the book.
// - `getBookInfo()`: Returns a formatted string with book details in this format:
//   `"The book [title] by [author] has [pages] pages. Status: [Read/Not Read]"`.

// **Bonus Task:**
// Convert the `Book` constructor to an ES6 `class` with the same functionality.

/*function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

Book.prototype.getBookInfo = function () {
  const readStatus = this.read ? "Read" : "Not Read";
  return `The book ${this.title} by ${this.author} has ${this.pages}. Status: ${readStatus}`;
};

const myBook = new Book("The Life Style", "Muhammad Umer", 59, false);

console.log(myBook.getBookInfo());
console.log(myBook.getBookInfo()); */

//Book constructor to an 'ES6' class

/*class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleReadStatus(){
    this.read = !this.read;
  }

  
  getBookInfo() {
    const readStatus = this.read ? "Read" : "Not Read";
    return `The book "${this.title}" by ${this.author} has ${this.pages} pages. Status: ${readStatus}.`;
  }
}

const myBook = new Book("The Life Style", "Muhammad Umer", 59, false);

console.log(myBook.getBookInfo()); 
myBook.toggleReadStatus();
console.log(myBook.getBookInfo());  */

// ### **2. Handling Promises and Callbacks (60 minutes)**

// **Task:**
// Create two functions:
// - `fetchUserData(callback)` - Uses a callback pattern and after a 2-second delay returns user data: `{ name: 'Alice', age: 30, city: 'New York' }`.
// - `fetchOrderData(callback)` - After a 2-second delay returns order data: `{ orderId: '5678', amount: 1500, product: 'Smartphone' }`.

// Then, write a `main` function that calls both `fetchUserData` and `fetchOrderData` using callbacks, ensuring that the order data is fetched only after the user data is successfully retrieved.

// **Bonus Task:**
// Rewrite this solution using **Promises** and `.then()/.catch()` to handle the asynchronous logic.

/*function fetchUserData(callback) {
  setTimeout(() => {
    const userData = { name: "Alice", age: 30, city: "New York" };
    callback(null, userData);
  }, 2000);
}

function fetchOrderData(callback) {
  setTimeout(() => {
    const orderData = { orderId: "5678", amount: 1500, product: "Smartphone" };
    callback(null, orderData);
  }, 2000);
} */

// Main function that fetches user data first, then order data
/*function main() {
  fetchUserData((userError, userData) => {
    if (userError) {
      console.log("Error fetching user data:", userError);
    } else {
      console.log("User Data:", userData);

      // Fetch order data after user data is retrieved
      fetchOrderData((orderError, orderData) => {
        if (orderError) {
          console.log("Error fetching order data:", orderError);
        } else {
          console.log("Order Data:", orderData);
        }
      });
    }
  });
}

main(); */

// **Bonus Task:**
// Rewrite this solution using **Promises** and `.then()/.catch()` to handle the asynchronous logic.

/*function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: "Alice", age: 30, city: "New York" };
      resolve(userData);
    }, 2000);
  });
}

function fetchOrderData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderData = {
        orderId: "5678",
        amount: 1500,
        product: "Smartphone",
      };
      resolve(orderData);
    }, 2000);
  });
}

function main(){
  fetchUserData().then(userData =>{
    console.log('User Data is:' , userData);
    return fetchOrderData();
  }).then (orderData =>{
    console.log('Order Dta is: ',orderData);
  }).catch(err => {
    console.error('Error:', err);
  });
}

main(); */

/* ### **3. Advanced Asynchronous Handling: Async/Await and Error Handling (60 minutes)**

**Task:**  
Write two functions using `async/await` to:
- `getUser()`: After a 2-second delay, resolves a promise with user data (`{ name: 'John', email: 'john@example.com' }`).
- `getOrder()`: After a 3-second delay, resolves a promise with order data (`{ orderId: '7890', total: 3000 }`).

Then write a function `processData()` that:
- Fetches user and order data concurrently using `Promise.all()`.
- Logs the data if successful.
- Catches any errors if the promises are rejected.

**Bonus Task:**  
Modify the `getUser()` function to sometimes throw an error (e.g., based on a random condition) 
and ensure that the error is handled properly using `try/catch` in `processData()`. */

/* async function getUser() {

  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      const userData = {name: 'John', email: 'john@example.com'};
      resolve(userData)
    },2000)
  })

}

async function getOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: '7890', total: 3000 });
    }, 3000);
  });
}


async function dataProcess(){

  try{
    const [userData,orderData] = await Promise.all([getUser(),getOrder()])
    console.log('User Data:', userData);
    console.log('Order Data:', orderData);
  } catch (error) {
    console.error('Error:', error);
  }
  
}

dataProcess(); */

//**Bonus Task:**
// Modify the `getUser()` function to sometimes throw an error (e.g., based on a random condition)
// and ensure that the error is handled properly using `try/catch` in `processData()`.

// Modified function to get user data with a random error throw
/* async function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomCondition = Math.random() < 0.5; 
      if (randomCondition) {
        reject('Failed to fetch user data!'); 
      } else {
        resolve({ name: 'John', email: 'john@example.com' });
      }
    }, 2000);
  });
}

async function getOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: '7890', total: 3000 });
    }, 3000);
  });
}

async function processData() {
  try {
    const [userData, orderData] = await Promise.all([getUser(), getOrder()]);

    // Log the retrieved data
    console.log('User Data:', userData);
    console.log('Order Data:', orderData);
  } catch (error) {
    // Catch any error and log it
    console.error('Error:', error);
  }
}

processData(); */

/* ### **4. Optional Chaining and Conditional Branching (45 minutes)**

**Task:**  
Write a function `getUserDetails(user)` that:
- Takes a `user` object with properties `name`, `age`, and `address` (optional, might be missing).
- Uses **optional chaining** to safely access `user.address.city` and return `"City not available"` 
if the city is missing.
- Uses a **ternary operator** to return `"Adult"` if `user.age` is 18 or older, otherwise `"Minor"`.

Example Input:
```javascript
const user = { name: 'Jane', age: 17, address: { city: 'Los Angeles' } };
```

Expected Output:
```plaintext
Minor from Los Angeles
```

Modify the object to simulate cases where `address` or `city` is missing and test that optional 
chaining works as expected.*/

/*function getUserDetails(user){
  const city = user.address?.city ? user.address.city : 'City not available';

  const ageStatus = user.age >= 18 ? 'Adult' : 'Minor';

  return `${ageStatus} from ${city}`;
} */

// Example 1: User with an address and city
// const user1 = { name: 'Jane', age: 17, address: { city: 'Los Angeles' } };
// console.log(getUserDetails(user1));
// Expected Output: "Minor from Los Angeles"

// Example 2: User with missing address
// const user2 = { name: 'John', age: 25 };
// console.log(getUserDetails(user2));
// Expected Output: "Adult from City not available"

// Example 3: User with address but no city
// const user3 = { name: 'Alex', age: 20, address: {} };
// console.log(getUserDetails(user3));
// Expected Output: "Adult from City not available"

// Example 4: User who is a minor and has no address
// const user4 = { name: 'Chris', age: 15 };
// console.log(getUserDetails(user4));
// Expected Output: "Minor from City not available"

/* ### **5. Object.keys, Object.values, Object.entries (45 minutes)**

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
Use a `for...of` loop to iterate over the results of `Object.entries()` and
 print each key-value pair in the format:  
`"[key]: [value]"`
 */
// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
//   owner: { name: 'John', age: 35 }
// };
// function logCarProperties(car){

// Use Object.keys() to log all property names
// const keys = Object.keys(car);
// console.log('Keys:', keys);

// Use Object.values() to log all property values
// const values = Object.values(car);
// console.log('Values:', values);

// Use Object.entries() to log key-value pairs
// const entries = Object.entries(car);
// console.log('Entries:', entries);

// Bonus Task: Use a for...of loop to print each key-value pair
//   for (const [key, value] of entries) {
//     console.log(`${key}: ${JSON.stringify(value)}`);
//   }

// }

// logCarProperties(car);

/* ### **6. JSON and Data Manipulation (45 minutes)**

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
- Modifies the returned object by adding a new property `discountedPrice`,
 which is 10% lower than the original price.
- Returns the final object.
 */

/*function transformData(data) {
  const jsonString = JSON.stringify(data);
  console.log('JSON String:', jsonString);
  
  const parsedObject = JSON.parse(jsonString);
  
  parsedObject.discountedPrice = parsedObject.price * 0.9; 
  
  return parsedObject;
}

const data = {
  productId: 123,
  productName: 'Laptop',
  price: 1000,
  availability: true,
};

const result = transformData(data);
console.log('Final Object:', result); */

/* ### **7. Combining it All: Complex Data Manipulation and API Simulation (75 minutes)**

**Scenario:**  
You're building a simple **user-order management system** that simulates 
data fetching from an API and processes it in various ways.

**Task:**  
- Create two mock API calls:
  - `getUserData()`: Returns a user object: `{ name: 'Alice', age: 25, address: { city: 'Seattle' } }`.
  - `getOrderData()`: Returns an 
  order object: `{ orderId: 'ORD123', total: 200, product: { name: 'Phone', price: 200 } }`.
  
- Write a function `fetchAndProcessData()` that:
  - Fetches user data and order data concurrently using `Promise.all()`.
  - Uses **optional chaining** to check if the `user.address.city` and `order.product.price` are available.
  - Uses **`Object.keys()`, `Object.values()`, and `Object.entries()`** to log details of the user and order.
  - Converts both objects into JSON format using `JSON.stringify()` and logs the result.
  - Adds error handling with `try/catch` to log any errors if the promises fail.*/

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Alice",
        age: 25,
        address: { city: "Seattle" },
      });
    }, 1000); // Simulating network delay
  });
}

function getOrderData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        orderId: "ORD123",
        total: 200,
        product: { name: "Phone", price: 200 },
      });
    });
  }, 1000);
}

async function fetchAndProcessData() {
  try {
    const [userData, orderData] = await Promise.all([
      getUserData(),
      getOrderData(),
    ]);

    // Using optional chaining to safely access properties
    const userCity = userData.address?.city ?? "City not available";
    const productPrice = orderData.product?.price ?? "Price not available";

    // Logging user and order data using Object.keys(), Object.values(), and Object.entries()
    console.log("User Data:");
    console.log("Keys:", Object.keys(userData));
    console.log("Values:", Object.values(userData));
    console.log("Entries:", Object.entries(userData));

    console.log("Order Data:");
    console.log("Keys:", Object.keys(orderData));
    console.log("Values:", Object.values(orderData));
    console.log("Entries:", Object.entries(orderData));

    // Logging the optional chaining results
    console.log(`User is from: ${userCity}`);
    console.log(`Product price is: ${productPrice}`);

    // Convert user and order objects to JSON format using JSON.stringify()
    const userJson = JSON.stringify(userData);
    const orderJson = JSON.stringify(orderData);

    // Log the JSON strings
    console.log("User JSON:", userJson);
    console.log("Order JSON:", orderJson);
  } catch (error) {
    // Error handling with try/catch
    console.error("An error occurred:", error);
  }
}
// Call the function to execute the entire process
fetchAndProcessData();
