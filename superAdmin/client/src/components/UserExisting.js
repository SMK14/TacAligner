import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export const UserExisting = () => {

    const [search,setSearch] = useState('');

    const onChange = e => {
        setSearch(e.target.value);
    };

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
                    <li className="current">
                       <Link to="/user-existing" className="waves-effect"><i className="menu-icon fa fa-home"></i><span>Existing User</span></Link>
                    </li>
                    <li>
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
            <h1 className="page-title">Existing Users</h1>
            {/* <!-- /.page-title --> */}
        </div>
        {/* <!-- /.pull-left --> */}
        <div className="pull-right">
            <div className="ico-item fa fa-arrows-alt js__full_screen"></div>
            <a href="#" className="ico-item fa fa-power-off js__logout"></a>
        </div>
        {/* <!-- /.pull-right --> */}
    </div>
    {/* <!-- /.fixed-navbar --> */}

    <div id="wrapper">
        <div className="main-content">
            <div className="row small-spacing">
                <div className="col-xs-12">
                    <div className="box-content">
                        <div className="results-top">
                            <div className="show-results">
                                <h5>Show</h5>
                                <select className="form-select results-select" aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="10">100</option>
                                </select>
                                <h5>entries</h5>
                            </div>
                            
                            <div className="search-results">
                                Search : <input type="text" className="form-control" name="search"  value={search} onChange={ e=>onChange(e)}/>
                            </div>
                        </div>
                        <table id="example-edit" className="table table-striped display" style={{width: 100+"%"}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>0123456789</td>
                                    <td>doctor@mail.com</td>
                                    <td>CAD</td>
                                    <td>Lorem</td>
                                    <td>Active</td>
                                    <td>
                                       <a href="#" className="btn btn-primary">
                                            Edit
                                        </a>
                                        <a href="#" className="btn btn-danger">
                                            Block
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>0123456789</td>
                                    <td>doctor@mail.com</td>
                                    <td>CAD</td>
                                    <td>Lorem</td>
                                    <td>Blocked</td>
                                    <td>
                                       <a href="#" className="btn btn-primary">
                                            Edit
                                        </a>
                                        <a href="#" className="btn btn-danger">
                                            Block
                                        </a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <hr className="dark"/>
                        <div className="pagination-div">
                            <div><p>Showing 1 to 2 of 2 entries</p></div>
                            <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- /.box-content --> */}
                </div>
                {/* <!-- /.col-xs-12 --> */}
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
    {/* <!--/#wrapper --> */}

    <div className="modal fade" id="boostrapModal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div className="modal-body">
                    <div className="row small-spacing">
                        <div className="col-md-3 col-xs-12">
                            <div className="box-content bordered primary margin-bottom-20">
                                <div className="profile-avatar">
                                    <img src="http://placehold.it/450x450" alt=""/>
                                </div>

                            </div>
                            {/* <!-- /.box-content bordered --> */}

                            {/* <!-- /.box-content --> */}
                        </div>
                        {/* <!-- /.col-md-3 col-xs-12 --> */}
                        <div className="col-md-9 col-xs-12">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="box-content card">
                                        <h4 className="box-title"><i className="fa fa-user ico"></i>Details</h4>
                                        {/* <!-- /.box-title --> */}

                                        <div className="card-content">
                                            <div className="row">
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name:</td>
                                                            <td>Tiger Nixon</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Number:</td>
                                                            <td>0123456789</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email:</td>
                                                            <td>doctor@mail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>City:</td>
                                                            <td>Lorem</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address:</td>
                                                            <td>Lorem, Ipsum</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Clinic Name:</td>
                                                            <td>Lorem</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Patients</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Onboarded Patients:</td>
                                                            <td>10</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                {/* <!-- /.col-md-6 --> */}
                                            </div>
                                            {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.card-content --> */}
                                               
                                    </div>
                                    {/* <!-- /.box-content card --> */}
                                </div>
                            </div>
                            {/* <!-- /.col-md-12 --> */}

                        </div>
                        {/* <!-- /.col-md-9 col-xs-12 --> */}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default btn-sm waves-effect waves-light" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
