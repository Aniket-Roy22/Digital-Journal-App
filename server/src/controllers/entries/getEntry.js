import prisma from "../../config/prisma.js";

export async function getAllEntries(req, res)
{
	try
	{
		const entries = await prisma.entries.findMany({
			where: {
				user_id: req.user.id,
			},
			orderBy: {
				created_at: "desc",
			},
		});

		return res.status(200).json({
			entries,
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			message: "FETCH_FAILED",
		});
	}
};

export async function getEntryById(req, res)
{
	try
	{
		const {id} = req.params;

		const entry = await prisma.entries.findFirst({
			where: {
				id,
				user_id: req.user.id,
			},
		});

		if (!entry)
		{
			return res.status(404).json({
				message: "ENTRY_NOT_FOUND",
			});
		}

		return res.status(200).json({
			entry,
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			message: "FETCH_FAILED",
		});
	}
};