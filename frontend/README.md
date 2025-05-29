# TutorLMS Frontend

A modern React application built with TypeScript, Redux Toolkit, and Tailwind CSS for SAT preparation and learning management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 UI Preview

The application includes the following pages and features:

### 🔐 Authentication Pages
- **Login Page** (`/login`): Clean login form with validation
- **Register Page** (`/register`): User registration with form validation
- **Protected Routes**: Automatic redirect to login for unauthenticated users

### 🏠 Dashboard & Main Layout
- **Dashboard** (`/dashboard`): Performance overview, statistics, and quick actions
- **Responsive Header**: Navigation menu and user profile
- **Statistics Cards**: Practice sessions, scores, study time, accuracy
- **Progress Tracking**: Subject-wise progress bars and recent activity

### 📚 Practice & Testing
- **Practice Page** (`/practice`): Choose practice modes (Math, Reading, Writing)
- **Test Page** (`/test`): Full-length SAT practice tests with timing
- **Test History**: View previous test results and improvements

### 📊 Analytics & Insights
- **Analytics Page** (`/analytics`): Detailed performance analytics
- **Score Progress**: Visual charts and trend analysis
- **Subject Breakdown**: Strengths and areas for improvement
- **Personalized Recommendations**: AI-driven study suggestions

### ⚙️ Profile & Settings
- **Profile Page** (`/profile`): Account management and preferences
- **Personal Information**: Edit name, email, target scores
- **Security Settings**: Password changes and account actions
- **Study Preferences**: Notifications and learning settings

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#3b82f6) for main actions and branding
- **Secondary**: Gray tones (#64748b) for text and backgrounds
- **Success**: Green (#22c55e) for positive feedback
- **Warning**: Yellow (#f59e0b) for cautions
- **Error**: Red (#ef4444) for errors and critical actions

### Components
- **Cards**: Clean white containers with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, success, warning, error)
- **Forms**: Consistent input styling with validation states
- **Navigation**: Responsive header with mobile-friendly design

### Typography
- **Font**: Inter (Google Fonts) for modern, readable text
- **Headings**: Bold weights for hierarchy
- **Body Text**: Balanced for readability

## 🛠️ Technology Stack

### Core Framework
- **React 18** with functional components and hooks
- **TypeScript** for type safety and better development experience
- **Redux Toolkit** for state management

### Styling & UI
- **Tailwind CSS** for utility-first styling
- **Custom Design System** with consistent color palette
- **Responsive Design** for mobile and desktop

### Routing & Navigation
- **React Router v6** for client-side routing
- **Protected Routes** for authentication
- **Dynamic Navigation** based on user state

### Development Tools
- **ESLint & Prettier** for code quality
- **Hot Reload** for fast development
- **TypeScript Configuration** for strict type checking

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Layout/       # Main layout components
│   ├── pages/            # Page components
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── PracticePage.tsx
│   │   ├── TestPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── ProfilePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── store/            # Redux store configuration
│   │   ├── store.ts
│   │   └── slices/       # Redux slices
│   │       ├── authSlice.ts
│   │       └── uiSlice.ts
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Application entry point
│   └── index.css         # Global styles and Tailwind
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm start` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (not recommended)

## 🌟 Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for all screen sizes
- Touch-friendly interface elements

### Performance Optimized
- Code splitting with React.lazy()
- Optimized bundle size with tree shaking
- Efficient state management with Redux Toolkit

### User Experience
- Loading states and progress indicators
- Form validation with real-time feedback
- Consistent navigation and breadcrumbs
- Accessible design following WCAG guidelines

### Development Experience
- Hot reload for instant feedback
- TypeScript for type safety
- ESLint and Prettier for code quality
- Comprehensive error boundaries

## 🚦 Getting Started Guide

### 1. Authentication Flow
- Visit `/login` to see the login page
- Try `/register` for the registration form
- Authentication state is managed globally with Redux

### 2. Main Dashboard
- After login, users see the dashboard at `/dashboard`
- Overview of progress, statistics, and quick actions
- Recent activity and performance metrics

### 3. Practice Sessions
- Navigate to `/practice` to choose practice modes
- Math, Reading, and Writing practice options
- Interactive cards with clear call-to-action buttons

### 4. Full Tests
- Visit `/test` for complete SAT practice tests
- Test history and score tracking
- Detailed instructions and timing information

### 5. Analytics
- Check `/analytics` for detailed performance insights
- Visual progress tracking and recommendations
- Subject-wise breakdown and improvement areas

### 6. Profile Management
- Go to `/profile` to manage account settings
- Personal information, security, and preferences
- Account statistics and study tracking

## 🎯 Next Steps for Development

1. **Install Dependencies**: Run `npm install` to get started
2. **Backend Integration**: Connect to the FastAPI backend
3. **API Services**: Implement HTTP client for data fetching
4. **Authentication**: Complete login/logout functionality
5. **Data Visualization**: Add charts for analytics
6. **Testing**: Add unit and integration tests
7. **Deployment**: Configure for production deployment

## 📞 Support

For development questions or issues:
- Check the browser console for errors
- Ensure all dependencies are installed
- Verify environment configuration
- Review TypeScript errors for guidance

---

**Built with ❤️ for effective SAT preparation and learning management**
