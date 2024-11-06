
Host=> https://peritys-ki-shop-by-abhishek.vercel.app/


Figma link=> https://www.figma.com/design/SccEMsDuKjIVOLBmWwShm7/Pretisys-ki-shop-(Community)?node-id=0-1&t=Ulcnnbb9GCmgg2L7-1
---

# Next.js E-commerce Website

## Overview

This is a fully functional e-commerce website built using **Next.js**. The project integrates with the **Fake Store API** to handle product data dynamically and follows a **Figma design** for the UI/UX. The website features a responsive, user-friendly shopping experience with authentication, cart management, product CRUD operations, and checkout flow.

## Features

- **UI Implementation**: The application replicates the provided Figma design, ensuring a responsive and clean layout.
- **API Integration**: Connects to the Fake Store API to dynamically fetch product data and display it.
- **Authentication**: Implements user authentication with **NextAuth.js** for secure login, registration, and session management.
- **CRUD Operations**: Allows admin users to perform product CRUD operations (Create, Read, Update, Delete).
- **Shopping Cart**: Users can add items to the cart, adjust quantities, and remove items. The cart data is stored persistently.
- **Checkout Process**: A secure checkout flow to review cart contents and complete purchases.
- **State Management**: Manages global state with **React Context** or **Redux** for user authentication and cart contents.
- **SEO Optimization**: Fully optimized with **Next.js** features for better search engine visibility.
- **Responsive Design**: Ensures the site works seamlessly on both desktop and mobile devices.
- **Testing and Deployment**: Includes unit and integration tests for critical components, deployed to platforms like **Vercel** or **Netlify**.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design and custom styling.
- **NextAuth.js**: Authentication solution for Next.js applications.
- **Fake Store API**: A mock API used to retrieve product data for the e-commerce platform.
- **React Context/Redux**: For state management, particularly for cart and authentication.
- **Vercel/Netlify**: For deployment.
- **Jest/React Testing Library**: For unit and integration testing.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

Installation Steps
Clone the repository:


git clone https://github.com/abhishek-sharma20/peritys-ki-shop-by-abhishek.git
cd nextjs-ecommerce
Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_API_URL=https://fakestoreapi.com
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ```

4. Run the development server:

   Using npm:
   ```bash
   npm run dev
   ```

   Or using yarn:
   ```bash
   yarn dev
   ```

   Open the application at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

Or if you’re using yarn:

```bash
yarn test
```

This will run unit and integration tests for critical components in the app.

## Features Breakdown

### 1. **UI Implementation**

- Replicated the Figma design, with a focus on:
  - Product grid view.
  - Navigation bar and footer.
  - Product detail page.
  - Cart page and checkout flow.
- Utilized **Tailwind CSS** for custom styling and responsive design.

### 2. **API Integration**

- Integrated **Fake Store API** to fetch product data for displaying on the homepage and product detail pages.
- Efficient data fetching with **Next.js**'s `getServerSideProps` and `getStaticProps`.

### 3. **Authentication**

- Implemented **NextAuth.js** for handling:
  - Secure login and registration.
  - Session management.
  - Protected routes for user-specific actions.

### 4. **Product CRUD Operations**

- Admin users can:
  - Add new products.
  - Edit existing products.
  - Delete products from the database.
- Normal users can only view and add products to their carts.

### 5. **Shopping Cart**

- Persistent cart functionality using **React Context** to store cart items globally.
- Users can:
  - Add/remove items.
  - Update quantities.
  - View cart details.
- Cart is stored in local storage or integrated with the backend (if API supports it).

### 6. **Checkout Process**

- A checkout flow allowing users to:
  - Review cart items.
  - Enter shipping information.
  - Complete purchase.

### 7. **State Management**

- **React Context** or **Redux** is used for managing:
  - User authentication status.
  - Cart state globally across the app.

### 8. **SEO Optimization**

- Applied proper meta tags, structured data, and dynamic content rendering using **Next.js**'s built-in SEO tools.

### 9. **Deployment**

- Deployed to **Vercel** or **Netlify** for production.

## Stretch Goals

- **Live Product Search**: Implement a search feature that updates results as the user types.
- **Filters & Sorting**: Add product filtering and sorting options (e.g., by price, rating).
- **User Reviews**: Allow users to leave reviews and ratings on products.
- **User Profile Dashboard**: Create a dashboard for users to manage their orders, view purchase history, etc.

## Deployment

The app is deployed on **Vercel** or **Netlify**.

For deploying locally:

- Run `npm run build` or `yarn build`.
- Deploy the project to **Vercel** or **Netlify**.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

