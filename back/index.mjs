import express from "express"

const port = process.env.PORT || 8080

const app = express()

app.listen(port, () => {
	console.log(`Corgi back end server started on port ${port}.`)
})
