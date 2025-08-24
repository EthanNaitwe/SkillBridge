# Overview

DevMentor is a comprehensive mentorship platform that connects senior developers with coding beginners for personalized programming education. The application facilitates course browsing, enrollment, mentor-student interactions, progress tracking, and real-time messaging. Built as a full-stack web application, it provides both learning management and communication tools to enable effective programming education through mentorship.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using React with TypeScript, implementing a component-based architecture. The application uses Wouter for client-side routing and React Query (TanStack Query) for server state management and API communication. The UI is built with Radix UI primitives and styled using Tailwind CSS with the shadcn/ui component library for consistent design patterns.

Key architectural decisions:
- **React with TypeScript**: Provides type safety and better developer experience
- **Wouter routing**: Lightweight alternative to React Router for client-side navigation
- **React Query**: Handles server state management, caching, and API synchronization
- **Radix UI + shadcn/ui**: Accessible, customizable component primitives with consistent styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Backend Architecture
The server uses Express.js with TypeScript in ESM module format. It implements a RESTful API design with in-memory storage for development. The backend follows a layered architecture with separate concerns for routing, storage, and business logic.

Key architectural decisions:
- **Express.js with TypeScript**: Provides robust server framework with type safety
- **In-memory storage**: Simplified data persistence for development and prototyping
- **RESTful API design**: Standard HTTP methods and resource-based endpoints
- **Middleware-based request handling**: Logging, error handling, and request processing

## Data Storage Solutions
The application is configured to use PostgreSQL with Drizzle ORM for production, while currently implementing in-memory storage for development. The schema is defined using Drizzle with proper type definitions and validation using Zod schemas.

Database schema includes:
- **Users**: Authentication, profiles, roles (student/mentor)
- **Courses**: Content, metadata, mentor associations
- **Enrollments**: Student-course relationships with progress tracking
- **Messages**: Real-time communication between users
- **Sessions**: Scheduled mentoring sessions

Key architectural decisions:
- **Drizzle ORM**: Type-safe database queries with excellent TypeScript integration
- **PostgreSQL**: Robust relational database for production use
- **Zod validation**: Runtime type checking and schema validation
- **UUID primary keys**: Ensures unique identifiers across distributed systems

## Authentication and Authorization
The application implements a simple authentication system with role-based access control distinguishing between students and mentors. Authentication state is managed client-side with API integration for login/registration flows.

Key features:
- **Role-based access**: Students and mentors have different capabilities
- **Form validation**: Client and server-side validation using Zod schemas
- **Session management**: Stateless authentication for API requests

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography

## State Management and API
- **TanStack React Query**: Server state management, caching, and API synchronization
- **React Hook Form**: Form state management and validation
- **Wouter**: Lightweight client-side routing

## Development and Build Tools
- **Vite**: Fast build tool and development server for the frontend
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking across the entire application
- **ESLint and Prettier**: Code quality and formatting tools

## Database and ORM
- **Drizzle ORM**: Type-safe database operations and migrations
- **Drizzle Kit**: Database migration and schema management tools
- **@neondatabase/serverless**: Serverless PostgreSQL connection for production
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Validation and Utilities
- **Zod**: Runtime type validation and schema definition
- **date-fns**: Date manipulation and formatting utilities
- **clsx and tailwind-merge**: Conditional CSS class management
- **class-variance-authority**: Type-safe component variant management