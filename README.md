# 📌 E-Commerce Application

## Live Link URL:
- https://https://sandybhai03.github.io/ShoppyGlobe/


## 🚀 Overview

ShoppyGlobe is a responsive e-commerce application built with React.js, Redux, and React Router. It allows users to browse products, search by keyword or category, view product details, add items to a cart, and complete a checkout process.

This project is part of an Internshala React Project with a total of 250 marks.

##✨ Features

- ✅ Home page have for basic functionality.

- ✅ Header section have logo, search-bar and cart buttton and also navbar with multiple categories. 

- ✅ Hero Section for Offers with Sliding effect.

- ✏️ category filter using simple filtering(homepage) and dynamic routing(Product List).

- 🗑️ View Product details about all products using unique id and dynamic routing.

- ✅ You can add, remove, increment and decrement item in cart.

- 💾 Data persists in localStorage.

- ✅ Its have Checkout Page and Order Success Pages.

- 🎨 Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

- React.js (Functional Components & Hooks)

- Tailwind CSS (for styling)

- Vite (React project setup)

## 📂 Folder Structure

```sh
📦 Online_Library_System
📂 src
┣ 📂 assets (icons/images)
┣ 📂 components
┃ ┣ 📄 Header.jsx
┃ ┣ 📄 Hero.jsx
┃ ┣ 📄 Darkmode.jsx
┃ ┣ 📄 PopUp.jsx
┃ ┣ 📄 ProductList.jsx
┃ ┣ 📄 ProductItem.jsx
┃ ┣ 📄 NotFound.jsx
┃ ┣ 📄 Footer.jsx
┣ 📂 pages
┃ ┣ 📄 Home.jsx
┃ ┣ 📄 CartPage.jsx
┃ ┣ 📄 CheckoutPage.jsx
┃ ┣ 📄 ProductDetailsPage.jsx
┃ ┣ 📄 SearchResults.jsx
┃ ┣ 📄 SuccessPage.jsx
┣ 📂 redux
┃ ┣ 📄 cartSlice.js
┃ ┣ 📄 store.js
┣ 📂 hooks
┃ ┣ 📄 useFetchProducts.js
┣ 📄 App.jsx
┣ 📄 index.css
┣ 📄 main.jsx
┣ 📄 index.html
┣ 📄 package.json
┣ 📄 package-lock.json
┣ 📄 vite.config.js
┣ 📄 tailwind.config.js
┗ 📄 README.md
```

## 🚀 Installation & Setup

1.  Clone the repository

```sh
git clone https://github.com/SandyBhai03/ShoppyGlobe.git
cd ShoppyGlobe
```

2. Install dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Open in browser

```sh
http://localhost:5173 Or http://localhost:5173/ShoppyGlobe/
```

## 📌 Usage Guide

1. You can Search Products according to name and category and also matches products.

2. Its have a category wise filter functionality on homepage and SearchResults Page both.

3. All products have (view details) Button for see the full information about.

4. You can add to cart products and checkout also.

## 📜 Components Or Pages Breakdown

- **App.jsx** - Main entry point that renders the ShoppyGlobe component.

- **HomePage** - Homepage carry all the component who have functionality for homepage.

- **ProductList** - ProductList have all the callection of products and also filter functionality according to category.

- **CartPage** - Show collection of all the products who added in cart with quantity and total prices.

- **Not Found** - If URL not matched Not Found Page Show.

## 📸 Screenshots
![React Online Library Management App Screenshot](https://github.com/SandyBhai03/Online_Library_System/blob/main/src/assets/Screenshot%20(217).png "Online Library Management App Screenshot1")
![React Online Library Management App Screenshot](https://github.com/SandyBhai03/Online_Library_System/blob/main/src/assets/Screenshot%20(218).png "Online Library Management App Screenshot2")
![React Online Library Management App Screenshot](https://github.com/SandyBhai03/Online_Library_System/blob/main/src/assets/Screenshot%20(219).png "Online Library Management App Screenshot3")
![React Online Library Management App Screenshot](https://github.com/SandyBhai03/Online_Library_System/blob/main/src/assets/Screenshot%20(220).png "Online Library Management App Screenshot4")
![React Online Library Management App Screenshot](https://github.com/SandyBhai03/Online_Library_System/blob/main/src/assets/Screenshot%20(221).png "Online Library Management App Screenshot5")

## 🛠️ Future Improvements

- ✏️ Implement better filter functionality.

- 🌟 Add User Profile Info and Login option.

- 🌟 Add to Book Order section.

- 🌍 Deploy the app online.

## 📜 License
This project is open-source and available under the MIT License.

**🔥 Happy Coding! 🚀(Sandeep Yadav)**