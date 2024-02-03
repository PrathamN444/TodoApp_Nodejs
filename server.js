import { app } from "./index.js";
import {connectDB} from "./data/database.js";

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`the server is running on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
