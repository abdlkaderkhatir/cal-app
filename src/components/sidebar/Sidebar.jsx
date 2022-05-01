import React from 'react'
import "./Sidebar.css"
// import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, MailOutline, PermIdentity, Report, Sort, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem actv">
                            {/* <Sort /> */}
                            <span>Home</span>
                        </li>
                        <li className="sidebarListItem ">
                            {/* <Timeline /> */}
                            <span> Analytics</span>
                        </li>
                        <li className="sidebarListItem">
                            {/* <TrendingUp /> */}
                            <span>Sales</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
