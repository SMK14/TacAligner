import React from 'react'

export const OngoingInfo = () => {
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
                        <a class="waves-effect parent-item js__control" href="#"><i class="menu-icon fa fa-flag"></i><span>Patient</span><span class="menu-arrow fa fa-angle-down"></span></a>
                        <ul class="sub-menu js__content">
                            <li><a href="patient_onboard.html">Onboard</a></li>
                            <li><a href="patient_new.html">New</a></li>
                            <li><a href="#">Not Accepted</a></li>

                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li>
                        <a href="processing_forms.html"><i class="menu-icon fa fa-adjust"></i><span>Processing Forms</span>
                            {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        </a>
                        {/* <!-- <span class="menu-arrow fa fa-angle-down"></span> --> */}
                        
                        {/* <!-- <ul class="sub-menu js__content">
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li><a href="ui-cards.html">Cards</a></li>
                            <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                            <li><a href="ui-components.html">Components</a></li>
                            <li><a href="ui-draggable-cards.html">Draggable Cards</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li><a href="ui-notification.html">Notification</a></li>
                            <li><a href="ui-range-slider.html">Range Slider</a></li>
                            <li><a href="ui-sweetalert.html">Sweet Alert</a></li>
                            <li><a href="ui-treeview.html">Tree view</a></li>
                            <li><a href="ui-typography.html">Typography</a></li>
                        </ul> --> */}
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>
                    <li class="current active">
                        <a class="waves-effect" href="ongoing_process.html"><i class="menu-icon fa fa-code"></i><span>Ongoing Processes</span>
                            {/* <!-- <span class="notice notice-yellow">6</span> --> */}
                        </a>
                    </li>
                    <li>
                        <a class="waves-effect" href="finished_process.html"><i class="menu-icon fa fa-code"></i><span>Finished Processes</span>
                            {/* <!-- <span class="notice notice-yellow">6</span> --> */}
                        </a>
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
            <h1 class="page-title">Processing Status</h1>
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
                <div class="col-md-3 col-xs-12">
                    <div class="box-content bordered primary margin-bottom-20">
                        <div class="profile-avatar">
                            <img src="http://placehold.it/450x450" alt="" />
                        </div>
                    </div>
                    {/* <!-- /.box-content bordered --> */}
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-md-3 col-xs-12 --> */}
                <div class="col-md-9 col-xs-12">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-user ico"></i>Details</h4>
                                {/* <!-- /.box-title --> */}

                                {/* <!-- /.dropdown js__dropdown --> */}
                                <div class="card-content">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Name:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Betty Simmons</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Age:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">30</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>

                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Number:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">0123456789</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        {/* <!-- /.col-md-6 --> */}

                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Email:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">youremail@gmail.com</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Address:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Vadodara, Gujarat</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}


                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Problem:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7">Lorem ipsum</div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.col-md-6 --> */}
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-xs-5"><label>Date:</label></div>
                                                {/* <!-- /.col-xs-5 --> */}
                                                <div class="col-xs-7"><a href="#">2021/02/05</a></div>
                                                {/* <!-- /.col-xs-7 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>

                                        {/* <!-- /.col-md-6 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.card-content --> */}

                            </div>
                            {/* <!-- /.box-content card --> */}
                        </div>
                        {/* <!-- /.col-md-12 --> */}
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-content card">
                                <h4 class="box-title"><i class="fa fa-user ico"></i>Patient Files</h4>
                            </div>
                            <button type="button" class="btn btn-violet margin-bottom-10 waves-effect waves-light">file 1</button>
                            <button type="button" class="btn btn-primary margin-bottom-10 waves-effect waves-light">file 2</button>
                            <button type="button" class="btn btn-success margin-bottom-10 waves-effect waves-light">file 3</button>
                            <button type="button" class="btn btn-warning margin-bottom-10 waves-effect waves-light">file 4</button>
                            <button type="button" class="btn btn-violet margin-bottom-10 waves-effect waves-light">file 5</button>
                            <button type="button" class="btn btn-primary margin-bottom-10 waves-effect waves-light">file 6</button>
                            <button type="button" class="btn btn-success margin-bottom-10 waves-effect waves-light">file 7</button>
                            <button type="button" class="btn btn-warning margin-bottom-10 waves-effect waves-light">file 8</button>
                        </div>
                    </div>


                </div>

            </div>
            {/* <!-- /.col-md-9 col-xs-12 --> */}
            <div class="row">
                <div class="col-md-6">
                    <div class="box-content card">
                        <h4 class="box-title"><i class="fa fa-user ico"></i>Aligner Dispatched</h4>
                        <div class="card-content">
                            <h4 class="box-title">1st Dispatch</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Dispatched Date:</td>
                                                <td>2021/02/05</td>
                                            </tr>
                                            <tr>
                                                <td>Received On:</td>
                                                <td>2021/02/07</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>No. of Sets:</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Upper Aligner</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>Lower Aligner</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box-content card">
                        <h4 class="box-title"><i class="fa fa-user ico"></i>In Process</h4>
                        <div class="card-content">
                            <h4 class="box-title">2nd Dispatch</h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>Tracking ID:</td>
                                                <td>A0000001</td>
                                            </tr>
                                            <tr>
                                                <td>Tracking Status:</td>
                                                <td>In Process</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-6">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>No. of Sets:</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Upper Aligner</td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>Lower Aligner</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <button type="button" class="btn btn-success margin-bottom-10 waves-effect waves-light">Received</button>
                            <button type="button" class="btn btn-warning margin-bottom-10 waves-effect waves-light">Start</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="box-content card">
                        <h4 class="box-title"><i class="fa fa-user ico"></i>Aligner Details</h4>
                        {/* <!-- /.box-title --> */}

                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div class="card-content">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Total no. of Sets:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">4</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col-md-6 --> */}


                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Start Date:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">2021/02/02</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col-md-6 --> */}
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Upper Aligner:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">2</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Next Aligner Date:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">2021/03/02</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col-md-6 --> */}
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Lower Aligner:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">1</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col-md-6 --> */}

                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-xs-5"><label>Pending Sets:</label></div>
                                        {/* <!-- /.col-xs-5 --> */}
                                        <div class="col-xs-7">1</div>
                                        {/* <!-- /.col-xs-7 --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col-md-6 --> */}


                            </div>
                            {/* <!-- /.row --> */}
                        </div>
                        {/* <!-- /.card-content --> */}

                    </div>
                    {/* <!-- /.box-content card --> */}
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="box-content">
                        <h4 class="box-title">Download Plan</h4>
                        {/* <!-- /.box-title --> */}
                        {/* <!-- <div class="dropdown js__drop_down">
                                    <a href="#" class="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                                    <ul class="sub-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else there</a></li>
                                        <li class="split"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                   
                                </div> --> */}
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <button type="button" class="btn btn-violet margin-bottom-10 waves-effect waves-light" data-toggle="modal" data-target="#boostrapModal-1">Download zip</button>
                        <button type="button" class="btn btn-primary margin-bottom-10 waves-effect waves-light" data-toggle="modal" data-target="#boostrapModal-1">pdf</button>
                        <button type="button" class="btn btn-success margin-bottom-10 waves-effect waves-light" data-toggle="modal" data-target="#boostrapModal-2">image</button>
                        <button type="button" class="btn btn-warning margin-bottom-10 waves-effect waves-light" data-toggle="modal" data-target="#boostrapModal-3">video</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box-content">
                        <h4 class="box-title">Payment info</h4>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Amount Paid:</td>
                                    <td>3000</td>
                                </tr>
                                <tr>
                                    <td>Pending Amount:</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>Date:</td>
                                    <td>2021/03/09</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* <!-- /.row small-spacing --> */}
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
    {/* <!--/#wrapper --> */}

    <div class="modal fade" id="boostrapModal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Comments</label>
                            <textarea type="text" class="form-control" id="exampleInputName1" placeholder="Comments" required></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm waves-effect waves-light" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="continue" tabindex="-1" role="dialog" aria-labelledby="myModalLabel-1">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel-1">Payment</h4>
                </div>
                <div class="modal-body">
                    <table class="margin-bottom-20">
                        <tbody>
                            <tr>
                                <td>Your Total Payment is: </td>
                                <td class="text-center">&nbsp; 2000</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" class="btn btn-default btn-sm waves-effect waves-light">Pay Now</button>
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light transfer">Transfer</button>

                    <div class="form-display">
                        <form class="margin-top-30">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Transaction ID</label>
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="Transaction ID" required/>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm waves-effect waves-light" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-sm waves-effect waves-light">Save</button>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
