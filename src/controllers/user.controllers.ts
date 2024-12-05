import { Request, Response } from "express";
import { User, getAllUsers, createUser, getUserById } from '../models/user.model';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { name, email } = req.body as User;

  try {
    const newUser = await createUser({ name, email });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar novo usuário.' });
  }
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário.' });
  }
};