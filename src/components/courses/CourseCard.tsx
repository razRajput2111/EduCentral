import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Video, BookOpenCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getSubjectIcon } from '@/lib/placeholder-data';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const SubjectIcon = getSubjectIcon(course.subject);

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={course.imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={course.imageHint || 'education learning'}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="flex items-center gap-2">
              <SubjectIcon size={16} className="text-primary" />
              {course.subject}
            </Badge>
          </div>
          <CardTitle className="text-xl font-headline mb-1 leading-tight">{course.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">By {course.teacherName}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-4">
        <p className="text-sm text-foreground/80 line-clamp-3">{course.description}</p>
        <p className="text-xs text-muted-foreground mt-2">Schedule: {course.schedule}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {course.liveClassLink && (
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href={course.liveClassLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Class
            </a>
          </Button>
        )}
        {course.recordedVideoLink && (
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href={course.recordedVideoLink} target="_blank" rel="noopener noreferrer">
              <Video className="mr-2 h-4 w-4" /> Recordings
            </a>
          </Button>
        )}
        {course.studyMaterialsLink && (
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href={course.studyMaterialsLink} target="_blank" rel="noopener noreferrer">
              <BookOpenCheck className="mr-2 h-4 w-4" /> Materials
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
