# Todo API

A minimal REST API for managing todos, built with **Express** and **MongoDB**. Use this repo to practice DevOps: clone it, run it locally, then dockerize it with a Dockerfile and Docker Compose (e.g. as part of the *Dockerize the Todo API* lab).

## What's in this repo

- **Express** server with two endpoints:
  - `GET /api/todos` — list all todos
  - `POST /api/todos` — create a todo (body: `{ "title": "string", "completed": false }`)
- **MongoDB** for persistence (connection via `MONGO_URI`).
- No Docker or health endpoint yet — add those as part of the lab.

## Run locally

1. **Prerequisites:** Node.js 18+, MongoDB running locally (or a remote `MONGO_URI`).

2. **Clone and install:**
   ```bash
   git clone <this-repo-url>
   cd Dockerize-the-Todo-API   # or your clone directory name
   npm ci
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env and set MONGO_URI (e.g. mongodb://localhost:27017/todoapp)
   ```

4. **Start the API:**
   ```bash
   npm run dev
   ```
   The server listens on `http://127.0.0.1:3000` by default.

5. **Try it:**
   ```bash
   curl http://localhost:3000/api/todos
   curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"title":"My first todo"}'
   ```

## Environment variables

| Variable    | Required | Description                          |
|------------|----------|--------------------------------------|
| `MONGO_URI`| Yes      | MongoDB connection string (e.g. `mongodb://localhost:27017/todoapp`) |
| `PORT`     | No       | Server port (default: 3000) — set when you dockerize |

**Built by [Tawanda Mashoko](https://github.com/TawandaMashoko)**

## License

MIT.
