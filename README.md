# Health Challenge Tracker (Assignment\*)

This app is developed in Angular framework where it enables user to tracker daily exercise timely routine and help them to stay fit 💪

## App link

[Deployed app](https://6699e42fcc9d660008810835--effervescent-fudge-4e5338.netlify.app/)

## Specifications

- Add User Section
  - User can enter their details like Name, Workout type, Workout minutes.
- Search Data
  - User can search their data based on their Name or Workout type.
  - Data is displayed in table format with pagination of more than 5 users.
- Graphical Visualization
  - Total number of users and displayed and on clicking a specific user, graphical data is displayed on which it has their all workouts with the time period in minutes.

Refresh the page to see changes.

## Things to remember

- In Add user section
  - user input can only be in alphabets. (min 2 letters)
  - user workout minutes should be a positive number
  - all fields are required else the add workout button is disabled
  - form resets after clicking the add workout button, so user can enter more workouts.
- In Search Section
  - User can search by their name
  - User can also use the filter the see specific workout (filtering by workout user can see the total minutes only for that specific workout)
- In Graph Data Section
  - User can click on the specific user to see its workout plan.

## Tests

- Unit tests are written one component and one service
  - Search Component  
    `my-app\src\app\components\home\search\search.component.spec.ts`
  - Stored-Data Service (it retrieves data from local Storage)  
    `my-app\src\app\stored-data.service.ts`

## Start Project Locally

- Clone the Project

```bash
git clone https://github.com/minuszero-01/Health-Challenge-Tracker.git
```

- go to the project directory

```bash
cd project_name
```

- Run this command to install all packages

```bash
npm install
```

- then start your app. Navigate to `http://localhost:4200/`

```bash
ng serve
```
