# React Components Explanation

This README provides an overview and explanation of each component used in the provided React codebase.

## 1. App Component (App.tsx)

The `App` component serves as the main component rendering the entire application. It includes the following sections:
- **AI Insights DashBoard Header**: Displays the title of the dashboard.
- **Category Distribution Chart**: Renders the `CategoryDistributionChart` component.
- **Response Times Chart**: Renders the `ResponseTimesChart` component.
- **User Satisfaction Chart**: Renders the `UserSatisfactionChart` component.
- **Usage Statistics Chart**: Renders the `UsageStatisticsChart` component.

## 2. CategoryDistributionChart Component (CategoryDistributionChart.tsx)

This component displays a bar chart representing the category distribution data. It fetches the data from the server and uses Chart.js library for chart rendering.

## 3. ResponseTimesChart Component (ResponseTimesChart.tsx)

The `ResponseTimesChart` component renders a line chart showing response times on a day-wise basis. It fetches the data from the server and utilizes Chart.js library for chart visualization.

## 4. UsageStatisticsChart Component (UsageStatisticsChart.tsx)

This component displays two bar charts:
- **Platform Usage**: Represents usage statistics based on different platforms.
- **Country Usage**: Represents usage statistics based on different countries. 
It fetches the data from the server and uses Chart.js library for chart rendering.

## 5. UserSatisfactionChart Component (UserSatisfactionChart.tsx)

The `UserSatisfactionChart` component presents a bar chart illustrating user satisfaction ratings. It fetches the data from the server and utilizes Chart.js library for chart visualization.

## Other Files

- **dataService.ts**: Contains a function to fetch AI data from the server.
- **store.ts**: Defines the Redux store and reducer function to manage application state.
- **index.tsx**: Entry point of the application where the `App` component is rendered within a Redux `Provider`.

## Video Link: https://youtu.be/6VEk0CJgALs