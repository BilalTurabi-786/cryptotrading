import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="jumbotron-fluid container1">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"><img src="gallery/image 17.png" alt="" className="img-fluid" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="form-inline my-2 my-lg-0 ml-lg-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">About Us<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Assets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Legal</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">Log In</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link bg-info py-1 px-4" href="#" style={{ borderRadius: '5px', border: '1px solid #fff', color: '#fff !important' }}>Sign Up</a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </nav>
                    {/* header */}
                    <div className="row header">
                        <div className="col-lg-6 col-md-6 col-sm-12 first-col">
                            <h1 className="text-white heading">Buy & Sell Crypto Fast & Easy With MTN Mobile Money</h1>
                            <p className="mt-4">The entire Densik team knows what's good with traded and you can too with one week and a good
                                attitude.</p>
                            <div className="play-button mt-4">
                                <i className="fa fa-play-circle fa-3x" />
                                <p className="ml-3 mt-2 text-white">Watch Demo</p>
                                <i className="fa fa-long-arrow-alt-right fa-2x ml-3 mt-2 text-white" />
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div style={{ display: 'flex' }}>
                                        <div className="payment-box mr-1">
                                            <img src="gallery/image 25.png" alt="" className="img-fluid img" />
                                        </div>
                                        <div className="payment-box mx-1">
                                            <img src="gallery/Vector.png" alt="" className="img-fluid img" />
                                        </div>
                                        <div className="payment-box mx-1">
                                            <img src="gallery/Rectangle 1282.png" alt="" className="img-fluid img" />
                                        </div>
                                        <div className="payment-box mx-1">
                                            <img src="gallery/Vector (1).png" alt="" className="img-fluid img" />
                                        </div>
                                        <div className="payment-box mx-1">
                                            <img src="gallery/image 24.png" alt="" className="img-fluid img" />
                                        </div>
                                        <div className="payment-box mx-1">
                                            <img src="gallery/airtel.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <br />

                            {/* <div className="payment">
                                <img src="gallery/image 25.png" alt="" className="img-fluid" />
                                <img src="gallery/Vector.png" alt="" className="img-fluid" />
                                <img src="gallery/Rectangle 1282.png" alt="" className="img-fluid" />
                                <img src="gallery/Vector (1).png" alt="" className="img-fluid" />
                                <img src="gallery/image 24.png" alt="" className="img-fluid" />
                                <img src="gallery/airtel.jpg" alt="" className="img-fluid" />
                            </div> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card Crypto-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <nav>
                                            <div className="nav nav-tabs label" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Exchange Crypto</a>
                                                <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Buy/Sell Crypto</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="card-text">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="label">
                                                    <p>Pay</p>
                                                </div>
                                                <select name id className="form-control text-white">
                                                    <option value>BUSD</option>
                                                    <option value />
                                                </select>
                                                <nav className="mt-5">
                                                    <div className="nav nav-tabs1 ml-lg-auto" id="nav-tab" role="tablist">
                                                        <a className="nav-item nav-link1" id="sell" data-toggle="tab" href="#sell1" role="tab" aria-controls="nav-home" aria-selected="true">Sell<i className="fas fa-arrow-circle-up" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <a className="nav-item nav-link1 active " id="buy" data-toggle="tab" href="#buy1" role="tab" aria-controls="nav-profile" aria-selected="false">Buy<i className="fas fa-arrow-circle-down" /></a>
                                                    </div>
                                                </nav>
                                                <div className="tab-content" id="nav-tabContent">
                                                    <div className="tab-pane fade show active" id="buy1" role="tabpanel" aria-labelledby="buy">
                                                        <div className="label">
                                                            <p>Recieve (Estimated)</p>
                                                        </div>
                                                        <select name id className="form-control text-white">
                                                            <option value>USDC</option>
                                                            <option value />
                                                        </select>
                                                        <div className="label1 mt-4">
                                                            <p className="offset-4">1 BUSD = 1.000USDC</p>
                                                            <i className="fas fa-undo ml-3 mt-1 text-white" />
                                                        </div>
                                                        <button className="btn btn-block btn-success py-3">Exchange Crypto</button>
                                                        <p className="text-center mt-2">Enter an amount to see more trading details</p>
                                                        <hr />
                                                        <p className="text-center mt-2 text-success">GHANA</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="sell1" role="tabpanel" aria-labelledby="sell">
                                                        <div className="label">
                                                            <p>Recieve (Estimated)</p>
                                                        </div>
                                                        <select name id className="form-control text-white">
                                                            <option value>USDC</option>
                                                            <option value />
                                                        </select>
                                                        <div className="label1 mt-4">
                                                            <p className="offset-4">1 BUSD = 1.000USDC</p>
                                                            <i className="fas fa-undo ml-3 mt-1 text-white" />
                                                        </div>
                                                        <button className="btn btn-block btn-danger py-3">Exchange Crypto</button>
                                                        <p className="text-center mt-2">Enter an amount to see more trading details</p>
                                                        <hr />
                                                        <p className="text-center mt-2 text-success">GHANA</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="label">
                                                    <p>Pay</p>
                                                </div>
                                                <select name id className="form-control text-white">
                                                    <option value>BUSD</option>
                                                    <option value />
                                                </select>
                                                &nbsp; &nbsp; &nbsp; &nbsp;
                                                <i className="fa fa-arrow-circle-down fa-1x text-white offset-5 mt-4" />
                                                <div className="label">
                                                    <p>Recieve (Estimated)</p>
                                                </div>
                                                <select name id className="form-control text-white">
                                                    <option value>USDC</option>
                                                    <option value />
                                                </select>
                                                <div className="label1 mt-4">
                                                    <p className="offset-4">1 BUSD = 1.000USDC</p>
                                                    <i className="fas fa-undo ml-3 mt-1 text-white" />
                                                </div>
                                                <button className="btn btn-block btn-info py-3">Exchange Crypto</button>
                                                <p className="text-center mt-2">Enter an amount to see more trading details</p>
                                                <hr />
                                                <p className="text-center mt-2 text-success">GHANA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>

        </>
    )
}