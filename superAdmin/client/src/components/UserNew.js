import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addUser } from '../actions/users';

const UserNew = ({ addUser }) => {

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        addess: '',
        role: ''
    });

    const { name, number, email, city, address, role } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]:e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        addUser(name, number, email, city, address, role)
    }

    return (
        <div>
          <div className="main-menu">
            <header className="header">
            <a href="index.html" className="logo">
                <img src="assets/images/tac-logo.png" alt=""/>
            </a>
            <button type="button" className="button-close fa fa-times js__menu_close"></button>
            <div className="user">
                <a href="#" className="avatar"><img src="http://placehold.it/80x80" alt=""/><span className="status online"></span></a>
                <h5 className="name"><a href="profile.html">Emily Stanley</a></h5>
                <h5 className="position">Super Admin</h5>
                {/* <!-- /.name --> */}
            </div>
            {/* <!-- /.user --> */}
        </header>
        {/* <!-- /.header --> */}
        <div className="content">
            <div className="navigation">
                <h5 className="title">MENU</h5>
                {/* <!-- /.title --> */}
                <ul className="menu js__accordion">
                    <li>
                        <Link to="/user-existing" className="waves-effect"><i className="menu-icon fa fa-home"></i><span>Existing User</span></Link>
                    </li>
                    <li className="current">
                        <Link to="/user-new" className="waves-effect"><i className="menu-icon fa fa-home"></i><span>New User</span></Link>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Office Admin</span></a>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Accountant</span></a>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i className="menu-icon fa fa-adjust"></i><span>CAD</span></a>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Planner</span></a>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i className="menu-icon fa fa-adjust"></i><span>Dentist</span></a>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                </ul>

            </div>
            {/* <!-- /.navigation --> */}
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /.main-menu --> */}

    <div className="fixed-navbar">
        <div className="pull-left">
            <button type="button" className="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
            <h1 className="page-title">New User</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div className="pull-right">
            {/* <!-- /.ico-item --> */}
            <div className="ico-item fa fa-arrows-alt js__full_screen"></div>
            <a href="#" className="ico-item fa fa-power-off js__logout"></a>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
    {/* <!-- /.fixed-navbar --> */}

    <div id="wrapper">
        <div className="main-content">

            <div className="row small-spacing">
                    <div className="col-lg-12 col-xs-12">
                        <div className="box-content card white">
                            <h4 className="box-title">Add New User</h4>
                            {/* <!-- /.box-title --> */}
                            <div className="card-content">
                                <form onSubmit = {e => onSubmit(e)}>
                                  <div className="form-left">
                                     <div className="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name" name="name" value={name} onChange={ e=>onChange(e)} required/>
                                     </div>
                                     <div className="form-group">
                                        <label for="exampleInputEmail1">Number</label>
                                        <input type="tel" className="form-control" id="exampleInputName1" placeholder="Enter Phone Number" name="number" value={number} onChange={ e=>onChange(e)}  required/>
                                     </div>
                                     <div className="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputName1" placeholder="Enter Email Id" name="email" value={email} onChange={ e=>onChange(e)}  required/>
                                     </div>
                                  </div>
                                  <div className="form-right">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">City</label>
                                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter City" name="city" value={city} onChange={ e=>onChange(e)}  required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Role</label>
                                        <select className="form-control form-select" id="exampleInputName1" aria-label="Default select example" name="role" value={role} onChange={ e=>onChange(e)}  required>
                                            <option selected value="office-admin">Office Admin</option>
                                            <option value="Accountant">Accountant</option>
                                            <option value="CAD">CAD</option>
                                            <option value="Planner">Planner</option>
                                            <option value="Dentist">Dentist</option>
                                        </select>
                                    </div>
                                    <div className="add-user-btn">
                                       <button type="submit" className="btn btn-success btn-sm waves-effect waves-light ">Add User</button>
                                    </div>
                                 </div>
                            </form>
                            {/* <!-- /.card-content --> */}
                        </div>
                        {/* <!-- /.box-content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 col-xs-12 --> */}

                    </div>

            <footer className="footer">
                <ul className="list-inline">
                    <li>
                        <script>
                            document.write(new Date().getFullYear())
                        </script> 2021 © The Aligner Company.
                    </li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </footer>
        </div>
        {/* <!-- /.main-content --> */}
    </div>
        </div>
        </div>
    )
}

UserNew.propTypes = {
    addUser: PropTypes.func.isRequired,
}

export default connect(null, { addUser })(UserNew)
