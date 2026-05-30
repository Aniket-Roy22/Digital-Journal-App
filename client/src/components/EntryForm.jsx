import {useState} from "react";
import "../styles/entry-form.css";

export default function EntryForm({
	initialValues = {
		title: "",
		content: "",
		mood: 5,
	},
	onSubmit,
	submitText,
})
{
	const [formData, setFormData] = useState(initialValues);

	function handleChange(event)
	{
		const {name, value} = event.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit(event)
	{
		event.preventDefault();
		await onSubmit(formData);
	}

	return (
		<form className="entry-form" onSubmit={handleSubmit}>
			<div className="entry-form__group">
				<label className="entry-form__label" htmlFor="title">
					Title
				</label>

				<input
					id="title"
					className="form-input"
					type="text"
					name="title"
					placeholder="Give your entry a title..."
					value={formData.title}
					onChange={handleChange}
				/>
			</div>

			<div className="entry-form__group">
				<label className="entry-form__label" htmlFor="mood">
					Mood
				</label>

				<select
					id="mood"
					name="mood"
					className="form-input"
					value={formData.mood}
					onChange={handleChange}
				>
					<option value="1">1 · Very Low</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5 · Neutral</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10 · Excellent</option>
				</select>

				<small className="entry-form__hint">
					Rate your mood from 1 to 10.
				</small>
			</div>

			<div className="entry-form__group">
				<label className="entry-form__label" htmlFor="content">
					Journal Entry
				</label>

				<textarea
					id="content"
					className="form-textarea"
					name="content"
					placeholder="What's on your mind today?"
					value={formData.content}
					onChange={handleChange}
				/>

				<div className="entry-form__footer">
					<span className="entry-form__counter">
						{formData.content.length} characters
					</span>
				</div>
			</div>

			<div className="entry-form__actions">
				<button className="btn btn-primary" type="submit">
					{submitText}
				</button>
			</div>
		</form>
	);
}