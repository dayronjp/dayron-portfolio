export default function Footer() {
  return (
    <footer className="border-t mt-16 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Dayron Anjos</div>
        <div className="text-sm text-slate-500">
          <a href="https://github.com/dayronjp" target="_blank" rel="noreferrer" className="mr-4 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/dayron-anjos-566b02323/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
