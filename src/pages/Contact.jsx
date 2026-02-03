function Contact() {
  return (
    <div className="page contact-page" style={{ background: 'linear-gradient(to bottom, #90EE90, #FFFDD0)', minHeight: '100vh' }}>
      <h1>Contact Us</h1>
      <p>Get in touch with us for any questions or feedback.</p>

      <div style={{ marginTop: '30px', maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name</label>
          <input
            type="text"
            placeholder="Your name"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          style={{
            background: '#0066cc',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact
