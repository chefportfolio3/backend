# backend
Repo for the BackEnd team only. 

url: https://mychefportfolio.herokuapp.com/

|       endpoint       |    METHOD  | NOTES                            |
|----------------------|------------|----------------------------------|
|/api/auth/register        | POST       |requires: username, password, location, phone number |
|/api/auth/login           | POST       |requires: username, password      |
|/api/recipes              | GET        |Retrieve all recipes(posts)|
|/api/recipes              |POST        |Require: chef_name, recipe_title,recipe_info, recipe_photo, meal_type, ingredients, instructions, user_id|
|/api/recipes/:id          |GET         |retrieve post by id |
|/api/recipes/:id          | DELETE     | delete a post|
|/api/recipes/:id          | PUT        | edit a post |
