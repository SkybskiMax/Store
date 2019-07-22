import React from "react";
import OkIcon from 'react-icons/lib/io/checkmark';
import RepeatIcon from 'react-icons/lib/fa/repeat';

const Profile = (props) => {
    return (
        <div className="container mt-5">
            <div className="row bg-product rounded">
                <div className="col-md-6 py-4">
                    <form className="form" id="registrationForm">
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label>First name</label>
                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" />
                            </div>
                        </div>
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label>Last name</label>
                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-xs-6">
                                <label>Mobile</label>
                                <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" />
                            </div>
                        </div>
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" />
                            </div>
                        </div>
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label>Location</label>
                                <input type="email" className="form-control" id="location" placeholder="somewhere" />
                            </div>
                        </div>
                        <div className="form-group">

                            <div className="col-xs-6">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <br />
                                <button className="btn btn-lg btn-success" type="submit">
                                    Save
                                        <OkIcon className="ml-1" size={16} />
                                </button>
                                <button className="btn btn-lg" type="reset">
                                    Reset
                                        <RepeatIcon className="ml-1" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/*}
                    <div className="col-md-6 py-4">
                    <OrderItem/>  
                    <OrderItem/>   
                    <OrderItem/>   

                    </div>
        */}
            </div>
        </div>
    )
}

export default Profile