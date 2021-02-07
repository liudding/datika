export interface Classroom {
    id: number;
    name: string;
    studentCount: number;
    createdAt?: string;
}

export interface Student {
    id: number;
    name: string;
    number: string;
    createdAt?: string;
}

export interface Quiz {
    id: number;
    name: string;
    studentCount: number;
    recordCount: number;
    classroomCount: number;
    createdAt?: string;
}


