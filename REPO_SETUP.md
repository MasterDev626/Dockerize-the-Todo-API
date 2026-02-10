# Dockerize-the-Todo-API — Repo setup and push

Use this when creating the **public** GitHub repo **Dockerize-the-Todo-API** and pushing the starter code.

---

## 1. GitHub repo description (for “About”)

**Short description (for the repo About / summary):**

```text
Minimal Todo REST API (Express + MongoDB) for DevOps labs — clone, run locally, then dockerize with Dockerfile and Compose.
```

**Topics (add in repo settings):** `express`, `mongodb`, `docker`, `docker-compose`, `nodejs`, `rest-api`, `devops`, `todo-api`

---

## 2. Create the repo on GitHub

1. Go to GitHub → **New repository**.
2. **Repository name:** `Dockerize-the-Todo-API`
3. **Description:** paste the short description above.
4. **Public.**
5. Do **not** add a README, .gitignore, or license (this folder already has them).
6. Create the repo and copy the **HTTPS clone URL** (e.g. `https://github.com/YOUR_USER/Dockerize-the-Todo-API.git`).

---

## 3. Push this folder to the new repo

From your machine, in the folder that contains this README and the Todo API code (e.g. `Dockerize-the-Todo-API`):

```bash
# Replace REMOTE_URL with your repo URL, e.g.:
# REMOTE_URL=https://github.com/YOUR_USER/Dockerize-the-Todo-API.git

cd Dockerize-the-Todo-API
git init
git add .
git commit -m "Initial commit: Todo API (Express + MongoDB), no Docker yet"
git branch -M main
git remote add origin REMOTE_URL
git push -u origin main
```

If the repo already had a first commit (e.g. README from GitHub), use:

```bash
git remote add origin REMOTE_URL
git pull origin main --allow-unrelated-histories
# Resolve any conflicts, then:
git push -u origin main
```

---

## 4. Optional: point the lab platform at this repo

If your lab platform (e.g. Master-devops) uses a configurable lab repo URL, set it to your new repo, for example:

- `https://github.com/YOUR_USER/Dockerize-the-Todo-API`

Then the lab’s “clone” step can use:

```bash
git clone https://github.com/YOUR_USER/Dockerize-the-Todo-API.git
cd Dockerize-the-Todo-API
```

---

## 5. What’s in this repo (for the lab)

- **Starter app only** — no Docker yet. Learners will:
  - Clone the repo and create a feature branch.
  - Run the API locally (`npm ci`, `npm run dev`, `MONGO_URI`).
  - Add `.dockerignore`, Dockerfile, docker-compose (api + mongo), health endpoint, healthcheck, and README Docker instructions.

- **Included:** `package.json`, `src/index.js`, `.env.example`, `.gitignore`, `README.md` (local run only).

- **Not included (lab tasks):** Dockerfile, .dockerignore, docker-compose.yml, `/api/health`, compose healthcheck. The app listens on `127.0.0.1:3000` so the “make container-friendly” step has a clear change (bind to `0.0.0.0` and use `process.env.PORT`).
