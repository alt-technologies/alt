const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://main.d152he4gud4o3x.amplifyapp.com"
    : "http://localhost:3000";

export default baseUrl;