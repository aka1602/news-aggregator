# News aggregator Application Docker Setup

## Prerequisites

Before you begin, ensure that you have the following software installed on your machine:

- [Docker](https://www.docker.com/get-started)
- Node.js and npm (Node Package Manager) node 20

## Build Docker Image

1. Open a terminal in the root directory of your News aggregator project.

2. Run the following command to build the Docker image. Replace `<your-image-name>` with a name for your Docker image.

    ```bash
    docker build -t <your-image-name> .
    ```

    This command compiles your News aggregator application and creates a Docker image with the specified name.

## Run Docker Container

3. Once the Docker image is built, start a Docker container with the following command. Replace `<your-container-name>` with a name for your Docker container.

    ```bash
    docker run -p 8080:3000 --name <your-container-name> <your-image-name>
    ```

    - The `-p` option maps port 3000 from the container to port 8080 on your host machine. Adjust the ports as needed.
    - The `--name` option assigns a name to your container.

## Access Your Application

4. Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to access your News aggregator application running within the Docker container.

## Additional Notes



- To stop the Docker container, use the following command:

    ```bash
    docker ps 
    ```
    then check the name for docker image.

    then use below code paste the name in place of your-container-name

    ```bash
    docker stop <your-container-name>
    ```

- To remove the Docker container, use the following command:

    ```bash
    docker rm <your-container-name>
    ```

- To remove the Docker image, use the following command:

    ```bash
    docker rmi <your-image-name>
    ```

---

----------------------------------------------------------------------------------------------------------------------------------------------------

# Project Approach

## 1.Requirements Analysis:
 a. Prioritized features like article search, filtering, personalized news feed, and mobile responsiveness.

## 2.Technology Selection:

   React.js: Utilized Next.js for building a dynamic and interactive user interface.

   Css: Tailwind css

## Data Source Selection:
   a. The Guardian
   b. News api
   c. New York Times
   ===>Implement a service layer to fetch and normalize data from selected APIs.

## Design Planning:

   Wireframes: https://www.figma.com/file/VvkWsgHAemCEFNWfyjKvXW/news-aggregator?mode=dev

## Project Setup:
 Next.js , tailwind, shadcn,axios

## Implement Core Features:
   a. Article Search and Filtering:
   b. Personalized News Feed
   c. Data Fetching

## Mobile Responsiveness

## Docker Containerization

## Code Quality and Best Practices

## Testing


 

