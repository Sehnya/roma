# Roma - Modern Portfolio Website

Roma is a sleek, modern, and responsive portfolio website built with **Flask**, **Bun**, **React**, and **TailwindCSS**.  
This project demonstrates a professional-grade web application setup with both backend and frontend integration, ideal for developers and creatives who want to showcase their work in a unique way.

## 🚀 Features
- **Custom Domain Ready** – Deployed on `roma.seh-nya.com`
- **Flask Backend** – Lightweight and efficient backend to serve content
- **Bun + React Frontend** – Fast, modern frontend stack
- **TailwindCSS Styling** – Utility-first styling for rapid UI development
- **Responsive Design** – Optimized for desktop and mobile
- **Video Integration** – Supports embedded video content for a dynamic portfolio
- **Deployable on Railway** – Full configuration for Railway hosting

## 🛠️ Tech Stack
- **Backend**: Flask (Python)
- **Frontend**: React + Bun
- **Styling**: TailwindCSS
- **Deployment**: Railway
- **Domain**: `seh-nya.com` (via Squarespace DNS)

## 📦 Installation & Setup
### Prerequisites
- Python 3.10+
- Bun (latest)
- Node.js (optional, for Tailwind build)
- Railway account (for deployment)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/sehnya/roma.git
   cd roma-portfolio
   ```

2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Install frontend dependencies:
   ```bash
   bun install
   ```

4. Run backend (Flask with Gunicorn for production, Flask dev server for local):
   ```bash
   python app.py
   ```

5. Run frontend:
   ```bash
   bun dev
   ```

6. Visit `http://localhost:3000` for frontend and `http://localhost:5000` for backend.

## 🚀 Deployment on Railway
1. Push code to GitHub.
2. Connect the repo to Railway.
3. Configure your `Procfile` or `railway.toml` for Gunicorn + Flask.
4. Add `.env` variables (if required).
5. Point your domain `roma.seh-nya.com` via DNS (CNAME / A records).

## 📸 Demo
Live Demo: [roma.seh-nya.com](https://roma.seh-nya.com)

## 📄 License
This project is licensed under the MIT License.
