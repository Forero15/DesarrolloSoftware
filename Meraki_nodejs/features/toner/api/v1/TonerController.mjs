import express from "express";
import TonerModelPrisma from "../../toner-model.prisma.mjs";

const { Router } = express;

export default class TonerController {
  #router = Router();
  #tonerModel = null;
  
  constructor() {
    this.#tonerModel = new TonerModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/toner`, async (req, res) => await this.getToner(req, res));
    routerV1.post(`/toner`, async (req, res) => await this.createToner(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getToner(req, res) {
    try {
      const toner = await this.#tonerModel.getToner();
      res.json(toner);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createToner(req, res) {
    try {
      const ton = req.body;
      console.info({ton});
      this.#tonerModel.addToner(ton);
      res.send('Tóner agregado');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}