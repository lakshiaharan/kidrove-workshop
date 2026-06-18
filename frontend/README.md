# KidRove – AI & Robotics Summer Workshop

A responsive workshop landing page built with React, TypeScript, and Tailwind CSS.

## Project Structure
kidrove-workshop/
├── frontend/   → React + TypeScript + Tailwind CSS
└── backend/    → Express.js + TypeScript

## Tech Stack
- React + TypeScript
- Tailwind CSS
- Express.js
- Vite

## Features
- Responsive landing page
- Hero section with gradient
- Workshop details cards
- Learning outcomes grid
- FAQ accordion
- Registration form with validation
- Express.js REST API

## Getting Started

### Frontend
cd frontend
npm install
npm run dev
Open http://localhost:5173

### Backend
cd backend
npm install
npm run dev
API runs at http://localhost:5000

## API Endpoint
POST /api/enquiry
Body: { name, email, phone }
Returns: { success, message }
