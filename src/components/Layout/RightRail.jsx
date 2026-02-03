import AdBox from '../AdBox/AdBox'

function RightRail() {
  return (
    <aside className="right-rail">
      <div className="rail-content">
        <h3 className="rail-title">Advertisement</h3>
        <AdBox
          scriptContent='<ins data-revive-zoneid="7" data-revive-id="dd1b8f3615a0b13e4a9251d246a75a9f"></ins>'
          placeholder="Right Rail Ad"
        />
      </div>
    </aside>
  )
}

export default RightRail
