import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'pawan',
    email: 'pawan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'mohit',
    email: 'mohit@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
