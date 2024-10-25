const allowedOrigins = [
  "http://127.0.0.1",
  "http://localhost",
  "http://localhost:3000",
  "http://localhost:5000",
];

const unprotectedRoutes = [
  {
    methods: ["GET"],
    route: "/",
  },
];

export default { allowedOrigins, unprotectedRoutes };
