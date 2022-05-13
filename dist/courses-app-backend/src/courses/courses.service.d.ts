import { Observable } from 'rxjs';
import { FailedRequest, ItemModel, QueryParams, SuccessfulRequest } from '@models/common.models';
import { CourseModel } from './courses.models';
export declare class CoursesService {
    private filesFolder;
    private readonly filePath;
    constructor(filesFolder: string);
    getAllCourses(): Observable<SuccessfulRequest<ItemModel[] | string> | FailedRequest>;
    getCourse(id: string): Observable<SuccessfulRequest<ItemModel | string> | FailedRequest>;
    filterCourses(queries: QueryParams): Observable<SuccessfulRequest<CourseModel[] | string> | FailedRequest>;
    addCourse(course: CourseModel): Observable<FailedRequest | SuccessfulRequest<string | import("../../../src/authors/authors.models").AuthorModel | import("../../../src/courses/courses.models").CourseModel>>;
    editCourse(course: CourseModel, id: string): Observable<SuccessfulRequest<string> | FailedRequest>;
    deleteCourse(id: string): Observable<SuccessfulRequest<string> | FailedRequest>;
}
