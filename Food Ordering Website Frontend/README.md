# **Faizan's Kitchen - Food Ordering Website**

A sleek, modern food ordering platform built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. This web application allows users to explore a wide range of food items, search and filter by category, and easily add items to the cart for checkout.

## **Live Demo**
You can explore the live application here:  
[Faizan's Kitchen - Food Ordering Website](https://food-ordering-website-gules.vercel.app/)

## **Features**
- **Dynamic Categories**: Filter food items by category (e.g., Pizza, Burger, etc.).
- **Search Functionality**: Search for food items by name.
- **Cart Management**: Add, remove, and adjust the quantity of food items in your cart.
- **Seamless Checkout**: View the total number of items and the total price, and proceed to checkout.

## **Tech Stack**
- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **State Management**: Redux (for cart, category, and search)
- **UI**: Responsive design using Tailwind CSS

## **How It Works**
1. **Category Filtering**: Users can select a category to view specific types of food. The app uses Redux to handle the state of the selected category.
2. **Search Functionality**: Users can search for food items by name. This works in conjunction with category filtering.
3. **Cart**: Add food items to the cart, increase or decrease quantities, and remove items.
4. **Checkout**: View a summary of the order with the total items and price.

## **Installation**
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Faizan-Iqbal-07/food-ordering-website.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd food-ordering-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## **Redux Toolkit Structure**
The app is powered by Redux Toolkit for state management, with the following slices:

- **Cart Slice**: Manages the cart state, allowing for adding, removing, and modifying the quantities of items.
- **Category Slice**: Keeps track of the selected food category.
- **Search Slice**: Manages the search query to filter food items based on the user's input.

## **Contributing**
Feel free to fork this repository, make changes, and create a pull request. All contributions are welcome!

## **License**
This project is open-source and available under the [MIT License](LICENSE).
