
const app = require('./src/app/app')

function activeServer() {
    try {
        // connectDBS()
        app.listen(8080)
        console.log("server active");
    } catch (error) {
        console.log(error);
    }
}


activeServer()