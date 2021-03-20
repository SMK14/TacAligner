import React,{Component} from 'react';
import tacLogo from '../../img/tac-logo.png'

const MainArea=()=>{
    return(
        <div>
            <div className="main-menu">
        <header className="header">
            <a href="index.html" className="logo">
                <img src={tacLogo} alt="" />
            </a>
            <button type="button" className="button-close fa fa-times js__menu_close"></button>
            <div className="user">
                <a href="#" className="avatar"><img src="http://placehold.it/80x80" alt="" /><span className="status online"></span></a>
                <h5 className="name"><a href="profile.html">Emily Stanley</a></h5>
                <h5 className="position">Administrator</h5>
                {/* <!-- /.name --> */}
                <div className="control-wrap js__drop_down">
                    <i className="fa fa-caret-down js__drop_down_button"></i>
                    <div className="control-list">
                        <div className="control-item"><a href="profile.html"><i className="fa fa-user"></i> Profile</a></div>
                        <div className="control-item"><a href="#"><i className="fa fa-gear"></i> Settings</a></div>
                        <div className="control-item"><a href="#"><i className="fa fa-sign-out"></i> Log out</a></div>
                    </div>
                </div>
                {/* <!-- /.control-wrap --> */}
            </div>
            {/* <!-- /.user --> */}
        </header>
        {/* <!-- /.header --> */}
        <div className="content">

            <div className="navigation">
                <h5 className="title">Navigation</h5>
                {/* <!-- /.title --> */}
                <ul className="menu js__accordion">
                    <li className="current">
                        <a className="waves-effect" href="/"><i className="menu-icon fa fa-home"></i><span>Dashboard</span></a>
                    </li>
                    <li>
                        <a className="waves-effect parent-item js__control" href="#"><i className="menu-icon fa fa-flag"></i><span>User</span><span className="menu-arrow fa fa-angle-down"></span></a>
                        <ul className="sub-menu js__content">
                            <li><a href="/register-user">New</a></li>
                            <li><a href="/users-all">Existing</a></li>

                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>

                    <li>
                        <a className="waves-effect parent-item js__control" href=""><i className="menu-icon fa fa-adjust"></i><span>Doctor</span>
                            <span className="menu-arrow fa fa-angle-down"></span>
                        </a>
                        <ul className="sub-menu js__content">
                            <li><a href="/register-doctor">New</a></li>
                            <li><a href="/doctors-all">Existing</a></li>
                            <li><a href="/doctor-login">Login</a></li>
                        </ul>
                        {/* <!-- /.sub-menu js__content --> */}
                    </li>


                    <li>
                        <a className="waves-effect" to="/finishedProcess"><i className="menu-icon fa fa-code"></i><span>Completed Patients</span>
                            {/* <!-- <span className="notice notice-yellow">6</span> --> */}
                        </a>
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
            <h1 className="page-title">Home</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div className="pull-right">
            <div className="ico-item">
                <a href="#" className="ico-item fa fa-search js__toggle_open" data-target="#searchform-header"></a>
                <form action="#" id="searchform-header" className="searchform js__toggle"><input type="search" placeholder="Search..." className="input-search" /><button className="fa fa-search button-search" type="submit"></button></form>
                {/* <!-- /.searchform --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <div className="ico-item fa fa-arrows-alt js__full_screen"></div>
            {/* <!-- /.ico-item fa fa-fa-arrows-alt --> */}
            <div className="ico-item toggle-hover js__drop_down ">
                <span className="fa fa-th js__drop_down_button"></span>
                <div className="toggle-content">
                    <ul>
                        <li><a href="#"><i className="fa fa-github"></i><span className="txt">Github</span></a></li>
                        <li><a href="#"><i className="fa fa-bitbucket"></i><span className="txt">Bitbucket</span></a></li>
                        <li><a href="#"><i className="fa fa-slack"></i><span className="txt">Slack</span></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i><span className="txt">Dribbble</span></a></li>
                        <li><a href="#"><i className="fa fa-amazon"></i><span className="txt">Amazon</span></a></li>
                        <li><a href="#"><i className="fa fa-dropbox"></i><span className="txt">Dropbox</span></a></li>
                    </ul>
                    <a href="#" className="read-more">More</a>
                </div>
                {/* <!-- /.toggle-content --> */}
            </div>
            {/* <!-- /.ico-item --> */}
            <a href="#" className="ico-item fa fa-envelope notice-alarm js__toggle_open" data-target="#message-popup"></a>
            <a href="#" className="ico-item pulse"><span className="ico-item fa fa-bell notice-alarm js__toggle_open" data-target="#notification-popup"></span></a>
            <a href="#" className="ico-item fa fa-power-off js__logout"></a>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
    {/* <!-- /.fixed-navbar --> */}

    <div id="notification-popup" className="notice-popup js__toggle" data-space="75">
        <h2 className="popup-title">Your Notifications</h2>
        {/* <!-- /.popup-title --> */}
        <div className="content">
            <ul className="notice-list">
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">John Doe</span>
                        <span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span className="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Anna William</span>
                        <span className="desc">Like your post: “Facebook Messenger”</span>
                        <span className="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar bg-warning"><i className="fa fa-warning"></i></span>
                        <span className="name">Update Status</span>
                        <span className="desc">Failed to get available update data. To ensure the please contact us.</span>
                        <span className="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span className="name">Jennifer</span>
                        <span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span className="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Michael Zenaty</span>
                        <span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span className="time">50 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Simon</span>
                        <span className="desc">Like your post: “Facebook Messenger”</span>
                        <span className="time">1 hour</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar bg-violet"><i className="fa fa-flag"></i></span>
                        <span className="name">Account Contact Change</span>
                        <span className="desc">A contact detail associated with your account has been changed.</span>
                        <span className="time">2 hours</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Helen 987</span>
                        <span className="desc">Like your post: “Facebook Messenger”</span>
                        <span className="time">Yesterday</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span className="name">Denise Jenny</span>
                        <span className="desc">Like your post: “Contact Form 7 Multi-Step”</span>
                        <span className="time">Oct, 28</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Thomas William</span>
                        <span className="desc">Like your post: “Facebook Messenger”</span>
                        <span className="time">Oct, 27</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" className="notice-read-more">See more messages <i className="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#notification-popup --> */}

    <div id="message-popup" className="notice-popup js__toggle" data-space="75">
        <h2 className="popup-title">Recent Messages<a href="#" className="pull-right text-danger">New message</a></h2>
        {/* <!-- /.popup-title --> */}
        <div className="content">
            <ul className="notice-list">
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">John Doe</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">10 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Harry Halen</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">15 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Thomas Taylor</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">30 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span className="name">Jennifer</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/80x80" alt="" /></span>
                        <span className="name">Helen Candy</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">45 min</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span className="name">Anna Cavan</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">1 hour ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar bg-success"><i className="fa fa-user"></i></span>
                        <span className="name">Jenny Betty</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">1 day ago</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="avatar"><img src="http://placehold.it/128x128" alt="" /></span>
                        <span className="name">Denise Peterson</span>
                        <span className="desc">Amet odio neque nobis consequuntur consequatur a quae, impedit facere repellat voluptates.</span>
                        <span className="time">1 year ago</span>
                    </a>
                </li>
            </ul>
            {/* <!-- /.notice-list --> */}
            <a href="#" className="notice-read-more">See more messages <i className="fa fa-angle-down"></i></a>
        </div>
        {/* <!-- /.content --> */}
    </div>
    {/* <!-- /#message-popup --> */}
    <div id="wrapper">
        <div className="main-content">
            <div className="row small-spacing">
                <div className="col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Activity</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown -->
                        <div id="smil-animation-index-chartist-chart" className="chartist-chart" style="height: 320px"></div>
                        <!-- /#smil-animation-chartist-chart.chartist-chart --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Projects</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content widget-stat">
                            <div className="percent bg-warning"><i className="fa fa-line-chart"></i>53%</div>
                            {/* <!-- /.percent --> */}
                            <div className="right-content">
                                <h2 className="counter">837</h2>
                                {/* <!-- /.counter --> */}
                                <p className="text">Projects</p>
                                {/* <!-- /.text --> */}
                            </div>
                            {/* <!-- /.right-content --> */}
                            <div className="clear"></div>
                            {/* <!-- /.clear --> */}
                            <div className="process-bar">
                                <div className="bar-bg bg-warning"></div>
                                <div className="bar js__width bg-warning" data-width="70%"></div>
                                {/* <!-- /.bar js__width bg-success --> */}
                            </div>
                            {/* <!-- /.process-bar --> */}
                        </div>
                        {/* <!-- /.content widget-stat --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Memory usage</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content widget-stat-chart">
                            <div className="c100 p76 small blue js__circle">
                                <span>76%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            {/* <!-- /.c100 p58 --> */}
                            <div className="right-content">
                                <h2 className="counter">804</h2>
                                {/* <!-- /.counter --> */}
                                <p className="text">Disk usage</p>
                                {/* <!-- /.text --> */}
                            </div>
                            {/* <!-- /.right-content --> */}
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Visitor Analytics</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content widget-stat">
                            <div className="percent bg-danger"><i className="fa fa-line-chart"></i>+40%</div>
                            {/* <!-- /.percent --> */}
                            <div className="right-content">
                                <h2 className="counter">976</h2>
                                {/* <!-- /.counter --> */}
                                <p className="text">Visitors today</p>
                                {/* <!-- /.text --> */}
                            </div>
                            {/* <!-- /.right-content --> */}
                            <div className="clear"></div>
                            {/* <!-- /.clear --> */}
                            <div className="process-bar">
                                <div className="bar-bg bg-danger"></div>
                                <div className="bar js__width bg-danger" data-width="70%"></div>
                                {/* <!-- /.bar js__width bg-success --> */}
                            </div>
                            {/* <!-- /.process-bar --> */}
                        </div>
                        {/* <!-- /.content widget-stat --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Monthly Sales</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content widget-stat-chart">
                            <div className="c100 p94 small green js__circle">
                                <span>94%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            {/* <!-- /.c100 p58 --> */}
                            <div className="right-content">
                                <h2 className="counter">3922</h2>
                                {/* <!-- /.counter --> */}
                                <p className="text">Sales</p>
                                {/* <!-- /.text --> */}
                            </div>
                            {/* <!-- /.right-content --> */}
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}

                <div className="col-lg-4 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Statistics</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content">
                            <div id="chart-2" className="js__chart" data-type="column" data-chart="'Year'/'Statistics' | '2010'/75 | '2011'/42 | '2012'/75 | '2013'/38 | '2014'/19 | '2015'/93 "></div>
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-4 col-md-12 --> */}

                <div className="col-lg-4 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Total Projects</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content">
                            <div id="chart-3" className="js__chart" data-type="curve" data-chart="'Year'/'Desktop'/'Mobile' | '2008'/53/0 | '2009'/35/73 | '2010'/89/14 | '2011'/50/50 | '2012'/86/37 | '2013'/47/89 | '2014'/75/50 | '2015'/100/70 "></div>
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-4 col-md-12 --> */}

                <div className="col-lg-4 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Daily Sales</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="content">
                            <div id="chart-1" className="js__chart" data-type="donut" data-chart="'Type'/'Number' | 'Normal Sales'/50 | 'In-Site Sales'/20 | 'Mail-Order Sales'/20"></div>
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-4 col-xs-12 --> */}

                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content user-info">
                        <div className="avatar"><img src="http://placehold.it/128x128" alt="" /></div>
                        {/* <!-- /.avatar --> */}
                        <div className="right-content">
                            <h4 className="name">Betty Simmons</h4>
                            {/* <!-- /.name --> */}
                            <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                            <div className="text-warning small">Manager</div>
                            {/* <!-- /.text-warning --> */}
                        </div>
                        {/* <!-- /.right-content --> */}
                    </div>
                    {/* <!-- /.user-info --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content user-info">
                        <div className="avatar"><img src="http://placehold.it/128x128" alt=""/></div>
                        {/* <!-- /.avatar --> */}
                        <div className="right-content">
                            <h4 className="name">Michael Zenaty</h4>
                            {/* <!-- /.name --> */}
                            <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                            <div className="text-custom small">Support</div>
                            {/* <!-- /.text-custom --> */}
                        </div>
                        {/* <!-- /.right-content --> */}
                    </div>
                    {/* <!-- /.user-info --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content user-info">
                        <div className="avatar"><img src="http://placehold.it/128x128" alt=""/></div>
                        {/* <!-- /.avatar --> */}
                        <div className="right-content">
                            <h4 className="name">Denise Peterson</h4>
                            {/* <!-- /.name --> */}
                            <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                            <div className="text-success small">Designer</div>
                            {/* <!-- /.text-warning --> */}
                        </div>
                        {/* <!-- /.right-content --> */}
                    </div>
                    {/* <!-- /.user-info --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-3 col-md-6 col-xs-12">
                    <div className="box-content user-info">
                        <div className="avatar"><img src="http://placehold.it/128x128" alt=""/></div>
                        {/* <!-- /.avatar --> */}
                        <div className="right-content">
                            <h4 className="name">Pamela Wood</h4>
                            {/* <!-- /.name --> */}
                            <p><a href="mailto:hello@ninjateam.org">hello@ninjateam.org</a></p>
                            <div className="text-danger small">Developer</div>
                            {/* <!-- /.text-custom --> */}
                        </div>
                        {/* <!-- /.right-content --> */}
                    </div>
                    {/* <!-- /.user-info --> */}
                </div>
                {/* <!-- /.col-lg-3 col-md-6 col-xs-12 --> */}
                <div className="col-lg-6 col-xs-12">
                    <div className="box-content">
                        <div id="calendar-widget"></div>
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-6 col-xs-12 --> */}
                <div className="col-lg-6 col-xs-12">
                    <div className="box-content">
                        <h4 className="box-title">Purchases</h4>
                        {/* <!-- /.box-title --> */}
                        <div className="dropdown js__drop_down">
                            <a href="#" className="dropdown-icon glyphicon glyphicon-option-vertical js__drop_down_button"></a>
                            <ul className="sub-menu">
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else there</a></li>
                                <li className="split"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                            {/* <!-- /.sub-menu --> */}
                        </div>
                        {/* <!-- /.dropdown js__dropdown --> */}
                        <div className="table-responsive table-purchases">
                            <table className="table table-striped margin-bottom-10">
                                <thead>
                                    <tr>
                                        <th style={{width:"40%"}}>Product</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>State</th>
                                        <th style={{width:"5%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amaza Themes</td>
                                        <td>$71</td>
                                        <td>Nov 12,2016</td>
                                        <td className="text-success">Completed</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Macbook</td>
                                        <td>$142</td>
                                        <td>Nov 10,2016</td>
                                        <td className="text-danger">Cancelled</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Samsung TV</td>
                                        <td>$200</td>
                                        <td>Nov 01,2016</td>
                                        <td className="text-warning">Pending</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Ninja Admin</td>
                                        <td>$200</td>
                                        <td>Oct 28,2016</td>
                                        <td className="text-warning">Pending</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Galaxy Note 5</td>
                                        <td>$200</td>
                                        <td>Oct 28,2016</td>
                                        <td className="text-success">Completed</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>CleanUp Themes</td>
                                        <td>$71</td>
                                        <td>Oct 22,2016</td>
                                        <td className="text-success">Completed</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Facebook WP Plugin</td>
                                        <td>$10</td>
                                        <td>Oct 15,2016</td>
                                        <td className="text-success">Completed</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 7</td>
                                        <td>$100</td>
                                        <td>Oct 12,2016</td>
                                        <td className="text-warning">Pending</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Nova House</td>
                                        <td>$100</td>
                                        <td>Oct 12,2016</td>
                                        <td className="text-warning">Pending</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Repair Cars</td>
                                        <td>$35</td>
                                        <td>Oct 12,2016</td>
                                        <td className="text-warning">Pending</td>
                                        <td><a href="#"><i className="fa fa-plus-circle"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- /.table --> */}
                        </div>
                        {/* <!-- /.table-responsive --> */}
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-lg-6 col-xs-12 --> */}
            </div>
            {/* <!-- /.row --> */}
            <footer className="footer">
                <ul className="list-inline">
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
    )
}

export default MainArea;