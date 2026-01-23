<div align="center">

# 🌍 Adapto

### Technology That Adapts to Humans

*A people-first platform designed to help individuals navigate emergencies, migration, disasters, and unfamiliar environments through intelligent, accessible tools.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![OpenStreetMap](https://img.shields.io/badge/OpenStreetMap-7EBC6F?logo=openstreetmap&logoColor=white)](https://www.openstreetmap.org/)

[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 🚨 The Problem

Every day, millions of people face critical challenges that most of us take for granted:

- 🗣️ **Language barriers** preventing communication in emergency situations
- 🗺️ **Lack of local knowledge** when navigating unfamiliar territories
- 🏥 **Limited access** to essential services like healthcare and housing
- 📞 **No immediate help** during emergencies or crises
- 📄 **Complex documents** in foreign languages they cannot understand

**The Issue**: Most existing solutions address these problems in isolation. People need to juggle multiple apps, services, and resources just to survive in unfamiliar environments.

**Our Approach**: Adapto brings everything together in one unified, accessible platform.

---

## 💡 Our Solution

Adapto is a **unified adaptive platform** that integrates essential survival tools into a single, intuitive interface:

| Feature | Purpose |
|---------|---------|
| 🌐 **Language & Voice Assistance** | Break down communication barriers instantly |
| 🏥 **Healthcare Discovery** | Find nearby medical facilities with map integration |
| 🏠 **Community Housing** | Connect people offering and seeking shelter |
| 🤝 **Community Support** | Enable real-time peer-to-peer assistance |
| 🚨 **Emergency SOS** | One-tap emergency alerts with live location sharing |
| 📄 **Document Simplification** | AI-powered translation and explanation of complex documents |

**Built with accessibility in mind** — no expensive APIs, ensuring the platform remains scalable and available to everyone who needs it.

---

## 🎯 Who Is Adapto For?

<table>
<tr>
<td width="33%">

### 🌏 Migrants & Refugees
People relocating to new countries who need immediate support navigating language, housing, and healthcare systems.

</td>
<td width="33%">

### ✈️ Travelers & Tourists
Visitors in unfamiliar regions who need quick access to local services and emergency assistance.

</td>
<td width="33%">

### 🌪️ Disaster-Affected Communities
Individuals impacted by natural disasters requiring urgent shelter, medical care, and community support.

</td>
</tr>
<tr>
<td width="33%">

### 👴 Elderly Individuals
Seniors who may need assistance with technology, communication, or accessing essential services.

</td>
<td width="33%">

### 🎓 Students & Workers
People relocating for education or employment who need help settling into new environments.

</td>
<td width="33%">

### 🆘 Anyone in Crisis
Any person who needs help quickly, clearly, and without barriers.

</td>
</tr>
</table>

---

## ✨ Features

### 🌐 Language & Voice Support

Break through language barriers with intelligent translation:

- **Text translation** between multiple languages
- **Voice output** for users who cannot read
- **Real-time communication** assistance in unfamiliar regions
- Accessible interface for all literacy levels

---

### 🏥 Healthcare Finder

Find medical help when you need it most:

- **Interactive map integration** powered by OpenStreetMap
- **Comprehensive search** for hospitals, clinics, and pharmacies
- **50km radius** coverage with distance-based sorting
- **Turn-by-turn directions** from your current location
- **Offline-friendly** architecture using Overpass API

```
Search Radius: 10 km
Facilities: Hospitals • Clinics • Pharmacies • Emergency Rooms
Sorting: Distance • Rating • Availability
```

---

### 🏠 Housing & Shelter Support

Connect those who need shelter with those who can provide it:

- **Community-driven** housing marketplace
- **Detailed listings** with capacity, description, and precise location
- **Map-based search** with distance filtering
- **Owner-controlled** listings (only owners can delete)
- **Trust-building** through verified community connections

**Features:**
- Post available housing or shelter
- Search by location and distance
- View on interactive map
- Direct contact with housing providers

---

### 🤝 Community Support System

Build resilient communities through mutual aid:

**Users Can:**
- ❓ **Ask for help** with specific needs
- 🤲 **Offer support** in their areas of expertise
- 📢 **Share local information** and resources
- 🔗 **Connect directly** with community members

**Benefits:**
- Peer-to-peer trust building
- Localized knowledge sharing
- Real-time assistance network
- Reduced dependency on formal services

---

### 🚨 Emergency SOS System

One tap can save a life:

**Setup:**
- Add up to **5 emergency contacts**
- Store critical medical information
- Configure custom alert messages

**During Emergency:**
- 🆘 **One-tap activation**
- 📍 **Live location sharing** with emergency contacts
- ⏰ **Timestamp** for all alerts
- 🗺️ **Visual map support** for first responders
- 🔄 **Continuous location updates** until help arrives

```
Emergency Alert Sent ✓
→ Location: [Live GPS Coordinates]
→ Time: [Timestamp]
→ Contacts Notified: 5/5
→ Map Link: [View on Map]
```

---

### 📄 Document Analyzer

Understand complex documents in any language:

**Powered by AI:**
- 📤 **Upload PDFs** in any language
- 🤖 **AI-powered analysis** explains documents in simple terms
- 🌍 **Multi-language support**

**Use Cases:**
- Legal contracts and agreements
- Medical reports and prescriptions
- Government forms and applications
- Visa and immigration documents
- Rental agreements and leases

**How It Works:**
1. Upload your document (PDF)
2. AI analyzes content and structure
3. Receive simplified explanation in your preferred language
4. Ask follow-up questions for clarification

---

## 🧠 Tech Stack

### Frontend Technologies

```
HTML5 • CSS3 • JavaScript (ES6+)
Leaflet.js (Interactive Maps)
Responsive Design • Progressive Web App Ready
```

### Backend & Cloud Infrastructure

| Service | Purpose |
|---------|---------|
| **Firebase Authentication** | Secure user identity management |
| **Firebase Firestore** | Real-time NoSQL database |
| **Firebase Storage** | Document and media file storage |
| **Firebase Security Rules** | Access control and data protection |

### APIs & External Services

| Service | Purpose |
|---------|---------|
| **Overpass API** | OpenStreetMap data retrieval |
| **OpenRouteService** | Turn-by-turn routing and directions |
| **Google Generative AI** | Document understanding and simplification |

### Architecture Diagram

```
┌─────────────────┐
│   User Device   │
└────────┬────────┘
         │
    ┌────▼─────────────────────────┐
    │   Frontend (HTML/CSS/JS)     │
    │   - Leaflet.js Maps          │
    │   - Responsive UI            │
    └────┬─────────────────────────┘
         │
    ┌────▼─────────────────────────┐
    │   Firebase Services          │
    │   - Authentication           │
    │   - Firestore Database       │
    │   - Storage                  │
    │   - Security Rules           │
    └────┬─────────────────────────┘
         │
    ┌────▼─────────────────────────┐
    │   External APIs              │
    │   - Overpass API (OSM)       │
    │   - OpenRouteService         │
    │   - Google Generative AI     │
    └──────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Firebase account
- Google Cloud account (for Generative AI API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/adapto.git
   cd adapto
   ```

2. **Configure Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable **Authentication** (Email/Password or Google Sign-In)
   - Enable **Firestore Database**
   - Enable **Storage**
   - Copy your Firebase configuration
   - Add the configuration to your `firebase-config.js` file:
   
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Set up API Keys**
   
   Create a `config.js` file and add your API keys:
   
   ```javascript
   // OpenRouteService API Key
   const ORS_API_KEY = "YOUR_OPENROUTESERVICE_API_KEY";
   
   // Google Generative AI API Key
   const GOOGLE_AI_API_KEY = "YOUR_GOOGLE_AI_API_KEY";
   ```
   
   **Get your API keys:**
   - OpenRouteService: [https://openrouteservice.org/dev/#/signup](https://openrouteservice.org/dev/#/signup)
   - Google AI: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

4. **Configure Firebase Security Rules**
   
   Set up Firestore and Storage rules in Firebase Console for data protection.

5. **Open the application**
   
   Simply open `index.html` in your browser or use a local server:
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have it installed)
   npx http-server
   ```
   
   Then navigate to: `http://localhost:8000`

6. **That's it! 🎉**
   
   No build process needed - pure HTML, CSS, and JavaScript!

---

## 🗺️ Roadmap

- [ ] **v1.0**: Core features launch (Language, Healthcare, Housing, SOS)
- [ ] **v1.1**: Mobile app (iOS and Android)
- [ ] **v1.2**: Offline mode capabilities
- [ ] **v1.3**: Integration with local government services
- [ ] **v1.4**: AI-powered chatbot for instant assistance
- [ ] **v2.0**: Blockchain-based identity verification
- [ ] **v2.1**: Integration with international humanitarian organizations

---

## 🌟 Acknowledgments

- **OpenStreetMap** community for providing free, accessible map data
- **Firebase** for reliable cloud infrastructure
- **Google** for Generative AI capabilities

---

<div align="center">

### 💙 Made with compassion for humanity

**Adapto** — Because everyone deserves access to essential services, regardless of where they are or what language they speak.

⭐ **Star this repository** if you believe in accessible technology for all!

</div>
