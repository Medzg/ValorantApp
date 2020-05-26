import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
 {
  id: "dashboard",
  title: "Dashboard",
  type: "collapse",
  icon: <Icon.Home size={20} />,
  badge: "warning",
  badgeText: "2",
  children: [
    {
      id: "analyticsDash",
      title: "Analytics",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/"
    },
    {
      id: "empty",
      title: "empty",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin"],
      navLink: "/empty"
    }
  ]
 }
]

export default navigationConfig
