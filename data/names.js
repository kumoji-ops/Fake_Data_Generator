// Arrays of first and last names
const firstNames = [
    "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
    "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Christopher", "Karen",
    "Charles", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Donald", "Sandra",
    "Mark", "Ashley", "Paul", "Dorothy", "Steven", "Kimberly", "Andrew", "Donna", "Joshua", "Emily",
    "Kenneth", "Carol", "Kevin", "Michelle", "Brian", "Amanda", "George", "Melissa", "Timothy", "Deborah",
    "Ronald", "Stephanie", "Jason", "Rebecca", "Jeffrey", "Laura", "Ryan", "Cynthia", "Jacob", "Kathleen",
    "Gary", "Amy", "Nicholas", "Shirley", "Eric", "Angela", "Stephen", "Helen", "Jonathan", "Anna",
    "Larry", "Brenda", "Justin", "Pamela", "Scott", "Nicole", "Brandon", "Emma", "Benjamin", "Samantha",
    "Samuel", "Katherine", "Gregory", "Christine", "Patrick", "Debra", "Alexander", "Rachel", "Frank", "Carolyn",
    "Raymond", "Janet", "Jack", "Maria", "Henry", "Heather", "Walter", "Diane", "Adam", "Julie",
    "Aiden", "Chloe", "Ethan", "Mia", "Liam", "Zoe", "Noah", "Lily", "Mason", "Ava",
    "Caden", "Riley", "Logan", "Aria", "Lucas", "Ellie", "Jackson", "Mila", "Oliver", "Nora",
    "Elijah", "Hannah", "Grayson", "Leah", "Carter", "Layla", "Caleb", "Audrey", "Owen", "Lucy",
     "Mateo", "Sofia", "Luca", "Isla", "Kai", "Maya", "Leo", "Elena", "Felix", "Camila",
    "Miles", "Violet", "Declan", "Clara", "Roman", "Stella", "Silas", "Hazel", "Jasper", "Ivy",
    "Arthur", "Beatrice", "Victor", "Florence", "Oscar", "Edith", "Julian", "Esther", "Vincent", "Mabel",
    "Albert", "Genevieve", "Ernest", "Matilda", "Raymond", "Rosemary", "Harold", "Winifred", "Clarence", "Pearl",
    "River", "Willow", "Forest", "Hazel", "Canyon", "Autumn", "Phoenix", "Summer", "Orion", "Skye",
    "Jade", "Crystal", "Hunter", "Rose", "Wolfgang", "Iris", "Corbin", "Lark", "Sterling", "Jasmine",
     "Milo", "Cora", "Arlo", "Maeve", "Theo", "Alice", "Ezra", "Eleanor", "Finn", "Beatrix",
    "Gus", "Irene", "Rudy", "Vera", "Walt", "Della", "Clark", "Martha", "Floyd", "Etta",
     "Max", "Eve", "Sam", "Mae", "Ben", "Faye", "Tom", "Rae", "Joe", "Tess",
    "Ace", "Sky", "Ray", "Joy", "Cole", "Wren", "Jake", "Brooke", "Drew", "Paige",
    "Blaze", "Nova", "Zane", "Lyric", "Thorne", "Echo", "Maverick", "Sage", "Phoenix", "Waverly",
    "Ryder", "Ember", "Orion", "Briar", "Atlas", "Winter", "Crew", "Indigo", "Jett", "Marigold",
      "Mohammed", "Fatima", "Chen", "Wei", "Raj", "Priya", "Hiroshi", "Yuki", "Carlos", "Carmen",
    "Diego", "Valentina", "Ahmed", "Layla", "Kenji", "Mei", "Ivan", "Olga", "Sven", "Ingrid",
      "Luna", "Atlas", "Nova", "Celeste", "Orion", "Stella", "Cosmo", "Aurora", "Mars", "Venus",
    "Jupiter", "Skye", "Galaxy", "Star", "Comet", "Nebula", "Eclipse", "Sol", "Nova", "Lux"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
    "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
    "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
     "Forest", "Hill", "Lake", "Field", "Stone", "Brook", "Wolf", "Hawk", "Raven", "Fox",
    "Winter", "Summer", "Storm", "Sky", "Cloud", "River", "Meadow", "Valley", "Peak", "Cliff",
    "Thorn", "Rose", "Birch", "Cedar", "Pine", "Oak", "Maple", "Ash", "Willow", "Holly",
    "Archer", "Brewer", "Carpenter", "Fisher", "Gardner", "Hunter", "Potter", "Shepherd", "Thatcher", "Weaver",
    "Wheeler", "Chandler", "Collier", "Cutler", "Dyer", "Fuller", "Glover", "Saddler", "Skinner", "Spicer",
    "London", "Paris", "York", "Kent", "Essex", "Dover", "Devon", "Ireland", "Scott", "French",
    "Holland", "Spain", "Portugal", "Poland", "Denmark", "Sweden", "West", "North", "South", "East",
    "Armstrong", "Black", "White", "Green", "Silver", "Gold", "Copper", "Steel", "Iron", "Bronze",
    "Bright", "Strong", "Swift", "Short", "Long", "Small", "Big", "Young", "Old", "Sterling",
    "Sterling", "Knight", "Squire", "Page", "Bishop", "Abbott", "Prior", "Monk", "King", "Queen",
    "Duke", "Earl", "Baron", "Lord", "Steward", "Marshall", "Ward", "Warden", "Foster", "Shepherd",
    "Masters", "Savage", "Wild", "Wyatt", "Beckett", "Bennett", "Carter", "Cooper", "Dempsey", "Ellis",
    "Fletcher", "Gibson", "Harris", "Isaacs", "Jacobs", "Kane", "Lloyd", "Miles", "Nash", "Orlando"
];

// Function to generate random full name
function randomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return firstName + " " + lastName;
}
