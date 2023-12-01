function areaofrectangle(Length: number, Width: number) {
  const Area = Length * Width;
  return Area;
}
let Length = 4;
let Width = 8;
const Area = areaofrectangle(Length, Width);

console.log(`The area of the rectangle is: ${Area}`);
