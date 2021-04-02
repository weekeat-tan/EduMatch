# EduMatch
## Project Description
EduMatch is a front-end project as part of HackerTrail's recruitment process.

## Technology Stack
- Front-end - [Angular]

## Project Dependencies
Check that you have `Node.js` and `npm` installed by running the following commands:
```sh
node --version
npm --version
```

If you do not have `Node.js` installed, navigate to [Node.js] to download the latest release. Installing `Node.js` will automatically install `npm`.

To run the application, you must have `Angular CLI` installed on your local machine:
```sh
npm install -g @angular/cli
```

With `Angular CLI` installed, you can proceed with running the project in a local development server with the following commands:
```sh
cd <YOUR_PROJECT_DIRECTORY>/EduMatch
npm install
ng serve --open
```
This will install all the necessary dependencies and run the project at `http://localhost:4200/`.

## Project Design
EduMatch is developed based on [Angular Material] (built on top of [Google's Material Design]).

### Theming
Theming is adopted to ensure the application's design is consistent, with the colour scheme chosen from [Google's Material Color Style].
- Primary - Blue
- Accent - Indigo
- Warn - Red

Besides, styling common across the application is stored under `styles.css` to allow better reusability and a consistent look and feel.

### Design Pattern
Since Angular adopts Model–View–ViewModel (MVVM) design pattern:
- Model - TypeScript Objects
- View - Angular Template (`*.component.html`)
- ViewModel - Angular Component Class (`*.component.ts`)
- Front-end Logic - Angular Service Class (`*.service.ts`)

The project is categorised into the following directories:
- `classes` to store the Model objects.
- `guards` to store the Route Guards
    - To authenticate if a user has the appropriate rights to access a particular page
- `routers` to store the Routing modules
    - For navigation/routing.
- `screens` to store the View templates and ViewModel classes.
- `services` to store the Service classes.

Application URLs:
- `/index` - Landing Page (Task 1)
- `/sign_in` - Login Page (Task 2)
- `/sign_up` - Registration Page (Task 3)

Important Note:
- Necessary `NgModule`s are imported in the root module (i.e., `app.module.ts`).
- Root module bootstraps the main application view, called the root component (i.e., `app.component.css`, `app.component.html`, `app.component.ts`).
- The root component maintains all the navigation routes for the project.
- The root component view contains a footer element to display the application's footer across all the views.

### Dummy API Handling (Bonus Task)
- `HttpClient` is used in `user.service.ts` service class to invoke RESTful API exposed by the back-end server on https://nicson-test.6ac1e6al400ce.ap-southeast-1.cs.amazonlightsail.com.

### Assumptions
- Once a user is logged in, he/she cannot navigate to `/sign_in` and `/sign_up`.
- If a user tries to navigate to an invalid URL, the router will navigate the user back to the `/index` page.
- To make the application slightly responsive and adaptive, the design of the Landing page and Registration page changes slightly when the breakpoint is met (in this case, `1200px` screen width).


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

   [Angular]: <https://angular.io/>
   [Node.js]: <https://nodejs.org/en/>
   [Angular Material]: <https://material.angular.io/>
   [Google's Material Design]: <https://material.io/>
   [Google's Material Color Style]: <https://material.io/archive/guidelines/style/color.html#color-color-palette>
