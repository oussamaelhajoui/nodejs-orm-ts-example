import express, {Application} from 'express';

import database, {createDb} from './dal/database';
import userRoutes from './routes/userRoute';
import argv from './help';

import cors from 'cors';

const port = process.env.PORT || argv.port || 5000;
const app: Application = express();

createDb().then( r => {
    database
        .authenticate()
        .then( () => {
            console.log('Connection to database has been established successfully.');
            app.listen(port, () => console.log(`Server is running on port ${port}`));

        })
        .catch((err: any) => {
            console.error('Unable to connect to the database:');
            console.log(err);
            process.exit();
        });

    app.use(express.json());
    app.use(cors());

    app.use('/user', userRoutes);

    app.get('/', (req, res) => {
        return res.send('Hello World!');
    });


});

