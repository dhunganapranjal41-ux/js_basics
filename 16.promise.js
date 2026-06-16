//! promise

// state of promise
// 1. pending
// 2. fulfilled
// 3. rejected

// const promise = new Promise((resolve, reject) => {
//   // async task
//   setTimeout(() => {
//     resolve({ message: "success" });
//     // reject({ message: "error" });
//   }, 3000);
// });

// console.log(promise); //
console.log("start");

//! handling promise
// let isLoading = true;
// promise
//   .then((data) => {
//     console.log(data);
//     // console.log(promise); //
//   })
//   .catch((error) => {
//     console.log(error);
//     // console.log(promise);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    // async task
    setTimeout(() => {
      resolve({ message: "success" });
      // reject({ message: "error" });
    }, 3000);
  });
};

// const promise = promiseFunc()

// promiseFunc()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject({ message: "User fetch failed" });
      } else {
        resolve({
          _id: 10,
          name: "John Doe",
          email: "john@gmail.com",
          password: "123456",
        });
      }
    }, 3000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject({ message: "Posts fetch failed" });
      } else {
        resolve([
          {
            userId: userId,
            _id: 1,
            title: "Post 1",
          },
          {
            userId: userId,
            _id: 2,
            title: "Post 2",
          },
          {
            userId: userId,
            _id: 3,
            title: "Post 3",
          },
        ]);
      }
    }, 2000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        reject({ message: "comments fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            postId: postId,
            text: "comment 1",
          },
          {
            _id: 2,
            postId: postId,
            text: "comment 2",
          },
          {
            _id: 3,
            postId: postId,
            text: "comment 3",
          },
        ]);
      }
    }, 2000);
  });
};

//! promise chaining
//getUser()
//  .then((user) => {
//    console.log(user);
//    return getPosts(user._id);
//  })
//  .then((posts) => {
//   console.log(posts);
// 
 //   return getComments(posts[0]._id);
//  })
//  .then((comments) => {
//    console.log(comments);
//  })
//  .catch((error) => {
//    console.log(error);
//  });


//! async function

const a = async () => {
    const user = await getUser();
    console.log(user);
    const posts = await getPosts(user_id);
    console.log (posts);
    const comments = await getcomments (posts[0]._id);
    console.log(comments);
}
    



//console.log("end");

//!! fetch

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => {
    return response.json();
})
.then ((todo) => {
    console.log(todo);
})
.catch((error) => {
    console.log(error);
});


const getTodo = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const todo = await response.json();

        console.log(todo);
    } catch (error) {
        console.log(error);
    }
};

geTodo();const getPost = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const post = await response.json();

        console.log("Title:", post.title);
        console.log("Body:", post.body);
    } catch (error) {
        console.log(error);
    }
};

getPost();

getpostid();const getPostid = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/postsid/1"
        );

        const postid =  await response.json();
          console.log(postid);
    } catch (error) {
        console.log(error);
    }  

};
 getpostid();

console.log("end");