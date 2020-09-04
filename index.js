const mongoose = require("mongoose");
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const MONGODB_URI = "mongodb://localhost:27017/recipe-app";
const createRecipe = (recipe) => Recipe.create(recipe);
const createRecipes = (recipes)=> Recipe.insertMany(recipes)
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    data.map(async (doc) => {
      const result = await createRecipe(doc);
    });
 createRecipes(data)
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
Recipe.findOneAndUpdate({duration: 220}, {$set:{duration:100}}, {new: true}, (err, doc) => {
  if (err) {
      console.log("Something wrong when updating data!");
  }
  console.log("it worked", doc);
});
Recipe.deleteOne({ title: 'Carrot Cake' },  (err, doc) =>{
  if (err) {
    console.log("Something wrong when updating data!");
}
console.log("it worked", doc);
});















