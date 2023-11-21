import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

const db = new pg.Client({
  user: "",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function it(){
  const k = await db.query("select * from items;")
  return k.rows;
}

app.get("/", async(req, res) => {
  const items=await it()
  res.render("index.ejs", {
    listTitle: "To-do List",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items(title) VALUES ($1);",[item])
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  console.log(req.body)
  const a=req.body.updatedItemId;
  const b=req.body.updatedItemTitle;
  await db.query("UPDATE items SET title = ($1) WHERE id = ($2);",[b,a])
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
 const a= req.body.deleteItemId
  await db.query("delete from items where id= ($1)",[a])
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
