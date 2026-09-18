export type CoursePayload = {
  title: string;
  teacher: string;
  rating: string;
  studentCount: string;
  duration: string;
  content: string;
  price: string;
  originalPrice: string;
  image: File | null;
  video: File | null;
  videoKey: string;
};
