const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').findOne({"_id" : ObjectID("604a6669b8a1172f88cb6483")}, (error, response) => {
        if(error){
            return console.log(error)
        }

        console.log(response)
    })

    /* db.collection('users').insertOne({
        'name': 'Debojyoti',
        age:'21'
    }, (error, result) => {
        if(error){
            return console.log('error')
        }

        console.log(result.ops);
    }) */

    /* db.collection('users').insertMany([{
        name : 'Tarkovsky',
        age: 56
    },
    {
        name : 'Bela Tarr',
        age : 66
    }],  
    (error, result) => {
        if(error){
            return console.log('error')
        }

        console.log(result.ops);
    }
    
    ) */

   /*  db.collection('tasks').insertMany([{
        description: 'clean',
        completed: true
    },
    {
        description: 'gardening',
        completed: true
    },{
        description: 'dusting',
        completed: false
    }], (error, result) => {
        if(error){
            return console.log('error')
        }

        console.log(result.ops);
    } )
 */


})