import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#2c4053">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            RealTime Bot
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="activeClicked">
              <CDBSidebarMenuItem
                icon="columns"
                style={{ backgroundColor: "#2c4053", color: "#FFFFFF" }}
              >
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/tables" className="activeClicked">
              <CDBSidebarMenuItem
                icon="table"
                style={{ backgroundColor: "#2c4053", color: "#FFFFFF" }}
              >
                Tables
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/profile" className="activeClicked">
              <CDBSidebarMenuItem
                icon="user"
                style={{ backgroundColor: "#2c4053", color: "#FFFFFF" }}
              >
                Profile page
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/analytics" className="activeClicked">
              <CDBSidebarMenuItem
                icon="chart-line"
                style={{ backgroundColor: "#2c4053", color: "#FFFFFF" }}
              >
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/hero404" target="_blank" className="activeClicked">
              <CDBSidebarMenuItem
                icon="exclamation-circle"
                style={{ backgroundColor: "#2c4053", color: "#FFFFFF" }}
              >
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
