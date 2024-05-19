import { PrismaClient } from '@prisma/client';

export default class LoginModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addUser(user){
    const respuesta = await this.#prismaClient.user.create({data: user});
  }

  async getLoginMeraki() {
    return await this.#prismaClient.user.findMany();
  }
}