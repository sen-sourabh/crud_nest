<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center"><a href="https://github.com/nestjs/nest" target="_blank">Nest</a> is a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

This is the Nest CRUD Project for practice.

## Installation

```bash
$ npm install
```

## Running the lint and fix all lint errors

```bash
$ npm run lint
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Sourabh]
- Website - [(https://sourabhsen201313.wixsite.com/sourabh)]((https://sourabhsen201313.wixsite.com/sourabh))
- GitHub - [sen-sourabh](https://github.com/sen-sourabh)

## License

[GPL-3.0 license](LICENSE).

## Folder Structure

```css

├── src/
│ ├── app.controller.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ │
│ ├── modules/
│ │ ├── user/
│ │ │ ├── controllers/
│ │ │ │ ├── user.controller.ts
│ │ │ │
│ │ │ ├── dto/ (Data Transfer Objects)
│ │ │ │ ├── create-user.dto.ts
│ │ │ │ ├── update-user.dto.ts
│ │ │ │
│ │ │ ├── entities/
│ │ │ │ ├── user.entity.ts
│ │ │ │
│ │ │ ├── services/
│ │ │ │ ├── user.service.ts
│ │ │ │
│ │ │ ├── user.module.ts
│ │ │
│ │ ├── auth/
│ │ │ ├── controllers/
│ │ │ │ ├── auth.controller.ts
│ │ │ │
│ │ │ ├── services/
│ │ │ │ ├── auth.service.ts
│ │ │ │
│ │ │ ├── strategies/
│ │ │ │ ├── jwt.strategy.ts
│ │ │ │
│ │ │ ├── auth.module.ts
│ │ │
│ │ ├── other-modules/ (Add more modules as needed)
│ │
│ ├── shared/ (Re-usable components, pipes, etc.)
│ │ ├── filters/
│ │ │ ├── http-exception.filter.ts
│ │ │
│ │ ├── pipes/
│ │ │ ├── validation.pipe.ts
│ │ │
│ │ ├── guards/
│ │ │ ├── jwt-auth.guard.ts
│ │ │
│ │ ├── decorators/
│ │ │ ├── roles.decorator.ts
│ │
│ ├── main.ts (Application entry point)
│
├── test/ (Unit and E2E tests)
│
├── .env (Environment variables)
├── .env.example (Example .env file)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

## Description

Here is a brief description of each folder and file in the project structure:

- `src/`: This directory contains the main application files.
- `app.controller.ts`: The main controller that handles incoming HTTP requests and routes them to the appropriate service.
- `app.module.ts`: The root module that organizes all other modules and components of the application.
- `app.service.ts`: The main service that contains the application's business logic.
- `modules/`: This directory organizes the application into different modules, each responsible for specific features.
- `user/`: An example module for managing user-related operations.
  - `controllers/`: Contains controller files that handle user-related HTTP endpoints.
  - `dto/`: Contains Data Transfer Objects (DTOs) used for data validation and data transformation.
  - `entities/`: Contains the TypeORM entities representing the user data model.
  - `services/`: Contains service files that handle user-related business logic.
  - `user.module.ts`: The module file that ties together all the components of the user module.
- `auth/`: An example module for handling authentication and authorization.
  - `controllers/`: Contains controller files that handle authentication-related endpoints.
  - `services/`: Contains service files responsible for authentication and authorization logic.
  - `strategies/`: Contains strategy files for implementing authentication strategies (e.g., JWT strategy).
  - `auth.module.ts`: The module file that ties together all the components of the authentication module.
- `other-modules/`: You can add more modules here as needed, each with its own controller, service, etc.
- `shared/`: Contains re-usable components, filters, pipes, guards, and decorators that can be used across multiple modules.
- `test/`: Contains unit tests and end-to-end tests for your application.
- `.env`: The environment file where you can define environment variables for your application.
- `.env.example`: An example `.env` file to show the format and expected variables.
- `.gitignore`: The file to specify which files and directories should be ignored by version control (e.g., `.env`).
- `package.json`: Contains project metadata, dependencies, and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: This file, providing an overview of the project and its folder structure.

Folder structure might be quite differ as we customize this structure based on our specific project requirements. This is just a starting point to help setup-ing Nest.js project effectively.
