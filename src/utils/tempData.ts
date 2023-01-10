export const user = {
    id: '1',
    name: 'hima',
    avatarUrl: '',
    email: 'example@hima.com',
    passwordHash: '',
    courses: [{ id: '1' }],
    type: 'user',
}
export const instructor = {
    id: '1',
    name: 'mohamed',
    Description:
        "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    ratingStars: 4.5,
    rating: 1902,
    courses: [{ id: 1 }],
    coursesCount: 1,
    type: 'instructor',
}

export const review = {
    id: '1',
    userId: '1',
    courseId: '1',
    Description:
        "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    rate: 4,
    created_at: '10-10-2020',
}

export const lecture = {
    id: '1',
    courseId: '1',
    name: 'react mastery intro',
    time: 60, //in minutes
    videoUrl: 'www.example.com',
    watched: false,
}

export const course = {
    id: '1',
    name: 'react mastery',
    Description:
        "a course to master react from the begining to the end using moderen techeing and more just some more words to make this description seem longer than it seems and to add more data for usage and don't know what to wright next",
    slug: 'react-mastery',
    requirements: ['English Language', 'javascript Knowlage'],
    ratingStars: 4.5,
    rating: 1902,
    lecturesCount: 10,
    lectures: [
        { id: 1, text: 'Course Structure and projectes', time: '5:35'},
        { id: 2, text: 'Setting up our code editor', time: '9:20'},
        { id: 3, text: 'Your Very First Webpage!', time: '15:00'},
    ],
    reviews: [{ id: 1 }],
    whatYouWellLearn: [
        {id: 1, text: 'Create a React js project from scratch'},
        {id: 2, text: 'Use Firebase auth for complete authentication'},
        {id: 3, text: 'Work with latest versions like React js 18, Firebase 9 and Tailwind CSS 3'},
        {id: 4, text: 'Add forgot password functionality using Firebase auth'},
        {id: 5, text: 'Learn how to sign up/in the users using username/password and Google oAuth using Firebase auth' },
        {id: 6, text: 'Use Firebase Firestore to store and fetch data' },
        {id: 7, text: 'Use Firebase auth for complete authentication'}
    ],
    time: 6050, //in minutes
    progress: 16, // in percent
    students: 5900,
    instructor: 'mohamed',
    instructorId: '1',
    created_at: '10-10-2020',
    updated_at: '15-12-2020',
    price: 34999, // cents 349.99$
    onSale: true,
    discount: 50, // in percent  34999 * 50%
    bestseller: false,
}
