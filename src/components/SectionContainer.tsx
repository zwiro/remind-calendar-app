function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-12 py-2 [&>div>div:last-of-type]:border-none">
      {children}
    </section>
  )
}

export default SectionContainer
