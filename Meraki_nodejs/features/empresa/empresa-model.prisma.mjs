import { PrismaClient } from '@prisma/client';

export default class EmpresaModelPrisma {

  #prismaClient;

  constructor() {
    this.#prismaClient = new PrismaClient();
  }

  async addEmpresa(Empresa){
    const respuesta = await this.#prismaClient.Empresa.create({data:Empresa});
    
  }

  async getEmpresa() {
    return await this.#prismaClient.Empresa.findMany();
  }
}