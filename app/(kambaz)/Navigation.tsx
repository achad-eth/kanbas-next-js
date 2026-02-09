"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { PiFlask } from "react-icons/pi";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/account", label: "Account", icon: FaRegCircleUser, id: "wd-account-link" },
    { href: "/dashboard", label: "Dashboard", icon: AiOutlineDashboard, id: "wd-dashboard-link" },
    { href: "/courses", label: "Courses", icon: LiaBookSolid, id: "wd-courses-link" },
    { href: "/calendar", label: "Calendar", icon: IoCalendarOutline, id: "wd-calendar-link" },
    { href: "/inbox", label: "Inbox", icon: FaInbox, id: "wd-inbox-link" },
    { href: "/labs", label: "Labs", icon: PiFlask, id: "wd-labs-link" },
  ];

  const isActive = (href: string) => {
    if (href === "/account") return pathname.startsWith("/account");
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
    >
      <ListGroupItem
        className="bg-black border-0 text-center pt-3 pb-2"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75" alt="Northeastern University" />
      </ListGroupItem>

      {links.map((link) => {
        const active = isActive(link.href);
        const Icon = link.icon;

        const itemBg = active ? "bg-white" : "bg-black";
        const textColor = active ? "text-danger" : "text-white";

        const isAccount = link.href === "/account";
        const iconClass = isAccount ? "text-white" : active ? "text-danger" : "text-danger";

        return (
          <ListGroupItem key={link.href} className={`border-0 text-center ${itemBg}`}>
            <Link
              href={link.href}
              id={link.id}
              className={`${textColor} text-decoration-none d-block py-3`}
            >
              {isAccount ? (
                <span className="d-inline-flex align-items-center justify-content-center bg-danger rounded-circle p-2">
                  <Icon className={`fs-2 ${iconClass}`} />
                </span>
              ) : (
                <Icon className={`fs-2 ${iconClass}`} />
              )}
              <div className="mt-1">{link.label}</div>
            </Link>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}