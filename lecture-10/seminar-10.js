/* 
In this task, you will create a small product store where users can view available products, add products to their shopping cart, and complete transactions. You will interact with a fake API to handle data about products and users. The API will simulate the functionality of a real-world e-commerce system.

The API will have two main routes:
- /products: Fetches a list of all available products.
- /users: Fetches the details of a user (such as their shopping cart and purchase history) and allows them to make purchases.


Requirements:

1. Product Listing:
- Route: /products
- Method: GET
- Description: Fetch and display a list of products. Each product has the following fields:
    - id: The product ID (unique).
    - name: The name of the product.
    - price: The price of the product.
    - description: A brief description of the product.
    - category: The category of the product (e.g., "electronics", "clothing", etc.).
    - stock: The number of units available in stock


2. Users
- Route: /users
- Method: GET, POST
- Description: Fetch the details of a user (such as their shopping cart and purchase history) and allow them to make purchases.
- Fields:
    - id: The user ID (unique).
    - name: The name of the user.
    - email: The email address of the user.
    - cart: An array of products that the user has added to their shopping cart.
    - purchaseHistory: An array of products that the user has purchased.
*/

const API_URL = "http://localhost:3000";

async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// fetchProducts();

const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

// fetchSingleProduct(2);

async function addProduct(payload) {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// addProduct({
//   name: "Laptop",
//   price: 1000,
//   description: "A high-performance laptop",
//   category: "electronics",
//   stock: 10,
// });

async function changeProduct(id, payload) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// changeProduct(1, { price: 40 });

async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// deleteProduct(1);

async function getUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// getUsers();

async function getUser(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getUser(1);

async function createUser(payload) {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// createUser({
//   name: "Alice",
//   email: "alice@gmail.com",
//   cart: [],
//   purchaseHistory: [],
// });

async function updateUser(id, payload) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// updateUser(1, { email: "user@gmail.com" });

async function deleteUser(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// deleteUser(1);

async function addProductToCart(userId, productId) {
  try {
    const productResponse = await fetch(`${API_URL}/products/${productId}`);
    if (!productResponse.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await productResponse.json();

    const getUserResponse = await fetch(`${API_URL}/users/${userId}`);
    if (!getUserResponse.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await getUserResponse.json();
    const userCart = user.cart;
    userCart.push(product);

    const userResponse = await fetch(`${API_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: userCart }),
    });
    if (!userResponse.ok) {
      throw new Error("Failed to update user");
    }
    const data = await userResponse.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// addProductToCart(1, 4);

async function purchaseProducts(userId) {
  try {
    const getUserResponse = await fetch(`${API_URL}/users/${userId}`);
    if (!getUserResponse.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await getUserResponse.json();
    const purchaseHistory = user.purchaseHistory;

    const userCart = user.cart;
    const updatedUserCart = [];
    for (const product of userCart) {
      const updatedStock = product.stock - 1;

      const productResponse = await fetch(`${API_URL}/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stock: updatedStock }),
      });
      if (!productResponse.ok) {
        throw new Error("Failed to update product");
      }
      await productResponse.json();
      updatedUserCart.push({ ...product, stock: updatedStock });
    }
    console.log("updatedUserCart", updatedUserCart);
    purchaseHistory.push(...updatedUserCart);

    const userResponse = await fetch(`${API_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: [], purchaseHistory }),
    });
    if (!userResponse.ok) {
      throw new Error("Failed to update user");
    }
    const data = await userResponse.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

purchaseProducts(1);
