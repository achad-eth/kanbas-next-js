import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function CourseHome() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
        <Modules />
      </div>
      <div className="d-none d-lg-block">
        <CourseStatus />
      </div>
    </div>
  );
}