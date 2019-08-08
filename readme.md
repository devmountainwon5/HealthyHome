# Healthy Home

## Ideas:
https://docs.google.com/document/d/1qCVqLaEN9QK-6KFv1GofUsgsayf2sI3gu0aWw4D7WVA/edit?usp=sharing

## slides:
https://docs.google.com/presentation/d/1Q4oMwDziixtM9ty8AgfUTQCrlUTga86d4C_gCIRYWqw/edit#slide=id.g5d2ec70f6a_0_21

## Contributors:
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://brentwhitehead.com"><img src="https://avatars2.githubusercontent.com/u/26074150?s=400&u=72e77aa525c8303d8aa4721972a0d6fd40822be7&v=4" width="100px;" alt="Brent Whitehead"/><br /><sub><b>Brent Whitehead</b></sub></a><br /><b title="Code">💻</b><b href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kentcdodds" title="Project Manager">👮</b></td>
    <td align="center"><a href="https://github.com/orgs/devmountainwon5/people/als735"><img src="https://avatars1.githubusercontent.com/u/47788095?s=460&v=4" width="100px;" alt="Abby Smith"/><br /><sub><b>Abby Smith</b></sub></a><br /><b title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/birdnmax"><img src="https://avatars2.githubusercontent.com/u/47994252?s=460&v=4" width="100px;" alt="Brittany Hancock"/><br /><sub><b>Brittany Hancock</b></sub></a><br /><b title="Code">💻</b></td>
    <td align="center"><a href="https://github.com/JacobMosteller"><img src="https://avatars2.githubusercontent.com/u/46802543?s=460&v=4" width="100px;" alt="Jacob Mosteller"/><br /><sub><b>Jacob Mosteller</b></sub></a><br /><b title="Code">💻</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jbolduc11"><img src="https://avatars1.githubusercontent.com/u/43829539?s=460&v=4" width="100px;" alt="Jared Bolduc"/><br /><sub><b>Jared Bolduc</b></sub></a><br /><b title="Code">💻</b></td>
    <td align="center"><a href="https://github.com/KrisCoop"><img src="https://avatars1.githubusercontent.com/u/47994388?s=460&v=4" width="100px;" alt="Kris Cooper"/><br /><sub><b>Kris Cooper</b></sub></a><br /><b title="Code">💻</b></td>
    <td align="center"><a href="https://github.com/StyeEye"><img src="https://avatars0.githubusercontent.com/u/48033738?s=460&v=4" width="100px;" alt="Matthew Sewell"/><br /><sub><b>Matthew Sewell</b></sub></a><br /><b title="Code">💻</b></td>
    <td align="center"><a href="https://github.com/joshsmith27"><img src="https://avatars1.githubusercontent.com/u/21051200?s=460&v=4" width="100px;" alt="Josh Smith"/><br /><sub><b>Josh Smith</b></sub></a><br /><b title="Code">💻</b><b title="CTO">😎</b></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

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
