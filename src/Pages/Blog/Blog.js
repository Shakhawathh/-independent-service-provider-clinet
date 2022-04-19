import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1>Differece Between Authorization and Authentication</h1>
      <p>
        Authentication is the process to verifies who the user is. and the other
        hand Authorization determines what resources a user can access the
        application. Authentication is visible to and partially changeable by
        the users. Authorization isn't visible to or changeable by the
        users.Authorization always takes place after authentication and
        Authentication is the first step of a good identity and access
        management process.
      </p>
      <br />
      <h1>
        Why you using Firebase? what other options do you have to implement
        authentication?
      </h1>
      <p>
        {" "}
        using firebase for making web site login sysytem and its easy and more
        secure for the sequrity purpose. we can implement many thing by the
        authentication . Those are : Password Requirements,Transferring the
        Data, Hashing Passwords etc
      </p>
      <br />
      <h1>
        What others Services does firebase Provide other then authentication?</h1>
        <p>There are many services which Firebase provides, Most useful of them
          are: 1. Cloud Firestore 
          2. Cloud Functions
           3. Hosting
            4. Cloud Storage
          5. Google Analytics
           6. Predictions</p>
      
    </div>
  );
};

export default Blog;
