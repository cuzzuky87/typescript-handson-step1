// 練習問題４
// tsconfigに"strict": trueを設定し
// １.エラーがでることの確認
// ２.コード修正による解決
// ３.設定変更による解決
// を試してみよう
const calcTotalFee4 = num => {
  const total = num * 1.1;
  console.log(`合計金額は${total}円です`);
};

const el4 = document.getElementById("practice4");
el4.addEventListener("click", () => calcTotalFee4(1000));
