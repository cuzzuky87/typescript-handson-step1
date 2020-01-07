// 練習問題１
// calcTotalFeeの引数numにnumber型を設定し、
// 数値意外を引数に設定するとエラーになることを確認しよう
const calcTotalFee = num => {
  const total = num * 1.1;
  console.log(`合計金額は${total}円です`);
};

const el1 = document.getElementById("practice1");
// ↓ここの引数を変える
el1.addEventListener("click", () => calcTotalFee(1000));
