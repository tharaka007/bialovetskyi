export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-20 pt-[78px]">
      <p className="border-t-customGray border-t-[1px] pt-8 text-sm text-black">
        © {currentYear} USN.. All rights reserved.
      </p>
    </footer>
  );
}
