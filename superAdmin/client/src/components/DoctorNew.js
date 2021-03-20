import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addDoctor } from '../actions/doctors'

const DoctorNew = ({ addDoctor }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        addess: '',
        clinicname: ''
    });

    const { name, number, email, city, address, clinicname } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]:e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        addDoctor(name, number, email, city, address, clinicname)
    }


    return (
        <div>
            <div class="main-menu">
        <header class="header">
            <a href="index.html" class="logo">
                <img src="assets/images/tac-logo.png" alt=""/>
            </a>
            <button type="button" class="button-close fa fa-times js__menu_close"></button>
            <div class="user">
                <a href="#" class="avatar"><img src="http://placehold.it/80x80" alt=""/><span class="status online"></span></a>
                <h5 class="name"><a href="profile.html">Emily Stanley</a></h5>
                <h5 class="position">Administrator</h5>
                {/* <!-- /.name --> */}
                <div class="control-wrap js__drop_down">
                    <i class="fa fa-caret-down js__drop_down_button"></i>
                    <div class="control-list">
                        <div class="control-item"><a href="profile.html"><i class="fa fa-user"></i> Profile</a></div>
                        <div class="control-item"><a href="#"><i class="fa fa-gear"></i> Settings</a></div>
                        <div class="control-item"><a href="#"><i class="fa fa-sign-out"></i> Log out</a></div>
                    </div>
                    {/* <!-- /.control-list --> */}
                </div>
                {/* <!-- /.control-wrap --> */}
            </div>
            {/* <!-- /.user --> */}
        </header>
        {/* <!-- /.header --> */}
        <div class="content">

            <div class="navigation">
                <h5 class="title">Navigation</h5>
                {/* <!-- /.title --> */}
                <ul class="menu js__accordion">
                    <li>
                        <a class="waves-effect" href="index.html"><i class="menu-icon fa fa-home"></i><span>Dashboard</span></a>
                    </li>
                    <li>
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>User</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="user_new.html">New</a></li>
                            <li><a href="user_existing.html">Existing</a></li>

                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li class="current">
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-adjust"></i><span>Doctor</span>
                            <span class="menu-arrow fa fa-angle-down"></span>
                        </a>
                        <ul class="sub-menu js__content">
                            <li><a href="doctor_new.html">New</a></li>
                            <li><a href="doctor_existing.html">Existing</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Office Admin</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Accountant</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>CAD</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Planner</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="#"><i class="menu-icon fa fa-adjust"></i><span>Dentist</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="aligner-ready.html">Ready</a></li>
                            <li><a href="aligner-dispatched.html">Dispatched</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                </ul>

            </div>
            {/* <!-- /.navigation --> */}
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /.main-menu --> */}

    <div class="fixed-navbar">
        <div class="pull-left">
            <button type="button" class="menu-mobile-button glyphicon glyphicon-menu-hamburger js__menu_mobile"></button>
            <h1 class="page-title">New Doctor</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div class="pull-right">
            <div class="ico-item">
                <a href="#" class="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
                <form action="#" id="searchform-header" class="searchform js__toggle"><input type="search" placeholder="Search..." class="input-search"/><button class="fa fa-search button-search" type="submit"></button></form>
                {/* <!-- /.searchform --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <div class="ico-item fa fa-arrows-alt js__full_screen"></div>
            {/* <!-- /.ico-item fa fa-fa-arrows-alt --> */}
            <div class="ico-item toggle-hover js__drop_down ">
                <span class="fa fa-th js__drop_down_button"></span>
                <div class="toggle-content">
                    <ul>
                        <li><a href="#"><i class="fa fa-github"></i><span class="txt">Github</span></a></li>
                        <li><a href="#"><i class="fa fa-bitbucket"></i><span class="txt">Bitbucket</span></a></li>
                        <li><a href="#"><i class="fa fa-slack"></i><span class="txt">Slack</span></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i><span class="txt">Dribbble</span></a></li>
                        <li><a href="#"><i class="fa fa-amazon"></i><span class="txt">Amazon</span></a></li>
                        <li><a href="#"><i class="fa fa-dropbox"></i><span class="txt">Dropbox</span></a></li>
                    </ul>
                    <a href="#" class="read-more">More</a>
                </div>
                {/* <!-- /.toggle-content --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <a href="#" class="ico-item fa fa-envelope notice-alarm js__toggle_open" data-target="#message-popup"></a>
            <a href="#" class="ico-item pulse"><span class="ico-item fa fa-bell notice-alarm js__toggle_open" data-target="#notification-popup"></span></a>
            <a href="#" class="ico-item fa fa-power-off js__logout"></a>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
    {/* <!-- /.fixed-navbar --> */}

    <div id="notification-popup" class="notice-popup js__toggle" data-space="75">
        <h2 class="popup-title">Your Notifications</h2>
        {/* <!-- /.popup-title --> */}
        <div class="content">
            <ul class="notice-list">
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Anna William</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-warning"><i class="fa fa-warning"></i></span>
                        <span class="name">Update Status</span>
                        <span class="desc">Failed to get available update data. To ensure the please contact us.</span>
                        <span class="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Jennifer</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Michael Zenaty</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">50 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Simon</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">1 hour</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-violet"><i class="fa fa-flag"></i></span>
                        <span class="name">Account Contact Change</span>
                        <span class="desc">A contact detail associated with your account has been changed.</span>
                        <span class="time">2 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Helen 987</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">Yesterday</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Denise Jenny</span>
                        <span class="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span class="time">Oct, 28</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Thomas William</span>
                        <span class="desc">Like your post: “Facebook Messenger”</span>
                        <span class="time">Oct, 27</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#notification-popup --> */}

    <div id="message-popup" class="notice-popup js__toggle" data-space="75">
        <h2 class="popup-title">Recent Messages<a href="#" class="pull-right text-danger">New message</a></h2>
        {/* <!-- /.popup-title --> */}
        <div class="content">
            <ul class="notice-list">
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">John Doe</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Harry Halen</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Thomas Taylor</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Jennifer</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/80x80" alt=""/></span>
                        <span class="name">Helen Candy</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Anna Cavan</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 hour ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar bg-success"><i class="fa fa-user"></i></span>
                        <span class="name">Jenny Betty</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 day ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="avatar"><img src="http://placehold.it/128x128" alt=""/></span>
                        <span class="name">Denise Peterson</span>
                        <span class="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span class="time">1 year ago</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" class="notice-read-more">See more messages <i class="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#message-popup --> */}
    <div id="wrapper">
        <div class="main-content">

            <div class="row small-spacing">

                    <div class="col-lg-12 col-xs-12">
                        <div class="box-content card white">
                            <h4 class="box-title">Add New Doctor</h4>
                            {/* <!-- /.box-title --> */}
                            <div class="card-content">
                                <form onSubmit = {e => onSubmit(e)}>
                                    <div class="form-group">
                                        <label for="input-file-now">Doctor's Photo</label>
                                        <input type="file" id="input-file-now" class="dropify" />
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Name"
                                        name = "name" value = {name} onChange={ e=>onChange(e)} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Number</label>
                                        <input type="tel" class="form-control" id="exampleInputName1" placeholder="Enter Phone Number" name = "number" value = {number} onChange={ e=>onChange(e)} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="exampleInputName1" placeholder="Enter Email Id" name = "email" value = {email} onChange={ e=>onChange(e)} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">City</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter City" name = "city" value = {city} onChange={ e=>onChange(e)} required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address</label>
                                        <textarea type="text" class="form-control" id="exampleInputName1" placeholder="Enter Address" name = "address" value = {address} onChange={ e=>onChange(e)} required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Clinic Name</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter Name" name = "clinicname" value = {clinicname} onChange={ e=>onChange(e)}required/>
                                    </div>


                                    {/* <!-- <div class="form-group">
                                    <label for="exampleInputFile">File input</label>
                                    <input type="file" id="exampleInputFile">
                                    <p class="help-block">Example block-level help text here.</p>
                                </div> --> */}
                                    {/* <!-- <div class="checkbox margin-bottom-20">
                                    <input type="checkbox" id="chk-1"><label for="chk-1">Check me out</label>
                                </div> --> */}

                                    <button type="submit" class="btn btn-success btn-sm waves-effect waves-light">Create</button>
                            </form>
                            {/* <!-- /.card-content --> */}
                        </div>
                        {/* <!-- /.box-content --> */}
                    </div>
                    {/* <!-- /.col-lg-6 col-xs-12 --> */}

                    </div>

            <footer class="footer">
                <ul class="list-inline">
                    <li>
                        <script>
                            document.write(new Date().getFullYear())
                        </script> © The Aligner Company.
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

DoctorNew.propTypes = {
    addDoctor: PropTypes.func.isRequired,
}

export default connect(null, { addDoctor })(DoctorNew)
