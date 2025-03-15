# Dynamic URL Shortener with Database Integration

## Overview

This project is a dynamic URL shortener application built with Node.js, Express, and MySQL (using Drizzle ORM). It allows users to shorten any URL by submitting a form with an optional custom shortcode. The application stores URL mappings in the database and displays all shortened URLs on the homepage. When a shortened URL is clicked, the user is redirected to the original URL.

## Features

- **Dynamic URL Shortening:**  
  Shorten any URL by providing a custom shortcode or letting the system generate one.
  
- **Database Integration:**  
  Persistent storage of URL mappings using MySQL and Drizzle ORM.
  
- **Dynamic Rendering:**  
  Displays a list of all shortened URLs using EJS templates.
  
- **Redirection:**  
  Clicking a shortened URL redirects the user to the corresponding original URL.
  
- **Error Handling:**  
  Basic error handling for invalid inputs and non-existent shortcodes.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web framework for building the application.
- **EJS:** Templating engine for dynamic HTML rendering.
- **MySQL:** Relational database for persistent storage.
- **Drizzle ORM:** Lightweight ORM for interacting with MySQL.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd url-shortener
