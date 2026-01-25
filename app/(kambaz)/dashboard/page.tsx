import Link from "next/link";
import Image from "next/image";

type Course = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

const courses: Course[] = [
  {
    id: "1234",
    title: "CS Class",
    subtitle: "Learn to Code",
    image: "/images/photo1.jpg",
  },
  {
    id: "2345",
    title: "English Lit",
    subtitle: "Learn to Speak English",
    image: "/images/photo2.jpeg",
  },
  {
    id: "3456",
    title: "French",
    subtitle: "Bonjour Monsieur",
    image: "/images/photo1.jpg",
  },
  {
    id: "4567",
    title: "Math",
    subtitle: "What's 9 + 10?",
    image: "/images/photo2.jpeg",
  },
  {
    id: "5678",
    title: "Gloving",
    subtitle: "Learn How to Glove",
    image: "/images/photo1.jpg",
  },
  {
    id: "6789",
    title: "Driving",
    subtitle: "Learn How to Parallel Park",
    image: "/images/photo2.jpeg",
  },
  {
    id: "7890",
    title: "Breathing",
    subtitle: "You Are Breathing Manually!!!!",
    image: "/images/photo1.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        {courses.map((course) => (
          <div key={course.id} className="wd-dashboard-course">
            <Link
              href={`/courses/${course.id}`}
              className="wd-dashboard-course-link"
            >
              <Image
                src={course.image}
                width={200}
                height={150}
                alt={course.title}
              />

              <div>
                <h5>{course.title}</h5>
                <p className="wd-dashboard-course-title">
                  {course.subtitle}
                </p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
