let isMarried: boolean = true;
let count: number = 1;
let message: string = "you're married";

// array
let myArr: string[] = ["a", "b"];
let numArr: Array<number> = [1, 2];
let strArr: Array<string> = ["ab", "cd"];

// tuple
let student: [string, string, number] = ["a", "b", 1];

// enum
enum Gender {
    Male,
    Female,
    Unknown,
}

let jenisKelamin: Gender = Gender.Female;

console.log(jenisKelamin);

enum Category {
    Grocery = "GROCERY",
    Electronics = "ELECTRONICS",
}

let pilihanCat: Category = Category.Grocery;

console.log(pilihanCat);
