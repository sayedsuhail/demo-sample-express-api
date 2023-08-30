const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hurrah! App is running... 😍😍😍")
})

const port = process.env.PORT

app.listen(port, () => {
  console.log("Server is up on port " + port)
})
