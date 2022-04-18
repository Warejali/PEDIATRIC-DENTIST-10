import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <section className="w-50 mx-auto p-3 mt-5">
                <h2 className="text-center mt-5"> Answers of Questions:</h2>
                <div>
                    <h5 className="py-3">Difference between Authorization and Authentication?</h5>
                    <table className="table table table-bordered border-primary">
                        <thead>
                            <tr>
                                <th className="text-center" scope="col">Authorization</th>
                                <th className="text-center" scope="col">Authentication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Authorization is the process of verifying what specific applications.</td>
                                <td>Authentication is the process of verifying who someone is.</td>
                            </tr>
                            <tr>
                                <td>Determining which employee has access to which floor is called authorization.</td>
                                <td>The process of verifying and confirming employees ID and passwords in an organization is called authentication</td>
                            </tr>
                            <tr>
                                <td> A good examples of authorization, Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application.</td>
                                <td>A common example is entering a username and password when you log in to a website.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h5 className="pt-3">Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p className="py-3">
                        Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop Website and mobile apps you can use Firebase for better performance.<br/>
                        <small>
                        Other options to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                        </small>
                    </p>
                    <h5 className="pt-3">What other services does firebase provide other than authentication?</h5>
                    <p className="pt-3">There are many services which Firebase provides other than 
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging.</li>
                    <small>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.</small>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blogs;