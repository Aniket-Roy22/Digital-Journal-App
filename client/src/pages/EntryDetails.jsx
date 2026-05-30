import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getEntryById} from "../api/entries.js";
import Navbar from "../components/Navbar.jsx";
import "../styles/entry-details.css";

export default function EntryDetails()
{
	const {id} = useParams();
	const [entry, setEntry] = useState(null);

	useEffect(() => {
		loadEntry();
	}, []);

	async function loadEntry()
	{
		try
		{
			const response = await getEntryById(id);
			setEntry(response.data.entry);
		}
		catch (error)
		{
			console.error(error);
		}
	}

	if (!entry)
	{
		return (
			<>
				<Navbar />
				<div className="entry-details-loading">Loading...</div>
			</>
		);
	}

	return (
		<>
			<Navbar />

			<main className="entry-details">
				<div className="entry-details__card">
					<div className="entry-details__header">
						<h1 className="entry-details__title">{entry.title}</h1>

						<Link
							to={`/entries/${id}/edit`}
							className="btn btn-primary"
						>
							Edit Entry
						</Link>
					</div>

					<div className="entry-details__meta">
						<span className="entry-details__mood">
							Mood: {entry.mood}/10
						</span>

						<span className="entry-details__date">
							{new Date(entry.created_at).toLocaleString()}
						</span>
					</div>

					<div className="entry-details__content">
						{entry.content}
					</div>
				</div>
			</main>
		</>
	);
}