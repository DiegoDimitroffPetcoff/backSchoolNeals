# API SCHOOL
## INTRODUCTION
**Stack MERN**
This project is designed to be scalable and compatible with various types of databases, with MongoDB being the initial choice. The primary objective of this project is to provide administrative users with the ability to configure various functionalities. For example, they can showcase different projects through images and offer courses where users with "alumn" status can access videos and complete the entire course to acquire knowledge about nail painting techniques.

**The architecture**
The architecture of this project follows a modular and scalable approach. It is designed to separate concerns and promote code reusability. Here's an overview of the architectural components:

***Model***: The model represents the data structure of the application. It defines the schema and interacts with the database. In this project, MongoDB is used as the database, and Mongoose is utilized as an Object Data Modeling (ODM) library to define and work with the data models.

***Controller***: The controller handles the logic and business operations of the application. It receives requests from the routes and interacts with the necessary services to process the data. It is responsible for handling input validation, calling the appropriate services, and returning the response to the client.

***Service***: The service layer contains the core business logic of the application. It encapsulates reusable functions and performs complex operations. Services interact with the models and other external services as needed. They handle tasks such as data manipulation, data retrieval, and external API integration.

***Routes***: The routes define the endpoints and HTTP methods that the application exposes. They receive incoming requests, validate input, and route the requests to the corresponding controller methods. Each route is responsible for a specific resource or functionality in the application.

***Server***: The server file is responsible for setting up the Express application, configuring middleware, and connecting to the database. It initializes the necessary components, such as routes and database connections, and starts the server to listen for incoming requests.

By separating concerns into distinct components, this architecture promotes code organization, maintainability, and scalability. It allows for easy addition of new features, modification of existing functionality, and testing of individual components.
