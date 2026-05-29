import prisma from "../../config/prisma.js";

export async function deleteEntry(req, res)
{
	try
	{
		const {id} = req.params;
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

		await prisma.entries.delete({
			where: {
				id,
			},
		});

		return res.status(200).json({
			message: "DELETE_SUCCESSFUL",
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			message: "DELETE_FAILED",
		});
	}
};