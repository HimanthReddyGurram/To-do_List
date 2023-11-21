# toDoList
A to do list website where we can add things to do and check-off things we have done with postgreSQL database, node.js and express.js backend.
It performs CRUD operations.
(This website has a backend so the data doesnot get lost when refreshing websites or servers.)

## Technologies
* Javascript
  - ejs
* Node.js
  - Express.js
* Sql
  - postgresql


## How to use
To clone and run this application, you'll need Git, Node.js (which comes with npm) and postgresql installed on your computer.

After installing pgAdmin which is a management tool for PostgreSQL, create a database with some name.

Now the run the code which is there in the **queries.sql** file into the query tool.

If you are having trouble doing that then just insert the code into the place shown in the image below on pgAdmin and run the queries.

![image](https://miro.medium.com/v2/resize:fit:916/1*IQqAlh30q_pFpVp0KomL2w.png)

In the following code which spans from line 8 to 14 on index.js file, please insert user and password values from when you register with pgAdmin on your local pc and database name from when you created a database.
```javascript
const db = new pg.Client({
  user: "",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});
```

From your command line:
```bash
# Clone this repository
git clone https://github.com/HimanthReddyGurram/toDoList.git

# Go into the repository
$ cd toDoList.git

# Install dependencies
npm install

#Run the app
nodemon index.js
```
The output will be "Server started on port 4000"

## User Interface
You can now see that you can add when you click on "+" button and you can edit by clicking on pen symbol and you can delete completed tasks just by checking the check-box.
