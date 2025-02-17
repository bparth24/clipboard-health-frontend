# Clipboard Health Frontend

## Introduction

This project is a frontend application for Clipboard Health, built using React and Create React App. It provides various dashboards and insights into marketplace performance, worker reliability, urgent shifts, pay rate optimization, and growth analysis.

## Project Structure

The project structure is as follows:

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
    - `dashboards/`: Reusable React components.
  - `utils/`: Utility functions and helpers.
- `public/`: Static files such as HTML, images, and fonts.
- `node_modules/`: Project dependencies.
- `package.json`: Project metadata and dependencies.
- `README.md`: Project documentation.

## Running the Project Locally

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/clipboard-health-frontend.git
   cd clipboard-health-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Building the Project Locally

To build the project locally, run:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Deploying to Vercel

To deploy the project to Vercel, follow these steps:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```

Follow the prompts to complete the deployment. The application will be deployed to a Vercel domain.
