# Adapto – System Design Document

## 1. System Overview

Adapto is a web-based application built using modern frontend technologies,
cloud-based backend services, open maps, and AI models.

The system follows a **client–cloud architecture**.

---

## 2. Architecture

### 2.1 High-Level Architecture

User Browser  
↓  
Frontend (HTML, CSS, JavaScript)  
↓  
Firebase Services  
↓  
External APIs (Maps, AI)

---

## 3. Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6 Modules)

### Backend / Cloud
- Firebase Authentication
- Firebase Firestore
- Firebase Storage

### Maps & Location
- Leaflet.js
- OpenStreetMap
- Overpass API
- OpenRouteService

### AI & Language
- Google Generative AI
- Google Translation tools (if enabled)

---

## 4. Module Design

### 4.1 Authentication Module
- Firebase Auth handles user sessions
- Auth state listener controls access

---

### 4.2 Emergency Module
- SOS button triggers alert workflow
- Emergency contacts stored per user
- Map shows nearby emergency-related locations

---

### 4.3 Healthcare Module
- User location captured via browser API
- Overpass API fetches healthcare facilities
- Leaflet map renders markers
- Route drawn using OpenRouteService

---

### 4.4 Housing Module
- Users post housing details
- Location stored as Firestore GeoPoint
- Map shows housing pins
- Distance calculated from user location
- Ownership-based delete access

---

### 4.5 Community Module
- Firestore collection stores community posts
- Real-time fetching of posts
- Simple posting and viewing interface

---

### 4.6 Document Analyzer Module
- PDF uploaded via browser
- Text extracted on client-side
- Google Generative AI summarizes content
- Output simplified for easy understanding

---

## 5. Database Design (Firestore)

### Users Collection
- userId (string)
- name (string)
- email (string)
- createdAt (timestamp)

### Housing Collection
- ownerId (string)
- title (string)
- description (string)
- capacity (number)
- location (GeoPoint)
- createdAt (timestamp)

### Community Collection
- userId (string)
- content (string)
- createdAt (timestamp)

### EmergencyContacts Collection
- userId (string)
- contacts (array of objects)

---

## 6. Security Design

- Firestore rules restrict write/delete to owner
- Authentication required for sensitive actions
- No public modification of private data

---

## 7. UX & Design Principles

- Minimal and calm UI
- Icon-based navigation
- Map-first interaction
- Mobile and desktop friendly
- Accessibility-focused design

---

## 8. Future Enhancements

- Push notifications for SOS
- Offline mode for emergencies
- AI voice assistant
- Admin moderation panel
- Progressive Web App (PWA) support

---

## 9. Conclusion

Adapto is designed to be a scalable, secure, and inclusive platform that
prioritizes human safety, accessibility, and adaptability in critical moments.
