const Exam = require("../models/exam.model");

module.exports = {
    create(req, res) {
        Exam.create(req.body)
            .then((exam) => {
                res.json(exam);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        console.log("getting All");
        Exam.find()
            .then((cities) => {         //fix this
                res.json(cities);       //and this
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getOne(req, res) {
        Exam.findById(req.params.id)
            .then((exam) => {
                res.json(exam);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Exam.findByIdAndDelete(req.params.id)
            .then((exam) => {
                res.json(exam);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    update(req, res) {
        Exam.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        }
        )
            .then((updatedExam) => {
                res.status(400).json(updatedExam);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};