//fetch user
console.log("start");
const getUser = (callback) => {
  setTimeout(() => {
    console.log("user fetched");

    callback(null, {
      _id: 10,
      name: "John Doe",
      email: "john@gmail.com",
      password: "123456",
    });
  }, 3000);
};

// get posts
const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("Posts fetched");

    const error = { message: "get post failed" };
    callback(null, [
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
  }, 2000);
};
// getUser(); //
// getPosts(1); //

//  callback

//* get comments
const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    callback(null, [
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
  }, 1000);
};

// 2015
//! callback hell  -> solution : promise
//* pyramid of doom
getUser((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("callback", user);

  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("callback", posts);

    getComments(posts[1]._id, (error, comments) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(comments);
    });
  });
});

console.log("end");