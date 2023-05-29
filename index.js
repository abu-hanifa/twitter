const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 6000


app.use(express.json())
 app.use(require("./routes/comment.route"))
app.use(require("./routes/twitter.route"))
app.use(require("./routes/user.route"))



mongoose.connect("mongodb+srv://abu-hanifa:lom0895311@intocode.qw0fyj8.mongodb.net/twitter16").then(() => console.log('успешно'))
.catch(() => console.log('ошибка'))

app.listen(port, () => {
    console.log(`сервер http://localhost${port}`);
})