"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import * as client from "../courses/client";

type Course = {
  _id: string;
  name: string;
  number?: string;
  description?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
};

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/photo1.jpg",
    description: "New Description",
  });
  const currentUser = useSelector(
    (state: RootState) => (state.accountReducer as any).currentUser
  );

  const fetchData = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      const currentEnrollments = await client.fetchEnrollments();
      setCourses(allCourses);
      setEnrollments(currentEnrollments);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isEnrolled = (courseId: string) =>
    enrollments.some((enrollment) => enrollment.course === courseId);

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
    fetchData();
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
    setEnrollments(enrollments.filter((e) => e.course !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  };

  const enroll = async (courseId: string) => {
    await client.enrollInCourse(courseId);
    fetchData();
  };

  const unenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    fetchData();
  };

  const enrolledCourses = courses.filter((c) => isEnrolled(c._id));
  const isFacultyOrAdmin =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div className="d-flex gap-2">
          <Button
            variant={showAllCourses ? "outline-secondary" : "danger"}
            id="wd-my-courses-btn"
            onClick={() => setShowAllCourses(false)}
          >
            My Courses
          </Button>
          <Button
            variant={showAllCourses ? "danger" : "outline-secondary"}
            id="wd-all-courses-btn"
            onClick={() => setShowAllCourses(true)}
          >
            All Courses
          </Button>
        </div>
      </div>
      <hr />

      {isFacultyOrAdmin && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            rows={3}
            value={course.description || ""}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}

      {/* ── MY COURSES MODE ── */}
      {!showAllCourses && (
        <>
          <h2 id="wd-dashboard-published">
            My Courses ({enrolledCourses.length})
          </h2>
          <hr />
          <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
              {enrolledCourses.map((c) => (
                <Col key={c._id} style={{ width: "300px" }}>
                  <Card>
                    <Link
                      href={`/courses/${c._id}/home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Card.Img
                        variant="top"
                        src={c.image || "/images/photo1.jpg"}
                        height={160}
                      />
                      <Card.Body>
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {c.name}
                        </Card.Title>
                        <Card.Text
                          style={{ height: "100px" }}
                          className="overflow-hidden"
                        >
                          {c.description || c.number || ""}
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                        {isFacultyOrAdmin && (
                          <>
                            <button
                              id="wd-edit-course-click"
                              onClick={(e) => {
                                e.preventDefault();
                                setCourse(c);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                deleteCourse(c._id);
                              }}
                              className="btn btn-danger float-end me-2"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}

      {/* ── ALL COURSES MODE ── */}
      {showAllCourses && (
        <>
          <h2 id="wd-dashboard-all">All Courses ({courses.length})</h2>
          <hr />
          <div id="wd-dashboard-all-courses">
            <Row xs={1} md={5} className="g-4">
              {courses.map((c) => (
                <Col key={c._id} style={{ width: "300px" }}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={c.image || "/images/photo1.jpg"}
                      height={160}
                    />
                    <Card.Body>
                      <Card.Title className="text-nowrap overflow-hidden">
                        {c.name}
                      </Card.Title>
                      <Card.Text
                        style={{ height: "100px" }}
                        className="overflow-hidden"
                      >
                        {c.description || c.number || ""}
                      </Card.Text>
                      {isEnrolled(c._id) ? (
                        <button
                          onClick={() => unenroll(c._id)}
                          className="btn btn-secondary"
                          id={`wd-course-unenroll-${c._id}`}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={() => enroll(c._id)}
                          className="btn btn-success"
                          id={`wd-course-enroll-${c._id}`}
                        >
                          Enroll
                        </button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
