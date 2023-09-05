import React from "react";
import DonateForm from "./DonateForm";
import { Col, Row } from "antd";
import { HashLink as Link } from "react-router-hash-link";

const DonateToys = () => {
	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Donate <span className='holder__title--highlight'>Toys</span>
					</h2>
					<div className='donatetoys'>
						<div className='donatetoys__block'>
							<Row>
								<Col span={12}></Col>
								<Col span={12}>
									<p>
										Donate your toys using our
										<strong> free collection service</strong>. With safety
										measures in place, donating your unneeded items couldn't be
										easier.
									</p>
									<Link to='#donate-form' className='button'>
										I want to send a donation
									</Link>
								</Col>
							</Row>
						</div>
					</div>
				</div>
				<div className='holder'>
					<h2 className='holder__title'>
						How it <span className='holder__title--highlight'>works?</span>
					</h2>
					<div className='donatetoys'>
						<div className='donatetoys__row'>
							<Row>
								<Col span={8}>
									<div className='donatetoys__row donatetoys__section--number'>
										01
									</div>
									<div className='donatetoys__row donatetoys__section--description'>
										Make a list of toys you want to donate.
									</div>
								</Col>
								<Col span={8}>
									<div className='donatetoys__row donatetoys__section--number'>
										02
									</div>
									<div className='donatetoys__row donatetoys__section--description'>
										Select a transport date, and send us an application.
									</div>
								</Col>
								<Col span={8}>
									<div className='donatetoys__row donatetoys__section--number'>
										03
									</div>
									<div className='donatetoys__row donatetoys__section--description'>
										Pack toys in cardboard boxes and we'll take care of the
										rest.
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
				<div className='holder'>
					<h2 className='holder__title'>
						Ready to donate your toys?{" "}
						<span className='holder__title--highlight'>Let's start!</span>
					</h2>
					<div id='donate-form' className='donatetoys__form'>
						<DonateForm />
					</div>
				</div>
			</div>
		</>
	);
};

export default DonateToys;
