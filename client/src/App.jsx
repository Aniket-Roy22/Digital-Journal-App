import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import CreateEntry from "./pages/CreateEntry.jsx";
import EditEntry from "./pages/EditEntry.jsx";
import EntryDetails from "./pages/EntryDetails.jsx";
import "./index.css";

export default function App()
{
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{/* Public Routes */}

					<Route path="/login" element={<Login />} />

					<Route path="/register" element={<Register />} />

					{/* Protected Routes */}

					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/entries/new"
						element={
							<ProtectedRoute>
								<CreateEntry />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/entries/:id"
						element={
							<ProtectedRoute>
								<EntryDetails />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/entries/:id/edit"
						element={
							<ProtectedRoute>
								<EditEntry />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}