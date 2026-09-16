import React from 'react';

const UsersDetailPage = async ({params}) => {
    const {userid} =await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const user = await res.json();
    console.log(user);  

    return (
        <div>
            <h2>Users Detail Page</h2>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}</p>
                    <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
            </div>
        </div>
    );
};

export default UsersDetailPage;