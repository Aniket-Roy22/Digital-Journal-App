import {Link} from "react-router-dom";
import "../styles/entry-card.css";

export default function EntryCard({entry, onDelete})
{
	return (
		<article className="entry-card">
			<h3 className="entry-card__title">{entry.title}</h3>

			<p className="entry-card__meta">Mood: {entry.mood}/10</p>

			<p className="entry-card__meta">
				{new Date(entry.created_at).toLocaleDateString()}
			</p>

			<div className="entry-card__main">
				<p className="entry-card__preview">
					{entry.content.length > 100
						? `${entry.content.slice(0, 100)}...`
						: entry.content}
				</p>

				<div className="entry-card__actions">
					<Link
						className="btn btn-primary"
						to={`/entries/${entry.id}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="white"
							viewBox="0 0 256 256"
						>
							<path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
						</svg>
					</Link>

					<Link className="btn btn-primary" to={`/entries/${entry.id}/edit`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="white"
							viewBox="0 0 256 256"
						>
							<path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
						</svg>
					</Link>

					<button
						className="btn btn-danger"
						type="button"
						onClick={() => onDelete(entry.id)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="white"
							viewBox="0 0 256 256"
						>
							<path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path>
						</svg>
					</button>
				</div>
			</div>
		</article>
	);
}