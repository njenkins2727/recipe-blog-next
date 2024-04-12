import React from 'react'

const RecipeCard = ({ title, desc, image, ingredients, method }) => {
//   const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const client = new MongoClient(process.env.MONGODB_URI);
// async function run() {
//   try {
//     await client.connect();
//     // database and collection code goes here
//     const db = client.db("onebusyweek_data")
//     const coll = db.collection("recipes");
//     // find code goes here
//     const cursor = coll.find();
//     // iterate code goes here
    
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

  return (
    // do i need to make img src -> img url(image address)
    <div className="card lg:card-side bg-base-100 shadow-xl">
        {/* <h1>{title}</h1> */}
        {/* <p>{desc}</p> */}
        {/* <p>{image}</p> */}
        {/* <p>{ingredients}</p> */}
        {/* <p>{method}</p> */}
        Cards
    </div>
  )
}

export default RecipeCard