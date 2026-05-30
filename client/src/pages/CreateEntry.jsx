import {useNavigate} from "react-router-dom";
import {createEntry} from "../api/entries.js";
import Navbar from "../components/Navbar.jsx";
import EntryForm from "../components/EntryForm.jsx";
import "../styles/editor.css";

export default function CreateEntry()
{
	const navigate = useNavigate();

	async function handleSubmit(formData)
	{
		try
		{
			await createEntry(formData);
			navigate("/");
		}
		catch (error)
		{
			console.error(error);
		}
	}

	return (
		<>
			<Navbar />

			<main className="editor-page">
				<div className="editor-page__header">
					<h1 className="editor-page__title">New Entry</h1>

					<p className="editor-page__subtitle">
						Capture what's on your mind today.
					</p>
				</div>

				<div className="editor-page__card">
					<EntryForm
						onSubmit={handleSubmit}
						submitText="Create Entry"
					/>
				</div>
			</main>
		</>
	);
}