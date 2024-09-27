import express from "express";
import loginModel from "../../Login-Model.mjs";
import LoginModel from "../../Login-Model.mjs";

const { Router } = express;

export default class LoginController {
  #router = Router();
  #loginModel = null;
  
  constructor() {
    this.registerRoutes();
  }
  
  getRouter() {
    return this.#router;
  }
  
  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/usuarios`, async (req, res) => await this.getLoginMeraki(req, res));
    
    this.#router.use(`/v1`, routerV1);
  }
  
  async getLoginMeraki(req, res) {
    try {
      this.#loginModel = new LoginModel();
      this.#loginModel.connect();
      const login = await this.#loginModel.getLoginMeraki();
      res.json(login);
    } catch (error) {
      console.error(`error: ${error}`);
    } finally {
      this.#loginModel.closeConnection();
    }
  }
}