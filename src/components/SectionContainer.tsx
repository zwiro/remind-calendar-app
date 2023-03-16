function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-8 py-2 [&>div:last-of-type]:border-none">
      {children}
    </section>
  )
}

export default SectionContainer
