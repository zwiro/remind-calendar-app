function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-2 px-4 lg:px-12 [&>div>div:last-of-type]:border-none">
      {children}
    </section>
  )
}

export default SectionContainer
