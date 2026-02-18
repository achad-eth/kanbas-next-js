import { ReactNode } from "react";
import TOC from "./TOC";
import "bootstrap/dist/css/bootstrap.min.css";

<div style={{ backgroundColor: "yellow", padding: 10 }}>
  KAMBAZ LAYOUT ACTIVE
</div>

export default function LabsLayout({
 children,
}: Readonly<{ children: ReactNode }>) {
 return (
   <table>
     <tbody>
       <tr>
         <td valign="top" width="100px">
           <TOC />
         </td>
         <td valign="top">{children}</td>
       </tr>
     </tbody>
   </table>
);}

