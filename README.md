# E-Commers backend 
  [![Licens](https://img.shields.io/badge/License-CC0%202.0-blue.svg)](https://opensource.org/licenses/CC0)
  ### Description
  This program is a simple and functioning backend for a e-commerce platform. the program has many routes that allow a user to add, delete, update and, view items.

  [Demo Video](https://youtu.be/uvIHrGorxNg)

  [GitHub Repo](https://github.com/JoJo-designs/e-commerce_backend)

  ### Table of Content
  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Questions](#Questions)

  ### Installation
  Users need node js installed a server software and a program that will allow them to make api calls without a browser. 
  ### Usage
  Users will need to rename the file called .env.user to just .env and change the DB_PW variable to the users server password and save the file. In their terminal run 'npm install' to add dependencies then the user can start the server with 'node server.js'. when the server is started the user can then use a program that allows them to make api calls without a browser. 

  ##### The database only runs locally so users will need to start all calls with this route. http://localhost:3001/api/.

  The information after the slash api is how a user can interact with the database. See the table below for more information on interaction. 

##### Product Routes
  | Mode | Route | Usage | Body|
  |:---- |:----- |:----- |:--- |
  | GET | products/ | This route can be used with to all the products in the database.| none |
  | GET | products/:id | Put in a number in place of the id (Example: products/3). This route get one item based on the number that was provided. | none |
  | POST | products/ | This route allows a user to add a new product to the database| Valid json object with titles that match the title in the database |
  | PUT | products/:id | Put a number in place of the id (Example: products/3). This route allows a user to update an item based on the id provide | Valid json object with titles that match the title in the database |
  | DELETE | products/:id | allows a user to delete an item from the database | none |

  ##### Categories Routes
  | Mode | Route | Usage | Body|
  |:---- |:----- |:----- |:--- |
  | GET | categories/ | This route can be used to get all the categories in the database.| none |
  | GET | categories/:id | Put in a number in place of the id (Example: categories/3). This route get one item based on the number that was provided. | none |
  | POST | categories/ | This route allows a user to add a new category to the database| Valid json object with titles that match the title in the database |
  | PUT | categories/:id | Put a number in place of the id (Example: categories/3). This route allows a user to update an item based on the id provide | Valid json object with titles that match the title in the database |
  | DELETE | categories/:id | allows a user to delete an item from the database | none |

  ##### Tags Routes
  | Mode | Route | Usage | Body|
  |:---- |:----- |:----- |:--- |
  | GET | tags/ | This route can be used with to all the tags in the database.| none |
  | GET | tags/:id | Put in a number in place of the id (Example: tags/3). This route get one item based on the number that was provided. | none |
  | POST | tags/ | This route allows a user to add a new category to the database| Valid json object with titles that match the title in the database |
  | PUT | tags/:id | Put a number in place of the id (Example: tags/3). This route allows a user to update an item based on the id provide | Valid json object with titles that match the title in the database |
  | DELETE | tags/:id | allows a user to delete an item from the database | none |



  ### License
  ##### Type of license CC0
  Projects with the CC0 license allows users to copy, modify, distribute and perform the work, even for commercial purposes, without asking permission.
 ##### For a full overview please visit
 [CCO](https://creativecommons.org/publicdomain/zero/1.0/legalcode)  
  ### Questions
  [JoJo-Designs](https://github.com/JoJo-Designs)
  Please contact Jodi at jodiladouceur.design@gmail.com with any questions