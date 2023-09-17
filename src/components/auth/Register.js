import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		name: "",
	});

	const { email, password, name } = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { email, password, name };
			const response = await fetch("http://localhost:5000/auth/register", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const parseRes = await response.json();
			localStorage.setItem("token", parseRes.token);
			setAuth(true);

			if (parseRes.token) {
				localStorage.setItem("token", parseRes.token);
				setAuth(true);
			} else {
				setAuth(false);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='holder'>
					<h2 className='holder__title'>
						Register
						<span className='holder__title--highlight'> form</span>
					</h2>
					<div className='login_container'>
						<form className='login_form' onSubmit={onSubmitForm}>
							<input
								className='form__item'
								type='text'
								name='email'
								value={email}
								placeholder='Email'
								onChange={(e) => onChange(e)}
							/>
							<input
								className='form__item'
								type='password'
								name='password'
								value={password}
								placeholder='Password'
								onChange={(e) => onChange(e)}
							/>
							<input
								className='form__item'
								type='text'
								name='name'
								value={name}
								placeholder='Name'
								onChange={(e) => onChange(e)}
							/>

							<button className='form_btn--active'>Register</button>
						</form>
						<div className='addition_container'>
							<p className='decor--border'></p>
							<Link className='form_btn--inactive' to='/login'>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
