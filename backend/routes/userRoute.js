import express from "express";
import {
  Delete,
  create,
  getAll,
  getOne,
  update,
} from "../controller/user.controller.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", Delete);

export default route;
