const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get("/forbidden", (req, res) => {
  res.status(403).send({ message: "Forbidden" })
})
