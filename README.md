# My-Portfolio-v-1.3.0
Multi-Feature React Portfolio
This repository hosts a dynamic React.js portfolio project, version 1.3.0, designed to showcase a range of modern web development skills. It features a central navigation hub that leads to three distinct mini-applications: an e-commerce simulation, a product counter and management tool, and a robust user management system with authentication and mock API integration.

Table of Contents
Project Overview

Key Features

Technologies Used

Differences from Previous Version

Installation and Setup

Usage

Folder Structure

Code Review and Optimization Suggestions

UI/UX Review and Improvements

Future Development

License

Contributing

1. Project Overview
This project serves as a comprehensive portfolio demonstrator built with React.js, illustrating proficiency in various aspects of web application development. It's structured as a single-page application (SPA) with a unique circular navigation interface leading to separate, fully functional modules.

The application modules include:

TechShop (Page 1): A simulated e-commerce platform with product Browse, filtering, search, and a shopping cart.

Product Counter (Page 2): A simple demonstration of component state management with interactive product quantity controls.

User Management (Page 3): A more advanced module showcasing full user authentication, data fetching, and CRUD operations against a mock backend API.

The project emphasizes responsive design and a clean, user-friendly interface.

2. Key Features
General
Responsive Design: Optimized for seamless viewing and interaction across various devices and screen sizes.

React Router DOM v6: Utilizes modern routing for smooth client-side navigation between different sections of the portfolio.

Modern React Hooks: Extensive use of useState, useEffect, useContext, useParams, and useNavigate for efficient component logic and state management.

TechShop (Page 1)
Product Display: Showcases a diverse range of digital products with details like name, price, discount, rating, and images.

Interactive Product Cards: Each product card features hover effects, a favorite button, and a quick add-to-cart option.

Product Detail Pages: Navigate to dedicated pages for in-depth product descriptions, specifications, and quantity selection.

Shopping Cart Management: Add items to a dynamic cart, adjust quantities, and remove items.

Search and Filter: Filter products by categories (laptop, mobile, tablet, accessories) and search by keywords.

Dark Mode Toggle: Users can switch between light and dark themes for improved viewing comfort.

Informational Pages: Dedicated About Us and Contact Us pages with relevant content and a contact form.

Mock Login/Register: Frontend-only login and registration forms for a simulated user experience.

Product Counter (Page 2)
Interactive Counters: Basic product management with functionalities to increment, decrement, delete, and reset product counts.

User Management System (Page 3)
User Authentication: Full login and registration functionality with mock API integration and JWT handling.

User Data Management (CRUD): View, create, update, and delete user records via API calls.

Protected Routes: Certain routes (e.g., dashboard, user list) require user authentication for access.

Form Validation: Client-side input validation using yup for robust form handling.

Skeleton Loading: Provides a smooth user experience during data fetching by displaying skeleton placeholders.

Global Product State: Integration of the product data and functions from product-context.js into Page 3, including a "Shopping Cart" view to display total products in stock.

3. Technologies Used
Frontend:

React.js: Core JavaScript library for building user interfaces.

React Router DOM: For declarative routing.

Bootstrap: CSS framework for responsive and consistent styling.

React Icons: A collection of popular icon libraries for React projects.

React Loading Skeleton: Provides simple, beautiful skeleton loading screens.

Axios: Promise-based HTTP client for the browser and Node.js.

Query-string: For parsing and stringifying URL query strings.

Yup: JavaScript schema builder for value parsing and validation.

Backend (Mock API):

JSON Server: A full fake REST API with zero coding.

JSON Server Auth: Extends JSON Server with authentication and authorization capabilities.

jsonwebtoken: Implementation of JSON Web Tokens.

4. Differences from Previous Version
This version (v-1.3.0) introduces significant architectural and functional enhancements, particularly in backend integration and state management, transforming the portfolio from a collection of isolated frontend demos into a more integrated application showcasing advanced patterns.

Major Enhancements:

Comprehensive User Authentication & Authorization (New in Page 3):

The most substantial addition is the introduction of a complete user authentication flow, including login, registration, and protected routes.

This is backed by a mock REST API using json-server and json-server-auth, demonstrating actual backend interaction for user data persistence and JWT-based authentication.

The previous version lacked this real API integration; its login page (LoginPage.js in page1) was purely frontend-simulated with simple alerts. The package.json from the previous version also did not include json-server-auth, jsonwebtoken, axios, or yup, confirming these are new integrations.

Centralized State Management for Page 2 with Context API:

The "Product Counter" (Page 2) previously managed its product state directly within the Page2.js component using useState and internal handler functions.

In the current version, this state and its associated logic (plusHandler, minusHandler, deleteHandler, resetHandler) have been refactored into a dedicated React Context Provider (product-context.js). This allows Page2.js and other components (like ShoppingCart.js in Page 3) to consume and interact with the product data more cleanly and efficiently, improving scalability and maintainability by avoiding prop drilling.

Improved User Interface Feedback with Skeleton Loading:

The current version introduces react-loading-skeleton to provide visual feedback during data fetching operations (e.g., when loading users in Page 3). This significantly enhances the user experience by indicating that content is being loaded.

Expanded Backend Capabilities:

The db.json structure has evolved to support user authentication, including a login array for storing credentials and potentially tokens.

New npm scripts like auth-server have been added to facilitate running the mock backend with authentication.

These fundamental changes in architecture and functionality make the current version a much more robust and feature-rich portfolio piece.

5. Installation and Setup
To get a local copy of the project up and running, follow these simple steps:

Clone the repository:

Bash

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_FOLDER>
Install frontend dependencies:

Bash

npm install
# or
yarn install
Set up and start the mock API server:
The project includes a mock backend using json-server and json-server-auth to handle user data and authentication for Page 3.

Ensure your db.json file is present at the root of the project.

Start the authentication server:

Bash

npm run auth-server
# or
yarn auth-server
This server will typically run on http://localhost:8000.

Start the React development server:

Bash

npm start
# or
yarn start
The application will automatically open in your default browser at http://localhost:3000.

6. Usage
Navigate through the different sections of the portfolio by clicking on the circular links on the homepage:

Accessing Page 1 (TechShop): Click the "1" circle.

Browse products, use the search bar and category filters.

Click on products to view details.

Add items to your cart (cart state is managed locally for Page 1).

Explore "About Us" and "Contact Us" pages from the navbar.

Toggle dark/light mode using the sun/moon icon in the top right.

The "Login / Register" link on Page 1 is a separate, frontend-only simulation.

Accessing Page 2 (Product Counter): Click the "2" circle.

Interact with the product cards to change their counts using the + and - buttons.

Use the "reset" button to clear all counts.

Accessing Page 3 (User Management System): Click the "3" circle.

Authentication: Navigate to Login or Register from the navbar. You can register new users or use existing credentials from db.json (e.g., john.doe@example.com / 129sesq) to log in.

User Operations: After logging in, you can access the "Users" page to view, update, or delete user records.

Dashboard: View the "Dashboard" page (protected).

Products & Cart (Page 3 specific): Access "Products" (which is Page 2 embedded within Page 3's context) and a "Cart" displaying total products from the product-context.

Logout: Use the "Logout" link to clear your session.

Routes like /page3/users and /page3/dashbord are protected and will redirect to login if not authenticated.

