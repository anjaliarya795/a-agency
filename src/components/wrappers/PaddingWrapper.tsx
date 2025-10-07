function PaddingWrapper({children}:{children:import('react').ReactNode}) {
  return (
    <div className="lg:px-36 md:px-20 sm:px-12 px-8 w-full">
        {children}
    </div>
  )
}

export default PaddingWrapper