import {Link, useNavigate} from "react-router-dom";
import {logoutUser} from "../api/auth.js";
import {useAuth} from "../context/AuthContext.jsx";
import "../styles/navbar.css";

export default function Navbar()
{
	const {user, setUser} = useAuth();
	const navigate = useNavigate();

	async function handleLogout()
	{
		try
		{
			await logoutUser();
		}
		finally
		{
			localStorage.removeItem("accessToken");
			setUser(null);
			navigate("/login");
		}
	}

	return (
		<nav className="navbar">
			<Link to="/" className="navbar__logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					fill="white"
					viewBox="0 0 256 256"
				>
					<path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
				</svg>
				Digital Journal
			</Link>

			<div className="navbar__actions">
				<span className="navbar__username">{user?.username}</span>

				<button className="btn btn-danger" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</nav>
	);
}