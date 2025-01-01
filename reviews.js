import { fetchUsers } from "./fetch.js";
const users = await fetchUsers();
// console.log(users);

const reviews = [
    {
      userId: 1,
      userName: 'Emily Johnson',
      age: 28,
      review: 'Great experience! The food was delicious and the service was excellent.',
      rating: 5,
    },
    {
      userId: 2,
      userName: 'Michael Williams',
      age: 35,
      review: 'The ambiance was nice, but the food took a bit too long to arrive.',
      rating: 3,
    },
    {
      userId: 3,
      userName: 'Sophia Brown',
      age: 42,
      review: 'I loved the pancakes! The maple syrup was perfect, highly recommend.',
      rating: 4,
    },
    {
      userId: 4,
      userName: 'James Davis',
      age: 45,
      review: 'The food was okay, but the service could be improved.',
      rating: 3,
    },
    {
      userId: 5,
      userName: 'Emma Miller',
      age: 30,
      review: 'Amazing experience! Will definitely be coming back.',
      rating: 5,
    },
    {
      userId: 6,
      userName: 'Olivia Wilson',
      age: 22,
      review: 'The food was good, but a bit pricey for the portion sizes.',
      rating: 4,
    },
    {
      userId: 7,
      userName: 'Alexander Jones',
      age: 38,
      review: 'Not the best meal I’ve had, but the staff was friendly.',
      rating: 2,
    },
    {
      userId: 8,
      userName: 'Ava Taylor',
      age: 27,
      review: 'Great food and service! The Greek yogurt parfait was my favorite.',
      rating: 5,
    },
  ];
const reviewSection = document.getElementById("reviews"); 
  
const combinedData = users.slice(0, 8).map((user, index) => {
    return {
      ...user, 
      review: reviews[index],
    };
  });
  

  

function displayUser (user){
    return `
    <div class="user-review">
      <h3>${user.id}. ${user.firstName} ${user.lastName}</h3>
      <p><b>Review:</b> ${user.review.review}</p>
      <p><b>Rating:</b> ${user.review.rating}</p>    </div>
  `;
} 

combinedData.forEach(user => {
    reviewSection.innerHTML += displayUser(user);
  });


