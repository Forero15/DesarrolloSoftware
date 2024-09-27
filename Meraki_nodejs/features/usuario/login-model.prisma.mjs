import { PrismaClient } from '@prisma/client';

export default class LoginModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addUser(Login){
    const respuesta = await this.#prismaClient.Login.create({data:Login});
    
  }

  async getLoginMeraki() {
    return await this.#prismaClient.Login.findMany();
  }
}