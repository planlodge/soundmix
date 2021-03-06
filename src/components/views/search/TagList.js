import React from 'react';
import { NavLink } from 'react-router-dom';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.data.map((item, i) => {
                return (
                    <div key={i} className="col s12 m6 l4">
                        <div className="hotBox">
                            <div className="card hoverable">
                                <p>
                                    <NavLink to={'/user/' + item.username}>
                                        {item.name}
                                    </NavLink>
                                </p>

                                <p>
                                    <img src={item.pictures.large} alt={item.name} /></p>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}