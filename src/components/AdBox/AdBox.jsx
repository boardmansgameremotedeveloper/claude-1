import { useEffect, useRef, useState } from 'react'
import './AdBox.css'

function AdBox({ scriptContent, placeholder = 'Advertisement' }) {
  const adRef = useRef(null)
  const [debugInfo, setDebugInfo] = useState({ status: 'initializing', details: '' })

  useEffect(() => {
    if (scriptContent && adRef.current) {
      const container = adRef.current
      console.log('[AdBox] Starting ad injection...', { scriptContent })
      setDebugInfo({ status: 'injecting', details: 'Adding ins tag to DOM' })

      container.innerHTML = ''

      const wrapper = document.createElement('div')
      wrapper.innerHTML = scriptContent

      container.appendChild(wrapper)

      console.log('[AdBox] ins tag added to DOM:', container.innerHTML)

      // Check if Revive async is available and trigger refresh
      const triggerRevive = () => {
        // Method 1: Check for reviveAsync global
        if (window.reviveAsync) {
          console.log('[AdBox] Found window.reviveAsync, triggering refresh...')
          setDebugInfo({ status: 'triggering', details: 'Calling reviveAsync' })
          try {
            // Revive uses the id from data-revive-id to namespace
            const reviveId = 'dd1b8f3615a0b13e4a9251d246a75a9f'
            if (window.reviveAsync[reviveId]) {
              window.reviveAsync[reviveId].refresh()
              console.log('[AdBox] reviveAsync.refresh() called')
              setDebugInfo({ status: 'refreshed', details: 'Revive refresh called' })
            } else {
              console.log('[AdBox] reviveAsync exists but no instance for id:', reviveId)
              console.log('[AdBox] Available instances:', Object.keys(window.reviveAsync))
              setDebugInfo({ status: 'no-instance', details: `No revive instance for ${reviveId}` })
            }
          } catch (e) {
            console.error('[AdBox] Error calling reviveAsync:', e)
            setDebugInfo({ status: 'error', details: e.message })
          }
        } else {
          console.log('[AdBox] window.reviveAsync not found, retrying...')
          setDebugInfo({ status: 'waiting', details: 'Revive not loaded yet' })
        }

        // Method 2: Dispatch event that Revive might listen to
        window.dispatchEvent(new Event('resize'))

        // Log what's in the container after a delay
        setTimeout(() => {
          console.log('[AdBox] Container after 2s:', container.innerHTML)
          const ins = container.querySelector('ins')
          if (ins) {
            console.log('[AdBox] ins element found, contents:', ins.innerHTML || '(empty)')
            console.log('[AdBox] ins attributes:', Array.from(ins.attributes).map(a => `${a.name}=${a.value}`))
            setDebugInfo(prev => ({
              ...prev,
              insFound: true,
              insContent: ins.innerHTML || '(empty)',
              insChildren: ins.children.length
            }))
          }
        }, 2000)
      }

      // Try immediately
      triggerRevive()

      // Retry after delays to catch async script loading
      const timer1 = setTimeout(triggerRevive, 500)
      const timer2 = setTimeout(triggerRevive, 1500)
      const timer3 = setTimeout(triggerRevive, 3000)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [scriptContent])

  return (
    <div className="ad-box">
      {scriptContent ? (
        <>
          <div ref={adRef} className="ad-content" />
          <div className="ad-debug" style={{
            fontSize: '10px',
            color: '#888',
            padding: '4px',
            background: 'rgba(0,0,0,0.8)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10
          }}>
            Status: {debugInfo.status} | {debugInfo.details}
            {debugInfo.insFound !== undefined && ` | ins: ${debugInfo.insChildren} children`}
          </div>
        </>
      ) : (
        <div className="ad-placeholder">
          <span>DxB here</span>
          <span>{placeholder}</span>
          <span className="ad-size">320x50</span>
        </div>
      )}
    </div>
  )
}

export default AdBox
