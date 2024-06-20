const Text = ({ h1, h2, h3, h4, pbold, p, className, children, ...rest }) => {
  const sizes = [h1, h2, h3, h4, pbold, p];
  const styles = [
    "text-5xl md:text-6xl text-darkblue font-bold pb-10",
    "text-4xl md:text-5xl text-darkblue font-bold pb-10",
    "text-2xl md:text-3xl text-blue font-semibold pb-4 text-left",
    "text-2xl md:text-2xl text-black font-medium text-left",
    "text-lg md:text-xl font-semibold text-left py-2",
    "text-lg md:text-xl font-light text-left py-2",
  ];
  const textClassName =
    sizes.map((size, index) => (size ? styles[index] : null)).find(Boolean) ||
    "";

  return (
    <p className={`${textClassName} ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default Text;
