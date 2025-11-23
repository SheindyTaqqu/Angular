import express, {Express, Request, Response} from "express";
import { Driver } from "./product";
import cors from "cors";

const HOST = "127.0.0.1";
const PORT = 5000;

export default class App {
    private app: Express;
    private drivers: Array<Driver>;

    constructor() {
        this.app = express();
        this.app.use(cors());////////////
        this.drivers = [];
    }

    public init() {
        this.app.use(express.json()); // For body
        this.setRoutes();

        this.app.listen(PORT, HOST, () => {
            console.log(`Server is listening on: http://${HOST}:${PORT}`);
        });

    }

    private setRoutes() {
        this.app.get("/api/drivers", (req: Request, res: Response) => {
            res.send(this.drivers);
        });

        this.app.get("/api/drivers/:code", (req: Request, res: Response) => {
            const id = parseInt(req.params.code); // TODO: validate the code before parsing

            const driver = this.drivers.find(p => p.id == id);
            if (!driver) {
                res.status(404).send("driver was not found");
            }

            res.send(driver);
        });

        this.app.post("/api/drivers", (req: Request, res: Response) => {
            const driver: Driver = req.body;
            // TODO: add validation check

            this.drivers.push(driver);
            res.status(201).end();
        });

        this.app.put("/api/drivers/:code", (req: Request, res: Response) => {
            const id = parseInt(req.params.code); // TODO: validate the code before parsing

            const productIndex = this.drivers.findIndex(p => p.id == id);
            if (productIndex == -1) {
                res.status(404).send("Product was not found");
            }

            const driver: Driver = req.body;
            // TODO: add validation check

            this.drivers[productIndex] = driver;
            res.end();
        });

       this.app.delete("/api/drivers/:code", (req: Request, res: Response) => {
        const id = parseInt(req.params.code); // TODO: validate the code before parsing

        const productIndex = this.drivers.findIndex(p => p.id === id);
        if (productIndex === -1) {
            return res.status(404).send("Product was not found");
        }

        this.drivers.splice(productIndex, 1); // Remove the product from the array
        res.status(204).end(); // No content to return
    });
}
    }
