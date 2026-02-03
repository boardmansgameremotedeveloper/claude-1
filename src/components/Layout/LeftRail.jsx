import AdBox from '../AdBox/AdBox'

function LeftRail() {
  return (
    <aside className="left-rail">
      <div className="rail-content">
        <h3 className="rail-title">Sponsored</h3>
        <AdBox                                                   
          scriptContent='<ins data-revive-zoneid="6" data-revive-id="dd1b8f3615a0b13e4a9251d246a75a9f"></ins>'
          placeholder="Left Rail Ad"
        />
      </div>
    </aside>
  )
}

export default LeftRail
