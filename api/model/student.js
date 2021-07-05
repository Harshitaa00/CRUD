const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({


name: String,
email: String,
phone:Number,
gender:String
});

module.exports = mongoose.model('Student',studentSchema);

/*{
    "name":"xyz",
    "email":"xyz@gmail.com",
    "phone":123,
    "gender":female
}
*/
