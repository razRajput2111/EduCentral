import { CourseCard } from '@/components/courses/CourseCard';
import { mockCourses } from '@/lib/placeholder-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Available Courses - EduCentral',
  description: 'Browse all available online courses on EduCentral.',
};

export default function HomePage() {
  return (
    <div>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">Explore Our Courses</h1>
        <p className="text-lg text-foreground/80">
          Find the perfect class to expand your knowledge and skills.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
