# Node.js Crash Course - Blog Page

This project is a simple blog-style web application created as part of a Node.js crash course. It serves as a practical example of building a server-side application using Node.js and the Express framework, with EJS for templating.

Based on the remote repository, this project is also known as "Blog_Page".

## Features

*   Dynamic routing for different pages (e.g., Home, About).
*   Server-side rendering of HTML using the EJS templating engine.
*   Use of EJS partials to maintain reusable UI components like the header, navigation, and footer.
*   Serves as a foundational project for learning backend web development with Node.js.

## Technologies Used

*   **Runtime Environment**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js](https://expressjs.com/)
*   **View Engine**: [EJS](https://ejs.co/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installed on your system.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/pramodkumarrout/Blog_Page.git
    ```

2.  Navigate into the project directory:
    ```sh
    cd node-crash-course
    ```

3.  Install the necessary npm packages. If a `package.json` file doesn't exist, you will need to create one (`npm init -y`) and install the dependencies:
    ```sh
    npm install express ejs
    ```

4.  Start the application (assuming the main server file is `app.js` or `server.js`):
    ```sh
    node app.js
    ```

5.  Open your browser and visit `http://localhost:3000` (or the port configured in the application) to see it in action.