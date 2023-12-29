
const mongoose = require('mongoose');
// print mongoose version
console.log('mongoose version =', mongoose.version);

// connect to the database
mongoose.connect('mongodb://localhost/mydb_test')
console.log('Conecrting to the database in process...');

mongoose.connection.on('error', function() {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
})

mongoose.connection.on('open', function() {
    console.log('Connected to the database successfully');
})

const clientSchema = mongoose.Schema({
    lastname: String,
    firstName: String,
    address: String,
    Age: Number
})

const Client = mongoose.model('clients', clientSchema)

//Create document in memory
const c = new Client({
    lastname: 'Smith',
    firstName: 'John',
    address: '123 Main St',
    Age: 24
})

console.log('Before the save() statement', c)

//Save it to database
///////////NO LONGER SUPPORTED/////////////
// c.save(function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Saved document successfully')
//     }
// })

//Way one to save document to database//
// c.save().then((doc) => {
//     console.log(doc)
// }).then(console.log('Saved document successfully')).catch(err => console.log(err))


//Creating a document in one step
// Client.create({
//     lastname: 'Jhonson',
//     firstName: 'Mike',
//     address: '9867 Luke St',
//     Age: 29
// }, (err, doc) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Saved document successfully ', doc)
//     }
// })

//Way two to save document to database//
// Client.create({
//     lastname: 'Jhonson',
//     firstName: 'Mike',
//     address: '9867 Luke St',
//     Age: 29
// }).then((doc) => {
//     console.log('Saved document successfully ', doc)
// }).catch(err => console.log(err))

//Search for a document
Client.find({
    $or: [{lastname: 'Smith'}, {Age: 28}]
}).then((doc) => console.log('Found documents: ', doc)).catch(err => console.log(err))

Client.find({
    $or : [{lastname:'Jhonson'}]
}).where('lastname').eq('Jhonson').then((doc) => console.log('Found documents here: ', doc)).catch(err => console.log(err))

//Update a document
Client.updateOne({lastname: 'Smith'}, {address: 'New York 962'}).then((doc) => console.log('Updated document: ', doc)).catch(err => console.log(err))

//Delete a document
Client.deleteOne({lastname: 'Smith'}).then((doc) => console.log('Deleted document: ', doc)).catch(err => console.log(err))