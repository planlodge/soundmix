import React from 'react';

import UserPlainView from './UserPlainView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <UserPlainView userList={props.followers} />

    );
}