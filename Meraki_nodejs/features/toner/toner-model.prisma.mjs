import { PrismaClient } from '@prisma/client';

export default class TonerModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addToner(Toner){
    const respuesta = await this.#prismaClient.Toner.create({data:Toner});
    
  }

  async getToner() {
    return await this.#prismaClient.Toner.findMany();
  }
}