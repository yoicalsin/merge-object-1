const data = [
  {
    name: "Admin",
    age: 165,
    created_at: Date.now
  },
  {
    name: "Editor",
    age: 654,
    created_at: Date.now
  }
];

const unique = ["name", "age"];

const payload = [];

for (const [k, v] of data.entries()) {
  let item = {};
  for (const [kk, vv] of unique.entries()) {
    item[vv] = v[vv];
  }
  payload.push(item);
}

console.log(payload);
