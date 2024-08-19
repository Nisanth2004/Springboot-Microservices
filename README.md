# Microservices Project: Department, Employee, and Organization Services

This project demonstrates a microservices architecture built using Spring Boot. The services are:

- **Department Service**: Manages department-related data.
- **Employee Service**: Handles employee-related operations.
- **Organization Service**: Coordinates data between departments and employees.

## Centralized Configuration with Spring Cloud Config Server

All services retrieve their configuration from a centralized Spring Cloud Config Server. The configuration is hosted in the following GitHub repository:

[**Config Server Repository**](https://github.com/Nisanth2004/config-server-repo)

### Config Server Setup

Each microservice fetches its configuration from the config server, ensuring centralized management of configuration files. The config server is set up to pull configuration files from the GitHub repository.
