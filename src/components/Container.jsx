function Container({ children }) {
  return (
    <main className="flex flex-col gap-10 md:grid xl:grid-cols-[repeat(3,_400px)] mx-auto xl:grid-rows-[repeat(4,125px)] lg:grid-cols-[repeat(3,_300px)] lg:grid-rows-[repeat(4,100px)] md:grid-cols-2">
      {children}
    </main>
  );
}

export default Container;
