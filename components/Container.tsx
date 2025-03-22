interface myChildren {
    children: React.ReactNode
}
function Container({children}:myChildren) {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  )
}

export default Container