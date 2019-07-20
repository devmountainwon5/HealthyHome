<h1>- Healthy Home -</h1>

Ideas:
https://docs.google.com/document/d/1qCVqLaEN9QK-6KFv1GofUsgsayf2sI3gu0aWw4D7WVA/edit?usp=sharing

slides:
https://docs.google.com/presentation/d/1Q4oMwDziixtM9ty8AgfUTQCrlUTga86d4C_gCIRYWqw/edit#slide=id.g5d2ec70f6a_0_21

======================================================================================================
                                    MVP
======================================================================================================
quiz - views/login/quiz/quiz
barometer - healthy-home/src/Views/Home/Subviews/HomeHealth/HomeHealth
tasks / full crud on a “todo list” (home/ yard/ custom??) / calendar / barometer / registration 
subscriptions to tasks/ upcoming feed/calendar view
email / text / pop-up reminders
login/authentication views/login/login/login

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

======================================================================================================
                                      SKELETON
======================================================================================================

healthy-home
|__Server/
|  |__Middleware/
|  |  |__auth.js
|  |__Services/
|  |  |__user.js
|  |__controller/
|     |__index.js
|__public/
|  |__favicon.ico
|  |__index.html
|  |__manifest.json
|__src/
|  |__Ducks/
|  |  |__action_creator.js
|  |  |__reducer.js
|  |  |__store.js
|  |__Shared Components/
|  |  |__sharedComponents.js
|  |__Views/
|  |  |__Calendar/
|  |  |   |__Calendar.css
|  |  |   |__Calendar.js
|  |  |__Home/
|  |  |   |__Subviews/
|  |  |   |  |__HomeHealth/
|  |  |   |  |  |__HomeHealth.js 
|  |  |   |  |  |__HomeHealth.css
|  |  |   |  |__ToDos/
|  |  |   |     |__ToDos.css
|  |  |   |     |__ToDos.js
|  |  |   |__Home.css
|  |  |   |__Home.js
|  |  |__Login/
|  |  |    Login/
|  |  |      login.js
|  |  |    Quiz/
|  |  |      quiz.js
|  |  |__List of Tips/
|  |      tipslist.js
|  |__App.css
|  |__App.js
|  |__App.test.js
|  |__Routes.js
|  |__index.css
|  |__index.js
|  |__serviceWorker.js
|__.gitignore
|__index.js
|__package-lock.json
|__package.json
|__yarn.lock


Contributors: Matthew Sewell, Jared, Mandy, Abby Smith, Jacob mosteller, Brittany, Brent Whitehead, Kris Cooper
