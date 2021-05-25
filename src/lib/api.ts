import axios from "axios";

import { baseUrl } from "../config/env.json";

const httpClient = axios.create({
	baseURL: baseUrl,
});

type ApiResponse = {
	status: boolean;
	message?: string;
	data?: any;
}

export async function findLowerPrime(number: number): Promise<ApiResponse> {
	const data = { number };
	const res = await httpClient.post("/prime/find-next-lower", data);
	return res.data;
}
