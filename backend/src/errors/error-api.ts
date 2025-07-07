export default class ApiError extends Error {
    public status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }

    static BadRequest(): ApiError {
        return new ApiError(400, "Invalid request.");
    }

    static Unauthorized(): ApiError {
        return new ApiError(401, "Not authorized.");
    }

    static Forbidden(): ApiError {
        return new ApiError(403, "Forbidden.");
    }

    static NotFound(): ApiError {
        return new ApiError(404, "Not found.");
    }

    static ServerError(): ApiError {
        return new ApiError(500, "Server error.");
    }
}