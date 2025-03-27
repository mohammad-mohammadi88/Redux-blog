import { faker } from "@faker-js/faker";
export default function data() {
    const data = { users: [], posts: [] }
    const usersLength = 5
    for (let i = 0; i < usersLength; i++) {
        data.users.push({
            id: String(faker.number.bigInt()),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName()
        })
    }

    for (let i = 0; i < 10; i++) {
        data.posts.push({
            id: String(faker.number.bigInt()),
            title: faker.lorem.slug(),
            content: faker.lorem.paragraph(),
            date: faker.date.past().getTime(),
            reactions: {
                eyes: 0,
                heart: 0,
                hooray: 0,
                rocket: 0,
                thumbsUp: 0
            },
            user: data.users[Math.floor(Math.random() * (usersLength - 1))].id
        })
    }
    return data;
}


data()