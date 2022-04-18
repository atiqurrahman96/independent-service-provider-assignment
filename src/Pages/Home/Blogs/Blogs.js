import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-primary'>Here are some questions whatever had been given by P-Hero authorities</h1>
            <div>
                <div>
                    <h3 className='text-danger'>What is the difference between Authentication vs Authorization?</h3>
                    <p>
                        Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
                        in other words , Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.on the other hand,Authorization works through settings that are implemented and maintained by the organization.Last of I can say that authentication  totally counts on the user but Authorization totally counts on the  organization.
                    </p>
                </div>
                <div>
                    <h3 className='text-danger'>Why are you using firebase?What other options do you have to implement authentication?  </h3>
                    <p>For creating project and also authenticate my project I use firebase . getting auth, I use firebase initialization means SDK. Yes, I have acquainted with also another option for authenticate my project so far. It is none other than React Firebase Hooks .</p>
                </div>
                <div>
                    <h3 className='text-danger'>What other services does firebase provide other than authentication?</h3>
                    <p>Without authentication firebase provides many more services such as I can mention that is Cloud Firestore, Cloud Functions ,Hosting, Google Analytics, Cloud Messaging,Dynamic Links,Remote Config</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;