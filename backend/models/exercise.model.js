const mongoose = require('mongoose');

const schema = mongoose.Schema;

const exerciseModel = new schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true},
},{
    timestamps: true
});

const exercise = mongoose.model('Exercise',exerciseModel);

module.exports = exercise;