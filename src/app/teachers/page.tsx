import { TeacherCard } from '@/components/teachers/TeacherCard';
import { mockTeachers } from '@/lib/placeholder-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Educators - EduCentral',
  description: 'Browse the profiles of our talented and dedicated teachers at EduCentral.',
};

export default function TeachersPage() {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-headline font-bold text-primary mb-3">Meet Our Educators</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Discover the experienced and passionate teachers who make learning at EduCentral exceptional.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockTeachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
