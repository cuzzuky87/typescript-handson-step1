// 練習問題３
const calcTotalFee3 = (num: number) => {
  const total = num * 1.1;
  return total.toString();
};

// 変数totalにnumber型を設定すると、
// エラーになることを確認しよう
// calcTotalFee3では数値を返却するのが正しいようなので修正しよう
const dispTotalFee = (num: number) => {
  const total = calcTotalFee3(num);
  console.log(`合計金額は${total}円です`);
};

const el3 = document.getElementById("practice3");
el3.addEventListener("click", () => dispTotalFee(1000));
