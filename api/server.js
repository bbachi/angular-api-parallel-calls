const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [
  { userId: 1, firstName: "first1", lastName: "last1", email: "abc@gmail.com"},
  { userId: 2, firstName: "first2", lastName: "last2", email: "abc@gmail.com"},
  { userId: 3, firstName: "first3", lastName: "last3", email: "abc@gmail.com"},
  { userId: 4, firstName: "first4", lastName: "last4", email: "abc@gmail.com"},
  { userId: 5, firstName: "first5", lastName: "last5", email: "abc@gmail.com"}
];

const contacts = [
  { userId: 1, phone: "111-111-1111", fax: "111-111-1111"},
  { userId: 2, phone: "111-112-1112", fax: "222-111-1111"},
  { userId: 3, phone: "111-113-1113", fax: "333-111-1111"},
  { userId: 4, phone: "111-114-1114", fax: "444-111-1111"},
  { userId: 5, phone: "111-115-1115", fax: "555-111-1111"}
];

const addresses = [
  { userId: 1, streetNumber: "stNum1", streetName: "stName1", city: "city1", state: "state1", zipcode: "11111"},
  { userId: 2, streetNumber: "stNum2", streetName: "stName2", city: "city2", state: "state2", zipcode: "22222"},
  { userId: 3, streetNumber: "stNum3", streetName: "stName3", city: "city3", state: "state3", zipcode: "33333"},
  { userId: 4, streetNumber: "stNum4", streetName: "stName4", city: "city4", state: "state4", zipcode: "44444"},
  { userId: 5, streetNumber: "stNum5", streetName: "stName5", city: "city5", state: "state5", zipcode: "55555"}
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  setTimeout(() => res.json(users), 8000)
});

app.get('/api/contacts', (req, res) => {
  console.log('api/contacts called!')
  setTimeout(() => res.json(contacts), 2000)
});

app.get('/api/addresses', (req, res) => {
  setTimeout(() => res.json(addresses), 7000)
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
