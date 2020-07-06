# Backend, RentFilms
![badge](https://img.shields.io/badge/working-active-brig)

FrontEnd made with angular as an exercise to supply a previously developed back. 

Although this Front is not completely finished, it does have the most basic functions implemented, with which we can act on movies, see their details, create a user, login, see the details of the movies and "rent them".


## How to Start 🚀

+ First clone the BackEnd repository 
```
 git clone https://github.com/chsanleo/rentFilms.git
```
+ clone the FrontEnd repository 
```
 git clone https://github.com/chsanleo/RentFilms_Front.git
```

+ and install the packages of both projects,

```
$ npm install
```

+ run the migrations to create the database in the BackEnd

```
$ sequelize db:migrate
```

+ populate the database with basic data

```
$ sequelize db:seed:all
```
 
+ run the BackEnd in his folder

```
$ npm start
```

+ run the FrontEnd in his folder

```
$ ng serve
```

+ and... WORK!.


## Project status

>Now working adding more features and improvements on it. It's not finish at all.

### Current Features 📄

+ Register a User, Login, Create a Order, Detail about the Movie.
+ Show the profile with the information of the current User.
+ The register and the login have validations.
+ One exist one "Admin" and is the parent of all users, to add new "Admin" must update manually the DB.


### Roadmap 📋

**About the back**
+ Finish the search by title of the films in our database.
+ Fix the show data of the history of rents.
+ Fix problem with interceptor and token.
+ Create a properties file.

**About features**
+ Implement search movie by gender.
+ Implement search movie by actors.
+ Implement a guard.
+ Implement the update of user information.
+ Implement the admin panel


## Test the application ⚙️

Turn on the server.
```
$ ng serve --open
```

Use the browser you like best to access
```
localhost:4200/
```

## Used Tools 🛠️

* [bootstrap](https://getbootstrap.com/) - styles


## Author ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)


## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

You can use it without hesitation, just mention me or contact me for it.


## How to say 'thanks' to me  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to me ;). 
* Comments about always welcome!.