type ButtonProps = {
    label: string;
    type: string;
}

const Button = ({ label, type }: ButtonProps) => {
    return (
      <button
        className={type === "secondary" ? "button-secondary" : "button-primary"}
      >
        {label}
      </button>
    );
}

export default Button;