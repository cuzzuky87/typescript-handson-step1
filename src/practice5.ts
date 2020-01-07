// 練習問題５(Literal Types & Union Types)

// ２.allAnimalsに設定できる動物は「犬」or「猫」or「鳥」のみにしたい
// allAnimalsに型を指定してみよう
// ヒント：「犬」しか設定できない変数dogは、let dog: "犬" = "犬"と定義する
let allAnimals = [];
allAnimals.push("犬");
allAnimals.push("猫");
allAnimals.push("鳥");
allAnimals.push("亀"); // ←これをエラーにしたい

const checkHasItem = item => {
  return allAnimals.includes(item) ? "ありました！" : null;
};

const dispResult = (item: string) => {
  // １.resultに入る可能性のある型はstringかnullのみなので明示したい
  // ヒント：stringかnumberの変数countは、let count: string | number = 0と定義する
  const result = checkHasItem(item);
  console.log(result);
};

const el5 = document.getElementById("practice5");
el5.addEventListener("click", () => dispResult("犬"));
