export const BASE_URL =
	process.env.NODE_ENV === "development" ? "http://localhost:5000" : ""; // If using proxy
// export const BASE_URL = "http://localhost:5000"; // If using proxy
export const USERS_URL = "/api/users"; // If using proxy
export const STUDENT_COURSES_URL = "/api/student-courses"; // If using proxy
export const LECTURER_COURSES_URL = "/api/lecturer-courses"; // If using proxy
export const PDF_URL = "/api/pdfs"; // If using proxy
export const UPLOAD_URL = "/api/uploads"; // If using proxy
export const MESSAGES_URL = "/api/messages"; // If using proxy
export const CHATS_USERS_URL = "/api/chats-users"; // If using proxy
