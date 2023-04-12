import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const currentTime = new Date().toLocaleDateString('en-US', { timeZone: 'America/Chicago' });
  return (
    <>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      time: {currentTime}
    </>
  );
}
