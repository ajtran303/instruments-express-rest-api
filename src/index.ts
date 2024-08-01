import express, { json } from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

const PORT = 3000
app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}`)
)
