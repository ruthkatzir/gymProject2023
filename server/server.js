require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3600
var bodyParser = require('body-parser')
//aaa

//middleware
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(cookieParser())
//routes
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/price", require("./routes/priceRouter"));
app.use("/api/purchase", require("./routes/purchaseRoutes"));

app.use("/api/lessons", require("./routes/lessonRoutes"));
app.use("/api/measurements", require("./routes/measurementRoutes"));
app.use("/api/schedules", require("./routes/scheduleRoutes"));
app.use("/api/secretary", require("./routes/secretaryRoutes"));
app.use("/api/recommendations", require("./routes/RecommendationsRoutes"));
app.use("/api/participations", require("./routes/participationRoutes"))
app.use("/api/upload", require("./routes/upload-router"));
app.use("/api/ai", require("./routes/AI_Routes"));

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))