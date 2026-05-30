import api from "../config/api.js";

export async function getAllEntries()
{
	return api.get("/entries");
}

export async function getEntryById(id)
{
	return api.get(`/entries/${id}`);
}

export async function createEntry(data)
{
	return api.post("/entries", data);
}

export async function updateEntry(id, data)
{
	return api.patch(`/entries/${id}`, data);
}

export async function deleteEntry(id)
{
	return api.delete(`/entries/${id}`);
}