const mongoose = require("mongoose");
const mongodb = require("mongodb");
/**
 * This file contains the commands that align with the material for this module
 */

/**
 db.createCollection("posts")
 show collections

 db.posts.insert({
    title: "Post One",
    body: "Body of Post One",
    category: "News",
    likes: 4,
    tags: ["news", "event"],
    user: {
        name: "Terry A Davis",
        status: "Holy C expert"
    },
    date: Date()
 })
 */

 /**
  db.posts.insertMany([
    {
        title: "Post Two"
        body: "Body of Post Two",
        category: "Tech",
        date: Date()
    },
    {
        title: "Post Three"
        body: "Body of Post Three",
        category: "Video games",
        date: Date()
    }
  ])
  */

  /**
   db.posts.find()
   db.posts.find().pretty()
   db.posts.find({ category: "News" })
   db.posts.find({ category: "News" }).pretty()
   db.posts.find().sort({ title: 1 }).pretty()
   db.posts.find({ category: "News" }).count()
   db.posts.find().limit(2)   
   db.posts.find().sort({ title: -1 }).limit(2)
   */

   /**
    db.posts.find.forEach(function(doc) { print("Blog Post: " + doc.title)})
    db.posts.findOne({ category: "News" })
    */

    /**
     db.posts.update({ title: "Post Two" },
         {
            title: "Post Two",
            body: "New post 2 body",
            date: Date()
         },
         {
            upsert: true
         }
     )
     db.posts.find({ title: "Post Two" })
     db.posts.find({ title: "Post Two" }).pretty()

     db.posts.find({ title: "Post Two" },
        {
            $set: {
                body: "Body of post 2",
                category: "Random"
            }
        }
     )
     */

     /**
      db.posts.find({ title: "Post One" }).pretty()
      db.posts.update({ title: "Post One" }, { $inc: { likes: 2 } })
      */

    /**
      db.posts.update({ title: "Post One" }, { $rename: { likes: "views" } })
      db.posts.remove({ title: "Post Four"})
     */

    /**
     db.posts.find(
        {
            comments: {
                $elemMatch: {
                    user: "Mary Williams"
                }
            }
        }
     )

     db.posts.find(
        {
            comments: {
                $elemMatch: {
                    user: "Mary Williams"
                }
            }
        }
     ).pretty()
     */

     /**
      db.posts.createIndex({ title: "text" })

      db.posts.find({
        $text: {
            $search: "\"Post 0\""
        }
      })

      db.posts.find({
        $text: {
            $search: "\"Post 0\""
        }
      }).pretty()

      db.posts.find({
        $text: {
            $search: "\"Post T\""
        }
      }).pretty()
      */

      /**
       db.posts.update({ title: "post Two" }, { $set: { views: 10 }})
       db.posts.find({ views: { $gt: 3 } })
       db.posts.find({ views: { $gt: 3 } }).pretty()
       db.posts.find({ views: { $gte: 6 } }).pretty()
       db.posts.find({ views: { $lte: 6 } }).pretty()
       */