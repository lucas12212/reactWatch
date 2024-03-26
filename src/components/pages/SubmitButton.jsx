
export default function SubmitButton({ value }) {
  const styles = {
    padding: "15px",
    fontSize: "16px",
    background: "blue",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "3px",
    marginBottom: "15px",
    marginTop: "15px",
    transition: "background 0.3s",
    color: "#e6e6e6",
  };
  return (
    <>
      <button style={styles}>{value ? value : "Submit"}</button>
    </>
  );
}


