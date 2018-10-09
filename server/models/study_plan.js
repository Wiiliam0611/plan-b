const Sequelize = require('sequelize');
const sequelize = require('./db');
const Student = require('./student');
const Subject = require('./subject');

const StudyPlan = sequelize.define('studyPlan', {
    id: {
        type: Sequelize.NUMERIC,
        primaryKey: true,
        unique: true,
        allowNull: false
    }
    // status: {
    //     type: Sequelize.STRING
    // }
}, {
    timestamps: false
});

Subject.belongsToMany(Student, {through: StudyPlan});

module.exports = StudyPlan;
