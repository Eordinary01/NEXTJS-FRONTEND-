"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  title: string;
  description: string;
  price: number;
}

function FeaturedCourses() {
  const { courses } = courseData;

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h1 className="text-base text-amber-500 font-semibold tracking-wide">
          FEATURED COURSES
        </h1>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sky-300 sm:text-4xl">
          Learn With the Best!!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {courses.map((course: Course, index: number) => (
          <div
            key={index}
            className="relative p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <BackgroundGradient>

            <div className="relative  rounded-lg shadow-lg p-6 z-10">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-white">{course.title}</h2>
                <p className="mt-2 text-white">{course.description}</p>
                <p className="mt-4 text-lg font-bold text-yellow-300">${course.price}</p>
                
              </div>
            </div>
            </BackgroundGradient>
          </div> 
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-lime-100 text-gray-800 bg-white hover:bg-amber-200 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
