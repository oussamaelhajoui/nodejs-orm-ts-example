# Typesript ORM  demo
> usage of demo:  
make sure you have npm and node and mysql installed and running first.  
If you dont have a root user with no password for mysql look at step 2.  
Also create the database *_myExampleDb_* or the app will crash or restart the app  


This needs to be done the first time only
```bash
npm instal -g typescript      
npm install
npm install dev
```
```
npm run build
npm start
```

When you dont have a root user with no password specify the username and password like this
```$xslt
cd dist
node index -u dbUsername -pass dbPassw
```

You can also change the port by using the -p flag e.g.  ``cd dist && node index -p 80``


for detailed information use the help flag 


> This will start up a local server of your application on your machine


You can now go to the browser and navigate to http://localhost:5000 if you supplied another port you can navigate to that port
## Requests
You can create the following requests  

| request type | request path | description                                      | 
|--------------|--------------|--------------------------------------------------| 
| GET          | /            | Shows the readme page                            | 
| GET          | /user        | Gets all the users                               | 
| GET          | /user/:email | Gets user information of selected email          | 
| POST         | /user        | Creates a new user: {name: string, email:string} | 
| PUT          | /user/:email | updates user {name: string, email: string}       | 


---
"# nodejs-orm-ts-example" 
