const Button = ({
  type,
  children,
  className,
}: {
  type?: "reset" | "submit" | "button";
  children: string;
  className?: string;
}) => {
  return (
    <button
      type={type}
      className={`h-[48px] px-10 text-center flex place-items-center  flex-col justify-center text-[#002887]  border-[#002887] border-2 rounded-md hover:bg-[#002887] hover:text-white transition-all duration-300  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
