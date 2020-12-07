const carMakers: string[] = ["fors", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car: string = carMakers[0];
const myCar: string | undefined = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const importantDates = [new Date(), "2030-10-10"];
const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
