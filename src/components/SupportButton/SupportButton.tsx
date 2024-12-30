import styles from "./SupportButton.module.css";

export function SupportButton({ id }: { id: number }) {
  async function handleClick() {
    const response = await fetch(`/api/${id}`, { method: "POST" });
    if (response.ok) {
      alert("Thank you for your support!");
    } else {
      alert("Failed to support this post. Please try again later.");
    }
  }

  return (
  <div className={styles.wrapper}>
    <button onClick={handleClick} className={styles.button} > 🙌 </button>
  </div>
  );
}
