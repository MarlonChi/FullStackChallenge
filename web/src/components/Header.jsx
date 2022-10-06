export function Header({variant}) {
  return (
    <header className="container max-w-3xl p-4 flex justify-center">
      <img src={variant} alt="logo" className="w-40" />
    </header>
  );
}
