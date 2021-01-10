export interface Course {
    id: number;
    name: string;
    featured: boolean;
    image: File;
    language: 'en' | 'es';
    price: number;
    duration: number;
    lessons: number;
    deadline: string;
    students: number;
    summary: string;
    instructor: number;
    category: number;
}