const jwt = require('jsonwebtoken');

const secret = 'sXnBrT6#15qRyJ5%d4NdT9OQScMGqo6I';
const token = jwt.sign(
  {
    id: 'Wonsik',
    isAdmin: false,
  },
  secret,
  {expiresIn: 2}
);

jwt.verify(token, secret, (error, decoded) => {
  console.log(error, decoded);
});

console.log(token);
