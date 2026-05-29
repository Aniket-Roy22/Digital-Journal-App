import prisma from "../../config/prisma.js";

export async function createEntry(req, res)
{
	try
	{
		const {title, content} = req.body;
		const rawMood = req.body.mood;
		const mood = Number(rawMood);

		if (
			!title?.trim() ||
			!content?.trim() ||
			rawMood === undefined ||
			rawMood === "" ||
			Number.isNaN(mood)
		)
		{
			return res.status(400).json({
				message: "INVALID_INPUT",
			});
		}

		if (mood < 1 || mood > 10)
		{
			return res.status(400).json({
				message: "OUT_OF_BOUNDS",
			});
		}

		const entry = await prisma.entries.create({
			data: {
				title,
				content,
				mood,
				user_id: req.user.id,
			},
		});

		return res.status(201).json({
			message: "CREATE_SUCCESSFUL",
			entry,
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			message: "CREATE_FAILED",
		});
	}
};