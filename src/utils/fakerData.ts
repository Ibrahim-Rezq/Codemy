import { faker } from '@faker-js/faker'

import { Course, Lecture, Review } from './tempData'

function createRandomLecture(): Lecture {
    return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        courseId: faker.datatype.uuid(),
        time: faker.datatype.number(160),
    }
}
function createRandomReview(): Review {
    return {
        description: faker.commerce.productDescription(),
        rate: faker.datatype.number({ min: 0, max: 5, precision: 0.01 }),
        created_at: faker.date.past().toString(),
        id: faker.datatype.uuid(),
        userId: faker.datatype.uuid(),
        courseId: faker.datatype.uuid(),
    }
}

export function createRandomCourse(): Course {
    const title = faker.commerce.productName()
    const lectures = faker.helpers.arrayElements([createRandomLecture(), createRandomLecture(), createRandomLecture()])
    const isDiscounted = faker.datatype.boolean()

    return {
        id: faker.datatype.uuid(),
        title: title,
        description: faker.commerce.productDescription(),
        imageURL: faker.image.technics(),
        slug: title.toLowerCase().split(' ').join('-'),
        requirements: faker.helpers.arrayElements([
            'English Language',
            'Javascript Knowlage',
            'React Knowlage',
            'Node.js Knowlage',
        ]),
        starsRating: faker.datatype.number({ min: 0, max: 5, precision: 0.01 }),
        rating: faker.datatype.number({ min: 1000, max: 9000 }),
        lectures: lectures,
        lecturesCount: lectures.length,
        reviews: [
            { id: faker.datatype.uuid() },
            { id: faker.datatype.uuid() },
            { id: faker.datatype.uuid() },
            { id: faker.datatype.uuid() },
        ],
        whatYouWellLearn: faker.helpers.arrayElements([
            { id: faker.datatype.uuid(), text: faker.commerce.productName() },
            { id: faker.datatype.uuid(), text: faker.commerce.productName() },
            { id: faker.datatype.uuid(), text: faker.commerce.productName() },
        ]),
        time: faker.datatype.number(500),
        progress: faker.datatype.number(100),
        students: faker.datatype.number(5000),
        instructor: faker.name.fullName(),
        instructorId: faker.datatype.uuid(),
        created_at: faker.date.recent().toString(),
        updated_at: faker.date.soon().toString(),
        price: Number(faker.commerce.price(10000, 90000, 0)),
        onSale: faker.datatype.boolean(),
        isDiscounted: isDiscounted,
        discount: faker.datatype.number(60),
        isBestSeller: isDiscounted,
        language: faker.helpers.arrayElement(['english', 'arabic', 'spanish', 'dutch', 'french']),
        subtitle: faker.helpers.arrayElements(['english', 'arabic', 'spanish', 'dutch', 'french']),
        topic: faker.helpers.arrayElements(['dev', 'eng', 'art', 'math', 'medicen']),
        level: faker.helpers.arrayElement(['begginer', 'advanced']),
        features: faker.helpers.arrayElements(['dev', 'eng', 'art', 'math', 'medicen']),
    }
}
