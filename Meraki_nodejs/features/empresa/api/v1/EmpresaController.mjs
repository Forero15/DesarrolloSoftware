import express from "express";
import EmpresaModelPrisma from "../../empresa-model.prisma.mjs";

const { Router } = express;

export default class EmpresaController {
  #router = Router();
  #empresaModel = null;
  
  constructor() {
    this.#empresaModel = new EmpresaModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/empresa`, async (req, res) => await this.getEmpresa(req, res));
    routerV1.post(`/empresa`, async (req, res) => await this.createEmpresa(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getEmpresa(req, res) {
    try {
      const empresa = await this.#empresaModel.getEmpresa();
      res.json(empresa);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createEmpresa(req, res) {
    try {
      const emp = req.body;
      console.info({emp});
      this.#empresaModel.addEmpresa(emp);
      res.send('Empresa Agregada');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}