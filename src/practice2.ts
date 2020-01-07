// 練習問題２
// calcTotalFee2の返却値にnumber型を設定すると、
// return部がエラーになることを確認しよう
// 数値を返却するのが正しいようなので修正しよう
const calcTotalFee2 = (num: number) => {
  const total = num * 1.1;
  return total.toString();
};

const dispTotalFee2 = (num: number) => {
  const total = calcTotalFee2(num);
  console.log(`合計金額は${total}円です`);
};

const el2 = document.getElementById("practice2");
el2.addEventListener("click", () => dispTotalFee2(1000));
