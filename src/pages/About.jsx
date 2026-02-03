function About() {
  return (
    <div className="page about-page" style={{ background: 'linear-gradient(to bottom, #87CEEB, #FFFDD0)', minHeight: '100vh' }}>
      <h1>About Us</h1>
      <p>This is the about page of our React Starter Framework.</p>

      <h2 style={{ marginTop: '30px' }}>Our Mission</h2>
      <p>To provide developers with a clean, modern starting point for building React applications.</p>

      <h2 style={{ marginTop: '30px' }}>Tech Stack</h2>
      <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
        <li><strong>React 18</strong> - Latest React with concurrent features</li>
        <li><strong>Vite</strong> - Next-generation frontend tooling</li>
        <li><strong>React Router v6</strong> - Declarative routing for React</li>
        <li><strong>Context API</strong> - Built-in state management</li>
      </ul>

      <h2 style={{ marginTop: '30px' }}>Project Structure</h2>
      <p>This project follows a modular structure with separate folders for components, pages, context, and services.</p>
    </div>
  )
}

export default About
