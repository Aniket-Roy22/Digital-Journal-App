import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getEntryById, updateEntry} from "../api/entries.js";
import Navbar from "../components/Navbar.jsx";
import EntryForm from "../components/EntryForm.jsx";
import "../styles/editor.css";

export default function EditEntry()
{
	const {id} = useParams();
	const [entry, setEntry] = useState(null);
	const navigate = useNavigate();

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

	async function handleSubmit(formData)
	{
		try
		{
			await updateEntry(id, formData);
			navigate("/");
		}
		catch (error)
		{
			console.error(error);
		}
	}

	if (!entry)
	{
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<Navbar />

			<main className="editor-page">
				<div className="editor-page__header">
					<h1 className="editor-page__title">Edit Entry</h1>

					<p className="editor-page__subtitle">
						Update your thoughts, reflections, and memories.
					</p>
				</div>

				<div className="editor-page__card">
					<EntryForm
						initialValues={{
							title: entry.title,
							content: entry.content,
							mood: entry.mood,
						}}
						onSubmit={handleSubmit}
						submitText="Save Changes"
					/>
				</div>
			</main>
		</>
	);
}