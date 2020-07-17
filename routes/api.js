const express = require("express");
const router = express.Router();

const people = [
  { firstName: "Erika", lastName: "Madrigal", age: 21 },
  { firstName: "Daniel", lastName: "Medrano", age: 20 },
  { firstName: "Christian", lastName: "Medrano", age: 20 },
  { firstName: "Adrian", lastName: "Camargo", age: undefined },
  { firstName: "Andres", lastName: "Camargo", age: undefined },
];

/* Figure out how to put Each name in an array of objects
like so:

const names = [
    {firstName: "Erika"},
    {firstName: "Daniel"},
    {firstName: "Christian"},
    {firstName: "Adrian"},
    {firstName: "Andres"}
]

*/

const names = people.map((x) => {
  return x.firstName;
});

router.get("/", (req, res) => {
  res.send(people);
});

router.get("/names", (req, res) => {
  res.send(names);
});

router.get("/:id", (req, res) => {
  res.send(people[req.params.id]);
});

module.exports = router;
