import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Difference between authorization and authentication</h1>
                <p>
                    Authentication means approve you for there require on the other hand authentication means what you can do.
                </p>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>
                    In this project I use firebase user authentication system. Becouse firebase esy to apply on project and ready-made UI that make me cool. I have more option to set authentication system in this project. such MongoDb, Okta, AuthO JSON Web Token etc. but firebase is more easy to use.
                </p>
            </div>
            <div>
                <h1> What other services does firebase provide other than authentication</h1>
                <p>Firebase also provide Realtime Database, Hosting, Cloud messaging, Google Analytics for free, Crashlytics, Performance and Test lab etc</p>
            </div>
        </div>
    );
};

export default Blogs;