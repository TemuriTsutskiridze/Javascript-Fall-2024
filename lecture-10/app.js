// GET

// async function fetchData() {
//   try {
//     const response = await fetch("http://localhost:3000/posts");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

// POST
// async function postData() {
//   try {
//     const response = await fetch("http://localhost:3000/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: "foo",
//         content: "bar",
//       }),
//     });
//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

//postData();

// PUT

// async function putData(id, payload) {
//   try {
//     const response = await fetch(`http://localhost:3000/posts/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });
//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// putData(2, { title: "foo1", content: "bar" });

// PATCH

// async function patchData(id, payload) {
//   try {
//     const response = await fetch(`http://localhost:3000/posts/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });
//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// patchData(2, { title: "foo2" });

// DELETE

// async function deleteData(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/posts/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteData(2);

// Query Parameters

async function fetchData() {
  try {
    const response = await fetch(
      "http://localhost:3000/todos?completed=true&title=Todo 2"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
