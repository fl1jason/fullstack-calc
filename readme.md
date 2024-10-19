# Full-Stack Calculator Application

This is a simple full-stack calculator application with a Node.js/Express backend and a static HTML/CSS/JavaScript
front-end. The calculator allows users to perform basic arithmetic operations and also stores the calculation history
using a REST API.

## Features

- **Frontend**: A simple HTML-based calculator located in the `public` folder.
- **Backend**: A Node.js/Express backend that provides a REST API for storing and retrieving calculations.
- **REST API**:
- `POST /api/calculate`: Save a new calculation.
- `GET /api/calculations`: Retrieve past calculations.

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm)

### Steps to Run the Application

1. **Clone the Repository**:

```bash
git clone git@github.com:fl1jason/fullstack-calc.git

```

2. **Navigate to the Project Folder**:

```bash
cd fullstack-calc
```

3. **Install Dependencies**:
   Run the following command to install the necessary dependencies:

```bash
npm install
```

4. **Run the Application**:
   Use the following command to launch the application in development mode:

```bash
npm run dev
```

5. **Access the Application**:
   To load the application, open your browser and go to:

```bash
http://localhost:3000
```

## REST API

The backend provides a simple REST API for managing calculations.

Endpoints

POST /api/calculate

• Description: Saves a new calculation.
• Request Body: JSON object with the calculation details.
Example:

```json
[
  {
    "num1": "44",
    "num2": "3",
    "operation": "add",
    "result": 47
  }
]
```

GET /api/calculations

    •	Description: Retrieves the list of past calculations.
    •	Response: An array of JSON objects representing the calculation history.

Example response:

```json
[
  {
    "num1": "44",
    "num2": "3",
    "operation": "add",
    "result": 47
  }
]
```
