import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/use-effect-event", "routes/useEffectEvent.tsx"),
] satisfies RouteConfig;
