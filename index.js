const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Student = require('./model/student');

mongoose.connect("mongodb://localhost:27017/local").then((dbo) => {
    console.log("DB Connected")
}, (err) => {
    console.log("error", err);
})

const port = 5000;

app.use(express.json());


app.post('/save', (req, res) => {
   
    const newStudent = new Student({
        roll_no: 21,
        name: "Tina Dabi",
        year: 2019,
        subjects: ["html", "microservice", "webapi", "computer"]
    })
    newStudent.save().then(rec => {
        console.log(res);
        res.status(200).json(rec)
    }, (err) => {
        console.log(err);
        res.status(500).json({error: 'error'})
    });
})

app.get('/student', (req, res) => {
    Student.find()
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
});

app.delete('/student/:id', (req, res) => {
   
        Student.findByIdAndRemove(req.params.id)
        .then((student) => {
            if(!student){
                return res.status(404).json({ message: 'Student not found '});
            }
            res.json({ message: 'Student deleted successfully'});
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        });
});

app.put('/student/:id', (req, res) => {

    Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((student) => {
        if(!student) {
            return res.status(404).json({ message: 'Student not found '});
        }
        res.json(student);
    })
    .catch((error) => {
        res.status(500).json({error : error.message });
    });

});

app.listen(port, () => {
    console.log(`now lisssssssssstening on portttttttttt ${port}`); 
})