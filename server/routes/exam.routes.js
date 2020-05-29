const examController = require("../controllers/exam.controller");

module.exports = (app) => {
    app.get("/api/exam", examController.getAll);
    app.get("/api/exam/:id", examController.getOne);
    app.post("/api/exam", examController.create);
    app.delete("/api/exam/:id", examController.delete);
    app.put("/api/exam/:id", examController.update);
};