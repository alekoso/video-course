const Container = ({ children }) => {
  const maxWidth = 1280;

  return (
    <section className={`max-w-[${maxWidth}px] mx-auto`}>
      {children}
    </section>
  );
};

export default Container;
