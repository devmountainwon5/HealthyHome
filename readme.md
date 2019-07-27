# Healthy Home

## Ideas:
https://docs.google.com/document/d/1qCVqLaEN9QK-6KFv1GofUsgsayf2sI3gu0aWw4D7WVA/edit?usp=sharing

## slides:
https://docs.google.com/presentation/d/1Q4oMwDziixtM9ty8AgfUTQCrlUTga86d4C_gCIRYWqw/edit#slide=id.g5d2ec70f6a_0_21

## MVP
* quiz - views/login/quiz/quiz
* barometer - healthy-home/src/Views/Home/Subviews/HomeHealth/HomeHealth
* tasks / full crud on a “todo list” (home/ yard/ custom??) / calendar / barometer / registration 
* subscriptions to tasks/ upcoming feed/calendar view
* email / text / pop-up reminders
* login/authentication views/login/login/login

tasks/user info generated from the quiz:
user info: {
  First name 
  Last name 
  Email 
  Password 
  Address/Zip Code 
}
tasks: {
  -homeType
  -yardCare? (bool)

  Appliances
  Attic space
  Basement
  Doors and windows
  Exterior stucco or paint
  Electrical panel, light switches, and power outlets
  Garage
  Plumbing fixtures, faucets, and water heater
  Porches and balconies
  Roof
  Rain gutters and downspouts
  Stairs, steps, and railings
  Thermostats and heating, cooling, and ventilation (HVAC) system
  Walkways and driveways
  Walls, ceilings, and floors
}
accountPreferences: {
  -notifications
}

## SKELETON

* healthy-home
  * Server/
    * Middleware/
      * auth.js
    * Services/
      * user.js
    * controller/
      * index.js
  * public/
    * favicon.ico
    * index.html
    * manifest.json
  * src/
    * Ducks/
      * action_creator.js
      * reducer.js
      * store.js
    * Shared Components/
      * sharedComponents.js
    * Views/
      * Calendar/
        * Calendar.css
        * Calendar.js
      * Home/
        * Subviews/
          * HomeHealth/
            * HomeHealth.js 
            * HomeHealth.css
          * ToDos/
            * ToDos.css
            * ToDos.js
          * Home.css
          * Home.js
        * Login/
          * Login/
            * login.js
          * Quiz/
            * quiz.js
       * List of Tips/
        * tipslist.js
    * app.css
    * App.js
    * App.test.js
    * Routes.js
    * index.css
    * index.js
    * serviceWorker.js
  * gitignore
  * index.js
  * package-lock.json
  * package.json
  * yarn.lock


Contributors: Matthew Sewell, Jared, Mandy, Abby Smith, Jacob mosteller, Brittany, Brent Whitehead, Kris Cooper
