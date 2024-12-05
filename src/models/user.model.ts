import { promisePool } from '../config/database';

export interface User {
  id?: number,
  name: string,
  email: string,
}

export const getAllUsers = async () => {
  const [rows] = await promisePool.query('SELECT FROM * users');
  return rows;
}

export const createUser = async (user: User) => {
  const [result] = await promisePool.query('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
  return result;
}

export const getUserById = async (id: number) => {
  const [rows] = await promisePool.query('SELECT * FROM  users WHERE id=?', [id]);
  return rows;
}