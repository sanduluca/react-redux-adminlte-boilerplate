import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import User from './../../assets/img/user2-160x160.jpg'

export default class Aside extends Component {
    render() {
        return (
            <>
                {/* <!-- Left side column. contains the logo and sidebar --> */}
                <aside className="main-sidebar">
                    {/* <!-- sidebar: style can be found in sidebar.less --> */}
                    <section className="sidebar">
                        {/* <!-- Sidebar user panel --> */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src={User} className="img-circle" alt="User"/>
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="/"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        {/* <!-- search form --> */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                        {/* <!-- /.search form --> */}
                        {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview"> 
                                <a href="/">
                                    <i className="fa fa-dashboard"></i> 
                                    <span>Dashboard</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li className="active"><NavLink to="index"><i className="fa fa-circle-o"></i> Dashboard v1</NavLink></li>
                                    <li><NavLink to="index2"><i className="fa fa-circle-o"></i> Dashboard v2</NavLink></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="/">
                                    <i className="fa fa-files-o"></i>
                                    <span>Layout Options</span>
                                    <span className="pull-right-container">
                                        <span className="label label-primary pull-right">4</span>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><NavLink to="pages/layout/top-nav"><i className="fa fa-circle-o"></i> Top Navigation</NavLink></li>
                                    <li><NavLink to="pages/layout/boxed"><i className="fa fa-circle-o"></i> Boxed</NavLink></li>
                                    <li><NavLink to="pages/layout/fixed"><i className="fa fa-circle-o"></i> Fixed</NavLink></li>
                                    <li><NavLink to="pages/layout/collapsed-sidebar"><i className="fa fa-circle-o"></i> Collapsed Sidebar</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="pages/widgets">
                                    <i className="fa fa-th"></i> <span>Widgets</span>
                                    <span className="pull-right-container">
                                    <small className="label pull-right bg-green">new</small>
                                    </span>
                                </NavLink>
                            </li>
                            <li className="treeview">
                                <a href="/">
                                    <i className="fa fa-laptop"></i>
                                    <span>UI Elements</span>
                                    <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><NavLink to="pages/UI/general"><i className="fa fa-circle-o"></i> General</NavLink></li>
                                    <li><NavLink to="pages/UI/icons"><i className="fa fa-circle-o"></i> Icons</NavLink></li>
                                    <li><NavLink to="pages/UI/buttons"><i className="fa fa-circle-o"></i> Buttons</NavLink></li>
                                    <li><NavLink to="pages/UI/sliders"><i className="fa fa-circle-o"></i> Sliders</NavLink></li>
                                    <li><NavLink to="pages/UI/timeline"><i className="fa fa-circle-o"></i> Timeline</NavLink></li>
                                    <li><NavLink to="pages/UI/modals"><i className="fa fa-circle-o"></i> Modals</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></NavLink></li>
                        </ul>
                    </section>
                    {/* <!-- /.sidebar --> */}
                </aside>
            </>
        )
    }
}
