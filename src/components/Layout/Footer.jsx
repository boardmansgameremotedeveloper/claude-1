function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} React Starter Framework. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
