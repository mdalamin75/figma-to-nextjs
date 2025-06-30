# Components Structure

This directory contains all the organized components for the landing page.

## Component Overview

### Header (`Header.js`)

- Contains the navigation bar with logo, menu items, and mobile menu
- Handles mobile menu toggle functionality
- Includes CTA button for contact

### HeroSection (`HeroSection.js`)

- Main hero section with gradient background
- Contains the main headline, description, and CTA button
- Includes a demo preview card with hover effects
- Shows social proof with star ratings and user count

### FeaturesSection (`FeaturesSection.js`)

- Grid layout of 4 feature cards
- Each card has an icon, title, and description
- Uses different color schemes for visual variety

### SolutionsSection (`SolutionsSection.js`)

- Contains three main solution areas:
  1. **Mobile Apps** - Custom mobile application development
  2. **Website Building** - Modern, responsive website creation
  3. **Video Content** - High-quality video production
- Each section includes descriptions, feature lists, and preview images

### Footer (`Footer.js`)

- Company information and branding
- Service links and company links
- Contact information
- Copyright notice

## Usage

Import components individually:

```javascript
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
```

Or import all components using the index file:

```javascript
import {
	Header,
	HeroSection,
	FeaturesSection,
	SolutionsSection,
	Footer,
} from "../components";
```

## Benefits of This Organization

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused across different pages
3. **Readability**: Code is much easier to read and understand
4. **Testing**: Individual components can be tested in isolation
5. **Collaboration**: Different team members can work on different components simultaneously
