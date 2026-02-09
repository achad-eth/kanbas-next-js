"use client";

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  { id: "1234", title: "CS Class", description: "Learn to Code", image: "/images/photo1.jpg" },
  { id: "1234", title: "English Lit", description: "Learn to Speak English", image: "/images/photo2.jpeg" },
  { id: "1234", title: "French", description: "Bonjour Monsieur", image: "/images/photo1.jpg" },
  { id: "1234", title: "Math", description: "What's 9 + 10?", image: "/images/photo2.jpeg" },
  { id: "1234", title: "Gloving", description: "Learn How to Glove", image: "/images/photo1.jpg" },
  { id: "1234", title: "Driving", description: "Learn How to Parallel Park", image: "/images/photo2.jpeg" },
  { id: "1234", title: "Breathing", description: "You are breathing manually", image: "/images/photo1.jpg" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course, index) => (
            <Col key={`${course.title}-${index}`} style={{ width: "300px" }}>
              <Card>
                <Link
                  href={`/courses/${course.id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img variant="top" src={course.image} height={160} />

                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>

                    <Card.Text style={{ height: "100px" }} className="overflow-hidden">
                      {course.description}
                    </Card.Text>

                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}