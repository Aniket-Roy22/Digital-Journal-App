# Digital Journal App

A full-stack digital journaling application built using React, Express.js, Prisma ORM, PostgreSQL, and JWT Authentication. The application allows users to securely create, manage, edit, and reflect on personal journal entries while tracking their daily mood.

---

# Table of Contents

- [Tech Stack](#tech-stack)
	- [Frontend](#frontend)
	- [Backend](#backend)
- [Project Features](#project-features)
- [Folder Structure](#folder-structure)
- [Authentication System](#authentication-system)
	- [Access Token](#access-token)
	- [Refresh Token](#refresh-token)
- [Authentication Flow](#authentication-flow)
- [Database Schema](#database-schema)
	- [Users Table](#users-table)
	- [Entries Table](#entries-table)
- [API Endpoints](#api-endpoints)
	- [Authentication Routes](#authentication-routes)
	- [Entry Routes](#entry-routes)
- [Frontend Architecture](#frontend-architecture)
	- [Context API](#context-api)
	- [Axios Interceptors](#axios-interceptors)
	- [Protected Routes](#protected-routes)
- [Installation Guide](#installation-guide)
	- [1. Clone Repository](#1-clone-repository)
	- [2. Backend Setup](#2-backend-setup)
	- [3. Configure Environment Variables](#3-configure-environment-variables)
	- [4. Run Prisma Migration](#4-run-prisma-migration)
	- [5. Start Backend Server](#5-start-backend-server)
	- [6. Frontend Setup](#6-frontend-setup)
	- [7. Start Frontend](#7-start-frontend)
- [Screenshots](#screenshots)
- [Author](#author)

---

# Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Context API
- CSS

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt

---

# Project Features

- User Registration & Login
- JWT Authentication
- Refresh Token Authentication Flow
- Protected API Routes
- Create Journal Entries
- View Journal Entries
- Edit Journal Entries
- Delete Journal Entries
- Mood Tracking (1–10 Scale)
- Personal Dashboard
- Axios Interceptors
- Context API Authentication Management

---

# Folder Structure

```bash
Digital-Journal-App/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── config/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   └── schema.prisma
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

# Authentication System

This project implements a dual-token JWT authentication strategy.

---

## Access Token

- Short-lived JWT token
- Stored in localStorage
- Sent with protected API requests

---

## Refresh Token

- Long-lived JWT token
- Stored inside HTTP-only cookies
- Used to generate new access tokens

---

# Authentication Flow

```text
User Login
    ↓
Credentials Validated
    ↓
Access Token Returned
Refresh Token Stored in Cookie
    ↓
Frontend Stores Access Token
    ↓
Protected Requests Sent
    ↓
Access Token Expires
    ↓
Axios Interceptor Calls /auth/token
    ↓
New Access Token Issued
```

---

# Database Schema

## Users Table

| Column | Type |
|----------|----------|
| id | UUID |
| username | VARCHAR(50) |
| email | VARCHAR(255) |
| password | TEXT |

---

## Entries Table

| Column | Type |
|----------|----------|
| id | UUID |
| user_id | UUID |
| title | VARCHAR(255) |
| content | TEXT |
| mood | SMALLINT |
| created_at | TIMESTAMP |

### Constraints

- Mood value must be between 1 and 10

---

# API Endpoints

## Authentication Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login User |
| POST | `/auth/token` | Refresh Access Token |
| POST | `/auth/logout` | Logout User |

---

## Entry Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | `/entries` | Get All User Entries |
| GET | `/entries/:id` | Get Single Entry |
| POST | `/entries` | Create Entry |
| PATCH | `/entries/:id` | Update Entry |
| DELETE | `/entries/:id` | Delete Entry |

---

# Frontend Architecture

## Context API

Authentication state is globally managed through:

```text
AuthContext
```

The context:

- Stores authenticated user information
- Handles initial authentication check
- Provides authentication state across the application

---

## Axios Interceptors

Axios automatically:

- Attaches access tokens
- Detects expired access tokens
- Requests new access tokens using refresh tokens
- Retries failed requests

---

## Protected Routes

Protected routes ensure that only authenticated users can access journal pages.

Unauthenticated users are redirected to the login page.

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/Aniket-Roy22/Digital-Journal-App.git
```

---

## 2. Backend Setup

```bash
cd server
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file inside `server/`

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/journaldb"

ACCESS_TOKEN_SECRET=your_access_token_secret

REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

---

## 4. Run Prisma Migration

```bash
npx prisma migrate dev
```

---

## 5. Start Backend Server

```bash
npm run server
```

Backend runs on:

```text
http://localhost:3000
```

---

## 6. Frontend Setup

```bash
cd client
npm install
```

---

## 7. Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:8080
```

---

# Screenshots

## Login Page

![Login](./screenshots/login.png)

---

## Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## Entry Details

![Entry Details](./screenshots/entry-details.png)

---

## Create Entry

![Create Entry](./screenshots/create-entry.png)

---

# Author

**Intern ID:** CITS730

**Full Name:** Aniket Roy

**No. of Weeks:** 1

**Project Name:** Digital Journal App

**Project Scope:** The project aims to build a secure full-stack digital journaling platform where users can create, manage, edit, and delete personal journal entries. The application demonstrates authentication, authorization, REST API development, frontend-backend integration, token-based security, database management, and modern React application architecture using React, Express.js, Prisma ORM, PostgreSQL, JWT Authentication, and Axios Interceptors.