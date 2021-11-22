import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  // const onClickClose = () => setOpen(false); // 関数が再生成されるので、メモ化が聞かない
  const onClickClose = useCallback(() => setOpen(false), [open]); // []見張る値

  const temp = useMemo(() => 1 + 3, []); // 変数のメモ化: 複雑な処理などの再実行を防ぐ
  console.log(temp);

  const onClickCountup = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
