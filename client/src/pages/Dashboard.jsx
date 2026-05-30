import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getAllEntries, deleteEntry} from "../api/entries.js";
import Navbar from "../components/Navbar.jsx";
import EntryCard from "../components/EntryCard.jsx";
import "../styles/dashboard.css";

export default function Dashboard()
{
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		loadEntries();
	}, []);

	async function loadEntries()
	{
		try
		{
			const response = await getAllEntries();
			setEntries(response.data.entries);
		}
		catch (error)
		{
			console.error(error);
		}
	}

	async function handleDelete(id)
	{
		try
		{
			await deleteEntry(id);
			setEntries((prev) => prev.filter((entry) => entry.id !== id));
		}
		catch (error)
		{
			console.error(error);
		}
	}

	return (
		<>
			<Navbar />

			<main className="dashboard">
				<div className="dashboard__header">
					<h1>My Journal</h1>

					<Link to="/entries/new" className="btn btn-primary">
						New Entry
					</Link>
				</div>

				<div className="entry-grid">
					{entries.map((entry) => (
						<EntryCard
							key={entry.id}
							entry={entry}
							onDelete={handleDelete}
						/>
					))}
				</div>
			</main>
		</>
	);
}