<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Jobfindbox from './../Element/Jobfindbox';

var bnr = require('./../../images/banner/bnr1.jpg');

const postBox = [
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
]

function Browsejobgrid(){
	return(
		<>	
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
					<PageTitle motherName="Home" activeName="Browse Job Grid" />
				</div>
				<div className="content-block">	
					<Jobfindbox />
					<div className="section-full bg-white browse-job p-b50">
						<div className="container">
							<div className="job-bx-title clearfix">
								<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
								<div className="float-right">
									<span className="select-title">Sort by freshness</span>
									<select className="custom-btn">
										<option>Last 2 Months</option>
										<option>Last Months</option>
										<option>Last Weeks</option>
										<option>Last 3 Days</option>
									</select>
								</div>
							</div>
							<ul className="post-job-bx browse-job-grid row">
								{postBox.map((item,index)=>(	
									<li className="col-lg-4 col-md-6" key={index}>
										<div className="post-bx">
											<div className="d-flex m-b30">
												<div className="job-post-info">
													<h5><Link to={"/job-detail"}>{item.title}</Link></h5>
													<ul>
														<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
														<li><i className="fa fa-bookmark-o"></i> Full Time</li>
														<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
													</ul>
												</div>
											</div>
											<div className="d-flex">
												<div className="job-time mr-auto">
													<Link to ={"#"}><span>Full Time</span></Link>
												</div>
												<div className="salary-bx">
													<span>$1200 - $ 2500</span>
												</div>
											</div>
											<label className="like-btn">
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</div>
									</li>
								))}	
							</ul>
							<div className="pagination-bx m-t30">
								<ul className="pagination">
									<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
									<li className="active"><Link to={"#"}>1</Link></li>
									<li><Link to={"#"}>2</Link></li>
									<li><Link to={"#"}>3</Link></li>
									<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<Footer />
		</>
	)
}
=======
import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Jobfindbox from './../Element/Jobfindbox';

var bnr = require('./../../images/banner/bnr1.jpg');

const postBox = [
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
]

function Browsejobgrid(){
	return(
		<>	
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
					<PageTitle motherName="Home" activeName="Browse Job Grid" />
				</div>
				<div className="content-block">	
					<Jobfindbox />
					<div className="section-full bg-white browse-job p-b50">
						<div className="container">
							<div className="job-bx-title clearfix">
								<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
								<div className="float-right">
									<span className="select-title">Sort by freshness</span>
									<select className="custom-btn">
										<option>Last 2 Months</option>
										<option>Last Months</option>
										<option>Last Weeks</option>
										<option>Last 3 Days</option>
									</select>
								</div>
							</div>
							<ul className="post-job-bx browse-job-grid row">
								{postBox.map((item,index)=>(	
									<li className="col-lg-4 col-md-6" key={index}>
										<div className="post-bx">
											<div className="d-flex m-b30">
												<div className="job-post-info">
													<h5><Link to={"/job-detail"}>{item.title}</Link></h5>
													<ul>
														<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
														<li><i className="fa fa-bookmark-o"></i> Full Time</li>
														<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
													</ul>
												</div>
											</div>
											<div className="d-flex">
												<div className="job-time mr-auto">
													<Link to ={"#"}><span>Full Time</span></Link>
												</div>
												<div className="salary-bx">
													<span>$1200 - $ 2500</span>
												</div>
											</div>
											<label className="like-btn">
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</div>
									</li>
								))}	
							</ul>
							<div className="pagination-bx m-t30">
								<ul className="pagination">
									<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
									<li className="active"><Link to={"#"}>1</Link></li>
									<li><Link to={"#"}>2</Link></li>
									<li><Link to={"#"}>3</Link></li>
									<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>	
			</div>
			<Footer />
		</>
	)
}
>>>>>>> 59bc75c7856c6c589f93f17cc6de3354c2f0c7c0
export default Browsejobgrid;