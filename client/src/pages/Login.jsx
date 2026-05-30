import {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {loginUser} from "../api/auth.js";
import {useAuth} from "../context/AuthContext.jsx";
import "../styles/auth.css";

export default function Login()
{
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");
	const {user, setUser, loading} = useAuth();
	const navigate = useNavigate();

	if (!loading && user)
	{
		return <Navigate to="/" replace />;
	}

	function handleChange(event)
	{
		setFormData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	}

	async function handleSubmit(event)
	{
		event.preventDefault();
		setError("");

		try
		{
			const response = await loginUser(formData);
			localStorage.setItem("accessToken", response.data.accessToken);
			setUser(response.data.user);
			navigate("/");
		}
		catch (error)
		{
			setError(error.response?.data?.message ?? "Login failed");
		}
	}

	return (
		<div className="auth-page">
			<div className="auth-card">
				<h1 className="auth-title">Welcome Back</h1>

				<p className="auth-subtitle">
					Sign in to continue your journal.
				</p>

				<form className="auth-form" onSubmit={handleSubmit}>
					<input
						className="form-input"
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>

					<input
						className="form-input"
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
					/>

					<button
						className="btn btn-primary auth-submit"
						type="submit"
					>
						Login
					</button>
				</form>

				{error && <p className="error-message">{error}</p>}

				<div className="auth-footer">
					<p>
						Don't have an account?{" "}
						<Link to="/register">Register</Link>
					</p>
				</div>
			</div>
		</div>
	);
}