import express from 'express';
import user from './../models/user';

const router = express.Router();

router.get('/', async (req, res) => {
    const resObj ={
        message: "working",
        users: []
    };

    user.findAll()
        .then((r: never[]) => {
            if( r.length > 0 ){
                resObj.users = r;
                res.send(resObj)
            }else{ res.status(200).send(resObj); }
        })
        .catch((e: string) => {
            resObj.message = e;
            res.status(200).send(resObj)
        })
});

router.get('/:email', async (req, res) => {
    const resObj:any ={
        message: "working",
        users: []
    };
    user.findOne({
        where: {email: req.params.email}
    }).then((user: any) => {
        if(user == null){ // return no content when no user is found on that email
            res.status(204).send();
            return;
        }
        resObj.users.push(user);
        res.status(200).send(resObj);
    }).catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err);
    })
});

router.post('/', async (req,res) => {
    const resObj ={
        message: "working",
        id: 0
    };

    // check if email already exists
    user.findOne({
        where: {email: req.body.email}
    }).then((user:any) => {
        if(user != null){
            resObj.message = "Email already exists in the database.";
            res.status(409).send(resObj); // send conflict error
        }
    }).catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });


    // creating user
    user.create({name:req.body.name, email:req.body.email})
        .then( () => user.findOrCreate({where: {name: req.body.name}}))
        .then(([userx]:any) => {
            resObj.id = userx.idUser || 0;
            res.status(201).send(resObj)

        });
});

router.put('/:email', async (req,res) => {
    const resObj ={
        message: "working",
        id: 0
    };

    // check if email already exists
    user.findOne({
        where: {email: req.params.email}
    }).then((user: { update: (arg0: any) => { then: (arg0: (...x: any) => void) => void; }; } | null) => {
        if(user == null){
            resObj.message = "Email does not exist in the database.";
            res.status(204).send(); // send conflict error
            return;
        }
        user.update({...req.body})
            .then( (...x: any) => {
                res.status(202).send(x);
            })
    }).catch((err: any) => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
});





export default router;
