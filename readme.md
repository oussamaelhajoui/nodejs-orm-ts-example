# Typesript demo
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



---
"# nodejs-orm-ts-example" 
