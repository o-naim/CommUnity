# 🎉 CommUnity – Event Management App

CommUnity is a full-stack event discovery and planning platform built for local communities. This application helps users explore nearby events based on their interests, location, and budget, while offering local organizers a streamlined way to promote and manage their events.

> 🧪 This is the MVP prototype developed for the ADM3713 course at the University of Ottawa. It was built collaboratively using Agile Scrum methodology.

---

## 🔧 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** OAuth 2.0
- **Monitoring:** Prometheus + Grafana
- **Testing:** Cypress, Gatling, Burp Suite
- **CI/CD:** GitHub Actions
- **Containerization:** Docker

---

## 🚀 Features

### 👥 For Users
- Filter events by location, interest, price, or type.
- Join or create discussion groups around events.
- Save favorite events and receive reminders.
- Multilingual UI (English and French).
- Mobile-first responsive design.

### 📢 For Organizers
- Create and manage events via dashboard.
- Access stats and visibility tools.
- Set ticket prices and receive registrations.
- Promote events through targeted campaigns.


---

## 📂 Project Structure
<img width="597" height="552" alt="image" src="https://github.com/user-attachments/assets/8ff1e182-7f1f-4490-a51d-3adfc1948d53" />
app/ → Frontend pages (App Router)
components/ → Reusable UI components
public/ → Static assets
prisma/ → DB schema
styles/ → Global CSS
Dockerfile → Container config
tailwind.config.ts → Tailwind setup

## 🛠️ How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/community-app.git
cd community-app

# Install dependencies
npm install

# Set up local environment variables (see .env.example)
cp .env.example .env

# Run the development server
npm dev
Ensure PostgreSQL is running and migrations are applied using npx prisma migrate dev.
