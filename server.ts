import express from "express";
import bodyParser from "body-parser";

(async () => {
  const app = express();

  let userGoal = "Learn Docker!";

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(express.static("public"));

  app.get("/", (req: any, res: any) => {
    res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
  });

  app.post("/store-goal", (req: any, res: any) => {
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    userGoal = enteredGoal;
    res.redirect("/");
  });

  app.listen(80);
})();
