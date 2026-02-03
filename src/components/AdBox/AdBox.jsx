import { useEffect, useRef } from 'react'
import './AdBox.css'

function AdBox({ scriptContent, placeholder = 'Advertisement' }) {
  const adRef = useRef(null)

  useEffect(() => {
    if (scriptContent && adRef.current) {
      const container = adRef.current

      container.innerHTML = ''

      const wrapper = document.createElement('div')
      wrapper.innerHTML = scriptContent

      const scripts = wrapper.querySelectorAll('script')
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script')
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value)
        })
        newScript.textContent = oldScript.textContent
        oldScript.parentNode.replaceChild(newScript, oldScript)
      })

      container.appendChild(wrapper)
    }
  }, [scriptContent])

  return (
    <div className="ad-box">
      {scriptContent ? (
        <div ref={adRef} className="ad-content" />
      ) : (
        <div className="ad-placeholder">
          <span>{placeholder}</span>
          <span className="ad-size">320x50</span>
        </div>
      )}
    </div>
  )
}

export default AdBox
