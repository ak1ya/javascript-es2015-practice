/**
 * const、letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);
// // val3 = "const変数を上書き";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あきや",
//   age: "28",
// };
// val4.name = "ak1ya_"
// val4.address = "福岡"
// console.log(val4);

// // //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat']
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ak1ya";
// const age = 28;

// // 「私の名前はak1yaです年齢は28です。」

// // 従来の方法
// const message1 = "「私の名前は" + name + "です。年齢は" + age + "です。」";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * アロー関数
 */
//　従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// // 波括弧とreturnは省略可
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ak1ya",
//   age: 28,
// }

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

// const myProfile = ['ak1ya', 28];
// const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message6);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello("ak1ya_");

/**
 * スプレッド構文
 */
// 配列の天界
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); //参照元は変わってない

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4); //参照元も変わってしまう
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ak1ya_"];

// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index)=> console.log(`${index + 1}版は${name}です`));
// // mapの2つ目の引数は番号

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === 'ak1ya_'){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum.toLocaleString());

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 140));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueです");
// }

// if(flag1 && flag2){
//   console.log("1と2はtrueです");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "金額未設定です";
// console.log(fee2);
