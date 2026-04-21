import { Router, type IRouter } from "express";
import healthRouter from "./health";
import formsRouter from "./forms";
import contentRouter from "./content";

const router: IRouter = Router();

router.use(healthRouter);
router.use(formsRouter);
router.use(contentRouter);

export default router;
