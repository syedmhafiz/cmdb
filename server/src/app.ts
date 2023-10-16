import "dotenv/config";
import express, { Application, NextFunction, Request, Response } from "express";
import mediaCardRoutes from "./routes/MediaCards";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";

const app: Application = express();

app.use(morgan("dev"));

app.use(express.json());

app.use('/api/medias', mediaCardRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, "Routes not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({
        status: false,
        error: errorMessage
    });
})

export default app;