function VolumeofCube(Length: number) {
  const Volume = Length * Length * Length;
  return Volume;
}
Length = 7;
const Volume = VolumeofCube(Length);
console.log("Volume of the cube is:", Volume);
