import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCourseBySlug, getAllCourses } from '../../../utils/course/course'

export const courseApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Courses', 'Course'],
  endpoints: (builder) => ({
    getAllCourses: builder.query<Course[], number>({
      async queryFn(limit : number = 20) {
        try {
          const courses = await getAllCourses(limit);
          return {data: courses};
        } catch (error : any) {
          return { error: error.message };
        }
      },
      providesTags: ['Courses']
    }),
    getCourse: builder.query<Course | null, string>({
      async queryFn(slug : string) {
        try {
          const course = await getCourseBySlug(slug);
          return {
            data: course
          };
        } catch (error : any) {
          return { error: error.message };
        }
      },
      providesTags: ['Course']
    })
  })
});

export const { useGetAllCoursesQuery, useGetCourseQuery } = courseApi;