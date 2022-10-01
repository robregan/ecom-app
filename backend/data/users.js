import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@yo.com',
    password: bcrypt.hashSync('1111', 10),
    isAdmin: true,
  },
  {
    name: 'Bobby',
    email: 'bobby@yo.com',
    password: bcrypt.hashSync('1111', 10),
  },
  {
    name: 'Bambi',
    email: 'bambi@yo.com',
    password: bcrypt.hashSync('1111', 10),
  },
]

export default users
