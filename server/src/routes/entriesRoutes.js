import express from "express";
import {authenticateAccessToken} from "../middlewares/authenticateTokens.js";
import {createEntry} from "../controllers/entries/createEntry.js";
import {getAllEntries, getEntryById} from "../controllers/entries/getEntry.js";
import {updateEntry} from "../controllers/entries/updateEntry.js";
import {deleteEntry} from "../controllers/entries/deleteEntry.js";

const router = express.Router();

router.use(authenticateAccessToken);

router.get("/", getAllEntries);
router.get("/:id", getEntryById);
router.post("/", createEntry);
router.patch("/:id", updateEntry);
router.delete("/:id", deleteEntry);

export default router;