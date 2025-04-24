function Container({ children }) {
  return (
    <main className="flex flex-col gap-10 lg:grid xl:grid-cols-[repeat(3,_400px)] mx-auto xl:grid-rows-[repeat(4,125px)] lg:grid-cols-[repeat(3,_300px)] lg:xl:grid-rows-[repeat(4,100px)]">
      {children}
    </main>
  );
}

export default Container;
