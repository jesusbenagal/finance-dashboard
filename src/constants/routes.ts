export const routes = [
  {
    name: "Dashboard",
    path: "/",
    state: "dashboard",
  },
  {
    name: "Predictions",
    path: "/predictions",
    state: "predictions",
  },
];

export const RoutesEnum = {
  DASHBOARD: "/",
  PREDICTIONS: "/predictions",
  OTHER: "*",
};
