export interface Env{
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
			return Response.json({
				message: "you did not send a get request"
			});
	}
}
