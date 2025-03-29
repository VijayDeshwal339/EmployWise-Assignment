# EmployWise-Assignment

This is a React-based user management application with authentication, user listing, search, filtering, and CRUD functionalities.

## 🚀 Features
- User login with authentication
- Fetch users from API
- Search and filter users
- Edit and delete users
- Toast notifications for success/error messages
- Pagination support

## 🛠 Tech Stack
- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Mock API
- **Libraries**: Axios, React-Toastify, React-Router

---

## 📥 Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/VijayDeshwal339/EmployWise-Assignment.git
cd EmployWise-Assignment
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the development server
```sh
npm run dev
```

> The app will be available at `http://localhost:5174`

---

## 🔑 Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
VITE_API_URL=https://reqres.in/api
```

---

## 📌 Assumptions & Considerations
- Using `reqres.in` as a mock API for login and fetching users.
- Login credentials must match API-provided test accounts.
- No actual user data is stored; API responses are static.
- Pagination and filtering are handled client-side.

---

## 📄 Scripts
- `npm run dev` – Start development server
- `npm run build` – Build production-ready files
- `npm run lint` – Lint the project

---

## 🛠 Dependencies Used
| Library           | Purpose                         |
|------------------|--------------------------------|
| React.js        | UI framework                   |
| Redux Toolkit   | State management               |
| React Router    | Navigation & routing           |
| Tailwind CSS    | Styling                         |
| Axios          | API requests                    |
| React-Toastify | Notifications                   |

---

## 💡 Future Enhancements
- Add role-based authentication
- Improve API handling with real backend integration
- Enhance UI with animations and better design

---

## 📝 License
This project is **MIT Licensed**.

