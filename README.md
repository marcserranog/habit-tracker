# Habit Tracker

## Overview

Habit Tracker is a simple yet powerful tool designed to help you build and maintain healthy habits. The application provides reminders at set intervals, helping you stay consistent with your tasks. With features such as a timer, multiple task management, progress tracking, and a pie chart visualization, this Habit Tracker can be an essential companion in your journey to developing good habits.

This project is built using React and is inspired by the idea from the book *"50 Projects for React and the Static Web"* by Colby Fayock.

## Features

* Multiple Task Management: Add, update, and complete tasks with ease.
* Timer Functionality: Set a timer for each habit to remind you when it's time to complete it.
* Progress Tracking: View your progress at a glance with a dynamically updating pie chart.
* Dark/Light Theme Toggle: Switch between light and dark themes to suit your preference.
* Responsive Design: Enjoy a smooth experience on both desktop and mobile devices.

## Demo

You can see a live demo of the application here: [Live Demo](www.google.com)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (v14 or higher recommended)
* npm or yarn

### Installation
1. **Clone the repository:**

`git clone https://github.com/marcserranog/habit-tracker.git
cd habit-tracker`

2. **Install dependencies:**
If you're using `npm`:

`npm install`

Or if you're using `yarn`:

`yarn install`

### Running the Application

To start the development server:

If you're using `npm`:

`npm start`

Or if you're using `yarn`:

`yarn start`

This will start the application and open it in your default web browser. The app will automatically reload if you make any changes to the source code.

### Building for Production

To create a production build:

If you're using `npm`:

`npm run build`

Or if you're using `yarn`:

`yarn build`

This will create an optimized `build` of the app in the build directory, ready to be deployed.

## Usage

* **Adding a Habit**: Click on the "+ New Habit" button at the bottom right to add a new habit. Specify the name of the habit and the timer (in minutes).
* **Starting a Timer**: Once a habit is added, click "Start Timer" next to the habit to start the countdown.
* **Completing a Habit**: Mark a habit as completed by checking the checkbox next to it. The pie chart will update automatically to reflect your progress.
* **Viewing Completed Habits**: Scroll down to see a list of all completed habits, with the option to unmark them if needed.
* **Toggle Theme**: Use the button at the top right of the header to toggle between light and dark themes.

## Technologies Used
* **React**: JavaScript library for building user interfaces.
* **Tailwind CSS**: Utility-first CSS framework used for styling.
* **Highcharts**: A charting library used to create the pie chart.
* **React Icons**: Provides the theme toggle icons (sun and moon).