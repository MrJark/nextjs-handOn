import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

export const signInEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({where: {email: email}});
  if (!user) {
    const dbUser = await createUser(email, password);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }
};

const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0], // para coger el nombre cortas email por el @ y coges el primer elemento
    },
  });
  return user;
};
