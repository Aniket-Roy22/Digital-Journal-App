import prisma from "../../config/prisma.js";

export async function updateEntry(req, res)
{
	try
	{
		const {id} = req.params;
		const {title, content} = req.body;
		const mood = req.body.mood !== undefined ? Number(req.body.mood) : undefined;

		if (
			mood !== undefined &&
			(Number.isNaN(mood) || mood < 1 || mood > 10)
		)
		{
			return res.status(400).json({
				message: "OUT_OF_BOUNDS",
			});
		}

		const existingEntry = await prisma.entries.findFirst({
			where: {
				id,
				user_id: req.user.id,
			},
		});

		if (!existingEntry)
		{
			return res.status(404).json({
				message: "ENTRY_NOT_FOUND",
			});
		}

		const updatedEntry = await prisma.entries.update({
			where: {
				id,
			},
			data: {
				...(title !== undefined && {title}),
				...(content !== undefined && {content}),
				...(mood !== undefined && {mood}),
			},
		});

		return res.status(200).json({
			message: "UPDATE_SUCCESSFUL",
			entry: updatedEntry,
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			message: "UPDATE_FAILED",
		});
	}
};