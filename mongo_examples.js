// 'use strict';

// const MongoClient = require('mongodb').MongoClient;
// const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

// MongoClient.connect(
//   MONGODB_URI,
//   (err, db) => {
//     if (err) {
//       console.error(`Failed to connect: ${MONGODB_URI}`);
//       throw err;
//     }

//     // ==> We have a connection to the "test-tweets" db,
//     //     starting here.
//     console.log(`connected to mongodb: ${MONGODB_URI}`);

//     // ==> In typical node-callback style, any program
//     //     logic that needs to use the connection needs
//     //     to be invoked from within here.
//     //
//     // Another way to say: this is an "entry point" for
//     // a database-connected application!

//     //===> Let's "get all the tweets". in Mongo-speak, we "find" them.
//     // db.collection('tweets').find({}, (err, result) => {
//     //Lazy error handling:

//     // console.log('fine result: ', result);
//     // console.log('type of find result: ', typeof result);
//     // ==> We can iterate on the cursor to get results, one at a time:
//     // console.log('for each item yielded by the cursor:');
//     // result.each((err, item) => console.log(' ', item));

//     // ===> We could instead just slurp the items into an array:
//     // result.toArray((err, resultsArray) => {
//     //   if (err) throw err;
//     //   console.log('result.toArray:', resultsArray);
//     // });

//     //   db.close();
//     // });
//     // ==> At the end, we close the connection:

//     // !!!!!!!!! we can just get the rsults as an array all at once:
//     db.collection('tweets')
//       .find()
//       .toArray((err, results) => {
//         if (err) throw err;
//         console.log('results array:', results);
//         // this is the end...
//         db.close();
//       });
//   }
// );

//!!!!!!! REFACTORED CODE!!!!!!!!!!!!!!!!!!!!!

'use strict';

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

MongoClient.connect(
  MONGODB_URI,
  (err, db) => {
    if (err) {
      console.log(`Failed to connect: ${MONGODB_URI}`);
      throw err;
    }
    // We have a connection to the "tweeter" db, starting here.
    console.log(`Connecte ot mongodb: ${MONGODB_URI}`);

    // ==> Refactored and wrapped as new, tweet-specific function:

    function getTweets(callback) {
      db.collection('tweets')
        .find()
        .toArray((err, tweets) => {
          if (err) {
            return callback(err);
          }
          callback(null, tweets);
        });
    }
    // ==> Lated it can be invoked. Remeber even if you pass
    // `getTweets` to another scope it still has closure over
    // `db`, so it will still work.

    getTweets((err, tweets) => {
      if (err) throw err;
      console.log('Logging each tweet:');
      for (let tweet of tweets) {
        console.log(tweet);
      }
      db.close();
    });
  }
);
