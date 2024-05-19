import express from "express";
import LoginModelPrisma from "../../login-model.prima.mjs";

const { Router } = express;

export default class LoginController {
  #router = Router();
  #loginModel = null;
  
  constructor() {
    this.#loginModel = new LoginModelPrisma();
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/usuarios`, async (req, res) => await this.getLoginMeraki(req, res));
    routerV1.post(`/usuarios`, async (req, res) => await this.createLogin(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getLoginMeraki(req, res) {
    try {
      const login = await this.#loginModel.getLoginMeraki();
      res.json(login);
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }

  async createLogin(req, res) {
    try {
      const user = req.body;
      console.info({user});
      this.#loginModel.addUser(user);
      res.send('Usuario creada');
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}