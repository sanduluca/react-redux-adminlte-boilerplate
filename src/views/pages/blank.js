import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Blank extends Component {
    render() {
        return (
            <>
                <div className="content-wrapper" style={{minHeight: "1136px"}}>
                    {/* <!-- Content Header (Page header) --> */}
                    <section className="content-header">
                        <h1>
                            Blank page
                            <small>it all starts here</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><NavLink to="/"><i className="fa fa-dashboard"></i> Home</NavLink></li>
                            <li><NavLink to="/">Examples</NavLink></li>
                            <li className="active">Blank page</li>
                        </ol>
                    </section>

                    {/* <!-- Main content --> */}
                    <section className="content">

                        {/* <!-- Default box --> */}
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Title</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="" data-original-title="Collapse">
                                    <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">
                                    <i className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">Start creating your amazing application!</div>
                            {/* <!-- /.box-body --> */}
                            <div className="box-footer">Footer</div>
                            {/* <!-- /.box-footer--> */}
                        </div>
                        {/* <!-- /.box --> */}
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </>
        )
    }
}
